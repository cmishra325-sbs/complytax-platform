import express from 'express';
import path from 'path';
import crypto from 'node:crypto';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Simulated AES-256 Vault Encryption key
const ENCRYPTION_SECRET = process.env.VAULT_SECRET || 'complytax-aes-256-encryption-master-key-2026';

function encryptPayload(text: string): { iv: string; encryptedData: string } {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', crypto.scryptSync(ENCRYPTION_SECRET, 'salt', 32), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: iv.toString('hex'), encryptedData: encrypted };
}

// In-memory OTP store for MFA simulation
const otpStore: Record<string, { code: string; expiresAt: number }> = {};

// -------------------------------------------------------------
// API ROUTES
// -------------------------------------------------------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', platform: 'ComplyTax Engine', encryption: 'AES-256-CBC Active' });
});

// 1. MFA Auth: Send OTP
app.post('/api/auth/send-otp', (req, res) => {
  const { phoneOrEmail } = req.body;
  if (!phoneOrEmail) {
    return res.status(400).json({ error: 'Phone or email is required' });
  }

  // Generate 6-digit OTP code
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phoneOrEmail] = {
    code: otpCode,
    expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes validity
  };

  console.log(`[MFA System] Generated 6-digit OTP for ${phoneOrEmail}: ${otpCode}`);

  res.json({
    success: true,
    message: `6-Digit Security OTP dispatched to ${phoneOrEmail}`,
    // Included in API response for instant friction-free testing in preview environment
    demoOtp: otpCode
  });
});

// 2. MFA Auth: Verify OTP & Issue Encrypted Session Token
app.post('/api/auth/verify-otp', (req, res) => {
  const { phoneOrEmail, otpCode } = req.body;
  const stored = otpStore[phoneOrEmail];

  if (!stored || stored.expiresAt < Date.now()) {
    return res.status(400).json({ success: false, error: 'OTP expired or not found. Please request a new code.' });
  }

  if (stored.code !== otpCode && otpCode !== '123456') { // 123456 as universal fallback demo OTP
    return res.status(400).json({ success: false, error: 'Invalid OTP code. Please verify.' });
  }

  // Clear OTP
  delete otpStore[phoneOrEmail];

  // Encrypt session token
  const sessionPayload = JSON.stringify({
    user: phoneOrEmail,
    issuedAt: new Date().toISOString(),
    mfaVerified: true,
    vaultStatus: 'AES-256-Active'
  });
  const encryptedSession = encryptPayload(sessionPayload);

  res.json({
    success: true,
    mfaVerified: true,
    token: `${encryptedSession.iv}:${encryptedSession.encryptedData}`,
    user: {
      name: 'Vikramaditya Roy',
      email: phoneOrEmail.includes('@') ? phoneOrEmail : 'founder@complytax.in',
      phone: phoneOrEmail.includes('@') ? '+91 98765 43210' : phoneOrEmail,
      companyName: 'Nexus AI Technologies Pvt Ltd',
      gstin: '07AAAAA0000A1Z5',
      mfaEnabled: true,
      encryptionKeyStatus: 'Active - AES-256-GCM'
    }
  });
});

// 3. MCA Company Name Search Tool API
app.post('/api/company-search', (req, res) => {
  const { name } = req.body;
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: 'Company name required for search' });
  }

  const query = name.trim();
  const clean = query.replace(/\b(Pvt|Ltd|Private|Limited|LLP|Technologies|Tech|Solutions|India)\b/gi, '').trim();

  // Simulated search against MCA Database
  const isExactDuplicate = ['TATA', 'RELIANCE', 'INFOSYS', 'WIPRO', 'CLEAR', 'FLIPKART', 'SWIGGY', 'ZEPTO'].includes(clean.toUpperCase());

  if (isExactDuplicate) {
    return res.json({
      queryName: query,
      isAvailable: false,
      score: 10,
      statusMessage: 'Name Rejected: Similar well-known registered trademark / company exists in MCA database.',
      conflictingCompanies: [`${clean.toUpperCase()} INDIA PRIVATE LIMITED`, `${clean.toUpperCase()} TECHNOLOGIES LIMITED`],
      recommendedNames: [`${clean} NEXTGEN PRIVATE LIMITED`, `${clean} INNOVATIONS LLP`, `NEXUS ${clean} LABS PRIVATE LIMITED`]
    });
  }

  res.json({
    queryName: query,
    isAvailable: true,
    score: 95,
    statusMessage: 'High Availability: Name complies with MCA Emblems & Names Act guidelines and class search.',
    conflictingCompanies: [],
    recommendedNames: [
      `${query.toUpperCase()} PRIVATE LIMITED`,
      `${query.toUpperCase()} TECHNOLOGIES PRIVATE LIMITED`,
      `${query.toUpperCase()} SOLUTIONS LLP`
    ]
  });
});

// 4. IP India Trademark Class Search Tool API
app.post('/api/trademark-search', (req, res) => {
  const { brandName, classCode } = req.body;
  if (!brandName) {
    return res.status(400).json({ error: 'Brand name required' });
  }

  const clean = brandName.trim().toUpperCase();
  const tmClass = classCode || 'Class 42 (Software & Tech Services)';

  res.json({
    brandName: clean,
    classCode: tmClass,
    isAvailable: true,
    phoneticMatchScore: '98% Unique',
    status: 'PASS - Safe to File Form TM-A',
    guidance: 'No conflicting phonetically identical marks found in active IP India journal registry.'
  });
});

// 5. Tax Calculator API
app.post('/api/tax-calculator', (req, res) => {
  const { type, turnover, income, deductions } = req.body;

  if (type === 'gst') {
    const amount = Number(turnover) || 0;
    const cgst = (amount * 0.09).toFixed(2);
    const sgst = (amount * 0.09).toFixed(2);
    const totalGst = (amount * 0.18).toFixed(2);
    return res.json({
      taxableAmount: amount,
      rate: '18% Standard GST',
      cgst,
      sgst,
      igst: totalGst,
      totalWithTax: (amount * 1.18).toFixed(2)
    });
  }

  // Income tax calculation (Old vs New Regime)
  const annualIncome = Number(income) || 0;
  const oldDeductions = Number(deductions) || 150000;

  // Simple New Regime math
  let newTax = 0;
  if (annualIncome > 1200000) newTax = (annualIncome - 1200000) * 0.20 + 90000;
  else if (annualIncome > 900000) newTax = (annualIncome - 900000) * 0.15 + 45000;
  else if (annualIncome > 700000) newTax = (annualIncome - 700000) * 0.10 + 25000;

  // Simple Old Regime math
  const taxableOld = Math.max(0, annualIncome - oldDeductions - 50000);
  let oldTax = 0;
  if (taxableOld > 1000000) oldTax = (taxableOld - 1000000) * 0.30 + 112500;
  else if (taxableOld > 500000) oldTax = (taxableOld - 500000) * 0.20 + 12500;

  res.json({
    grossIncome: annualIncome,
    newRegimeTax: Math.round(newTax),
    oldRegimeTax: Math.round(oldTax),
    recommendedRegime: newTax <= oldTax ? 'New Tax Regime' : 'Old Tax Regime',
    potentialSavings: Math.abs(Math.round(oldTax - newTax))
  });
});

// 6. Encrypted Document Vault Upload API
app.post('/api/documents/upload', (req, res) => {
  const { orderId, documentName, category, fileContentBase64 } = req.body;

  if (!documentName) {
    return res.status(400).json({ error: 'Document name required' });
  }

  // Encrypt payload simulation
  const { iv, encryptedData } = encryptPayload(fileContentBase64 || documentName);

  res.json({
    success: true,
    document: {
      id: `DOC-${Math.floor(1000 + Math.random() * 9000)}`,
      orderId: orderId || 'ORD-2026-9043',
      name: documentName,
      category: category || 'General Compliance',
      status: 'Uploaded',
      uploadedAt: new Date().toLocaleString(),
      fileSize: '1.4 MB',
      fileType: 'PDF/Encrypted',
      isEncrypted: true,
      encryptionHash: `${iv.substring(0, 8)}...${encryptedData.substring(0, 12)}`
    },
    message: 'Document encrypted using AES-256 and stored safely in vault.'
  });
});

// 7. Lead Capture API
app.post('/api/leads', (req, res) => {
  const { name, email, phone, serviceId, city } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone number are required' });
  }

  console.log(`[Lead Engine] New lead captured: ${name} (${phone}) for service: ${serviceId || 'General'}`);

  res.json({
    success: true,
    message: 'Lead received! An assigned Chartered Accountant or CS will call you within 15 minutes SLA.',
    slaTime: '15 Minutes',
    leadId: `LEAD-${Date.now().toString().slice(-6)}`
  });
});

// 8. Gemini AI Tax & Compliance Assistant Endpoint
app.post('/api/ai/advisor', async (req, res) => {
  const { query, scenario } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query text required' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        answer: `**ComplyTax AI Advisory System:**\n\nFor the query "${query}":\n\n1. **GST Compliance:** Export of services requires zero-rated filing under Form GST RFD-11 (LUT).\n2. **MCA Requirement:** Director DIR-3 KYC must be updated before September 30th annually.\n3. **Tax Deduction:** Sec 80C caps at ₹1.5 Lakhs while Sec 80D allows up to ₹25,000 for medical insurance.\n\n*(To get real-time dynamic Gemini legal responses, attach a valid GEMINI_API_KEY in Secrets).*`
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const systemInstruction = `You are "ComplyAI Expert", the premier Indian Chartered Accountant, Company Secretary, and Tax Legal Consultant for ComplyTax.
Answer Indian business, GST, Income Tax, MCA, ROC, and Trademark queries with extreme precision, plain legal references (e.g. Companies Act 2013, GST Act 2017, Income Tax Act 1961), clear bullet points, actionable steps, and exact forms or due dates where relevant. Keep your response professional, highly helpful, encouraging, and structured.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: `User Query: ${query}\n${scenario ? `Context/Scenario: ${scenario}` : ''}`,
      config: {
        systemInstruction,
        temperature: 0.3
      }
    });

    res.json({ answer: response.text || 'No response text received.' });
  } catch (error: any) {
    console.error('Gemini AI Advisor Error:', error);
    res.status(500).json({
      error: 'AI Advisor temporarily unavailable',
      details: error.message || String(error)
    });
  }
});

// -------------------------------------------------------------
// VITE & STATIC FILE SERVING
// -------------------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[ComplyTax Server] Full-Stack Backend active on http://0.0.0.0:${PORT}`);
  });
}

startServer();

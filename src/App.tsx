import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { AiTaxAdvisorModal } from './components/AiTaxAdvisorModal';
import { MfaAuthModal } from './components/MfaAuthModal';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { PricingPage } from './pages/PricingPage';
import { LearnPage } from './pages/LearnPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { FoundersGuidePage } from './pages/FoundersGuidePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { LegalPage } from './pages/LegalPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardLayout } from './pages/dashboard/DashboardLayout';

// Mock Data
import { 
  DEMO_USER, 
  INITIAL_ORDERS, 
  INITIAL_DOCUMENTS, 
  INITIAL_REMINDERS, 
  INITIAL_MESSAGES, 
  INITIAL_INVOICES 
} from './data/mockUserData';
import { ServiceId, UserProfile, OrderItem, DocumentItem, ExpertMessage } from './types';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [user, setUser] = useState<UserProfile | null>(DEMO_USER);

  // Data State
  const [orders, setOrders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [documents, setDocuments] = useState<DocumentItem[]>(INITIAL_DOCUMENTS);
  const [reminders] = useState(INITIAL_REMINDERS);
  const [messages, setMessages] = useState<ExpertMessage[]>(INITIAL_MESSAGES);
  const [invoices] = useState(INITIAL_INVOICES);

  // Modals
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalServiceId, setLeadModalServiceId] = useState<ServiceId | undefined>(undefined);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  // MFA Auth Flow
  const [isMfaModalOpen, setIsMfaModalOpen] = useState(false);
  const [pendingPhoneOrEmail, setPendingPhoneOrEmail] = useState('');

  // Handle Navigation
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLeadModal = (serviceId?: string) => {
    setLeadModalServiceId(serviceId as ServiceId);
    setIsLeadModalOpen(true);
  };

  // Auth Handlers
  const handleLoginRequest = (phoneOrEmail: string) => {
    setPendingPhoneOrEmail(phoneOrEmail);
    setIsMfaModalOpen(true);
  };

  const handleMfaSuccess = (token: string, userData: any) => {
    setIsMfaModalOpen(false);
    setUser(userData);
    handleNavigate('/dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    handleNavigate('/');
  };

  // Document Vault Upload Handler
  const handleUploadDocument = (docName: string, category: string) => {
    const newDoc: DocumentItem = {
      id: `DOC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      orderId: 'ORD-2026-9043',
      name: docName,
      category,
      uploadedAt: new Date().toISOString().split('T')[0],
      status: 'Uploaded',
      isEncrypted: true
    };
    setDocuments((prev) => [newDoc, ...prev]);
  };

  // Expert Messaging Handler
  const handleSendMessage = (msgText: string) => {
    const newMsg: ExpertMessage = {
      id: `MSG-${Date.now()}`,
      orderId: 'ORD-2026-9043',
      senderName: user?.name || 'Vikramaditya Roy',
      senderRole: 'Client',
      message: msgText,
      timestamp: 'Just now'
    };
    setMessages((prev) => [...prev, newMsg]);

    // Simulated Auto-reply from CA Ankit Verma
    setTimeout(() => {
      const caReply: ExpertMessage = {
        id: `MSG-CA-${Date.now()}`,
        orderId: 'ORD-2026-9043',
        senderName: 'CA Ankit Verma',
        senderRole: 'Expert',
        message: 'Thank you for your note. I have reviewed your submission and updated your government filing docket.',
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, caReply]);
    }, 1500);
  };

  // Dashboard View Handler
  if (currentPath === '/dashboard') {
    if (!user) {
      return (
        <LoginPage
          onLoginRequest={handleLoginRequest}
          onNavigateSignup={() => handleNavigate('/signup')}
        />
      );
    }

    return (
      <DashboardLayout
        user={user}
        orders={orders}
        documents={documents}
        reminders={reminders}
        messages={messages}
        invoices={invoices}
        onUploadDocument={handleUploadDocument}
        onSendMessage={handleSendMessage}
        onLogout={handleLogout}
        onNavigateHome={() => handleNavigate('/')}
      />
    );
  }

  // Render Page Content based on Path
  const renderPage = () => {
    if (currentPath === '/') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onOpenLeadModal={handleOpenLeadModal}
          onOpenAiAdvisor={() => setIsAiModalOpen(true)}
        />
      );
    }

    if (['/startup', '/gst', '/mca-services', '/income-tax', '/trademark', '/accounting-bookkeeping'].includes(currentPath)) {
      const svcId = currentPath.replace('/', '') as ServiceId;
      return (
        <ServicePage
          serviceId={svcId}
          onNavigate={handleNavigate}
          onOpenLeadModal={handleOpenLeadModal}
        />
      );
    }

    if (currentPath === '/pricing') {
      return <PricingPage onNavigate={handleNavigate} onOpenLeadModal={handleOpenLeadModal} />;
    }

    if (currentPath === '/learn') {
      return <LearnPage onNavigate={handleNavigate} />;
    }

    if (currentPath.startsWith('/learn/')) {
      const slug = currentPath.replace('/learn/', '');
      return (
        <ArticleDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenLeadModal={() => handleOpenLeadModal()}
        />
      );
    }

    if (currentPath === '/founders-guide') {
      return <FoundersGuidePage />;
    }

    if (currentPath === '/about-us') {
      return <AboutUsPage />;
    }

    if (currentPath === '/contact-us') {
      return <ContactUsPage />;
    }

    if (currentPath === '/legal' || currentPath.startsWith('/legal/')) {
      const tab = currentPath.replace('/legal/', '') || 'terms';
      return <LegalPage initialTab={tab} />;
    }

    if (currentPath === '/login') {
      return (
        <LoginPage
          onLoginRequest={handleLoginRequest}
          onNavigateSignup={() => handleNavigate('/signup')}
        />
      );
    }

    if (currentPath === '/signup') {
      return (
        <SignupPage
          onSignupRequest={handleLoginRequest}
          onNavigateLogin={() => handleNavigate('/login')}
        />
      );
    }

    // Default Fallback
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenLeadModal={handleOpenLeadModal}
        onOpenAiAdvisor={() => setIsAiModalOpen(true)}
      />
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0A0A0C] text-slate-900 dark:text-slate-200 flex flex-col font-sans selection:bg-emerald-500 selection:text-zinc-950 transition-colors duration-200">
        <Header
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenLeadModal={handleOpenLeadModal}
          onOpenAiAdvisor={() => setIsAiModalOpen(true)}
          user={user}
        />

        <main className="flex-1">{renderPage()}</main>

        <Footer onNavigate={handleNavigate} />

        {/* Modals */}
        <LeadCaptureModal
          isOpen={isLeadModalOpen}
          onClose={() => setIsLeadModalOpen(false)}
          serviceId={leadModalServiceId}
        />

        <AiTaxAdvisorModal
          isOpen={isAiModalOpen}
          onClose={() => setIsAiModalOpen(false)}
        />

        <MfaAuthModal
          isOpen={isMfaModalOpen}
          onClose={() => setIsMfaModalOpen(false)}
          phoneOrEmail={pendingPhoneOrEmail}
          onSuccess={handleMfaSuccess}
        />
      </div>
    </ThemeProvider>
  );
}
export default App;

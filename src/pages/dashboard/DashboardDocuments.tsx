import React, { useState } from 'react';
import { FolderLock, Upload, ShieldCheck, CheckCircle2, AlertCircle, FileText, Download, Lock } from 'lucide-react';
import { DocumentItem } from '../../types';

interface DashboardDocumentsProps {
  documents: DocumentItem[];
  onUploadDocument: (docName: string, category: string) => void;
}

export const DashboardDocuments: React.FC<DashboardDocumentsProps> = ({
  documents,
  onUploadDocument
}) => {
  const [docName, setDocName] = useState('');
  const [category, setCategory] = useState('Identity Proof');
  const [uploading, setUploading] = useState(false);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docName.trim()) return;

    setUploading(true);
    setTimeout(() => {
      onUploadDocument(docName.trim(), category);
      setDocName('');
      setUploading(false);
    }, 800);
  };

  return (
    <div className="space-y-6 text-white">
      {/* Vault Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-700/50 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>256-Bit AES Hardware Encrypted Vault</span>
          </div>
          <h2 className="text-xl font-bold">Secure Compliance Document Vault</h2>
          <p className="text-xs text-slate-300 mt-0.5">All identity documents, PAN, Aadhaar, rental deeds, and tax certificates are encrypted with AES-256-GCM prior to storage.</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/30 px-3 py-2 rounded-xl text-xs text-emerald-300 font-mono">
          Key Hash: 07A9F-256-AES
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <h3 className="font-bold text-base text-white flex items-center space-x-2">
            <Upload className="w-5 h-5 text-blue-400" />
            <span>Upload Document to Vault</span>
          </h3>

          <form onSubmit={handleUpload} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Document Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Bank Statement July 2026"
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Document Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Identity Proof">Identity Proof (PAN / Aadhaar)</option>
                <option value="Address Proof">Address Proof (Rental / Electricity Bill)</option>
                <option value="Bank Details">Bank Proof (Cancelled Cheque / Statement)</option>
                <option value="GST Asset">GST / Tax Annexure</option>
                <option value="Trademark Asset">Trademark / Logo Graphic</option>
              </select>
            </div>

            {/* Drag & Drop Simulation Zone */}
            <div className="border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl p-6 text-center bg-slate-800/40 transition cursor-pointer">
              <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-200">Drag files here or click to select</p>
              <p className="text-[10px] text-slate-400 mt-1">Supports PDF, PNG, JPEG, ZIP (Max 25 MB per file)</p>
            </div>

            <button
              type="submit"
              disabled={uploading || !docName.trim()}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl transition shadow-md disabled:opacity-50 text-xs"
            >
              {uploading ? 'Encrypting & Storing...' : 'Encrypt & Upload to Vault'}
            </button>
          </form>
        </div>

        {/* Documents Vault Checklist & Table */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-base text-white">Vault Inventory & Verification Status</h3>
            <span className="text-xs text-slate-400">{documents.length} Items Vaulted</span>
          </div>

          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-slate-700 text-blue-400">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h5 className="font-bold text-white text-xs">{doc.name}</h5>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/30 flex items-center">
                        <Lock className="w-2.5 h-2.5 mr-0.5" />
                        AES-256
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{doc.category} | Uploaded: {doc.uploadedAt || 'Just now'}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                    doc.status === 'Verified' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    doc.status === 'Uploaded' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    doc.status === 'Rejected' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    {doc.status}
                  </span>

                  <button
                    onClick={() => alert(`Downloading encrypted file: ${doc.name}`)}
                    className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

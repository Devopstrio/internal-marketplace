import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MarketplaceDashboard from './pages/MarketplaceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The platform provisioning engine is currently synchronizing with the multi-cloud service providers. Standardized templates and golden paths will be discoverable once the catalog indexing is complete.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<MarketplaceDashboard />} />
          <Route path="/catalog" element={<Placeholder name="Service Catalog" />} />
          <Route path="/services" element={<Placeholder name="My Provisioned Services" />} />
          <Route path="/onboarding" element={<Placeholder name="Developer Onboarding Portal" />} />
          <Route path="/analytics" element={<Placeholder name="Platform Adoption Analytics" />} />
          <Route path="/costs" element={<Placeholder name="Cost Visibility & Chargeback" />} />
          <Route path="/governance" element={<Placeholder name="Platform Governance & Policy" />} />
          <Route path="/apis" element={<Placeholder name="Internal API Marketplace" />} />
          <Route path="/templates" element={<Placeholder name="Golden Path Templates" />} />
          <Route path="/settings" element={<Placeholder name="Marketplace & RBAC Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;

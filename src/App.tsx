import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { BottomNavigation } from './components/common/BottomNavigation';
import { ToastContainer } from './components/common/ToastContainer';

// Modals
import { RepairRequestModal } from './components/modals/RepairRequestModal';
import { SellProductModal } from './components/modals/SellProductModal';
import { ChatSellerModal } from './components/modals/ChatSellerModal';
import { AuthModal } from './components/modals/AuthModal';

// Landing Components
import { Hero } from './components/landing/Hero';
import { StatsBar } from './components/landing/StatsBar';
import { FeatureGrid } from './components/landing/FeatureGrid';
import { HowRepairWorks } from './components/landing/HowRepairWorks';
import { LiveSavingsSection } from './components/landing/LiveSavingsSection';
import { MarketplacePreview } from './components/landing/MarketplacePreview';
import { MovingSaleSection } from './components/landing/MovingSaleSection';
import { GroupBuyingSection } from './components/landing/GroupBuyingSection';
import { TrustSection } from './components/landing/TrustSection';
import { CommunityPreview } from './components/landing/CommunityPreview';
import { FinalCTA } from './components/landing/FinalCTA';

// Views
import { DashboardView } from './components/views/DashboardView';
import { GroupDetailsView } from './components/views/GroupDetailsView';
import { MarketplaceView } from './components/views/MarketplaceView';
import { BuyTogetherView } from './components/views/BuyTogetherView';
import { MovingSaleView } from './components/views/MovingSaleView';
import { CommunityView } from './components/views/CommunityView';
import { ServicesView } from './components/views/ServicesView';
import { HowItWorksView } from './components/views/HowItWorksView';
import { ProviderView } from './components/views/ProviderView';
import { AdminView } from './components/views/AdminView';

const MainContent: React.FC = () => {
  const { currentTab, role } = useApp();
  const [isRepairModalOpen, setIsRepairModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Header */}
      <Navbar onOpenAuthModal={() => setIsAuthModalOpen(true)} />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentTab === 'landing' && (
          <div className="space-y-0">
            <Hero onOpenRepairModal={() => setIsRepairModalOpen(true)} />
            <StatsBar />
            <FeatureGrid />
            <HowRepairWorks onOpenRepairModal={() => setIsRepairModalOpen(true)} />
            <LiveSavingsSection />
            <MarketplacePreview onOpenSellModal={() => setIsSellModalOpen(true)} />
            <MovingSaleSection onOpenSellModal={() => setIsSellModalOpen(true)} />
            <GroupBuyingSection />
            <TrustSection />
            <CommunityPreview />
            <FinalCTA onOpenRepairModal={() => setIsRepairModalOpen(true)} />
          </div>
        )}

        {currentTab === 'how-it-works' && (
          <HowItWorksView onOpenRepairModal={() => setIsRepairModalOpen(true)} />
        )}

        {currentTab === 'services' && (
          <ServicesView onOpenRepairModal={() => setIsRepairModalOpen(true)} />
        )}

        {currentTab === 'group-details' && (
          <GroupDetailsView />
        )}

        {currentTab === 'marketplace' && (
          <MarketplaceView onOpenSellModal={() => setIsSellModalOpen(true)} />
        )}

        {currentTab === 'buy-together' && (
          <BuyTogetherView />
        )}

        {currentTab === 'moving-sale' && (
          <MovingSaleView onOpenSellModal={() => setIsSellModalOpen(true)} />
        )}

        {currentTab === 'community' && (
          <CommunityView />
        )}

        {currentTab === 'dashboard' && (
          <DashboardView 
            onOpenRepairModal={() => setIsRepairModalOpen(true)}
            onOpenSellModal={() => setIsSellModalOpen(true)}
          />
        )}

        {currentTab === 'provider-jobs' && (
          <ProviderView />
        )}

        {currentTab === 'admin' && (
          <AdminView />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNavigation
        onOpenRepairModal={() => setIsRepairModalOpen(true)}
        onOpenSellModal={() => setIsSellModalOpen(true)}
      />

      {/* Modals & Toasts */}
      <RepairRequestModal
        isOpen={isRepairModalOpen}
        onClose={() => setIsRepairModalOpen(false)}
      />

      <SellProductModal
        isOpen={isSellModalOpen}
        onClose={() => setIsSellModalOpen(false)}
      />

      <ChatSellerModal />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

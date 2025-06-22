
import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import LibrarySection from '@/components/LibrarySection';
import ExamSection from '@/components/ExamSection';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const getSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      dashboard: 'Dashboard',
      library: 'Perpustakaan',
      exams: 'Ujian',
      apps: 'Panduan Aplikasi & Fitur',
      email: 'E-Mail',
      info: 'Info Kuliah',
      'study-plan': 'Rencana Studi',
      'study-result': 'Hasil Studi',
      courses: 'Perkuliahan',
      guidance: 'Bimbingan',
      thesis: 'Yudisium',
      graduation: 'Wisuda',
      payment: 'Pembayaran'
    };
    return titles[section] || 'Dashboard';
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'library':
        return <LibrarySection />;
      case 'exams':
        return <ExamSection />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={getSectionTitle(activeSection)} />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto animate-fade-in">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;

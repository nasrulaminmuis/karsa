
import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
  { id: 'apps', label: 'Panduan Aplikasi & Fitur', icon: '📱' },
  { id: 'email', label: 'E-Mail', icon: '✉️' },
  { id: 'info', label: 'Info Kuliah', icon: 'ℹ️' },
  { id: 'study-plan', label: 'Rencana Studi', icon: '📋' },
  { id: 'study-result', label: 'Hasil Studi', icon: '📊' },
  { id: 'courses', label: 'Perkuliahan', icon: '📚' },
  { id: 'exams', label: 'Ujian', icon: '📝' },
  { id: 'guidance', label: 'Bimbingan', icon: '👨‍🏫' },
  { id: 'thesis', label: 'Yudisium', icon: '🎓' },
  { id: 'graduation', label: 'Wisuda', icon: '🎉' },
  { id: 'library', label: 'Perpustakaan', icon: '📖' },
  { id: 'payment', label: 'Pembayaran', icon: '💳' }
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, isCollapsed, onToggle }) => {
  return (
    <div className={cn(
      "bg-white shadow-lg transition-all duration-300 h-screen flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-sm">UA</div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800">UNIVERSITAS</h3>
              <h4 className="font-semibold text-xs text-primary-600">AMIKOM</h4>
              <p className="text-xs text-gray-500">YOGYAKARTA</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mx-auto">
            <div className="text-white font-bold text-xs">UA</div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-primary-50",
                activeSection === item.id
                  ? "bg-primary-100 text-primary-700 border-r-2 border-primary-500"
                  : "text-gray-600 hover:text-primary-600"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Toggle Button */}
      <div className="p-4 border-t">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-primary-50 text-primary-600 transition-colors"
        >
          <span className="text-lg">{isCollapsed ? '☰' : '◀'}</span>
        </button>
      </div>

      {/* Logout */}
      <div className="p-4 border-t">
        <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-red-50 text-red-600">
          <span className="text-lg">🚪</span>
          {!isCollapsed && (
            <span className="text-sm font-medium">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

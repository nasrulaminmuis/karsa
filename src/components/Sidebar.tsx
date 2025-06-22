
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Smartphone, 
  Mail, 
  Info, 
  ClipboardList, 
  BarChart3, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Award, 
  PartyPopper, 
  Library, 
  CreditCard,
  LogOut,
  Menu,
  ChevronLeft
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isCollapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'apps', label: 'Panduan Aplikasi & Fitur', icon: Smartphone },
  { id: 'email', label: 'E-Mail', icon: Mail },
  { id: 'info', label: 'Info Kuliah', icon: Info },
  { id: 'study-plan', label: 'Rencana Studi', icon: ClipboardList },
  { id: 'study-result', label: 'Hasil Studi', icon: BarChart3 },
  { id: 'courses', label: 'Perkuliahan', icon: BookOpen },
  { id: 'exams', label: 'Ujian', icon: FileText },
  { id: 'guidance', label: 'Bimbingan', icon: GraduationCap },
  { id: 'thesis', label: 'Yudisium', icon: Award },
  { id: 'graduation', label: 'Wisuda', icon: PartyPopper },
  { id: 'library', label: 'Perpustakaan', icon: Library },
  { id: 'payment', label: 'Pembayaran', icon: CreditCard }
];

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, isCollapsed, onToggle }) => {
  return (
    <div className={cn(
      "bg-white shadow-lg transition-all duration-300 h-screen flex flex-col border-r border-gray-200",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-sm">UA</div>
            </div>
            <div>
              <h3 className="font-bold text-sm text-gray-800 font-inter">UNIVERSITAS</h3>
              <h4 className="font-semibold text-xs text-primary">AMIKOM</h4>
              <p className="text-xs text-gray-500">YOGYAKARTA</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
            <div className="text-white font-bold text-xs">UA</div>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-violet-50",
                  activeSection === item.id
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary"
                )}
              >
                <Icon className="w-5 h-5" />
                {!isCollapsed && (
                  <span className="text-sm font-medium font-inter">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Toggle Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-violet-50 text-primary transition-colors"
        >
          {isCollapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-red-50 text-red-600">
          <LogOut className="w-5 h-5" />
          {!isCollapsed && (
            <span className="text-sm font-medium font-inter">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;


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
  ChevronLeft,
  Sun,
  Moon
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';

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
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="p-4 h-screen">
      <div className={cn(
        "bg-white dark:bg-gray-900 shadow-xl rounded-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-800",
        isCollapsed ? "w-16" : "w-64"
      )}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-sm">UA</div>
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-800 dark:text-white font-inter">UNIVERSITAS</h3>
                <h4 className="font-semibold text-xs text-primary">AMIKOM</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">YOGYAKARTA</p>
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
                    "w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-violet-50 dark:hover:bg-gray-800",
                    activeSection === item.id
                      ? "bg-primary text-white"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
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

        {/* Dark/Light Mode Toggle */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {!isCollapsed && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sun className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-violet-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-violet-50 dark:hover:bg-gray-800 text-primary transition-colors"
          >
            {isCollapsed ? <Menu className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400">
            <LogOut className="w-5 h-5" />
            {!isCollapsed && (
              <span className="text-sm font-medium font-inter">Logout</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

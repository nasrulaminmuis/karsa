
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName = "Kevin Aljabar" }) => {
  return (
    <div className="bg-primary shadow-sm border-b border-primary-600 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-1 font-bold text-white font-inter">{title}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-64 pl-10 pr-4 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/70 rounded-full focus:border-white focus:ring-white font-inter"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 p-0">
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-white/10 text-white px-4 py-2 rounded-full border border-white/20">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white/40 rounded-full"></div>
            </div>
            <div className="text-sm font-inter">
              <div className="font-medium">{userName}</div>
              <div className="text-xs opacity-90">22.12.9999</div>
            </div>
            <button className="text-white/80 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

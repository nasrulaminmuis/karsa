
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
    <div className="bg-violet-50 shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-heading-1 font-bold text-gray-800 font-inter">{title}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-64 pl-10 pr-4 h-10 border-gray-300 bg-white text-gray-700 placeholder:text-gray-500 rounded-full focus:border-primary focus:ring-primary font-inter"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-primary hover:bg-primary/90 p-0">
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-white text-gray-700 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-primary/40 rounded-full"></div>
            </div>
            <div className="text-sm font-inter">
              <div className="font-medium">{userName}</div>
              <div className="text-xs text-gray-500">22.12.9999</div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
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


import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ title, userName = "Kevin Aljabar" }) => {
  return (
    <div className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-64 pl-10 pr-4 h-10 border-gray-300 rounded-full focus:border-primary-500 focus:ring-primary-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full bg-primary-500 hover:bg-primary-600 p-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 bg-primary-500 text-white px-4 py-2 rounded-full">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">👤</span>
            </div>
            <div className="text-sm">
              <div className="font-medium">{userName}</div>
              <div className="text-xs opacity-90">22.12.9999</div>
            </div>
            <button className="text-white/80 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h-5l5-5 5 5h-5v14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

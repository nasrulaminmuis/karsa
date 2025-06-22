
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="bg-white/95 shadow-2xl backdrop-blur-sm">
          <CardHeader className="text-center space-y-4 p-8">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary-500 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">UA</div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">UNIVERSITAS</h1>
              <h2 className="text-xl font-semibold text-primary-600">AMIKOM</h2>
              <p className="text-sm text-gray-600 mt-1">YOGYAKARTA</p>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Username</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-gray-300 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-purple hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

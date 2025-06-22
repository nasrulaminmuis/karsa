
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LibrarySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active-loans');

  const activeLoans = [
    { title: 'stoik', borrowed: '01/01/2001', return: '01/09/2001', fine: 0 },
    { title: 'algo', borrowed: '01/01/2001', return: '01/09/2001', fine: 2000 },
    { title: 'plural', borrowed: '01/01/2001', return: '01/09/2001', fine: 0 }
  ];

  const loanHistory = [
    { title: 'stoik', borrowed: '01/01/2001', returned: '01/09/2001', fine: 0 },
    { title: 'algo', borrowed: '01/01/2001', returned: '01/09/2001', fine: 2000 },
    { title: 'plural', borrowed: '01/01/2001', returned: '01/09/2001', fine: 0 }
  ];

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100">
          <TabsTrigger 
            value="active-loans"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Pinjaman Aktif
          </TabsTrigger>
          <TabsTrigger 
            value="history"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Riwayat
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active-loans" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-purple text-white">
              <div className="grid grid-cols-4 gap-4 text-center">
                <CardTitle className="text-sm font-medium">JUDUL</CardTitle>
                <CardTitle className="text-sm font-medium">PINJAM</CardTitle>
                <CardTitle className="text-sm font-medium">KEMBALI</CardTitle>
                <CardTitle className="text-sm font-medium">DENDA</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {activeLoans.map((book, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">{book.title}</div>
                  <div className="text-gray-600 text-center">{book.borrowed}</div>
                  <div className="text-gray-600 text-center">{book.return}</div>
                  <div className="text-center">
                    <span className={`font-medium ${book.fine > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {book.fine === 0 ? '0' : book.fine.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-purple text-white">
              <div className="grid grid-cols-4 gap-4 text-center">
                <CardTitle className="text-sm font-medium">JUDUL</CardTitle>
                <CardTitle className="text-sm font-medium">PINJAM</CardTitle>
                <CardTitle className="text-sm font-medium">KEMBALI</CardTitle>
                <CardTitle className="text-sm font-medium">DENDA</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {loanHistory.map((book, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">{book.title}</div>
                  <div className="text-gray-600 text-center">{book.borrowed}</div>
                  <div className="text-gray-600 text-center">{book.returned}</div>
                  <div className="text-center">
                    <span className={`font-medium ${book.fine > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {book.fine === 0 ? '0' : book.fine.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LibrarySection;

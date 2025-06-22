
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ExamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('schedule');

  const examSchedule = [
    { room: '6.2.7', date: '01/01/2001', score: 0, status: 'Dibatalkan' },
    { room: '6.2.7', date: '01/01/2001', score: 0, status: 'Ditunda' },
    { room: '6.2.8', date: '01/01/2001', score: 88, status: 'Selesai' }
  ];

  const examQuestions = [
    { subject: 'Statistik', file: 'download-icon', date: '01/01/2001', actions: ['📤', '✏️', '🗑️'] },
    { subject: 'ppw', file: 'download-icon', date: '01/01/2001', actions: ['📤', '✏️', '🗑️'] },
    { subject: 'pwl', file: 'download-icon', date: '01/01/2001', actions: ['📤', '✏️', '🗑️'] }
  ];

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100">
          <TabsTrigger 
            value="schedule"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Susulan
          </TabsTrigger>
          <TabsTrigger 
            value="remedial"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Remidi
          </TabsTrigger>
          <TabsTrigger 
            value="uts"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            UTS
          </TabsTrigger>
          <TabsTrigger 
            value="uas"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            UAS
          </TabsTrigger>
          <TabsTrigger 
            value="registration"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Pendadaran
          </TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="mt-6">
          <Card>
            <CardHeader className="bg-gradient-purple text-white">
              <div className="grid grid-cols-4 gap-4 text-center">
                <CardTitle className="text-sm font-medium">Ruang</CardTitle>
                <CardTitle className="text-sm font-medium">Tanggal</CardTitle>
                <CardTitle className="text-sm font-medium">NILAI</CardTitle>
                <CardTitle className="text-sm font-medium">Status</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {examSchedule.map((exam, index) => (
                <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800 text-center">{exam.room}</div>
                  <div className="text-gray-600 text-center">{exam.date}</div>
                  <div className="text-gray-600 text-center">{exam.score}</div>
                  <div className="text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exam.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                      exam.status === 'Ditunda' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {exam.status}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="uas" className="mt-6">
          <div className="space-y-4">
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                Download Soal dan Upload Jawaban Ujian susulan tahun akademik 2024/2025 semester Genap
              </p>
            </div>
            
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              Daftar Ujian
            </Button>

            <Card>
              <CardHeader className="bg-gradient-purple text-white">
                <div className="grid grid-cols-4 gap-4 text-center">
                  <CardTitle className="text-sm font-medium">Mata Kuliah</CardTitle>
                  <CardTitle className="text-sm font-medium">Soal</CardTitle>
                  <CardTitle className="text-sm font-medium">Tanggal Ujian</CardTitle>
                  <CardTitle className="text-sm font-medium">JAWABAN</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {examQuestions.map((question, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-800">{question.subject}</div>
                    <div className="text-center">
                      <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
                        ⬇️
                      </Button>
                    </div>
                    <div className="text-gray-600 text-center">{question.date}</div>
                    <div className="flex justify-center space-x-2">
                      {question.actions.map((action, idx) => (
                        <Button key={idx} variant="ghost" size="sm" className="text-gray-600 hover:text-primary-600">
                          {action}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExamSection;

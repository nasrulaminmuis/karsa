
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Download, Upload, Eye, FileText, Calendar, Clock, User } from 'lucide-react';

const ExamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const examSchedule = [
    { id: 1, subject: 'Pemrograman Web', room: '6.2.7', date: '28/11/2024', time: '08:00-10:00', score: 0, status: 'Terjadwal', type: 'UTS' },
    { id: 2, subject: 'Basis Data', room: '6.2.8', date: '29/11/2024', time: '10:00-12:00', score: 0, status: 'Terjadwal', type: 'UAS' },
    { id: 3, subject: 'Algoritma', room: '6.2.9', date: '30/11/2024', time: '13:00-15:00', score: 0, status: 'Ditunda', type: 'Susulan' },
    { id: 4, subject: 'Jaringan Komputer', room: '6.2.7', date: '01/12/2024', time: '08:00-10:00', score: 88, status: 'Selesai', type: 'UTS' },
    { id: 5, subject: 'Sistem Operasi', room: '6.2.8', date: '02/12/2024', time: '10:00-12:00', score: 92, status: 'Selesai', type: 'UAS' },
    { id: 6, subject: 'Rekayasa Perangkat Lunak', room: '6.2.9', date: '03/12/2024', time: '13:00-15:00', score: 0, status: 'Dibatalkan', type: 'Remidi' },
    { id: 7, subject: 'Keamanan Informasi', room: '6.2.7', date: '04/12/2024', time: '15:00-17:00', score: 85, status: 'Selesai', type: 'UAS' },
    { id: 8, subject: 'Machine Learning', room: '6.2.8', date: '05/12/2024', time: '08:00-10:00', score: 0, status: 'Terjadwal', type: 'UTS' }
  ];

  const examQuestions = [
    { id: 1, subject: 'Statistik', lecturer: 'Dr. Ahmad', date: '25/11/2024', time: '09:00-11:00', hasQuestion: true, hasAnswer: false, type: 'UAS' },
    { id: 2, subject: 'Pemrograman Python', lecturer: 'Prof. Sari', date: '26/11/2024', time: '13:00-15:00', hasQuestion: true, hasAnswer: true, type: 'UTS' },
    { id: 3, subject: 'Pemrograman Web Lanjut', lecturer: 'Dr. Budi', date: '27/11/2024', time: '10:00-12:00', hasQuestion: false, hasAnswer: false, type: 'Susulan' },
    { id: 4, subject: 'Kecerdasan Buatan', lecturer: 'Prof. Nina', date: '28/11/2024', time: '14:00-16:00', hasQuestion: true, hasAnswer: false, type: 'UAS' },
    { id: 5, subject: 'Data Mining', lecturer: 'Dr. Rudi', date: '29/11/2024', time: '08:00-10:00', hasQuestion: true, hasAnswer: true, type: 'UTS' },
    { id: 6, subject: 'Cyber Security', lecturer: 'Prof. Lisa', date: '30/11/2024', time: '15:00-17:00', hasQuestion: false, hasAnswer: false, type: 'Remidi' }
  ];

  const getCurrentItems = (items: any[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const getItemsForTab = () => {
    if (activeTab === 'uas') return examQuestions;
    return examSchedule.filter(exam => {
      switch (activeTab) {
        case 'schedule': return exam.type === 'Susulan';
        case 'remedial': return exam.type === 'Remidi';
        case 'uts': return exam.type === 'UTS';
        case 'registration': return exam.type === 'Pendadaran';
        default: return true;
      }
    });
  };

  const currentItems = getCurrentItems(getItemsForTab());
  const totalPages = Math.ceil(getItemsForTab().length / itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Sistem Ujian</h2>
          <p className="text-gray-600">Kelola jadwal ujian dan download soal ujian</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-primary hover:bg-primary/90">
            <Calendar className="w-4 h-4 mr-2" />
            Daftar Ujian
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Jadwal
          </Button>
        </div>
      </div>

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
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Jadwal Ujian Susulan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mata Kuliah</TableHead>
                    <TableHead>Ruang</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Waktu</TableHead>
                    <TableHead>Nilai</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium">{exam.subject}</TableCell>
                      <TableCell>{exam.room}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${exam.score > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                          {exam.score || '-'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exam.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                          exam.status === 'Terjadwal' ? 'bg-blue-100 text-blue-700' :
                          exam.status === 'Ditunda' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {exam.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          {exam.status === 'Terjadwal' && (
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Soal dan Jawaban UAS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mata Kuliah</TableHead>
                      <TableHead>Dosen</TableHead>
                      <TableHead>Tanggal Ujian</TableHead>
                      <TableHead>Waktu</TableHead>
                      <TableHead>Soal</TableHead>
                      <TableHead>Jawaban</TableHead>
                      <TableHead>Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {getCurrentItems(examQuestions).map((question) => (
                      <TableRow key={question.id}>
                        <TableCell className="font-medium">{question.subject}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-gray-500" />
                            {question.lecturer}
                          </div>
                        </TableCell>
                        <TableCell>{question.date}</TableCell>
                        <TableCell>{question.time}</TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            variant={question.hasQuestion ? "default" : "outline"}
                            disabled={!question.hasQuestion}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className={question.hasAnswer ? "text-green-600" : ""}
                            >
                              <Upload className="w-4 h-4" />
                            </Button>
                            {question.hasAnswer && (
                              <Button size="sm" variant="outline">
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Similar structure for other tabs */}
        <TabsContent value="uts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Jadwal UTS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mata Kuliah</TableHead>
                    <TableHead>Ruang</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Waktu</TableHead>
                    <TableHead>Nilai</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium">{exam.subject}</TableCell>
                      <TableCell>{exam.room}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${exam.score > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                          {exam.score || '-'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exam.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                          exam.status === 'Terjadwal' ? 'bg-blue-100 text-blue-700' :
                          exam.status === 'Ditunda' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {exam.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            Detail
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="remedial" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                Ujian Remidi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Mata Kuliah</TableHead>
                    <TableHead>Ruang</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Waktu</TableHead>
                    <TableHead>Nilai</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="font-medium">{exam.subject}</TableCell>
                      <TableCell>{exam.room}</TableCell>
                      <TableCell>{exam.date}</TableCell>
                      <TableCell>{exam.time}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${exam.score > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                          {exam.score || '-'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exam.status === 'Selesai' ? 'bg-green-100 text-green-700' :
                          exam.status === 'Terjadwal' ? 'bg-blue-100 text-blue-700' :
                          exam.status === 'Ditunda' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {exam.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            Daftar
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="registration" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Pendaftaran Ujian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">Tidak ada jadwal pendadaran saat ini</p>
                <Button>
                  <Calendar className="w-4 h-4 mr-2" />
                  Daftar Pendadaran
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ExamSection;

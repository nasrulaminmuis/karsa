
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Download, Eye, BookOpen, Calendar, AlertCircle } from 'lucide-react';

const LibrarySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active-loans');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const activeLoans = [
    { id: 1, title: 'Pemrograman Web dengan PHP', author: 'John Doe', borrowed: '15/11/2024', return: '29/11/2024', fine: 0, status: 'Aktif' },
    { id: 2, title: 'Algoritma dan Struktur Data', author: 'Jane Smith', borrowed: '10/11/2024', return: '24/11/2024', fine: 5000, status: 'Terlambat' },
    { id: 3, title: 'Database Management System', author: 'Bob Wilson', borrowed: '20/11/2024', return: '04/12/2024', fine: 0, status: 'Aktif' },
    { id: 4, title: 'Jaringan Komputer', author: 'Alice Brown', borrowed: '05/11/2024', return: '19/11/2024', fine: 10000, status: 'Terlambat' },
    { id: 5, title: 'Machine Learning Fundamentals', author: 'Chris Davis', borrowed: '25/11/2024', return: '09/12/2024', fine: 0, status: 'Aktif' },
    { id: 6, title: 'Software Engineering', author: 'David Miller', borrowed: '12/11/2024', return: '26/11/2024', fine: 0, status: 'Aktif' },
    { id: 7, title: 'Cyber Security Basics', author: 'Eva Johnson', borrowed: '08/11/2024', return: '22/11/2024', fine: 7500, status: 'Terlambat' },
    { id: 8, title: 'Mobile App Development', author: 'Frank Taylor', borrowed: '18/11/2024', return: '02/12/2024', fine: 0, status: 'Aktif' }
  ];

  const loanHistory = [
    { id: 1, title: 'Introduction to Programming', author: 'Mark Johnson', borrowed: '01/10/2024', returned: '15/10/2024', fine: 0, rating: 5 },
    { id: 2, title: 'Web Development Basics', author: 'Sarah Wilson', borrowed: '05/10/2024', returned: '20/10/2024', fine: 2500, rating: 4 },
    { id: 3, title: 'Python for Beginners', author: 'Tom Brown', borrowed: '10/10/2024', returned: '24/10/2024', fine: 0, rating: 5 },
    { id: 4, title: 'Data Structures', author: 'Lisa Davis', borrowed: '15/10/2024', returned: '29/10/2024', fine: 5000, rating: 4 },
    { id: 5, title: 'Operating Systems', author: 'Mike Taylor', borrowed: '20/10/2024', returned: '03/11/2024', fine: 0, rating: 3 },
    { id: 6, title: 'Computer Graphics', author: 'Anna Miller', borrowed: '25/10/2024', returned: '08/11/2024', fine: 0, rating: 4 },
    { id: 7, title: 'Artificial Intelligence', author: 'Peter Wilson', borrowed: '30/10/2024', returned: '13/11/2024', fine: 3000, rating: 5 },
    { id: 8, title: 'Cloud Computing', author: 'Mary Johnson', borrowed: '02/11/2024', returned: '16/11/2024', fine: 0, rating: 4 }
  ];

  const getCurrentItems = (items: any[]) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = Math.ceil((activeTab === 'active-loans' ? activeLoans : loanHistory).length / itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Perpustakaan Digital</h2>
          <p className="text-gray-600">Kelola pinjaman buku dan riwayat peminjaman Anda</p>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-primary hover:bg-primary/90">
            <BookOpen className="w-4 h-4 mr-2" />
            Cari Buku
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100">
          <TabsTrigger 
            value="active-loans"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Pinjaman Aktif ({activeLoans.length})
          </TabsTrigger>
          <TabsTrigger 
            value="history"
            className="data-[state=active]:bg-primary-500 data-[state=active]:text-white"
          >
            Riwayat Peminjaman ({loanHistory.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active-loans" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary" />
                Pinjaman Aktif
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul Buku</TableHead>
                    <TableHead>Pengarang</TableHead>
                    <TableHead>Tanggal Pinjam</TableHead>
                    <TableHead>Tanggal Kembali</TableHead>
                    <TableHead>Denda</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getCurrentItems(activeLoans).map((book) => (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.borrowed}</TableCell>
                      <TableCell>{book.return}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${book.fine > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {book.fine === 0 ? 'Rp 0' : `Rp ${book.fine.toLocaleString()}`}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          book.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {book.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            Perpanjang
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

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Riwayat Peminjaman
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul Buku</TableHead>
                    <TableHead>Pengarang</TableHead>
                    <TableHead>Tanggal Pinjam</TableHead>
                    <TableHead>Tanggal Kembali</TableHead>
                    <TableHead>Denda</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getCurrentItems(loanHistory).map((book) => (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.borrowed}</TableCell>
                      <TableCell>{book.returned}</TableCell>
                      <TableCell>
                        <span className={`font-medium ${book.fine > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {book.fine === 0 ? 'Rp 0' : `Rp ${book.fine.toLocaleString()}`}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < book.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            Pinjam Lagi
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
      </Tabs>

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
    </div>
  );
};

export default LibrarySection;

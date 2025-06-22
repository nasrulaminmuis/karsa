
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, FileText, CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Books Borrowed', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { title: 'Pending Returns', value: '3', icon: Clock, color: 'bg-yellow-500' },
    { title: 'Upcoming Exams', value: '5', icon: FileText, color: 'bg-red-500' },
    { title: 'Completed Courses', value: '24', icon: CheckCircle, color: 'bg-green-500' }
  ];

  const recentActivity = [
    { action: 'Borrowed "Algorithm Design"', time: '2 hours ago', type: 'library' },
    { action: 'Completed Statistics Exam', time: '1 day ago', type: 'exam' },
    { action: 'Returned "Data Structures"', time: '3 days ago', type: 'library' },
    { action: 'Registered for UAS', time: '5 days ago', type: 'exam' }
  ];

  return (
    <div className="space-y-6 font-inter">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 font-inter">{stat.title}</p>
                    <p className="text-heading-1 font-bold text-gray-900 font-inter">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-heading-2 font-semibold text-gray-800 font-inter">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'library' ? 'bg-primary/10 text-primary' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {activity.type === 'library' ? 
                      <BookOpen className="w-4 h-4" /> : 
                      <FileText className="w-4 h-4" />
                    }
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800 font-inter">{activity.action}</p>
                    <p className="text-xs text-gray-500 font-inter">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-heading-2 font-semibold text-gray-800 font-inter">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-violet-50 rounded-lg cursor-pointer hover:bg-violet-100 transition-colors">
                <BookOpen className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-primary font-inter">Browse Library</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                <FileText className="w-6 h-6 text-orange-600 mb-2" />
                <p className="text-sm font-medium text-orange-800 font-inter">View Exams</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="w-6 h-6 text-blue-600 mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-blue-800 font-inter">Study Results</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                <div className="w-6 h-6 text-green-600 mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 17h20v2H2zm1.15-4.05L4 11l4 4L16 7l1.85 1.95L8 17.6z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-green-800 font-inter">Payments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

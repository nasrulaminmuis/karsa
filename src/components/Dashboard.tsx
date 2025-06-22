
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Books Borrowed', value: '12', icon: '📚', color: 'bg-blue-500' },
    { title: 'Pending Returns', value: '3', icon: '⏰', color: 'bg-yellow-500' },
    { title: 'Upcoming Exams', value: '5', icon: '📝', color: 'bg-red-500' },
    { title: 'Completed Courses', value: '24', icon: '✅', color: 'bg-green-500' }
  ];

  const recentActivity = [
    { action: 'Borrowed "Algorithm Design"', time: '2 hours ago', type: 'library' },
    { action: 'Completed Statistics Exam', time: '1 day ago', type: 'exam' },
    { action: 'Returned "Data Structures"', time: '3 days ago', type: 'library' },
    { action: 'Registered for UAS', time: '5 days ago', type: 'exam' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'library' ? 'bg-primary-100 text-primary-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {activity.type === 'library' ? '📚' : '📝'}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary-50 rounded-lg cursor-pointer hover:bg-primary-100 transition-colors">
                <div className="text-2xl text-primary-600 mb-2">📚</div>
                <p className="text-sm font-medium text-primary-800">Browse Library</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition-colors">
                <div className="text-2xl text-orange-600 mb-2">📝</div>
                <p className="text-sm font-medium text-orange-800">View Exams</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="text-2xl text-blue-600 mb-2">📊</div>
                <p className="text-sm font-medium text-blue-800">Study Results</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                <div className="text-2xl text-green-600 mb-2">💳</div>
                <p className="text-sm font-medium text-green-800">Payments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

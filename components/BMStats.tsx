
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Live', value: 45, color: '#10b981' },
  { name: 'Die XMDT', value: 30, color: '#f59e0b' },
  { name: 'Die Vĩnh Viễn', value: 25, color: '#ef4444' },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export default function BMStats() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100/50 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-gray-800 flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
          <i className="ri-pie-chart-line text-white text-lg"></i>
        </div>
        Thống kê BM
      </h3>
      
      <div className="relative">
        <div className="h-72 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white rounded-full p-4 shadow-lg">
          <p className="text-2xl font-bold text-gray-800">100</p>
          <p className="text-sm text-gray-600">Tổng BM</p>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl hover:shadow-md transition-all">
            <div className="flex items-center space-x-3">
              <div className={`w-5 h-5 rounded-full shadow-sm`} style={{ backgroundColor: item.color }}></div>
              <span className="text-sm font-semibold text-gray-700">{item.name}</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-gray-800">{item.value}</span>
              <span className="text-sm text-gray-600 ml-1">BM</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

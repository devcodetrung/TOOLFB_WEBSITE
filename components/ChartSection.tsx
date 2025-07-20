
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Đã kích hoạt', value: 234, color: '#10b981' },
  { name: 'Chưa kích hoạt', value: 89, color: '#ef4444' },
  { name: 'Đang xử lý', value: 45, color: '#f59e0b' },
];

const COLORS = ['#10b981', '#ef4444', '#f59e0b'];

export default function ChartSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Thống kê thẻ</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        {data.map((item, index) => (
          <div key={index} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center mb-2">
              <div className={`w-3 h-3 rounded-full mr-2`} style={{ backgroundColor: item.color }}></div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

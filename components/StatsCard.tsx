
'use client';

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

export default function StatsCard({ title, value, icon, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center`}>
          <i className={`${icon} text-white text-2xl`}></i>
        </div>
      </div>
    </div>
  );
}

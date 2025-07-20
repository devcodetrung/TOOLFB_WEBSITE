'use client';

const updates = [
  {
    id: 1,
    version: 'v1.7.9',
    date: '15/11/2024',
    time: '14:30',
    title: 'Cập nhật tính năng quản lý BM',
    content: 'Thêm tính năng theo dõi trạng thái BM real-time, cải thiện giao diện dashboard',
    type: 'feature',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    version: 'v1.7.8',
    date: '10/11/2024',
    time: '09:15',
    title: 'Sửa lỗi hiển thị thống kê',
    content: 'Khắc phục lỗi hiển thị biểu đồ thống kê TKQC, tối ưu hiệu suất tải dữ liệu',
    type: 'bugfix',
    color: 'bg-red-500'
  },
  {
    id: 3,
    version: 'v1.7.7',
    date: '05/11/2024',
    time: '16:45',
    title: 'Cải thiện bảo mật',
    content: 'Nâng cấp hệ thống xác thực, thêm tính năng đăng nhập 2 bước',
    type: 'security',
    color: 'bg-green-500'
  },
  {
    id: 4,
    version: 'v1.7.6',
    date: '01/11/2024',
    time: '11:20',
    title: 'Tối ưu giao diện mobile',
    content: 'Cải thiện responsive design, tối ưu trải nghiệm người dùng trên thiết bị di động',
    type: 'improvement',
    color: 'bg-purple-500'
  },
  {
    id: 5,
    version: 'v1.7.5',
    date: '28/10/2024',
    time: '13:10',
    title: 'Thêm tính năng xuất báo cáo',
    content: 'Cho phép xuất báo cáo chi tiết về hoạt động BM và TKQC dưới dạng Excel, PDF',
    type: 'feature',
    color: 'bg-orange-500'
  }
];

export default function UpdateHistory() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
            <i className="ri-history-line text-white text-sm"></i>
          </div>
          Lịch sử cập nhật
        </h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium">
          Xem tất cả
        </button>
      </div>
      
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        
        <div className="space-y-6">
          {updates.map((update, index) => (
            <div key={update.id} className="relative flex items-start space-x-4">
              <div className={`w-12 h-12 ${update.color} rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg`}>
                {update.type === 'feature' && <i className="ri-add-circle-line text-white text-lg"></i>}
                {update.type === 'bugfix' && <i className="ri-bug-line text-white text-lg"></i>}
                {update.type === 'security' && <i className="ri-shield-check-line text-white text-lg"></i>}
                {update.type === 'improvement' && <i className="ri-arrow-up-circle-line text-white text-lg"></i>}
              </div>
              
              <div className="flex-1 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-blue-600">{update.version}</span>
                    <span className="text-sm text-gray-500">{update.date}</span>
                    <span className="text-xs text-gray-400">{update.time}</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-800 mb-2">{update.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{update.content}</p>
                
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs text-white font-medium ${update.color}`}>
                      {update.type === 'feature' && 'Tính năng mới'}
                      {update.type === 'bugfix' && 'Sửa lỗi'}
                      {update.type === 'security' && 'Bảo mật'}
                      {update.type === 'improvement' && 'Cải thiện'}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-xs cursor-pointer font-medium">
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
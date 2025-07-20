
'use client';

const activities = [
  { id: 1, title: 'Tài khoản HM', description: 'Tạo tài khoản mới', status: 'Hoạt động', time: '1 giờ trước', color: 'bg-blue-500' },
  { id: 2, title: 'Ghi chú về file trang', description: 'Cập nhật nội dung', status: 'Hoạt động', time: '2 giờ trước', color: 'bg-green-500' },
  { id: 3, title: 'Hợp đồng tự hoàn', description: 'Xử lý hợp đồng', status: 'Hoạt động', time: '3 giờ trước', color: 'bg-purple-500' },
  { id: 4, title: 'Nạp thẻ điện', description: 'Giao dịch thành công', status: 'Hoạt động', time: '4 giờ trước', color: 'bg-orange-500' },
  { id: 5, title: 'Nạp game', description: 'Nạp thẻ game online', status: 'Hoạt động', time: '5 giờ trước', color: 'bg-pink-500' },
  { id: 6, title: 'Soát xét', description: 'Kiểm tra tài khoản', status: 'Hoạt động', time: '6 giờ trước', color: 'bg-indigo-500' },
  { id: 7, title: 'Quản lý sản phẩm', description: 'Thêm sản phẩm mới', status: 'Hoạt động', time: '7 giờ trước', color: 'bg-red-500' },
  { id: 8, title: 'Lịch sử giao dịch', description: 'Xuất báo cáo', status: 'Hoạt động', time: '8 giờ trước', color: 'bg-yellow-500' },
  { id: 9, title: 'Mật khẩu', description: 'Đổi mật khẩu', status: 'Hoạt động', time: '9 giờ trước', color: 'bg-teal-500' },
  { id: 10, title: 'Tài khoản hoa hồng', description: 'Tính toán hoa hồng', status: 'Hoạt động', time: '10 giờ trước', color: 'bg-cyan-500' },
];

export default function ActivityList() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Lịch sử các hoạt động</h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer">Xem tất cả</button>
      </div>
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`w-8 h-8 ${activity.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
              <i className="ri-check-line text-white text-sm"></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 text-sm">{activity.title}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs whitespace-nowrap">
                {activity.status}
              </span>
              <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <i className="ri-external-link-line text-sm"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

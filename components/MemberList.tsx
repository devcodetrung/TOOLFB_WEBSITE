
'use client';

const topHM = [
  { id: 1, name: 'Trần Văn Tùng', phone: '0911000000', status: 'Đã kích hoạt', statusColor: 'bg-green-500', avatar: 'bg-blue-500' },
  { id: 2, name: 'Nguyễn Thị Lan', phone: '0912000000', status: 'Chưa kích hoạt', statusColor: 'bg-red-500', avatar: 'bg-purple-500' },
  { id: 3, name: 'Lê Minh Hoa', phone: '0913000000', status: 'Đang xử lý', statusColor: 'bg-yellow-500', avatar: 'bg-green-500' },
  { id: 4, name: 'Phạm Văn Nam', phone: '0914000000', status: 'Đã kích hoạt', statusColor: 'bg-green-500', avatar: 'bg-orange-500' },
  { id: 5, name: 'Hoàng Thị Mai', phone: '0915000000', status: 'Đã kích hoạt', statusColor: 'bg-green-500', avatar: 'bg-pink-500' },
];

const topPages = [
  { id: 1, name: 'Trang chủ', views: '1,234', status: 'Hoạt động', statusColor: 'bg-green-500', avatar: 'bg-blue-500' },
  { id: 2, name: 'Sản phẩm', views: '987', status: 'Hoạt động', statusColor: 'bg-green-500', avatar: 'bg-purple-500' },
  { id: 3, name: 'Liên hệ', views: '756', status: 'Hoạt động', statusColor: 'bg-green-500', avatar: 'bg-green-500' },
  { id: 4, name: 'Về chúng tôi', views: '543', status: 'Bảo trì', statusColor: 'bg-yellow-500', avatar: 'bg-orange-500' },
  { id: 5, name: 'Tin tức', views: '432', status: 'Hoạt động', statusColor: 'bg-green-500', avatar: 'bg-pink-500' },
];

export default function MemberList() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Top HM</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer">Xem tất cả</button>
        </div>
        <div className="space-y-3">
          {topHM.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${member.avatar} rounded-full flex items-center justify-center`}>
                  <i className="ri-user-line text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${member.statusColor} whitespace-nowrap`}>
                  {member.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  <i className="ri-more-2-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Top Pages</h3>
          <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer">Xem tất cả</button>
        </div>
        <div className="space-y-3">
          {topPages.map((page) => (
            <div key={page.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${page.avatar} rounded-full flex items-center justify-center`}>
                  <i className="ri-pages-line text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{page.name}</p>
                  <p className="text-sm text-gray-500">{page.views} lượt xem</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs text-white ${page.statusColor} whitespace-nowrap`}>
                  {page.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  <i className="ri-more-2-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

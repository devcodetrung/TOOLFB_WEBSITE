'use client';

const pages = [
  {
    id: 1,
    name: 'Trang Chính Thức',
    likes: '125,430',
    category: 'Doanh nghiệp',
    status: 'Đã xác minh',
    statusColor: 'bg-green-500',
    pageId: 'PAGE_123456789'
  },
  {
    id: 2,
    name: 'Fanpage Sản Phẩm',
    likes: '89,250',
    category: 'Thương mại',
    status: 'Hoạt động',
    statusColor: 'bg-blue-500',
    pageId: 'PAGE_987654321'
  },
  {
    id: 3,
    name: 'Cửa Hàng Online',
    likes: '67,890',
    category: 'Bán lẻ',
    status: 'Hoạt động',
    statusColor: 'bg-blue-500',
    pageId: 'PAGE_456789123'
  }
];

export default function TopPages() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <i className="ri-pages-line text-white text-sm"></i>
          </div>
          Top Page
        </h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium">
          Quản lý Page
        </button>
      </div>
      
      <div className="space-y-4">
        {pages.map((page) => (
          <div key={page.id} className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="ri-facebook-fill text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{page.name}</p>
                  <p className="text-sm text-gray-500">{page.category}</p>
                  <p className="text-xs text-gray-400">ID: {page.pageId}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs text-white font-medium ${page.statusColor} whitespace-nowrap`}>
                {page.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="ri-heart-fill text-red-500"></i>
                <span className="text-lg font-bold text-blue-600">{page.likes}</span>
                <span className="text-sm text-gray-500">lượt thích</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer font-medium">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
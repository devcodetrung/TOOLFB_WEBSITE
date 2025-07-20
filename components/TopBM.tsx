
'use client';

const bmAccounts = [
  {
    id: 1,
    name: 'BM Chính',
    type: 'Business Manager',
    bmId: 'BM123456789',
    status: 'Live',
    statusColor: 'bg-gradient-to-r from-green-500 to-green-600',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600'
  },
  {
    id: 2,
    name: 'BM Phụ 1',
    type: 'Business Manager',
    bmId: 'BM987654321',
    status: 'Die XMDT',
    statusColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-600'
  },
  {
    id: 3,
    name: 'BM Phụ 2',
    type: 'Business Manager',
    bmId: 'BM456789123',
    status: 'Die Vĩnh Viễn',
    statusColor: 'bg-gradient-to-r from-red-500 to-red-600',
    iconBg: 'bg-gradient-to-br from-red-500 to-pink-600'
  }
];

export default function TopBM() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <i className="ri-advertisement-line text-white text-lg"></i>
          </div>
          Top BM
        </h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-all">
          Xem tất cả
        </button>
      </div>
      
      <div className="space-y-4">
        {bmAccounts.map((bm) => (
          <div key={bm.id} className="group p-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 rounded-2xl transition-all duration-300 border border-gray-100/50 hover:border-blue-200/50 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-14 h-14 ${bm.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">{bm.name}</p>
                  <p className="text-sm text-gray-600 font-medium">{bm.type}</p>
                  <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block mt-1">
                    ID: {bm.bmId}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`px-4 py-2 rounded-full text-sm text-white font-bold ${bm.statusColor} whitespace-nowrap shadow-lg`}>
                  {bm.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all">
                  <i className="ri-more-2-line text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

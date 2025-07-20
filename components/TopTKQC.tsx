
'use client';

const adAccounts = [
  {
    id: 1,
    name: 'TK QC Chính',
    accountId: 'ACT_123456789',
    status: 'Hoạt động',
    statusColor: 'bg-gradient-to-r from-green-500 to-green-600',
    spendLimit: '50,000,000 VND',
    spent: '25,480,000 VND',
    percentage: 51,
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600'
  },
  {
    id: 2,
    name: 'TK QC Phụ 1',
    accountId: 'ACT_987654321',
    status: 'Hạn chế',
    statusColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    spendLimit: '30,000,000 VND',
    spent: '12,350,000 VND',
    percentage: 41,
    iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-600'
  },
  {
    id: 3,
    name: 'TK QC Phụ 2',
    accountId: 'ACT_456789123',
    status: 'Tạm khóa',
    statusColor: 'bg-gradient-to-r from-red-500 to-red-600',
    spendLimit: '20,000,000 VND',
    spent: '8,750,000 VND',
    percentage: 44,
    iconBg: 'bg-gradient-to-br from-red-500 to-pink-600'
  }
];

export default function TopTKQC() {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
            <i className="ri-user-settings-line text-white text-lg"></i>
          </div>
          Top TKQC
        </h3>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-all">
          Xem tổng tiêu
        </button>
      </div>
      
      <div className="space-y-4">
        {adAccounts.map((account) => (
          <div key={account.id} className="group p-4 border border-gray-100/50 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 hover:border-blue-200/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${account.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                  <i className="ri-advertisement-line text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800">{account.name}</p>
                  <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block mt-1">
                    ID: {account.accountId}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs text-white font-bold ${account.statusColor} whitespace-nowrap shadow-lg`}>
                {account.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Giới hạn chi tiêu</p>
                <p className="font-bold text-gray-800 text-sm">{account.spendLimit}</p>
              </div>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Đã chi tiêu</p>
                <p className="font-bold text-blue-600 text-sm">{account.spent}</p>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Tiến độ chi tiêu</span>
                <span>{account.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${account.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

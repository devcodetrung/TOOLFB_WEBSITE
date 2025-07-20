'use client';

export default function AccountDetails() {
  const accountInfo = [
    { label: 'Trạng thái hoạt động', value: 'Đang hoạt động', color: 'text-green-600' },
    { label: 'Giới hạn chi tiêu', value: '50,000,000 VND', color: 'text-blue-600' },
    { label: 'Vị trí địa lý', value: 'Việt Nam', color: 'text-gray-800' },
    { label: 'Quyền', value: 'Quản trị viên', color: 'text-purple-600' },
    { label: 'Loại tài khoản', value: 'Business Manager', color: 'text-orange-600' },
    { label: 'ID tài khoản', value: 'ACT_123456789012345', color: 'text-gray-600' },
    { label: 'Múi giờ', value: 'GMT+7 (Việt Nam)', color: 'text-gray-800' },
    { label: 'Tiền tệ', value: 'VND (Việt Nam Đồng)', color: 'text-gray-800' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
          <i className="ri-information-line text-white text-sm"></i>
        </div>
        Thông tin tài khoản chi tiết
      </h3>
      
      <div className="grid gap-4">
        {accountInfo.map((info, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium text-gray-600">{info.label}:</span>
            <span className={`text-sm font-semibold ${info.color}`}>{info.value}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <i className="ri-shield-check-line text-white text-lg"></i>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Trạng thái bảo mật</p>
            <p className="text-sm text-gray-600">Tài khoản được bảo vệ hoàn toàn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
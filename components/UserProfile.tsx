'use client';

export default function UserProfile() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <i className="ri-user-line text-white text-3xl"></i>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <i className="ri-check-line text-white text-xs"></i>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Trần Văn Trung</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <i className="ri-facebook-fill text-blue-600"></i>
                <span>ID: 100012345678901</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="ri-user-3-line text-gray-500"></i>
                <span>Nam</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="ri-calendar-line text-gray-500"></i>
                <span>15/08/1990</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl px-6 py-4 text-white shadow-md min-w-[120px] text-center">
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm opacity-90 whitespace-nowrap">Tài khoản BM</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl px-6 py-4 text-white shadow-md min-w-[120px] text-center">
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm opacity-90 whitespace-nowrap">Tài khoản QC</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl px-6 py-4 text-white shadow-md min-w-[120px] text-center">
            <p className="text-2xl font-bold">1</p>
            <p className="text-sm opacity-90 whitespace-nowrap">Trang</p>
          </div>
        </div>
      </div>
    </div>
  );
}

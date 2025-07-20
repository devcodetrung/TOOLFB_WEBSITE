
'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 shadow-xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-white font-bold text-xl">
              <span className="bg-white/20 px-3 py-1 rounded-lg">TOOLFB.VN</span>
              <span className="ml-2 text-sm opacity-90">v1.7.9</span>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
              <a href="#" className="flex items-center space-x-2 text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-home-line text-sm"></i>
                </div>
                <span className="text-sm font-medium">Trang chủ</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-wallet-line text-sm"></i>
                </div>
                <span className="text-sm font-medium">Nạp tiền</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-shopping-cart-line text-sm"></i>
                </div>
                <span className="text-sm font-medium">Mua gói</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-play-circle-line text-sm"></i>
                </div>
                <span className="text-sm font-medium">Phiên hoạt động</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-history-line text-sm"></i>
                </div>
                <span className="text-sm font-medium">Lịch sử</span>
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-white/10 rounded-full px-4 py-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-white text-lg"></i>
              </div>
              <div className="text-white">
                <p className="text-sm font-medium">Trần Văn Trung</p>
                <p className="text-xs opacity-80">Admin</p>
              </div>
            </div>
            <button className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all">
              <i className="ri-settings-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

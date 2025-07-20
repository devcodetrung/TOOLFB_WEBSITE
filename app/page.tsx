
'use client';

import React from "react";

const icons = {
  home: (
    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0h4m-4 0a2 2 0 01-2-2v-6m6 8a2 2 0 002-2v-6m0 0l2 2"/></svg>
  ),
  nap: (
    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  ),
  mua: (
    <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-2.3L17 13M7 13V6h10v7"/></svg>
  ),
  session: (
    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg>
  ),
  history: (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  ),
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col font-[Inter,sans-serif] relative overflow-x-hidden">
      {/* SVG Pattern background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{opacity:0.08}}><defs><pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#a5b4fc" /></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" /></svg>

      {/* Dãy nút chức năng */}
      <div className="flex gap-4 px-8 py-6 flex-wrap justify-center z-10 relative">
        <button className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/30 hover:bg-white/50 text-purple-700 font-bold px-6 py-3 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          {icons.home} <span className="text-lg">Trang chủ</span>
        </button>
        <button className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/30 hover:bg-white/50 text-cyan-700 font-bold px-6 py-3 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          {icons.nap} <span className="text-lg">Nạp tiền</span>
        </button>
        <button className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/30 hover:bg-white/50 text-pink-700 font-bold px-6 py-3 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          {icons.mua} <span className="text-lg">Mua gói</span>
        </button>
        <button className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/30 hover:bg-white/50 text-yellow-700 font-bold px-6 py-3 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          {icons.session} <span className="text-lg">Phiên hoạt động</span>
        </button>
        <button className="flex items-center gap-2 bg-white/30 backdrop-blur border border-white/30 hover:bg-white/50 text-gray-700 font-bold px-6 py-3 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
          {icons.history} <span className="text-lg">Lịch sử</span>
        </button>
      </div>

      {/* Grid chính */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 px-8 py-8 w-full max-w-[1600px] mx-auto items-start z-10 relative">
        {/* Card user lớn */}
        <div className="col-span-1 xl:col-span-3 flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-x rounded-3xl shadow-2xl p-12 flex flex-col md:flex-row items-center gap-10 border-4 border-white/40 transition-all duration-500 hover:shadow-3xl hover:scale-105 backdrop-blur-lg">
            <div className="relative">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-blue-300/30" />
              <span className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-green-400 border-2 border-white flex items-center justify-center text-white text-base font-bold shadow animate-pulse">●</span>
            </div>
            <div className="flex-1 flex flex-col gap-3 text-white">
              <div className="flex items-center gap-4">
                <span className="font-extrabold text-4xl tracking-wide drop-shadow">Trần Văn Trung <span className="inline-block align-middle ml-2 bg-white/30 px-2 py-1 rounded-full text-xs font-bold text-blue-900">✔️</span></span>
                <span className="text-sm bg-white/20 px-4 py-2 rounded-full font-semibold">ID: 100054628290553</span>
              </div>
              <div className="flex gap-4 mt-2 flex-wrap">
                <span className="bg-white/20 px-5 py-2 rounded-full text-lg font-medium">🎂 01/11/2003</span>
                <span className="bg-white/20 px-5 py-2 rounded-full text-lg font-medium">1969 Bạn bè</span>
                <span className="bg-white/20 px-5 py-2 rounded-full text-lg font-medium">Nam Giới tính</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card thống kê nhỏ */}
        <div className="col-span-1 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <span className="text-purple-500 text-4xl font-extrabold">1</span>
              <span className="text-gray-700 mt-2 font-semibold text-lg">Tài khoản BM</span>
            </div>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <span className="text-indigo-500 text-4xl font-extrabold">3</span>
              <span className="text-gray-700 mt-2 font-semibold text-lg">Tài khoản QC</span>
            </div>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <span className="text-yellow-500 text-4xl font-extrabold">1</span>
              <span className="text-gray-700 mt-2 font-semibold text-lg">Trang</span>
            </div>
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 flex flex-col items-center transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <span className="text-pink-500 text-4xl font-extrabold">0</span>
              <span className="text-gray-700 mt-2 font-semibold text-lg">BM undefined</span>
            </div>
          </div>

          {/* Top BM */}
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-300/80 rounded-3xl shadow-xl p-7 mt-8 border border-yellow-200/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-lg">
            <div className="font-bold text-gray-700 mb-2 text-lg">Top BM</div>
            <div className="flex items-center gap-2">
              <span className="bg-yellow-400/90 text-white px-4 py-2 rounded-full font-bold text-base">NLM 2K5 5385422</span>
              <span className="text-gray-600 font-medium">626291923906565</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold">BM</span>
            </div>
          </div>

          {/* Thống kê BM (bảng số liệu) */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-white/40 shadow-xl p-8 mt-8 w-full max-w-md mx-auto transition-all duration-300 hover:shadow-2xl">
            <div className="font-bold text-gray-700 mb-4 text-lg tracking-wide text-center">Thống kê BM</div>
            <table className="w-full text-base">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="font-medium text-left pl-2">Loại</th>
                  <th className="font-medium text-center">Số lượng</th>
                  <th className="font-medium text-right pr-2">Tỉ lệ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50/60 transition rounded-xl">
                  <td className="flex items-center gap-2 py-3 pl-2">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#3b82f6" /></svg>
                    <span className="text-blue-700 font-semibold">BM Live</span>
                  </td>
                  <td className="text-center text-blue-700 font-bold text-lg">7</td>
                  <td className="text-right pr-2 text-blue-600 font-semibold">70%</td>
                </tr>
                <tr className="hover:bg-yellow-50/60 transition rounded-xl">
                  <td className="flex items-center gap-2 py-3 pl-2">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#fde047" /></svg>
                    <span className="text-yellow-600 font-semibold">BM Die XMDT</span>
                  </td>
                  <td className="text-center text-yellow-600 font-bold text-lg">2</td>
                  <td className="text-right pr-2 text-yellow-500 font-semibold">20%</td>
                </tr>
                <tr className="hover:bg-gray-50/60 transition rounded-xl">
                  <td className="flex items-center gap-2 py-3 pl-2">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="#a3a3a3" /></svg>
                    <span className="text-gray-600 font-semibold">BM Die VV</span>
                  </td>
                  <td className="text-center text-gray-600 font-bold text-lg">1</td>
                  <td className="text-right pr-2 text-gray-500 font-semibold">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Card Top TKQC, Top Page, Lịch sử cập nhật */}
        <div className="col-span-2 flex flex-col gap-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Top TKQC */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-7 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="font-bold text-gray-700 mb-2 text-lg">Top TKQC</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2"><span className="bg-gray-200 px-4 py-2 rounded-full font-bold text-base">Trần Văn Trung</span><span className="text-gray-600 font-medium">144932704332728</span><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold">Tổng tiêu</span></div>
                <div className="flex items-center gap-2"><span className="bg-red-200 px-4 py-2 rounded-full font-bold text-base">11112</span><span className="text-gray-600 font-medium">139632218073730</span><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold">Tổng tiêu</span></div>
                <div className="flex items-center gap-2"><span className="bg-yellow-200 px-4 py-2 rounded-full font-bold text-base">Agency 10</span><span className="text-gray-600 font-medium">703275328956768</span><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold">Tổng tiêu</span></div>
              </div>
            </div>
            {/* Top Page */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-7 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="font-bold text-gray-700 mb-2 text-lg">Top Page</div>
              <div className="flex items-center gap-2"><span className="bg-blue-200 px-4 py-2 rounded-full font-bold text-base">Dfxxhytgx</span><span className="text-gray-600 font-medium">745089030569842</span><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold">Like</span></div>
            </div>
          </div>

          {/* Lịch sử cập nhật */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-7 mt-8 transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="font-bold text-gray-700 mb-2 text-lg">Lịch sử cập nhật</div>
            <div className="flex flex-col gap-2 text-base text-gray-600 max-h-40 overflow-y-auto">
              <div><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mr-2">v1.6.7</span> - Fix lỗi backup BM</div>
              <div><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mr-2">v1.6.6</span> - Fix lỗi khôn cớ nhiều BM</div>
              <div><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mr-2">v1.6.5</span> - TUT sổ tay cho user TKQC</div>
              <div><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mr-2">v1.6.4</span> - Thêm kháng xác thực BM</div>
              <div><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mr-2">v1.6.3</span> - Fix BM die, thêm gửi email</div>
              <div><span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-semibold mr-2">v1.6.2</span> - Thêm tính năng kháng BM</div>
            </div>
          </div>

          {/* Thông tin tài khoản */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-7 mt-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 flex flex-col gap-4">
            <div className="font-bold text-gray-700 mb-2 text-lg text-center">Thông tin tài khoản</div>
            <div className="flex flex-col gap-3 text-base text-gray-600 max-h-40 overflow-y-auto pr-1">
              <div className="flex justify-between"><span>Trạng thái tài khoản</span><span className="text-green-600 font-bold">Hoạt động</span></div>
              <div className="flex justify-between"><span>Giới hạn chi tiêu ngày</span><span>1,320,237 VND</span></div>
              <div className="flex justify-between"><span>Ngưỡng hiện tại</span><span>0 VND</span></div>
              <div className="flex justify-between"><span>Tổng chi tiêu</span><span>0 VND</span></div>
              <div className="flex justify-between"><span>Số dư</span><span>0 VND</span></div>
              <div className="flex justify-between"><span>Quản trị viên ẩn</span><span>0</span></div>
              <div className="flex justify-between"><span>Loại tài khoản</span><span>Cá nhân</span></div>
              <div className="flex justify-between"><span>Múi giờ</span><span>Asia/Ho_Chi_Minh</span></div>
              <div className="flex justify-between"><span>Trìe thanh toán</span><span>-</span></div>
              <div className="flex justify-between"><span>Quyền tài khoản</span><span>ADMIN</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

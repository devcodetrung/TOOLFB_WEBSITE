"use client";
import React, { useState } from "react";

const actions = [
  { label: "Tạo BM", icon: (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
  ) },
  { label: "Backup BM", icon: (
    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
  ) },
  { label: "Nhận Link BM", icon: (
    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
  ) },
  { label: "Hủy lời mời", icon: (
    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
  ) },
  { label: "Đổi tên BM & Người Dùng", icon: (
    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M4 20h7"/></svg>
  ) },
  { label: "Cập nhật quyền", icon: (
    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
  ) },
  { label: "Kích hoạt Page", icon: (
    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
  ) },
  { label: "Kháng BM", icon: (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
  ) },
  { label: "Lấy link kháng BM", icon: (
    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
  ) },
  { label: "Tạo TKQC", icon: (
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
  ) },
  { label: "Thoát BM", icon: (
    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
  ) },
  { label: "Xóa QTV", icon: (
    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
  ) },
  { label: "Xóa đối tác", icon: (
    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
  ) },
  { label: "Xóa TK IG", icon: (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
  ) },
  { label: "Get ID BM", icon: (
    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ) },
  { label: "Get thông tin BM", icon: (
    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  ) },
];

export default function TKBMPage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [featureToggles, setFeatureToggles] = useState<{
    [key: string]: boolean;
    taoBM: boolean;
    backupBM: boolean;
    nhanLinkBM: boolean;
    huyLoiMoi: boolean;
    doiTenBM: boolean;
    capNhatQuyen: boolean;
    kichHoatPage: boolean;
    khangBM: boolean;
    layLinkKhangBM: boolean;
    taoTKQC: boolean;
    thoatBM: boolean;
    xoaQTV: boolean;
    xoaDoiTac: boolean;
    xoaTKIG: boolean;
    getIDBM: boolean;
    getThongTinBM: boolean;
  }>({
    taoBM: false,
    backupBM: false,
    nhanLinkBM: false,
    huyLoiMoi: false,
    doiTenBM: false,
    capNhatQuyen: false,
    kichHoatPage: false,
    khangBM: false,
    layLinkKhangBM: false,
    taoTKQC: false,
    thoatBM: false,
    xoaQTV: false,
    xoaDoiTac: false,
    xoaTKIG: false,
    getIDBM: false,
    getThongTinBM: false,
  });
  const handleToggle = (key: string) => {
    setFeatureToggles(t => ({ ...t, [key]: !t[key as keyof typeof t] }));
  };
  // Map label to key
  const keyMap: Record<string, string> = {
    "Tạo BM": "taoBM",
    "Backup BM": "backupBM",
    "Nhận Link BM": "nhanLinkBM",
    "Hủy lời mời": "huyLoiMoi",
    "Đổi tên BM & Người Dùng": "doiTenBM",
    "Cập nhật quyền": "capNhatQuyen",
    "Kích hoạt Page": "kichHoatPage",
    "Kháng BM": "khangBM",
    "Lấy link kháng BM": "layLinkKhangBM",
    "Tạo TKQC": "taoTKQC",
    "Thoát BM": "thoatBM",
    "Xóa QTV": "xoaQTV",
    "Xóa đối tác": "xoaDoiTac",
    "Xóa TK IG": "xoaTKIG",
    "Get ID BM": "getIDBM",
    "Get thông tin BM": "getThongTinBM",
  };
  const [showUserPopup, setShowUserPopup] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      {/* Thanh công cụ */}
      <div className="flex items-center gap-2 px-8 py-5 bg-white/90 border-b shadow-sm rounded-b-2xl">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded-lg shadow transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4l12 6-12 6V4z"/></svg> Bắt đầu
        </button>
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-5 py-2 rounded-lg shadow transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg> Import Data
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg></button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        <input className="ml-2 flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white" placeholder="Nhập từ khóa..." />
        <button className="ml-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg shadow flex items-center gap-1 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></button>
        <div className="flex items-center gap-2 ml-2">
          <span className="font-semibold text-gray-700">Luồng</span>
          <input type="number" className="w-16 border border-gray-200 rounded-lg px-2 py-1 bg-white" value={2} readOnly />
        </div>
        <div className="flex items-center gap-2 ml-2">
          <span className="font-semibold text-gray-700">Delay</span>
          <input type="number" className="w-16 border border-gray-200 rounded-lg px-2 py-1 bg-white" value={10} readOnly />
        </div>
        <button className="ml-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg shadow flex items-center gap-1 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4"/></svg> Hỗ trợ</button>
        <button className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow flex items-center gap-1 transition"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg> Cài đặt</button>
        {/* User info bên phải */}
        <div className="relative">
          <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-2 shadow-lg hover:shadow-xl transition-all min-w-[220px]" onClick={() => setShowUserPopup(v => !v)}>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full object-cover border-2 border-blue-400" />
            <div className="flex flex-col items-start text-left">
              <span className="font-bold text-gray-800 leading-tight">Trần Văn Trung</span>
              <span className="text-xs text-gray-500 leading-tight">100054628290553</span>
            </div>
            <svg className="w-5 h-5 text-gray-400 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          {showUserPopup && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border z-50 animate-fade-in flex flex-col overflow-hidden">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 h-16 w-full" />
              <div className="flex flex-col items-center -mt-10 mb-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" />
                <span className="font-bold text-lg mt-2">Trần Văn Trung</span>
                <span className="text-gray-500 text-sm">100054628290553</span>
              </div>
              <div className="px-6 py-2 flex flex-col gap-2 text-gray-700 text-[15px]">
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg> Email: <span className="ml-1">undefined</span></div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> Ngày sinh: 01/11/2003</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 20H4v-2a4 4 0 013-3.87"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 110 8 4 4 0 010-8z"/></svg> Bạn bè: 1959</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m0 0h-2m2 0h2"/><circle cx="12" cy="7" r="4"/></svg> Giới tính: Nam</div>
              </div>
              <div className="border-t mt-2">
                <button className="w-full flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition text-left"><svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg> Chuyển tài khoản</button>
                <button className="w-full flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition text-left"><svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg> Đăng xuất</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="flex-1 flex gap-6 px-6 py-4">
        {/* Bảng dữ liệu TK BM */}
        <div className="flex-1 overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold text-base">
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3">Tài khoản</th>
                <th className="px-4 py-3">ID BM</th>
                <th className="px-4 py-3">Process</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Loại BM</th>
                <th className="px-4 py-3">Quyền</th>
                <th className="px-4 py-3">BM</th>
                <th className="px-4 py-3">SL Account BM</th>
                <th className="px-4 py-3">SL Account Share</th>
                <th className="px-4 py-3">SL Đối tác</th>
                <th className="px-4 py-3">SL Page</th>
                <th className="px-4 py-3">SL IQ</th>
                <th className="px-4 py-3">SL Admin</th>
                <th className="px-4 py-3">Limit</th>
                <th className="px-4 py-3">Tiền tệ</th>
                <th className="px-4 py-3">Ngày Die</th>
                <th className="px-4 py-3">Trạng thái XML</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-blue-50 transition">
                <td className="px-4 py-3"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">LIVE</span></td>
                <td className="px-4 py-3 flex items-center gap-2 font-semibold text-gray-700">
                  <span className="bg-yellow-400 text-white px-2 py-1 rounded-full font-bold">NLM 2K5 5385422</span>
                </td>
                <td className="px-4 py-3 text-gray-700">626291923906565</td>
                <td className="px-4 py-3">626291923906565</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">BM1 - 10/06/2025</td>
                <td className="px-4 py-3">DEVELOPER</td>
                <td className="px-4 py-3">BM50</td>
                <td className="px-4 py-3">Total: 1 - Live: 1</td>
                <td className="px-4 py-3">Total: 1 - Live: 1</td>
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">0</td>
                <td className="px-4 py-3">6</td>
                <td className="px-4 py-3">1,320,237</td>
                <td className="px-4 py-3">VND</td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Slidebar bên phải */}
        <div className="relative">
          {/* Nút mở slidebar khi đang đóng */}
          {!showSidebar && (
            <button
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-lg p-2 z-50 hover:bg-blue-600 transition"
              onClick={() => setShowSidebar(true)}
              style={{ minWidth: 36, minHeight: 36 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          )}
          {showSidebar && (
            <div className="w-96 bg-white border-l p-6 flex flex-col gap-6 rounded-2xl shadow-xl h-full min-h-[500px] relative">
              {/* Nút đóng slidebar */}
              <button
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-lg p-2 z-50 hover:bg-blue-600 transition"
                onClick={() => setShowSidebar(false)}
                style={{ minWidth: 36, minHeight: 36 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              {/* Các chức năng */}
              {actions.map((item, idx) => {
                const toggleKey = keyMap[item.label] || "";
                return (
                  <div key={item.label} className="flex items-center justify-between bg-white border rounded-2xl p-4 shadow hover:shadow-lg transition cursor-pointer mb-2">
                    <span className="flex items-center gap-3 font-semibold text-gray-700">{item.icon}{item.label}</span>
                    <button
                      type="button"
                      className={`relative inline-flex h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${featureToggles[toggleKey] ? 'bg-blue-500' : 'bg-gray-300'}`}
                      aria-pressed={featureToggles[toggleKey]}
                      onClick={() => handleToggle(toggleKey)}
                    >
                      <span className="sr-only">Bật {item.label}</span>
                      <span
                        className={`inline-block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-300 ${featureToggles[toggleKey] ? 'translate-x-7' : 'translate-x-0'}`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Thống kê dưới cùng */}
      <div className="flex items-center justify-between px-8 py-3 bg-white/90 border-t text-sm rounded-t-2xl shadow-inner mt-4">
        <div className="flex gap-4 flex-wrap">
          <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">Tổng: <b>1</b></span>
          <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">Đã chọn: <b>0</b></span>
          <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">Bôi đen: <b>0</b></span>
          <span className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-1 font-semibold"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> Tiền tệ: MIX</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-green-600 text-white px-4 py-1 rounded-full font-bold">Live: 1</span>
          <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">Die XMDT: 0</span>
          <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">Die 3 dòng: 0</span>
          <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">Die VV: 0</span>
          <span className="bg-yellow-400 text-white px-4 py-1 rounded-full font-bold">ĐK 3 dòng: 0</span>
          <span className="bg-yellow-400 text-white px-4 py-1 rounded-full font-bold">Cần thanh toán: 0</span>
          <span className="bg-blue-400 text-white px-4 py-1 rounded-full font-bold">Đóng: 0</span>
          <span className="bg-blue-400 text-white px-4 py-1 rounded-full font-bold">Hold: 0</span>
        </div>
      </div>
    </div>
  );
} 
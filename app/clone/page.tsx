"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ClonePage() {
  // State cho panel Kháng XMDT
  const [khangXMDT, setKhangXMDT] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedLine, setSelectedLine] = useState("random");
  const [reason, setReason] = useState("Chúng tôi không biết lỗi gì, rất mong facebook xem");
  const [onlyOneRow, setOnlyOneRow] = useState(false);
  const [layLinkXMDT, setLayLinkXMDT] = useState(false);
  const [isCollapseKhang, setIsCollapseKhang] = useState(true);
  const [isCollapseLayLink, setIsCollapseLayLink] = useState(true);

  // State cho slidebar bên phải
  const [showSidebar, setShowSidebar] = useState(false);

  // State cho dropdown tùy chỉnh cột
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [columns, setColumns] = useState({
    avatar: true,
    name: true,
    uid: true,
    status: true,
  });
  const columnMenuRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (columnMenuRef.current && !columnMenuRef.current.contains(e.target as Node)) {
        setShowColumnMenu(false);
      }
    }
    if (showColumnMenu) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showColumnMenu]);

  // Khi bật switch thì mặc định mở rộng, khi tắt thì thu gọn (cho cả hai card)
  useEffect(() => {
    if (khangXMDT) setIsCollapseKhang(true);
    else setIsCollapseKhang(false);
  }, [khangXMDT]);
  useEffect(() => {
    if (layLinkXMDT) setIsCollapseLayLink(true);
    else setIsCollapseLayLink(false);
  }, [layLinkXMDT]);

  const [showUserPopup, setShowUserPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      {/* Thanh công cụ */}
      <div className="flex items-center gap-2 px-8 py-5 bg-white/90 border-b shadow-sm rounded-b-2xl flex-wrap">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded-lg shadow transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6 4l12 6-12 6V4z"/></svg> Bắt đầu
        </button>
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-5 py-2 rounded-lg shadow transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg> Import Data
        </button>
        <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/></svg> Bộ lọc
        </button>
        {/* Nút Tùy chỉnh cột */}
        <div className="relative">
          <button
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow transition font-semibold"
            onClick={() => setShowColumnMenu(v => !v)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
            Tùy chỉnh cột
          </button>
          {showColumnMenu && (
            <div ref={columnMenuRef} className="absolute left-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-50 p-3 flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={columns.avatar} onChange={e => setColumns(c => ({...c, avatar: e.target.checked}))} /> Ảnh đại diện
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={columns.name} onChange={e => setColumns(c => ({...c, name: e.target.checked}))} /> Tên
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={columns.uid} onChange={e => setColumns(c => ({...c, uid: e.target.checked}))} /> UID
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={columns.status} onChange={e => setColumns(c => ({...c, status: e.target.checked}))} /> Trạng thái
              </label>
            </div>
          )}
        </div>
        <div className="flex items-center bg-white border border-gray-200 rounded-lg px-2 py-1 ml-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <input className="ml-2 border-none outline-none bg-transparent text-gray-700 w-36" placeholder="Tìm kiếm UID, tên..." />
        </div>
        <a href="#" className="ml-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg shadow flex items-center gap-1 transition text-sm font-semibold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4"/></svg> Hỗ trợ
        </a>
        <button className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow flex items-center gap-1 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg> Cài đặt
        </button>
        <div className="flex-1" />
        {/* User info */}
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
        {/* Bảng tài khoản */}
        <div className="flex-1 overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold text-base">
                {columns.avatar || columns.name ? <th className="px-4 py-3">Tài khoản</th> : null}
                {columns.uid ? <th className="px-4 py-3">UID</th> : null}
                {columns.status ? <th className="px-4 py-3">Trạng thái</th> : null}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-blue-50 transition">
                {columns.avatar || columns.name ? (
                  <td className="px-4 py-3 flex items-center gap-2 font-semibold text-gray-700">
                    {columns.avatar && <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full object-cover border-2 border-blue-400" />}
                    {columns.name && "Trần Văn Trung"}
                  </td>
                ) : null}
                {columns.uid ? <td className="px-4 py-3 text-gray-700">100054628290553</td> : null}
                {columns.status ? (
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Đang hoạt động</span>
                  </td>
                ) : null}
              </tr>
            </tbody>
          </table>
          {/* Thống kê dưới bảng */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/90 border-t text-sm rounded-b-2xl shadow-inner mt-1">
            <div className="flex gap-4 flex-wrap">
              <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">Tổng: <b>1</b></span>
              <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">Đã chọn: <b>0</b></span>
              <span className="bg-gray-200 px-3 py-1 rounded-full font-semibold">Bôi đen: <b>0</b></span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-green-600 text-white px-4 py-1 rounded-full font-bold">LIVE: 1</span>
              <span className="bg-red-600 text-white px-4 py-1 rounded-full font-bold">DIE: 0</span>
            </div>
          </div>
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
              {/* Card Lấy Link XMDT */}
              <div className="bg-white border rounded-2xl p-5 flex flex-col gap-3 shadow mb-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-600 text-lg">Lấy Link XMDT</span>
                  <button
                    type="button"
                    className={`relative inline-flex h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${layLinkXMDT ? 'bg-blue-500' : 'bg-gray-300'}`}
                    aria-pressed={layLinkXMDT}
                    onClick={() => setLayLinkXMDT(v => !v)}
                  >
                    <span className="sr-only">Bật Lấy Link XMDT</span>
                    <span
                      className={`inline-block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-300 ${layLinkXMDT ? 'translate-x-7' : 'translate-x-0'}`}
                    />
                  </button>
                </div>
                {layLinkXMDT && isCollapseLayLink && (
                  <div className="text-gray-500 text-base px-2 py-2">Nội dung Lấy Link XMDT (bạn có thể thêm hướng dẫn, mô tả, hoặc các thao tác liên quan ở đây).</div>
                )}
              </div>
              {/* Card Kháng XMDT */}
              <div className="bg-white border rounded-2xl p-5 flex flex-col gap-5 shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-blue-600 text-lg">Kháng XMDT</span>
                  <button
                    type="button"
                    className={`relative inline-flex h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${khangXMDT ? 'bg-blue-500' : 'bg-gray-300'}`}
                    aria-pressed={khangXMDT}
                    onClick={() => setKhangXMDT(v => !v)}
                  >
                    <span className="sr-only">Bật Kháng XMDT</span>
                    <span
                      className={`inline-block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-300 ${khangXMDT ? 'translate-x-7' : 'translate-x-0'}`}
                    />
                  </button>
                </div>
                {khangXMDT && isCollapseKhang && (
                  <>
                    <div className="flex flex-col gap-3">
                      <label className="font-semibold text-gray-700">Chọn phối ảnh:</label>
                      <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" onChange={e => setSelectedFile(e.target.files?.[0] || null)} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-gray-700">Chọn dòng:</label>
                      <select className="border rounded-lg px-3 py-2" value={selectedLine} onChange={e => setSelectedLine(e.target.value)}>
                        <option value="dong1">Dòng 1</option>
                        <option value="dong2">Dòng 2</option>
                        <option value="dong3">Dòng 3</option>
                        <option value="random">Random</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-gray-700">Nội dung kháng:</label>
                      <textarea className="border rounded-lg px-3 py-2 resize-none" rows={3} value={reason} onChange={e => setReason(e.target.value)} />
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm text-gray-600">Chỉ chọn dòng</span>
                      <button
                        type="button"
                        className={`relative inline-flex h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-300 focus:outline-none ${onlyOneRow ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-pressed={onlyOneRow}
                        onClick={() => setOnlyOneRow(v => !v)}
                      >
                        <span className="sr-only">Chỉ chọn dòng</span>
                        <span
                          className={`inline-block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-300 ${onlyOneRow ? 'translate-x-7' : 'translate-x-0'}`}
                        />
                      </button>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-5 py-2 rounded-lg shadow transition mt-2">Lấy link XMDT</button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
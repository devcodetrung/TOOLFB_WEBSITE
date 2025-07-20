import Link from "next/link";

const Navbar = () => (
  <nav className="w-full bg-[#3b59ea] text-white flex items-center justify-between px-8 py-3 shadow-md">
    {/* Menu chính */}
    <div className="flex items-center gap-8">
      <MenuLink href="/" label="HOME" />
      <MenuLink href="/clone" label="CLONE" />
      <MenuLink href="/tkqc" label="TKQC" />
      <MenuLink href="/tkbm" label="TK BM" />
      <MenuLink href="/page" label="PAGE" />
    </div>
    {/* User info */}
    <div className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl px-5 py-2 shadow">
      <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
        {/* User icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Trần Văn Trung</span>
        <span className="text-sm text-gray-100">Admin</span>
      </div>
      <button className="ml-2 p-2 rounded-full hover:bg-blue-500 transition">
        {/* Settings icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  </nav>
);

function MenuLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-md font-semibold transition-all duration-200 hover:bg-yellow-300 hover:text-gray-900"
    >
      {label}
    </Link>
  );
}

export default Navbar; 
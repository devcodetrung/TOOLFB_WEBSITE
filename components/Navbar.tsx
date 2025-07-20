import Link from "next/link";

const Navbar = () => (
  <nav className="w-full bg-[#3b59ea] text-white flex justify-center items-center px-4 py-3 shadow-md">
    {/* Menu chính */}
    <div className="flex items-center gap-8">
      <MenuLink href="/" label="HOME" />
      <MenuLink href="/clone" label="CLONE" />
      <MenuLink href="/tkqc" label="TKQC" />
      <MenuLink href="/tkbm" label="TK BM" />
      <MenuLink href="/page" label="PAGE" />
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
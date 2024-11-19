import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-b-dark p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-t-light text-3xl font-montserrat font-bold">
          Logo
        </Link>

        {/* เมนูปกติ */}
        <div className="hidden lg:flex space-x-14 items-center">
          <Link to="/" className="text-t-light font-montserrat font-bold">
            แนะนำ
          </Link>
          <Link to="#" className="text-t-light font-montserrat font-bold">
            ข่าวสาร
          </Link>
          <Link to="#" className="text-t-light font-montserrat font-bold">
            ประเมิณคุณภาพปลากัด
          </Link>
          <Link to="#" className="text-t-light font-montserrat font-bold">
            การประกวด
          </Link>
          <Link to="#" className="text-t-light font-montserrat font-bold">
            ประวัติ
          </Link>
          <Link to="#" className="text-t-light font-montserrat font-bold">
            เข้าสู่ระบบ
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-t-light text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* เมนู Ham */}
      <div
        className={`fixed top-0 right-0 h-full bg-b-dark text-t-light w-1/2 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* ปุ่มปิดเมนู */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✖
        </button>

        {/* รายการเมนูใน Ham */}
        <div className="mt-16 flex flex-col text-xl space-y-10 items-center">
          <Link
            to="/"
            className="text-t-light font-montserrat font-bold"
            onClick={toggleMenu}
          >
            แนะนำ
          </Link>
          <Link
            to="#"
            className="text-t-light font-montserrat font-bold"
            onClick={toggleMenu}
          >
            ข่าวสาร
          </Link>
          <Link
            to="#"
            className="text-t-light font-montserrat font-bold"
            onClick={toggleMenu}
          >
            ประเมิณคุณภาพปลากัด
          </Link>
          <Link
            to="#"
            className="text-t-light font-montserrat font-bold"
            onClick={toggleMenu}
          >
            การประกวด
          </Link>
          <Link
            to="#"
            className="text-t-light font-montserrat font-bold"
            onClick={toggleMenu}
          >
            ประวัติ
          </Link>
          <Link
            to="#"
            className="text-t-light font-montserrat font-bold"
            onClick={toggleMenu}
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

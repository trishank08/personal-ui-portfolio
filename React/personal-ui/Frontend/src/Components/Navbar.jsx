
import React, { useState } from 'react'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="relative z-50 m-3 p-3 bg-white rounded-3xl md:rounded-full shadow-lg">
      <div className="flex justify-between items-center">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 min-w-0">
          <img
            className="w-10 h-10 rounded-lg object-cover transition-transform duration-700 hover:rotate-[350deg] shrink-0"
            src="https://tse3.mm.bing.net/th/id/OIP.loj9IG1bgJFRnjkFlXEcCgHaFj?r=0&pid=Api&h=220&P=0"
            alt="Logo"
          />
          <h3 className="font-bold text-sm sm:text-base whitespace-nowrap">
            Trishank Rahangdale
          </h3>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          <a href="#home" className="hover:text-gray-500 transition">Home</a>
          <a href="#casestudy" className="hover:text-gray-500 transition">Case Studies</a>
          <a href="#about" className="hover:text-gray-500 transition">About Me</a>
          <a
            href="https://drive.google.com/file/d/15IOeu8upcI9Yksq_SrkjYXQCLW3xwUMJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/trishank08/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gray-100 transition"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 pt-3 mt-3 border-t border-gray-200">
          <a href="#home" onClick={closeMenu} className="p-3 rounded-xl hover:bg-gray-100 transition">Home</a>
          <a href="#casestudy" onClick={closeMenu} className="p-3 rounded-xl hover:bg-gray-100 transition">Case Studies</a>
          <a href="#about" onClick={closeMenu} className="p-3 rounded-xl hover:bg-gray-100 transition">About Me</a>
          <a
            href="https://drive.google.com/file/d/15IOeu8upcI9Yksq_SrkjYXQCLW3xwUMJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="p-3 rounded-xl hover:bg-gray-100 transition"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/trishank08/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="p-3 rounded-xl hover:bg-gray-100 transition"
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar

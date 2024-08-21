import { useState } from 'react';
import Link from 'next/link';
import LoginModal from './LoginModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-heading font-bold text-primary">
          <Link href="/">MKE SPIN</Link>
        </div>

        {/* Navigation Links and Login Button */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-lg text-primary hover:text-secondary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg text-primary hover:text-secondary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-lg text-primary hover:text-secondary transition">
                Events
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className="text-lg text-primary hover:text-secondary transition">
                Sponsors
              </Link>
            </li>
          </ul>

          <button
            onClick={handleModalToggle}
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition"
          >
            Login
          </button>
        </div>
      </nav>
      {isModalOpen && <LoginModal handleClose={handleModalToggle} />}
    </header>
  );
};

export default Header;

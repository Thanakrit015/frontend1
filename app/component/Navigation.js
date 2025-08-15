'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ตรวจสอบ login state
  useEffect(() => {
    const loginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginState === 'true');
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => document.getElementById('desktopSearchInput')?.focus(), 0);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/'; // รีหน้าเว็บอัตโนมัติ
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <span className={styles.logo}>MyBrand</span>
        </Link>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
          type="button"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navbarLinks} ${isMenuOpen ? styles.active : ''}`} id="navbarLinks">
          <ul className={styles.navbarNav}>
            <li className={styles.navItem}>
              <Link
                href="/"
                className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/about"
                className={`${styles.navLink} ${pathname === '/about' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >About</Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/contact"
                className={`${styles.navLink} ${pathname === '/contact' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/service"
                className={`${styles.navLink} ${pathname === '/service' ? styles.activeLink : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >Service</Link>
            </li>
          </ul>

          {/* Mobile Search Form */}
          <div className={styles.searchFormMobile}>
            <input type="text" placeholder="Search..." className={styles.searchInputMobile} />
            <button className={styles.searchButtonMobile} type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Desktop Search + Buttons */}
        <div className={styles.navbarActions}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              className={`${styles.searchInput} ${isSearchActive ? styles.active : ''}`}
              id="desktopSearchInput"
            />
            <button className={styles.searchIconBtn} onClick={handleSearchToggle}>
              <i className="fas fa-search"></i>
            </button>
          </div>

          {!isLoggedIn && (
            <>
              <Link href="/login" className={styles.loginButton}>LOGIN</Link>
              <Link href="/register" className={styles.registerButton}>REGISTER</Link>
            </>
          )}

          {isLoggedIn && (
            <button onClick={handleLogout} className={styles.loginButton}>
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

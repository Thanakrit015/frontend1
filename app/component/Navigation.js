'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaUserShield } from 'react-icons/fa';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loginState = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginState === 'true');
  }, []);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      router.push(`/service?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchActive(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };
  const handleAdminAccess = () => {
    const password = prompt('กรุณาใส่รหัสผ่าน Admin:');
    if (password === 'tnk0612') {
      router.push('/admin/users');
    } else if (password !== null) {
      alert('รหัสผ่านไม่ถูกต้อง');
    }
  };
  const showTooltip = (e) => {
    setTooltipVisible(true);
    setTooltipPos({ x: e.clientX + 10, y: e.clientY + 10 });
  };
  const hideTooltip = () => setTooltipVisible(false);

  return (
    <>
      <style jsx global>{`
        /* --- Navbar --- */
        .navbar { background-color: #1a1a1a; box-shadow: 0 4px 15px rgba(0,0,0,0.4); padding: 15px 0; position: sticky; top:0; z-index:1000; width:100%; }
        .container { max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; padding:0 20px; height:60px; }
        .brand { color:#FF69B4; font-size:1.8rem; font-weight:700; text-decoration:none; letter-spacing:1px; transition:color 0.3s; display:flex; align-items:center; }
        .brand:hover { color:#FF4081; }
        .navbarLinks { display:flex; align-items:center; margin-left:auto; }
        .navbarNav { display:flex; list-style:none; margin:0; padding:0; }
        .navItem { margin:0 5px; }
        .navLink { color:#f8f8f8; text-decoration:none; font-size:1.05rem; font-weight:600; padding:10px 18px; border-radius:8px; transition:all 0.3s; position:relative; overflow:hidden; display:block; }
        .navLink::before { content:''; position:absolute; bottom:0; left:0; width:100%; height:3px; background-color:#FF69B4; transform:translateX(-100%); transition:transform 0.3s ease-out; }
        .navLink:hover { color:#FF69B4; background-color:rgba(255,105,180,0.1); }
        .navLink:hover::before { transform:translateX(0); }
        .activeLink { color:#FF69B4 !important; background-color:rgba(255,105,180,0.2) !important; font-weight:700 !important; }
        .activeLink::before { transform:translateX(0) !important; }

        .navbarActions { display:flex; align-items:center; gap:15px; }
        .searchContainer { display:flex; align-items:center; position:relative; }
        .searchInput { width:0; padding:8px 15px; border:2px solid #FF69B4; border-radius:25px; background-color:#2b2b2b; color:#fff; font-size:0.95rem; transition:all 0.4s ease-in-out; opacity:0; pointer-events:none; }
        .searchInput.active { width:220px; opacity:1; pointer-events:auto; }
        .searchInput::placeholder { color:#a0a0a0; }
        .searchIconBtn { background-color:#FF69B4; border:none; border-radius:50%; color:#1a1a1a; width:40px; height:40px; display:flex; justify-content:center; align-items:center; cursor:pointer; font-size:1.1rem; transition:background-color 0.3s, transform 0.3s; }
        .searchIconBtn:hover { background-color:#FF4081; transform:scale(1.05); }

        /* --- Login / Register Buttons --- */
        .loginButton, .registerButton {
          background-color:transparent;
          color:#FF69B4;
          border:2px solid #FF69B4;
          padding:8px 18px;
          border-radius:25px;
          font-weight:600;
          font-size:0.95rem;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          transition:all 0.3s;
          text-decoration:none; /* ลบเส้นใต้ */
        }
        .loginButton:hover, .registerButton:hover { background-color:#FF69B4; color:#1a1a1a; transform:translateY(-2px); text-decoration:none; }

        /* --- Admin Button --- */
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .adminCircleButton { 
          position:fixed; top:20px; right:20px; width:50px; height:50px; border-radius:50%; 
          background:linear-gradient(135deg,#ff69b4,#c44384); border:none; color:#fff; font-size:24px; cursor:pointer; 
          display:flex; align-items:center; justify-content:center; box-shadow:0 4px 15px rgba(255,105,180,0.4); transition: box-shadow 0.3s; z-index:10000;
          animation: pulse 2s infinite;
        }
        .adminCircleButton:hover { transform:scale(1.15); box-shadow:0 6px 20px rgba(255,105,180,0.6); }

        .tooltip { position:fixed; background-color:rgba(0,0,0,0.85); color:#fff; padding:6px 12px; border-radius:6px; font-size:0.85rem; pointer-events:none; white-space:nowrap; z-index:10001; transition:opacity 0.2s; }

        /* --- Responsive --- */
        @media(max-width:992px) {
          .navbarLinks { flex-direction:column; width:100%; text-align:center; background-color:#1a1a1a; padding:20px 0; border-top:1px solid rgba(255,255,255,0.1); position:absolute; top:90px; left:0; transform:translateY(-100%); opacity:0; pointer-events:none; transition: transform 0.4s, opacity 0.4s; box-shadow:0 8px 20px rgba(0,0,0,0.5); }
          .navbarLinks.active { transform:translateY(0); opacity:1; pointer-events:auto; }
          .navbarNav { flex-direction:column; width:100%; }
          .navItem { margin:5px 0; width:100%; }
          .navLink { padding:12px 20px; width:calc(100%-40px); margin:0 auto; }
          .menuToggle { display:flex; }
          .navbarActions { display:none; }
          .searchIconBtn { display:flex; margin-left:auto; margin-right:15px; }
          .searchContainer { display:flex; order:2; margin-right:0; }
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <Link href="/" className="brand">Nine Thanakrit</Link>

          <div className={`navbarLinks ${isMenuOpen ? 'active':''}`}>
            <ul className="navbarNav">
              <li className="navItem"><Link href="/" className={`navLink ${pathname==='/'?'activeLink':''}`}>Home</Link></li>
              <li className="navItem"><Link href="/about" className={`navLink ${pathname==='/about'?'activeLink':''}`}>About</Link></li>
              <li className="navItem"><Link href="/contact" className={`navLink ${pathname==='/contact'?'activeLink':''}`}>Contact</Link></li>
              <li className="navItem"><Link href="/service" className={`navLink ${pathname==='/service'?'activeLink':''}`}>Service</Link></li>
            </ul>
          </div>

          <div className="navbarActions">
            <div className="searchContainer">
              <input type="text" placeholder="Search..." className={`searchInput ${isSearchActive?'active':''}`} value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter') handleSearchSubmit();}} />
              <button className="searchIconBtn" onClick={()=>{ if(!isSearchActive) setIsSearchActive(true); else handleSearchSubmit(); }}>🔍</button>
            </div>
            {!isLoggedIn && <>
              <Link href="/login" className="loginButton">LOGIN</Link>
              <Link href="/register" className="registerButton">REGISTER</Link>
            </>}
            {isLoggedIn && <button className="loginButton" onClick={handleLogout}>LOGOUT</button>}
          </div>
        </div>
      </nav>

      <button className="adminCircleButton" onClick={handleAdminAccess} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        <FaUserShield />
      </button>
      {tooltipVisible && <div className="tooltip" style={{top:tooltipPos.y, left:tooltipPos.x}}>Admin Access</div>}
    </>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();
  const [formData,setFormData] = useState({username:'',password:''});
  const [showPwd,setShowPwd] = useState(false);

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev=>({...prev,[name]:value}));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.password){
      Swal.fire({icon:'warning', title:'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน', background:'#1a1a1a', color:'#ff69b4'});
      return;
    }

    Swal.fire({title:'กำลังเข้าสู่ระบบ...', allowOutsideClick:false, background:'#1a1a1a', color:'#ff69b4', didOpen:()=>Swal.showLoading()});
    await new Promise(res=>setTimeout(res,1000));
    Swal.close();

    if(typeof window!=='undefined') localStorage.setItem('isLoggedIn','true');

    Swal.fire({icon:'success', title:'เข้าสู่ระบบสำเร็จ!', background:'#1a1a1a', color:'#ff69b4', timer:1500, showConfirmButton:false});

    router.replace('/');
    setTimeout(()=>window.location.reload(),500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>🔐 เข้าสู่ระบบ</h2>
        <form onSubmit={handleLogin}>
          <div className="input-icon">
            <span>👤</span>
            <input type="text" name="username" placeholder=" " value={formData.username} onChange={handleInputChange} required/>
            <label>ชื่อผู้ใช้</label>
          </div>

          <div className="input-icon">
            <span>🔒</span>
            <input type={showPwd?'text':'password'} name="password" placeholder=" " value={formData.password} onChange={handleInputChange} required/>
            <label>รหัสผ่าน</label>
            <span className="toggle-pwd" onClick={()=>setShowPwd(!showPwd)}>{showPwd?'🙈':'👁️'}</span>
          </div>

          <button type="submit">🚀 Login</button>
        </form>
      </div>

      <style jsx>{`
        .auth-page {display:flex; justify-content:center; align-items:center; min-height:100vh; background:radial-gradient(circle at 20% 20%, #ff69b4 0%, #1a1a1a 80%); font-family:Poppins,sans-serif;}
        .auth-container {width:100%; max-width:400px; padding:40px 30px; background:rgba(30,30,30,0.85); border-radius:25px; border:1px solid rgba(255,105,180,0.3); box-shadow:0 15px 30px rgba(255,105,180,0.2), inset 0 1px 0 rgba(255,105,180,0.1);}
        .auth-container h2 {text-align:center; color:#ff69b4; margin-bottom:30px;}
        .input-icon {position:relative; margin-bottom:25px;}
        .input-icon span:first-child {position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#ff69b4;}
        .input-icon input {width:100%; padding:14px 14px 14px 45px; border-radius:12px; border:1px solid rgba(255,105,180,0.3); background:#1e1e1e; color:#fff;}
        .input-icon label {position:absolute; left:45px; top:50%; transform:translateY(-50%); color:rgba(255,105,180,0.7); font-size:15px; pointer-events:none; transition:0.3s;}
        .input-icon input:focus + label, .input-icon input:not(:placeholder-shown) + label {top:-8px; font-size:12px; color:#ff69b4; background:#1e1e1e; padding:0 5px; border-radius:3px;}
        .toggle-pwd {position:absolute; right:14px; top:50%; transform:translateY(-50%); cursor:pointer; color:#ff69b4;}
        button {width:100%; padding:14px; font-weight:700; border-radius:20px; border:2px solid #ff69b4; background: rgba(255,105,180,0.1); color:#ff69b4; cursor:pointer; transition:0.3s;}
        button:hover {background: rgba(255,105,180,0.3); color:#fff; transform: scale(1.03); box-shadow:0 0 15px rgba(255,105,180,0.6);}
      `}</style>
    </div>
  );
}

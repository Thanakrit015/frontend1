'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { use } from 'react';

export default function EditUserPage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    address: '',
    sex: '',
    birthday: '',
  });

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true);
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        if (!res.ok) throw new Error('Failed to fetch user data');
        const data = await res.json();

        setFormData({
          firstname: data.firstname || 'นาย',
          fullname: data.fullname || '',
          lastname: data.lastname || '',
          username: data.username || '',
          password: data.password || '',
          address: data.address || '',
          sex: data.sex || '',
          birthday: data.birthday ? data.birthday.slice(0, 10) : '',
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถโหลดข้อมูลผู้ใช้ได้',
          confirmButtonColor: '#ff6b6b',
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...formData }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'ไม่สามารถอัปเดตข้อมูลได้');
      }

      await Swal.fire({
        icon: 'success',
        title: 'สำเร็จ!',
        text: 'อัปเดตข้อมูลเรียบร้อยแล้ว',
        showConfirmButton: false,
        timer: 1500,
      });

      router.push('/admin/users');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: error.message || 'กรุณาลองใหม่อีกครั้ง',
        confirmButtonColor: '#ff6b6b',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-wrapper">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>กำลังโหลดข้อมูล...</p>
        </div>
        <style jsx>{`
          .loading-wrapper {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #2c003e 0%, #ff6eb4 100%);
          }
          .loading-spinner { text-align: center; color: white; }
          .spinner {
            width: 50px; height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="card">
        <h2 className="card-title">แก้ไขข้อมูลสมาชิก</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <label>คำนำหน้า</label>
          <select name="firstname" value={formData.firstname} onChange={handleChange} required>
            <option value="">-- เลือก --</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>

          <label>ชื่อจริง</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />

          <label>นามสกุล</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />

          <label>ชื่อเล่น</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />

          <label>รหัสผ่าน</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>ที่อยู่</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />

          <label>เพศ</label>
          <select name="sex" value={formData.sex} onChange={handleChange}>
            <option value="">-- เลือก --</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>

          <label>วันเกิด</label>
          <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />

          <div className="button-container">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #2c003e 0%, #ff6eb4 100%);
          padding: 20px;
        }
        .card {
          background: #1a001f;
          padding: 32px;
          border-radius: 16px;
          width: 100%;
          max-width: 600px;
          color: #fff;
          box-shadow: 0 0 40px rgba(255,110,180,0.3);
        }
        .card-title {
          text-align: center;
          font-size: 28px;
          margin-bottom: 24px;
          color: #ff6eb4;
        }
        .form-container label { display: block; margin-top: 16px; margin-bottom: 8px; font-weight: 600; }
        .form-container input, .form-container select {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ff6eb4;
          background: #2c003e;
          color: #fff;
        }
        .form-container input:focus, .form-container select:focus {
          outline: none;
          border-color: #ff99cc;
          box-shadow: 0 0 10px rgba(255,110,180,0.5);
        }
        .button-container {
          text-align: center;
          margin-top: 24px;
        }
        .button-container button {
          padding: 12px 32px;
          font-size: 16px;
          border: none;
          border-radius: 50px;
          background: linear-gradient(135deg, #ff6eb4 0%, #ff1493 100%);
          color: #fff;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .button-container button:hover { transform: translateY(-2px); }
      `}</style>
    </div>
  );
}

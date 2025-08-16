'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    fullname: '',
    lastname: '',
    address: '',
    sex: '',
    birthdate: '',
    phone: '',
    accept: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.accept) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณายอมรับเงื่อนไขการใช้งาน',
        background: '#1a1a1a',
        color: '#ff69b4'
      })
      return
    }

    try {
      const hashedPassword = formData.password // placeholder

      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: hashedPassword,
          firstname: formData.firstname,
          fullname: formData.fullname,
          lastname: formData.lastname,
          address: formData.address,
          sex: formData.sex,
          birthday: formData.birthdate,
          phone: formData.phone,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        await Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
          timer: 2000,
          showConfirmButton: false,
          background: '#1a1a1a',
          color: '#ff69b4'
        })

        setFormData({
          username: '',
          password: '',
          firstname: '',
          fullname: '',
          lastname: '',
          address: '',
          sex: '',
          birthdate: '',
          phone: '',
          accept: false,
        })

        router.push('/')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: data.message || 'ไม่สามารถสมัครสมาชิกได้',
          background: '#1a1a1a',
          color: '#ff69b4'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
        background: '#1a1a1a',
        color: '#ff69b4'
      })
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="firstname">คำนำหน้าชื่อ</label>
            <select
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              required
            >
              <option value="">-- เลือก --</option>
              <option value="นาย">นาย</option>
              <option value="นางสาว">นางสาว</option>
              <option value="นาง">นาง</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="ตั้งรหัสผ่าน"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={6}
            />
          </div>

          <div className="input-group">
            <label htmlFor="username">ชื่อเล่น</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="เช่น สมชาย"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="fullname">ชื่อจริง</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="กรอกชื่อจริง"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastname">นามสกุล</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="กรอกนามสกุล"
              value={formData.lastname}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">ที่อยู่</label>
            <textarea
              id="address"
              name="address"
              placeholder="กรอกที่อยู่"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              required
            />
          </div>

          <div className="input-group">
            <label>เพศ</label>
            <div className="gender-options">
              {['ชาย', 'หญิง', 'อื่นๆ'].map((g) => (
                <label key={g} className="radio-label">
                  <input
                    type="radio"
                    name="sex"
                    value={g}
                    checked={formData.sex === g}
                    onChange={handleInputChange}
                    required
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="birthdate">วันเกิด</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">เบอร์โทรศัพท์</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="08x-xxx-xxxx"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="[0-9]{9,10}"
              title="กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"
            />
          </div>

          <div className="input-group checkbox-group">
            <input
              type="checkbox"
              id="accept"
              name="accept"
              checked={formData.accept}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="accept" className="checkbox-label">
              ฉันยอมรับเงื่อนไขการใช้งาน
            </label>
          </div>

          <button type="submit" className="btn-submit">
            สมัครสมาชิก
          </button>
        </form>

        <div className="back-home-container">
          <button
            type="button"
            className="btn-back-home"
            onClick={() => router.push('/')}
          >
            กลับหน้าหลัก
          </button>
        </div>
      </div>

      <style jsx>{`
  .register-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    overflow: hidden;
    position: relative;
  }

  /* Animated Gradient Background */
  .register-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(120deg, #1a1a1a, #ff69b4, #2a2a2a, #ff1493);
    background-size: 400% 400%;
    animation: gradientMove 15s ease infinite;
    z-index: -1;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .register-container {
    background: rgba(34, 34, 34, 0.85);
    border-radius: 16px;
    padding: 40px;
    max-width: 480px;
    width: 100%;
    box-shadow: 0 0 30px rgba(255, 105, 180, 0.4);
    backdrop-filter: blur(12px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .register-container:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.6);
  }

  h2 {
    text-align: center;
    color: #ff69b4;
    font-weight: 700;
    margin-bottom: 30px;
    text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
  }

  .input-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    margin-bottom: 6px;
    font-weight: 500;
    color: #ff9ed9;
  }

  input[type='text'],
  input[type='password'],
  input[type='tel'],
  input[type='date'],
  select,
  textarea {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #ff69b4;
    background: #2a2a2a;
    color: #fff;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 6px rgba(255, 105, 180, 0.3);
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #ff69b4;
    box-shadow: 0 0 12px #ff69b4;
    transform: scale(1.02);
  }

  .gender-options {
    display: flex;
    gap: 30px;
    margin-top: 4px;
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ff9ed9;
    cursor: pointer;
    transition: transform 0.2s ease, color 0.3s ease;
  }

  input[type='radio'] {
    accent-color: #ff69b4;
    width: 20px;
    height: 20px;
  }

  .radio-label:hover {
    transform: scale(1.1);
    color: #ff69b4;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }

  .checkbox-label {
    color: #ff9ed9;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    accent-color: #ff69b4;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
  }

  input[type='checkbox']:hover {
    transform: scale(1.2);
    box-shadow: 0 0 6px #ff69b4;
  }

  .btn-submit {
    background: linear-gradient(135deg, #ff69b4, #c44384);
    padding: 14px;
    border-radius: 22px;
    border: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 10px;
    box-shadow: 0 0 10px #ff69b4;
  }

  .btn-submit:hover {
    background: linear-gradient(135deg, #ff1493, #ff69b4);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 0 20px #ff69b4;
  }

  .back-home-container {
    margin-top: 20px;
    text-align: center;
  }

  .btn-back-home {
    background: #2a2a2a;
    border: 1px solid #ff69b4;
    color: #ff69b4;
    padding: 10px 24px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: 0 0 8px #ff69b4;
  }

  .btn-back-home:hover {
    background: #ff69b4;
    color: #1a1a1a;
    transform: scale(1.05);
    box-shadow: 0 0 18px #ff69b4;
  }
`}</style>

    </div>
  )
}

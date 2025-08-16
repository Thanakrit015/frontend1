'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      icon: 'success',
      title: 'ข้อความส่งเรียบร้อย!',
      text: 'เราจะติดต่อกลับโดยเร็วที่สุด 😊',
      background: '#1a1a1a',
      color: '#ff69b4'
    })
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* Header / Hero */}
      <header className="hero">
        <img src="images/profile.jpg" alt="Profile" className="profile-img" />
        <h1>Nine Thanakrit</h1>
        <p>Web Developer | Fast Cars Enthusiast</p>
      </header>

      {/* Contact Info */}
      <section className="info">
        <div><strong>Email:</strong> bigfather.015@gmail.com</div>
        <div><strong>Phone:</strong> 090-674-2723</div>
        <div className="socials">
          <a href="https://mail.google.com/" target="_blank">Email</a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="form-section">
        <h2>Send Feed Back</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="ชื่อของคุณ" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="อีเมลของคุณ" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="ข้อความ" value={formData.message} onChange={handleChange} required rows={5} />
          <button type="submit">ส่งข้อความ</button>
        </form>
      </section>

      {/* About Me */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          ผมเป็น Web Developer ที่หลงใหลในความเร็วของการขับรถและชื่นชอบหนัง The Fast เป็นแรงบันดาลใจที่นำมาทำ Website นี้ขึ้นมา
        </p>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        .contact-page {
          font-family: 'Poppins', sans-serif;
          background: #121212;
          color: #fff;
          padding: 40px 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero {
          text-align: center;
          margin-bottom: 50px;
        }

        .profile-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
          border: 3px solid #ff69b4;
        }

        h1 {
          font-size: 36px;
          color: #ff69b4;
          margin-bottom: 8px;
        }

        p {
          font-size: 16px;
          color: #ccc;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 40px;
          text-align: center;
        }

        .socials {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .socials a {
          color: #ff69b4;
          text-decoration: none;
          font-weight: 600;
        }

        .form-section {
          background: #1a1a1a;
          padding: 30px;
          border-radius: 15px;
          margin-bottom: 40px;
        }

        .form-section h2 {
          color: #ff69b4;
          margin-bottom: 20px;
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        input, textarea {
          padding: 12px 15px;
          border-radius: 10px;
          border: 1px solid #ff69b4;
          background: #121212;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          border-color: #ff1493;
          box-shadow: 0 0 10px #ff69b4;
        }

        button {
          background: linear-gradient(135deg, #ff69b4, #ff1493);
          color: #fff;
          font-weight: 600;
          padding: 12px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px #ff69b4;
        }

        .about h2 {
          color: #ff69b4;
          margin-bottom: 15px;
        }

        .about p {
          color: #ccc;
          line-height: 1.6;
        }

        footer {
          text-align: center;
          color: #888;
          margin-top: 40px;
          font-size: 14px;
        }

        @media (max-width: 600px) {
          .contact-page {
            padding: 20px 10px;
          }
        }
      `}</style>
    </div>
  )
}

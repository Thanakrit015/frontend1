'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function UsersPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setLoading(false);
    }
    fetchUsers();
  }, []);

  const filteredItems = items.filter((item) => {
    const search = searchTerm.trim().toLowerCase();
    return (
      item.firstname.toLowerCase().includes(search) ||
      item.lastname.toLowerCase().includes(search) ||
      item.username.toLowerCase().includes(search) ||
      item.fullname.toLowerCase().includes(search) ||
      item.id.toString().includes(searchTerm)
    );
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: 'คุณแน่ใจไหม?',
      text: 'ต้องการลบข้อมูลนี้หรือไม่?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ลบเลย!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, { method: 'DELETE' });
          if (!res.ok) throw new Error('Failed to delete');
          setItems(prev => prev.filter(item => item.id !== id));
          Swal.fire('ลบเรียบร้อย!', '', 'success');
        } catch (error) {
          console.error(error);
          Swal.fire('เกิดข้อผิดพลาด', 'ไม่สามารถลบข้อมูลได้', 'error');
        }
      }
    });
  };

  return (
    <div className="bg-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '1000px' }}>
        <h2 className="mb-4 text-center text-pink">👥 ระบบจัดการผู้ใช้งาน</h2>

        <input
          type="text"
          placeholder="🔍 ค้นหาจาก ชื่อ, นามสกุล, หรือ username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mb-3"
        />

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-pink mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>กำลังโหลดข้อมูลผู้ใช้...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <p className="text-center py-5">ไม่พบข้อมูลผู้ใช้</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="bg-dark text-white">
                <tr>
                  <th>id</th>
                  <th>ชื่อ</th>
                  <th>ชื่อเต็ม</th>
                  <th>นามสกุล</th>
                  <th>Username</th>
                  <th>เพศ</th>
                  <th>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-circle bg-pink text-white me-2">
                          {item.firstname.charAt(0).toUpperCase()}
                        </div>
                        {item.firstname}
                      </div>
                    </td>
                    <td>{item.fullname}</td>
                    <td>{item.lastname}</td>
                    <td>@{item.username}</td>
                    <td>
                      <span className={`badge ${item.sex === 'ชาย' ? 'bg-primary' : 'bg-pink'} bg-opacity-10 ${item.sex === 'ชาย' ? 'text-primary' : 'text-pink'} rounded-pill`}>
                        {item.sex === 'ชาย' ? '👨' : '👩'} {item.sex}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        {/* ✅ กดแล้วจะไปหน้า edit โดยส่ง params.id */}
                        <Link href={`/admin/users/edit/${item.id}`} className="btn btn-warning btn-sm">แก้ไข</Link>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>ลบ</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        .min-vh-100 { min-height: 100vh; }
        .bg-gradient { background: linear-gradient(135deg, #000000 0%, #e91e63 100%); }
        .avatar-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .bg-pink { background-color: #fdd3e1ff; }
        .text-pink { color: #e91e63; }
        .table-hover tbody tr:hover { background-color: rgba(233,30,99,0.1); }
      `}</style>
    </div>
  );
}

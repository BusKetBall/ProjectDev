// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import mockNewsData from "../data/mockData";  // นำเข้าข้อมูลปลอม

const Home = () => {
  const [news, setNews] = useState([]); // ใช้ state สำหรับเก็บข้อมูลข่าว
  const [loading, setLoading] = useState(true); // ใช้ state สำหรับแสดงสถานะการโหลด

  // ดึงข้อมูลข่าวจาก mockData.js เมื่อ component โหลด
  useEffect(() => {
    // ตั้งค่าข้อมูลข่าวจาก mockData
    setNews(mockNewsData); 
    setLoading(false); // เปลี่ยนสถานะเป็นไม่โหลดแล้ว
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ข่าวสารล่าสุด</h1>
      {loading ? (
        <p>กำลังโหลดข่าว...</p> // ถ้ากำลังโหลดข้อมูลจะเห็นข้อความนี้
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.length === 0 ? (
            <p>ไม่พบข่าวสาร</p> // ถ้าไม่มีข่าวในฐานข้อมูล
          ) : (
            news.map((newsItem) => (
              <div key={newsItem.id} className="border p-4 rounded-md">
                <img
                  src={newsItem.imageUrl} // ใช้ imageUrl จากข้อมูล mock
                  alt={newsItem.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="font-bold">{newsItem.title}</h2>
                <p className="text-gray-600">{newsItem.description}</p>
                <a
                  href="#"
                  className="text-blue-500 mt-2 block"
                  // กำหนดลิงก์เพิ่มเติมตามที่คุณต้องการ
                >
                  อ่านเพิ่มเติม
                </a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

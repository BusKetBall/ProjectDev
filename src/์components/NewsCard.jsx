// src/components/NewsCard.jsx
import React from "react";

const NewsCard = ({ newsItem }) => {
  return (
    <div className="border p-4 rounded-md">
      <img
        src={newsItem.imageUrl}
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
  );
};

export default NewsCard;

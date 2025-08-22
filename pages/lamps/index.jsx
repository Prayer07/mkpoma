import Image from "next/image";
import React from "react";
import Link from "next/link";

const images = [
  { id: 1, pic: "/dad/pic1.jpg" },
  { id: 2, pic: "/dad/pic2.jpg" },
  { id: 3, pic: "/dad/pic3.jpg" },
  { id: 4, pic: "/dad/pic4.jpg" },
  { id: 5, pic: "/dad/pic5.jpg" },
  { id: 6, pic: "/dad/pic6.jpg" },
  { id: 7, pic: "/dad/pic7.jpg" },
  { id: 8, pic: "/dad/pic8.jpg" },
  { id: 9, pic: "/dad/pic9.jpg" },
  { id: 10, pic: "/dad/pic10.jpg" },
  { id: 11, pic: "/dad/pic11.jpg" },
  { id: 12, pic: "/dad/pic12.jpg" },
  { id: 13, pic: "/dad/pic13.jpg" },
  { id: 14, pic: "/dad/pic14.jpg" },
  { id: 15, pic: "/dad/pic15.jpg" },
  { id: 16, pic: "/dad/pic16.jpg" },
  { id: 17, pic: "/dad/pic17.jpg" },
  { id: 18, pic: "/dad/pic18.jpg" },
  { id: 19, pic: "/dad/pic19.jpg" },
  { id: 20, pic: "/dad/pic20.jpg" },
  { id: 21, pic: "/dad/pic21.jpg" },
  { id: 22, pic: "/dad/pic22.jpg" },
  { id: 23, pic: "/dad/pic23.jpg" },
  { id: 24, pic: "/dad/pic24.jpg" },
  { id: 25, pic: "/dad/pic25.jpg" },
  { id: 26, pic: "/dad/pic26.jpg" },
  { id: 27, pic: "/dad/pic27.jpg" },
  { id: 28, pic: "/dad/pic28.jpg" },
  { id: 29, pic: "/dad/pic29.jpg" },
  { id: 30, pic: "/dad/pic30.jpg" },
  { id: 31, pic: "/dad/pic31.jpg" },
  { id: 32, pic: "/dad/pic32.jpg" },
  { id: 33, pic: "/dad/pic33.jpg" },
  { id: 34, pic: "/dad/pic34.jpg" },
  { id: 35, pic: "/dad/pic35.jpg" },
  { id: 36, pic: "/dad/pic36.jpg" },
  { id: 37, pic: "/dad/pic37.jpg" },
  { id: 38, pic: "/dad/pic38.jpg" },
  { id: 39, pic: "/dad/pic39.jpg" },
  { id: 40, pic: "/dad/pic40.jpg" },
  { id: 41, pic: "/dad/pic41.jpg" },
  { id: 42, pic: "/dad/pic42.jpg" },
  { id: 43, pic: "/dad/pic43.jpg" },
  { id: 44, pic: "/dad/pic44.jpg" },
  { id: 45, pic: "/dad/pic45.jpg" },
  { id: 46, pic: "/dad/pic46.jpg" },
  { id: 47, pic: "/dad/pic47.jpg" },
  { id: 48, pic: "/dad/pic48.jpg" },
  { id: 49, pic: "/dad/pic49.jpg" },
  { id: 50, pic: "/dad/pic50.jpg" }
];

const number = 2348033085229;

export default function MenStore() {
  return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* <h1 className="text-3xl font-bold mb-8 text-center"> Collection</h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <a
              key={img.id}
              href={`https://wa.me/${number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={img.pic}
                width={400}
                height={400}
                alt={`Men's product ${img.id}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                {/* <p className="text-lg font-semibold text-gray-800">
                  : ₦{img..toLocaleString()}
                </p> */}
                <button className="mt-3 w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                  View Details
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
  );
}
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
  { id: 20, pic: "/dad/pic20.jpg" }
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
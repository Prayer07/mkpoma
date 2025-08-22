import React from 'react';
import Header from './components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-center my-8">
        <Link href=" /lamps">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
            View Store
          </button>
        </Link>
      </div>
    </>
  );
}
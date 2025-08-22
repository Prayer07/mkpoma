const number = 2348033085229;

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-1">Contact us via:</h3>
        <p>
          Whatsapp:{" "}
          <a href={`https://wa.me/${number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline">
            08033085229
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline ml-1"
          >
            Mkpoma
          </a>
        </p>
        <p>Software-Developer:
          <a
            href="https://ezenwa-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline ml-1"
            >
            Prince Ezenwa
          </a>
        </p>
        <p className="mt-3 text-sm opacity-70">
          &copy; {new Date().getFullYear()} Mkpoma&apos;s Lamps
        </p>
      </div>
    </footer>
  );
}




// components/Footer.js
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-6 mt-10">
//       <div className="max-w-6xl mx-auto text-center">
//         <h3 className="text-lg font-semibold mb-2">Contact us via:</h3>
//         <p>Whatsapp: <a href="tel:08033085229" className="text-pink-400 hover:underline">08033085229</a></p>
//         <p>
//           Facebook:
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-400 hover:underline ml-1"
//           >
//             Mkpoma
//           </a>
//         </p>
//         <p className="mt-3 text-sm opacity-70">&copy; {new Date().getFullYear()} Diamond's Store</p>
//       </div>
//     </footer>
//   );
// }



// import React from 'react'

// export default function Footer() {
//   return (
//     <>
//     <footer>
//       <h3>Contact us via:</h3>
//       <p>Whatsapp: 08033085229</p>
//       <p>Facebook: <a href="www.fb">Mkpoma</a> </p>
//     </footer>
//     </>
//   )
// }

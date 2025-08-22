// import { useRouter } from "next/router";
// import Image from "next/image";

// const products = [
//   { id: 1, : 7000, pic: "/dad/pic1.jpg", description: "High-quality men’s jacket, perfect for all seasons." },
//   { id: 2, : 3000, pic: "/dad/pic2.jpg", description: "Comfortable men’s casual t-shirt." },
//   { id: 3, : 3000, pic: "/dad/pic3.jpg", description: "Stylish jeans with a perfect fit." },
//   { id: 4, : 3000, pic: "/dad/pic4.jpg", description: "Classic sneakers for everyday wear." },
// ];

// export default function ProductPage() {
//   const router = useRouter();
//   const { id } = router.query;

//   const product = products.find((item) => item.id === Number(id));

//   if (!product) return <p className="text-center py-10">Product not found</p>;

//   return (
//       <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
//         <Image
//           src={product.pic}
//           width={500}
//           height={500}
//           alt={`Product ${product.id}`}
//           className="rounded-lg shadow-lg object-cover"
//         />
//         <div>
//           <h1 className="text-3xl font-bold mb-4">Product #{product.id}</h1>
//           <p className="text-lg text-gray-700 mb-2">: ₦{product..toLocaleString()}</p>
//           <p className="mb-6">{product.description}</p>
//           <a href="tel:08033085229">
//             <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
//               Buy Now
//             </button>
//           </a>
//         </div>
//       </div>
//   );
// }

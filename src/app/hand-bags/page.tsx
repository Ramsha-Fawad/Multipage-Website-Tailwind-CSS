import React from 'react';
import Image from 'next/image'; // Import Next.js Image component

const HandBags = () => {
  const HandBagData = [
    { id: 1, name: 'RTW Creation', price: 2399, description: 'Off-White handbag with flower charm', image: '/pic1.jpg' },
    { id: 2, name: 'GALAXY BAGS', price: 3000, description: 'Green Ladies Bag', image: '/pic2.jpg' },
    { id: 3, name: 'Stylon', price: 2499, description: 'Stylish Luxury handbags', image: '/pic3.jpg' },
    { id: 4, name: 'Global Collection', price: 10542, description: 'Luxury handbag', image: '/pic4.jpg' },
    { id: 5, name: 'BM Fashion', price: 1999, description: 'Women Raven 2 pcs handbag', image: '/pic5.jpg' },
    { id: 6, name: 'RTW Creation', price: 2999, description: 'Blue Workplace handbag', image: '/pic6.jpg' },
  ];

  return (
    <div className="handbags grid grid-cols-1 md:grid-cols-2 gap-10 px-10 my-10">
      {HandBagData.map((handbag) => (
        <div key={handbag.id} className="handbag-card bg-blue-100 p-5 rounded-md shadow-md text-center">
          {/* Updated to use Next.js Image */}
          <Image
            src={handbag.image}
            alt={handbag.name}
            width={300} // Set image width
            height={300} // Set image height
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <h3 className="mt-4 text-2xl font-bold">{handbag.name}</h3>
          <p className="text-gray-500">{handbag.description}</p>
          <div className="price text-blue-500 text-xl font-semibold mt-2">Rs.{handbag.price}PKR</div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default HandBags;

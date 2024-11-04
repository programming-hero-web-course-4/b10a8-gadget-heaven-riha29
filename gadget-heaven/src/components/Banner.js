import React from 'react';

function Banner() {
  return (
    <section className="p-4 -mt-4 text-white">
      <div className="rounded-b-2xl bg-purple-700 pb-72 pt-8 text-center px-96">
        <div className='max-w-2xl'>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-lg mb-8 text-gray-200">
            Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-full transition duration-300 hover:bg-gray-300">
            Shop Now
            </button>
        </div>
      </div>

      <div className="-mt-64">
        <img src={`${process.env.PUBLIC_URL}/banner.jpg`} alt="Gadget Heaven Banner" className="rounded-2xl p-4 bg-white bg-opacity-40 w-full max-w-3xl mx-auto" />
      </div>

    </section>
  );
}

export default Banner;
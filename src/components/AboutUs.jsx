import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-slate-200">
      <h2 className="text-4xl font-bold text-center">About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=700&w=1200"
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover mb-4 md:mb-0"
        />
        <div className="md:ml-8">
          <p className="mt-4 text-center md:text-left text-lg">
            Our mission is to provide exceptional HR services that foster growth and innovation.
          </p>
          <p className="mt-2 text-center md:text-left text-lg">
            Our vision is to be a leader in human resource consulting, helping businesses thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Service 1"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="mt-4 font-bold text-xl">Talent Acquisition</h3>
          <p>We help you find the right talent to fit your company culture.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Service 2"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="mt-4 font-bold text-xl">Employee Training</h3>
          <p>We provide training solutions to enhance your team's skills.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          <img
            src="https://images.pexels.com/photos/3184314/pexels-photo-3184314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"
            alt="Service 3"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="mt-4 font-bold text-xl">HR Consulting</h3>
          <p>We offer consulting services to optimize your HR practices.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;

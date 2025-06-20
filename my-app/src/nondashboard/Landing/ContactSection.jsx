 import React from "react";
      const ContactSection = () =>{
        return (

      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Platform Integration</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join AgriConnect to access our comprehensive ecosystem. Seamlessly integrate with our 
            farmer network, investment opportunities, and direct marketplace and secure smart contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold">
              Contact Us
            </button>
            
          </div>
        </div>
      </section>
        );
      };
      export default ContactSection;
      "use client";
      import React from "react";
      const HeroSection = () =>{
        return (
           <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
                <div className="max-w-4xl mx-auto text-center z-10">
                      <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">  
                        Bridging Agriculture,
                        <span className="text-green-600 block">Investment & Commerce</span>
                        </h1>
                
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                          Empowering lives through real-time insights, safe and transparent investments, and a direct path from farm to market — all in one trusted place.
                        </p>
                
                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center text-lg font-semibold">
                    Get Started
                    </button>
                  
                  </div>
                </div>
              </section>
            );
};      

export default HeroSection;
import { Leaf, ChevronRight, TrendingUp, ShoppingCart } from "lucide-react";
 import React from "react";
      const FeaturesSection = () =>{
        return (
      <section id="features" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Platform Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored features for farmers, investors, and consumers with ML-driven recommendation engines
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Farmer Module */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Farmer Module</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete farming solutions with weather forecasts, crop analytics, AI recommendations, 
                investment posting, and direct selling capabilities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Live + 7-day weather forecasts</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Crop price & yield predictions</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Smart crop recommendations</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Investment posting interface</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-green-600 mr-2" />Direct selling platform</li>
              </ul>
            </div>

            {/* Investor Module */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Investor Module</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Secure agricultural investments with smart contracts, project marketplace, 
                profit projections, and comprehensive tracking systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-600 mr-2" />Farmer project marketplace</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-600 mr-2" />Investment wizard tool</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-600 mr-2" />Smart contract generator</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-600 mr-2" />Profit projection dashboard</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-600 mr-2" />Contract & payout tracking</li>
              </ul>
            </div>

            {/* User Module */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">User Marketplace</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Direct-to-consumer marketplace for farm-fresh produce with AI bundling, 
                live market trends, and complete order management.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange-600 mr-2" />Fresh produce listings</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange-600 mr-2" />Live market trends</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange-600 mr-2" />AI product bundling</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange-600 mr-2" />Multi-payment gateway</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-orange-600 mr-2" />Order tracking & delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      );
    };
    export default FeaturesSection;
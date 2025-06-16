import { Leaf } from "lucide-react";
 import React from "react";
      const FooterSection = () =>{
        return (

      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-green-400" />
                <span className="text-2xl font-bold">AgriConnect</span>
              </div>
              <p className="text-gray-400">
                Full-stack AI-powered agri-tech platform bridging farmers, investors, and consumers 
                through innovative technology and secure smart contracts.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform Modules</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Farmer Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Admin Panel</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Weather Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Smart Contracts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Recommendations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Trends</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AgriConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
        );
      };
      export default FooterSection;
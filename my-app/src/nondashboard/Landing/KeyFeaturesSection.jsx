import React from "react";
import { BarChart3, Shield, Users, TrendingUp } from "lucide-react";

const KeyFeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Advanced Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge tools and AI-powered analytics for modern agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Yield Estimation Tool</h4>
            <p className="text-gray-600 text-sm">
              Advanced calculations based on land area, rainfall, seed type, and fertilizer inputs
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Smart Contracts</h4>
            <p className="text-gray-600 text-sm">
              Secure, automated investment agreements with transparent terms and conditions
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">KYC & Profile Management</h4>
            <p className="text-gray-600 text-sm">
              Comprehensive verification and profile management for all stakeholders
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Market Analytics</h4>
            <p className="text-gray-600 text-sm">
              Real-time crop prices based on region, season, and current market trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;

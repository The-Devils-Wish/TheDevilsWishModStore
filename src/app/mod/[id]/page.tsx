'use client';

import { useState } from 'react';
import { ArrowLeft, Star, Download, Shield, Clock, Users, Check, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Generate static params for deployment
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}

interface ModDetailPageProps {
  params: { id: string };
}

export default function ModDetailPage({ params }: ModDetailPageProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Mock mod data - in real app this would come from database
  const mod = {
    id: 1,
    name: "EliteFPSBooster",
    version: "v2.0",
    price: 19.99,
    description: "Ultimate DayZ performance optimization mod with smart entity cleanup and auto-tuning systems. This professional-grade modification dramatically improves server performance through intelligent entity management and dynamic resource allocation.",
    features: [
      "Dynamic Entity Cleanup System",
      "Auto-Tuning Performance System", 
      "Memory Optimization Engine",
      "Performance Analytics Dashboard",
      "Smart Resource Management",
      "Multi-threaded Processing"
    ],
    downloads: 15420,
    rating: 4.9,
    reviews: 342,
    category: "Performance",
    author: "The Devils Wish",
    lastUpdated: "2 days ago",
    fileSize: "2.4 MB",
    compatibility: "DayZ 1.28+",
    images: ["/mod-preview-1.jpg", "/mod-preview-2.jpg", "/mod-preview-3.jpg"]
  };

  const handlePurchase = () => {
    setIsLoading(true);
    // Redirect to customer dashboard with purchase flow
    setTimeout(() => {
      window.location.href = `/dashboard?purchase=${mod.id}`;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Store</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">DW</span>
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                THE DEVILS WISH
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Mod Header */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{mod.name}</h1>
                  <p className="text-gray-400">Version {mod.version} • by {mod.author}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold">{mod.rating}</span>
                    <span className="text-gray-400">({mod.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Download className="w-4 h-4" />
                    <span>{mod.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>
              </div>

              {/* Mod Images/Preview */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg h-64 flex items-center justify-center mb-6">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Mod Preview</h3>
                  <p className="text-gray-300">Screenshots and gameplay footage</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{mod.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {mod.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white">{mod.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">File Size:</span>
                  <span className="text-white">{mod.fileSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Compatibility:</span>
                  <span className="text-white">{mod.compatibility}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Last Updated:</span>
                  <span className="text-white">{mod.lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  ${mod.price}
                </div>
                <p className="text-gray-400 text-sm">One-time purchase</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">IP-Based DRM Protection</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Users className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">Professional Support</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">Lifetime Updates</span>
                </div>
              </div>

              <motion.button
                onClick={handlePurchase}
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  "Purchase & Setup IP"
                )}
              </motion.button>

              <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-blue-300 font-medium mb-1">IP-Based Licensing</p>
                    <p className="text-blue-200">This mod is tied to your server IP address. Additional server instances available at 50% discount.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

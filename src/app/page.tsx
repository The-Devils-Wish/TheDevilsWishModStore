'use client';

import { useState } from 'react';
import { Search, Filter, Star, Download, Shield, Clock, Users, Zap, ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Performance', 'Gameplay', 'UI/UX', 'Admin Tools', 'Security'];

  const featuredMods = [
    {
      id: 1,
      name: "EliteFPSBooster",
      version: "v2.0",
      description: "Ultimate DayZ performance optimization mod with smart entity cleanup and auto-tuning systems.",
      downloads: "15,420",
      rating: 4.9,
      lastUpdated: "2 days ago",
      price: "$19.99USD",
      category: "Performance",
      badge: "NEW"
    },
    {
      id: 2,
      name: "DevilsArsenal",
      version: "v1.5",
      description: "Complete weapon pack with custom animations and realistic ballistics system.",
      downloads: "12,850",
      rating: 4.8,
      lastUpdated: "1 week ago",
      price: "$14.99USD",
      category: "Gameplay",
      badge: "POPULAR"
    },
    {
      id: 3,
      name: "AdminCommand Pro",
      version: "v3.1",
      description: "Advanced admin tools with GUI interface and automated moderation systems.",
      downloads: "8,920",
      rating: 4.7,
      lastUpdated: "3 days ago",
      price: "$24.99USD",
      category: "Admin Tools",
      badge: "UPDATED"
    },
    {
      id: 4,
      name: "ZombieAI Enhanced",
      version: "v2.3",
      description: "Revolutionary zombie AI system with advanced pathfinding and behavior patterns.",
      downloads: "11,200",
      rating: 4.6,
      lastUpdated: "5 days ago",
      price: "$16.99USD",
      category: "Gameplay",
      badge: "HOT"
    }
  ];

  const testimonials = [
    {
      name: "ServerAdmin_Pro",
      rating: 5,
      comment: "Outstanding quality! Best mods I've ever used!"
    },
    {
      name: "DayZ_Master",
      rating: 5,
      comment: "PERFECT performance boost, exactly what I needed!"
    },
    {
      name: "ModCollector99",
      rating: 5,
      comment: "I just got the EliteFPSBooster, absolutely fantastic..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Devils Wish Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><radialGradient id="devilGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%23dc2626"/><stop offset="100%" stop-color="%23991b1b"/></radialGradient></defs><circle cx="200" cy="150" r="60" fill="url(%23devilGlow)"/><path d="M160 120 Q200 100 240 120 Q225 140 200 150 Q175 140 160 120 Z" fill="%23dc2626"/><path d="M175 130 Q200 115 225 130" stroke="%23991b1b" stroke-width="4" fill="none"/><circle cx="185" cy="140" r="4" fill="%23fbbf24"/><circle cx="215" cy="140" r="4" fill="%23fbbf24"/><path d="M200 155 Q210 170 200 180 Q190 170 200 155" fill="%23dc2626"/><path d="M170 125 L180 115 M230 125 L220 115" stroke="%23dc2626" stroke-width="3"/><text x="200" y="280" text-anchor="middle" font-family="serif" font-size="28" font-weight="bold" fill="%23dc2626">THE DEVILS WISH</text><text x="200" y="310" text-anchor="middle" font-family="serif" font-size="16" fill="%23991b1b">MOD EMPIRE</text></svg>')`
        }}
      />

      {/* Header */}
      <header className="bg-gray-800/90 backdrop-blur-sm border-b border-red-900/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DW</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                THE DEVILS WISH
              </h1>
              <span className="text-gray-400 text-sm">MOD EMPIRE</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <Users className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Centered like HunterMods */}
      <section className="relative py-24 px-4 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-red-800/20 to-purple-800/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bring your server to life
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium DayZ modifications with IP-Based DRM Protection & Long-term support
          </motion.p>
          <motion.p 
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Looking for a custom project? Professional quality mods with ongoing support, updates, and advanced licensing system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/login" className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Browse Mods
            </Link>
          </motion.div>
        </div>

        {/* Customer Testimonials */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={`testimonial-${testimonial.name}`}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <span className="font-semibold text-white">{testimonial.name}</span>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`star-${testimonial.name}-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-red-400 hover:text-red-300 cursor-pointer">View all 140 reviews</span>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-800/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select 
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {filters.map(filter => (
                  <option key={filter} value={filter}>{filter}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mods Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Take full control of your server</h2>
            <p className="text-gray-400">Professional quality modifications for your DayZ server with advanced DRM protection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMods.map((mod, index) => (
              <motion.div
                key={mod.id}
                className="bg-gray-800/90 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-red-500/50 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Green Badge */}
                {mod.badge && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {mod.badge}
                    </span>
                  </div>
                )}

                <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-red-500 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-white">{mod.name}</h3>
                    <p className="text-gray-400 text-sm">{mod.version}</p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {mod.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-300">{mod.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Download className="w-4 h-4" />
                      <span>{mod.downloads}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-red-400 font-semibold">{mod.price}</span>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="w-3 h-3 mr-1" />
                      {mod.lastUpdated}
                    </div>
                  </div>

                  <Link href={`/mod/${mod.id}`}>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:transform group-hover:scale-105">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800/30 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">IP-Based DRM Protection</h3>
              <p className="text-gray-400">Advanced licensing system tied to your server IP address</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Quality</h3>
              <p className="text-gray-400">High-performance mods with ongoing support and updates</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400">Dedicated support team for installation and configuration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/90 backdrop-blur-sm border-t border-red-900/20 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">DW</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              THE DEVILS WISH
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            Professional DayZ modifications with IP-Based DRM Protection. High Quality Mods
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-red-400">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-red-400">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-red-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
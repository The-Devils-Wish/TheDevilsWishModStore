'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  ChevronRight,
  Menu,
  X,
  Search,
  Filter,
  ShoppingCart,
  Eye,
  Clock,
  Award
} from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Performance', 'Gameplay', 'Admin Tools', 'Weapons', 'Vehicles', 'Maps']

  const featuredMods = [
    {
      id: 1,
      name: 'EliteFPSBooster',
      version: 'v2.0',
      price: '$19.99',
      isFree: false,
      downloads: 15420,
      rating: 4.9,
      category: 'Performance',
      description: 'Ultimate DayZ performance optimization mod with smart entity cleanup and auto-tuning systems.',
      features: ['Dynamic Entity Cleanup', 'Auto-Tuning System', 'Memory Optimization', 'Performance Analytics'],
      author: 'The Devils Wish',
      isNew: true,
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      name: 'DevilsArsenal',
      version: 'v1.5',
      price: '$14.99',
      isFree: false,
      downloads: 8930,
      rating: 4.7,
      category: 'Weapons',
      description: 'Comprehensive weapon pack with over 50 new weapons and attachments.',
      features: ['50+ New Weapons', 'Custom Attachments', 'Realistic Ballistics', 'Sound Enhancement'],
      author: 'The Devils Wish',
      isPopular: true,
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      name: 'AdminTools Pro',
      version: 'v3.1',
      price: 'FREE',
      isFree: true,
      downloads: 23100,
      rating: 4.8,
      category: 'Admin Tools',
      description: 'Professional admin toolkit for server management and player control.',
      features: ['Advanced Admin Panel', 'Player Management', 'Server Statistics', 'Auto-Moderation'],
      author: 'The Devils Wish',
      lastUpdated: '3 days ago'
    },
    {
      id: 4,
      name: 'VehiclePack Elite',
      version: 'v1.8',
      price: '$12.99',
      isFree: false,
      downloads: 11250,
      rating: 4.6,
      category: 'Vehicles',
      description: 'Premium vehicle collection with realistic physics and customization options.',
      features: ['25+ Vehicles', 'Custom Paint Jobs', 'Realistic Damage', 'Performance Tuning'],
      author: 'The Devils Wish',
      lastUpdated: '5 days ago'
    },
    {
      id: 5,
      name: 'Devils Map Pack',
      version: 'v2.3',
      price: '$24.99',
      isFree: false,
      downloads: 7800,
      rating: 4.9,
      category: 'Maps',
      description: 'Exclusive custom maps designed for intense survival gameplay.',
      features: ['3 Custom Maps', 'Unique Landmarks', 'Hidden Loot Zones', 'PvP Optimized'],
      author: 'The Devils Wish',
      lastUpdated: '1 week ago'
    },
    {
      id: 6,
      name: 'Gameplay Enhancer',
      version: 'v1.2',
      price: 'FREE',
      isFree: true,
      downloads: 18900,
      rating: 4.5,
      category: 'Gameplay',
      description: 'Essential gameplay improvements and quality of life enhancements.',
      features: ['UI Improvements', 'Animation Fixes', 'Sound Enhancements', 'Bug Fixes'],
      author: 'The Devils Wish',
      lastUpdated: '4 days ago'
    }
  ]

  const filteredMods = featuredMods.filter(mod => {
    const matchesSearch = mod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mod.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || mod.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-devil-black via-devil-gray to-devil-black text-white">
      {/* Navigation Header */}
      <nav className="bg-devil-black/90 backdrop-blur-sm border-b border-devil-red/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-devil-red to-devil-darkred rounded-lg flex items-center justify-center shadow-lg shadow-devil-red/50">
                <span className="text-white font-bold text-xl">👹</span>
              </div>
              <div>
                <h1 className="text-xl font-metal font-bold flame-text">
                  THE DEVILS WISH
                </h1>
                <p className="text-xs text-gray-400 font-metal">MOD EMPIRE</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-devil-red transition-colors font-medium">
                Home
              </a>
              <a href="#mods" className="text-gray-300 hover:text-devil-red transition-colors">
                Browse Mods
              </a>
              <a href="#categories" className="text-gray-300 hover:text-devil-red transition-colors">
                Categories
              </a>
              <a href="#support" className="text-gray-300 hover:text-devil-red transition-colors">
                Support
              </a>
              <a href="/login" className="bg-devil-red hover:bg-devil-darkred px-4 py-2 rounded-lg transition-all font-medium devil-glow">
                Login / Register
              </a>
              <a href="/admin" className="bg-devil-gray hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors font-medium border border-devil-red/30">
                Admin
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-devil-red p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden py-4 border-t border-devil-red/30 bg-devil-black/95"
            >
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-white hover:text-devil-red transition-colors font-medium px-4 py-2">
                  Home
                </a>
                <a href="#mods" className="text-gray-300 hover:text-devil-red transition-colors px-4 py-2">
                  Browse Mods
                </a>
                <a href="#categories" className="text-gray-300 hover:text-devil-red transition-colors px-4 py-2">
                  Categories
                </a>
                <a href="#support" className="text-gray-300 hover:text-devil-red transition-colors px-4 py-2">
                  Support
                </a>
                <a href="/login" className="bg-devil-red hover:bg-devil-darkred mx-4 px-4 py-2 rounded-lg transition-colors font-medium text-center">
                  Login / Register
                </a>
                <a href="/admin" className="bg-devil-gray hover:bg-gray-700 mx-4 px-4 py-2 rounded-lg transition-colors font-medium text-center border border-devil-red/30">
                  Admin
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - CENTERED */}
      <section id="home" className="relative py-20 overflow-hidden">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-devil-red rounded-full opacity-40"
              animate={{
                y: [-10, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-devil-red to-devil-darkred rounded-full flex items-center justify-center shadow-2xl shadow-devil-red/50 animate-float">
                <div className="text-devil-white text-4xl">👹</div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-metal font-bold mb-6 flame-text">
                THE DEVILS WISH
              </h1>
              <h2 className="text-3xl md:text-5xl font-metal font-bold text-white mb-6 devil-text-glow">
                PROFESSIONAL MOD EMPIRE
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Premium DayZ modifications with <span className="text-devil-red font-semibold">IP-Based DRM Protection</span>. 
                Professional quality mods with ongoing support, updates, and advanced licensing system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-devil-red to-devil-darkred hover:from-devil-darkred hover:to-devil-red px-8 py-4 rounded-lg font-semibold transition-all devil-glow card-hover flex items-center justify-center space-x-2 transform hover:scale-105">
                  <Download size={20} />
                  <span>Browse Mods</span>
                </button>
                <button className="border-2 border-devil-red text-devil-red hover:bg-devil-red hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Create Account
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section - CENTERED */}
      <section className="bg-devil-gray/30 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Search Bar */}
            <div className="w-full max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search mods..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-devil-black/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-devil-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-devil-red"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Stats */}
            <div className="text-devil-red text-sm font-semibold">
              {filteredMods.length} mods found
            </div>
          </div>
        </div>
      </section>

      {/* Mods Grid Section - CENTERED */}
      <section id="mods" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-metal font-bold mb-4 flame-text">FEATURED MODS</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Professional quality modifications for your DayZ server with advanced DRM protection</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {filteredMods.map((mod, index) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-devil-gray/50 rounded-2xl border border-devil-red/30 hover:border-devil-red transition-all duration-300 overflow-hidden group card-hover w-full max-w-sm"
              >
                {/* Mod Image */}
                <div className="aspect-video bg-gradient-to-br from-devil-gray to-devil-black flex items-center justify-center relative">
                  <div className="text-5xl">
                    {mod.category === 'Performance' && '⚡'}
                    {mod.category === 'Weapons' && '🔫'}
                    {mod.category === 'Admin Tools' && '🛠️'}
                    {mod.category === 'Vehicles' && '🚗'}
                    {mod.category === 'Maps' && '🗺️'}
                    {mod.category === 'Gameplay' && '🎮'}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {mod.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        NEW
                      </span>
                    )}
                    {mod.isPopular && (
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        POPULAR
                      </span>
                    )}
                    {mod.isFree && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        FREE
                      </span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-devil-black/80 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {mod.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-devil-red hover:bg-devil-darkred px-4 py-2 rounded-lg text-white font-semibold flex items-center space-x-2 transition-colors">
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>
                  </div>
                </div>

                {/* Mod Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-devil-red transition-colors mb-1">
                      {mod.name}
                    </h3>
                    <span className="text-sm text-gray-400">{mod.version}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 text-center line-clamp-2">
                    {mod.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {mod.features.slice(0, 2).map((feature, featureIndex) => (
                        <span
                          key={`${mod.id}-feature-${featureIndex}`}
                          className="bg-devil-black/50 text-gray-300 text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {mod.features.length > 2 && (
                        <span className="text-devil-red text-xs px-2 py-1">
                          +{mod.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Download size={14} />
                      <span>{mod.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500" />
                      <span>{mod.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{mod.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="text-center space-y-3">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        {mod.isFree ? 'FREE' : mod.price}
                      </span>
                      {!mod.isFree && (
                        <span className="text-sm text-gray-400 ml-1">USD</span>
                      )}
                    </div>
                    <button className={`w-full px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                      mod.isFree 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-devil-red hover:bg-devil-darkred text-white devil-glow'
                    }`}>
                      {mod.isFree ? (
                        <>
                          <Download size={16} />
                          <span>Download Free</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={16} />
                          <span>Buy Now</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - CENTERED */}
      <section className="bg-devil-gray/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-devil-red">47+</div>
              <div className="text-gray-400">Professional Mods</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-devil-red">150K+</div>
              <div className="text-gray-400">Total Downloads</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-4xl font-bold text-devil-red">99%</div>
              <div className="text-gray-400">Customer Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - CENTERED */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-metal font-bold mb-4 flame-text">WHY CHOOSE THE DEVILS WISH</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">Professional quality, reliable support, and cutting-edge IP-based DRM technology</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                icon: Shield,
                title: 'IP-Based DRM Protection',
                description: 'Advanced licensing system prevents unauthorized distribution. Each mod is tied to your server IP address for maximum security.'
              },
              {
                icon: Zap,
                title: 'Performance Optimized',
                description: 'All mods are rigorously tested and optimized for high-population servers with heavy mod loads and demanding environments.'
              },
              {
                icon: Award,
                title: 'Professional Support',
                description: 'Direct support from The Devils Wish developers with fast response times, comprehensive documentation, and ongoing updates.'
              }
            ].map((feature, index) => (
              <motion.div
                key={`feature-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-devil-gray/50 p-6 rounded-2xl border border-devil-red/30 hover:border-devil-red transition-all duration-300 text-center card-hover max-w-sm"
              >
                <feature.icon className="text-devil-red mb-4 mx-auto" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - CENTERED */}
      <footer className="bg-devil-black/80 border-t border-devil-red/30 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Info */}
            <div className="col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-devil-red to-devil-darkred rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">👹</span>
                </div>
                <div>
                  <h3 className="text-xl font-metal font-bold flame-text">
                    THE DEVILS WISH
                  </h3>
                  <p className="text-xs text-gray-400">MOD EMPIRE</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-center md:text-left">
                Professional DayZ modifications with IP-based DRM protection. 
                Trusted by server owners worldwide for quality, performance, and security.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#mods" className="block text-gray-400 hover:text-devil-red transition-colors">Browse Mods</a>
                <a href="#categories" className="block text-gray-400 hover:text-devil-red transition-colors">Categories</a>
                <a href="#support" className="block text-gray-400 hover:text-devil-red transition-colors">Support</a>
                <a href="/admin" className="block text-gray-400 hover:text-devil-red transition-colors">Admin Portal</a>
              </div>
            </div>

            {/* Support */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="/docs" className="block text-gray-400 hover:text-devil-red transition-colors">Documentation</a>
                <a href="/discord" className="block text-gray-400 hover:text-devil-red transition-colors">Discord Server</a>
                <a href="/contact" className="block text-gray-400 hover:text-devil-red transition-colors">Contact Us</a>
                <a href="/terms" className="block text-gray-400 hover:text-devil-red transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="border-t border-devil-red/30 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 The Devils Wish Gaming Empire. All rights reserved. | Professional DayZ Modifications with DRM Protection
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
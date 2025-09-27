'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  User, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Shield,
  ChevronLeft
} from 'lucide-react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login/registration logic here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-devil-black via-devil-gray to-devil-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-devil-red rounded-full opacity-30"
            animate={{
              y: [-10, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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

      {/* Back to home */}
      <Link 
        href="/"
        className="absolute top-6 left-6 flex items-center space-x-2 text-gray-400 hover:text-devil-red transition-colors z-10"
      >
        <ChevronLeft size={20} />
        <span>Back to Store</span>
      </Link>

      <div className="w-full max-w-md px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-devil-gray/50 backdrop-blur-sm rounded-2xl p-8 border border-devil-red/30 shadow-2xl shadow-devil-red/20"
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-devil-red to-devil-darkred rounded-full flex items-center justify-center shadow-lg shadow-devil-red/50">
              <span className="text-white font-bold text-2xl">👹</span>
            </div>
            <h1 className="text-2xl font-metal font-bold bg-gradient-to-r from-devil-red to-red-500 bg-clip-text text-transparent">
              THE DEVILS WISH
            </h1>
            <p className="text-sm text-gray-400">MOD EMPIRE ACCESS</p>
          </div>

          {/* Toggle Login/Register */}
          <div className="flex rounded-lg p-1 bg-devil-black/50 mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                isLogin
                  ? 'bg-devil-red text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                !isLogin
                  ? 'bg-devil-red text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full bg-devil-black/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red focus:ring-1 focus:ring-devil-red"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>

            {/* Email (Register only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-devil-black/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red focus:ring-1 focus:ring-devil-red"
                    placeholder="Enter your email"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-devil-black/50 border border-gray-600 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red focus:ring-1 focus:ring-devil-red"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password (Register only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-devil-black/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red focus:ring-1 focus:ring-devil-red"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-devil-red to-devil-darkred hover:from-devil-darkred hover:to-devil-red py-3 px-4 rounded-lg font-semibold transition-all shadow-lg shadow-devil-red/30 transform hover:scale-105"
            >
              {isLogin ? 'Login to Devils Wish' : 'Create Account'}
            </button>
          </form>

          {/* DRM Protection Notice */}
          <div className="mt-6 p-4 bg-devil-red/10 border border-devil-red/30 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="text-devil-red" size={16} />
              <span className="text-sm font-semibold text-devil-red">IP-Based DRM Protection</span>
            </div>
            <p className="text-xs text-gray-400">
              After purchasing mods, you'll be prompted to enter your server IP address. 
              Each mod license is tied to your IP for security. Additional IPs available at 50% discount.
            </p>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center space-y-2">
            {isLogin && (
              <a href="/forgot-password" className="text-sm text-devil-red hover:text-red-400 transition-colors">
                Forgot your password?
              </a>
            )}
            <p className="text-xs text-gray-500">
              By {isLogin ? 'logging in' : 'registering'}, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
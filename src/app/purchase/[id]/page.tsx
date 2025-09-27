'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Download, 
  Shield, 
  Server, 
  CreditCard, 
  CheckCircle,
  AlertTriangle,
  ChevronLeft,
  Copy,
  ExternalLink
} from 'lucide-react'

// Generate static params for deployment
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}

export default function PurchasePage() {
  const [step, setStep] = useState(1) // 1: Purchase, 2: IP Setup, 3: Complete
  const [ipAddress, setIpAddress] = useState('')
  const [serverPort, setServerPort] = useState('2302')
  const [isValidating, setIsValidating] = useState(false)
  const [userLicenses, setUserLicenses] = useState([
    // Mock existing licenses
    {
      modName: 'AdminTools Pro',
      ip: '192.168.1.100:2302',
      status: 'active',
      purchaseDate: '2025-09-20'
    }
  ])

  // Mock mod data - this would come from props/router
  const mod = {
    id: 1,
    name: 'EliteFPSBooster',
    version: 'v2.0',
    price: 19.99,
    description: 'Ultimate DayZ performance optimization mod with smart entity cleanup',
    features: ['Dynamic Entity Cleanup', 'Auto-Tuning System', 'Memory Optimization']
  }

  const handlePurchase = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep(2)
    }, 1500)
  }

  const validateIP = (ip: string) => {
    const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/
    return ipPattern.test(ip)
  }

  const handleIPSubmit = async () => {
    if (!validateIP(ipAddress)) {
      alert('Please enter a valid IP address')
      return
    }

    setIsValidating(true)
    
    // Simulate IP validation and license activation
    setTimeout(() => {
      setIsValidating(false)
      setUserLicenses([...userLicenses, {
        modName: mod.name,
        ip: `${ipAddress}:${serverPort}`,
        status: 'active',
        purchaseDate: new Date().toISOString().split('T')[0]
      }])
      setStep(3)
    }, 2000)
  }

  const getDiscountedPrice = () => {
    const hasExistingLicenses = userLicenses.length > 0
    return hasExistingLicenses ? mod.price * 0.5 : mod.price
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-devil-black via-devil-gray to-devil-black text-white">
      {/* Navigation */}
      <nav className="bg-devil-black/90 backdrop-blur-sm border-b border-devil-red/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-400 hover:text-devil-red transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Back to Store</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-devil-red to-devil-darkred rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">👹</span>
              </div>
              <span className="font-metal text-devil-red">DEVILS WISH</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[
              { num: 1, title: 'Purchase', icon: CreditCard },
              { num: 2, title: 'IP Setup', icon: Server },
              { num: 3, title: 'Complete', icon: CheckCircle }
            ].map((stepItem, index) => (
              <div key={stepItem.num} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                  step >= stepItem.num
                    ? 'bg-devil-red border-devil-red text-white'
                    : 'border-gray-600 text-gray-400'
                }`}>
                  <stepItem.icon size={20} />
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  step >= stepItem.num ? 'text-devil-red' : 'text-gray-400'
                }`}>
                  {stepItem.title}
                </span>
                {index < 2 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step > stepItem.num ? 'bg-devil-red' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mod Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-devil-gray/50 rounded-2xl p-6 border border-devil-red/30"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-devil-red/20 to-devil-darkred/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
              <h2 className="text-2xl font-metal font-bold text-white mb-2">{mod.name}</h2>
              <span className="text-devil-red text-sm">{mod.version}</span>
            </div>

            <p className="text-gray-300 mb-6">{mod.description}</p>

            <div className="space-y-3 mb-6">
              {mod.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-devil-red flex-shrink-0" size={16} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-devil-red/30 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">
                  ${getDiscountedPrice().toFixed(2)}
                </span>
                {userLicenses.length > 0 && (
                  <div className="text-right">
                    <div className="text-sm text-gray-400 line-through">${mod.price}</div>
                    <div className="text-sm text-devil-red font-semibold">50% Additional IP Discount</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Purchase/IP Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-devil-gray/50 rounded-2xl p-6 border border-devil-red/30"
          >
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                  <CreditCard className="text-devil-red" size={24} />
                  <span>Purchase Mod</span>
                </h3>

                {/* Existing Licenses */}
                {userLicenses.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Your Current Licenses:</h4>
                    <div className="space-y-2">
                      {userLicenses.map((license, index) => (
                        <div key={index} className="bg-devil-black/30 rounded-lg p-3 flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-white">{license.modName}</div>
                            <div className="text-xs text-gray-400">{license.ip}</div>
                          </div>
                          <div className="text-xs text-devil-red">Active</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="bg-devil-red/10 border border-devil-red/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="text-devil-red mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <h5 className="text-sm font-semibold text-devil-red mb-1">IP-Based DRM Protection</h5>
                        <p className="text-xs text-gray-300">
                          After purchase, you'll need to enter your server IP address. The mod will only work on the registered IP.
                          {userLicenses.length > 0 && " You qualify for 50% discount on additional IPs!"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-devil-red to-devil-darkred hover:from-devil-darkred hover:to-devil-red py-3 px-4 rounded-lg font-semibold transition-all shadow-lg shadow-devil-red/30 transform hover:scale-105"
                  >
                    Purchase for ${getDiscountedPrice().toFixed(2)}
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                  <Server className="text-devil-red" size={24} />
                  <span>Server IP Setup</span>
                </h3>

                <div className="space-y-6">
                  <div className="bg-devil-red/10 border border-devil-red/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="text-devil-red mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <h5 className="text-sm font-semibold text-devil-red mb-1">Important: DRM License Binding</h5>
                        <p className="text-xs text-gray-300">
                          Enter your DayZ server IP address. The mod will ONLY work on this specific IP. 
                          Make sure this is correct - changes require admin approval.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Server IP Address *
                    </label>
                    <input
                      type="text"
                      value={ipAddress}
                      onChange={(e) => setIpAddress(e.target.value)}
                      placeholder="192.168.1.100"
                      className="w-full bg-devil-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Server Port (optional)
                    </label>
                    <input
                      type="text"
                      value={serverPort}
                      onChange={(e) => setServerPort(e.target.value)}
                      placeholder="2302"
                      className="w-full bg-devil-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-devil-red"
                    />
                  </div>

                  <button
                    onClick={handleIPSubmit}
                    disabled={isValidating || !ipAddress}
                    className="w-full bg-gradient-to-r from-devil-red to-devil-darkred hover:from-devil-darkred hover:to-devil-red py-3 px-4 rounded-lg font-semibold transition-all shadow-lg shadow-devil-red/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isValidating ? 'Validating & Activating License...' : 'Activate License'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <h3 className="text-xl font-bold mb-6 flex items-center justify-center space-x-2">
                  <CheckCircle className="text-devil-red" size={24} />
                  <span>License Activated!</span>
                </h3>

                <div className="space-y-6">
                  <div className="bg-devil-red/10 border border-devil-red/30 rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-devil-red mb-2">License Details</h5>
                    <div className="text-left space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mod:</span>
                        <span className="text-white">{mod.name} {mod.version}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Server IP:</span>
                        <span className="text-white font-mono">{ipAddress}:{serverPort}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-devil-red">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-devil-red to-devil-darkred py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2">
                      <Download size={18} />
                      <span>Download {mod.name}</span>
                    </button>
                    
                    <button className="w-full border border-devil-red text-devil-red hover:bg-devil-red hover:text-white py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2">
                      <Copy size={18} />
                      <span>Copy License Key</span>
                    </button>

                    <Link href="/dashboard" className="block w-full border border-gray-600 text-gray-300 hover:border-devil-red hover:text-devil-red py-3 px-4 rounded-lg font-semibold transition-all text-center">
                      View My Licenses
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
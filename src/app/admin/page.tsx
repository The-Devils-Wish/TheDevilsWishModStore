'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Settings, 
  Users, 
  DollarSign, 
  Download, 
  Eye,
  Edit3,
  Trash2,
  Plus,
  Save,
  Image as ImageIcon,
  ToggleLeft,
  ToggleRight,
  Crown,
  Shield,
  Zap
} from 'lucide-react'

interface Mod {
  id: string
  name: string
  description: string
  price: number
  isFree: boolean
  downloads: number
  image?: string
  features: string[]
  version: string
  category: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mods, setMods] = useState<Mod[]>([
    {
      id: '1',
      name: 'EliteFPSBooster',
      description: 'Ultimate DayZ Server Performance Mod - Dynamic entity cleanup, auto-tuning, memory optimization',
      price: 19.99,
      isFree: false,
      downloads: 156,
      features: ['Dynamic Entity Cleanup', 'Auto-Tuning System', 'Memory Optimization', 'Admin Control'],
      version: '2.0',
      category: 'Performance'
    }
  ])
  const [editingMod, setEditingMod] = useState<Mod | null>(null)
  const [newMod, setNewMod] = useState<Partial<Mod>>({
    name: '',
    description: '',
    price: 0,
    isFree: false,
    features: [],
    version: '1.0',
    category: 'General'
  })

  const stats = {
    totalMods: mods.length,
    totalDownloads: mods.reduce((sum, mod) => sum + mod.downloads, 0),
    totalRevenue: mods.reduce((sum, mod) => mod.isFree ? sum : sum + (mod.price * mod.downloads), 0),
    activeUsers: 47
  }

  const toggleModPrice = (modId: string) => {
    setMods(mods.map(mod => 
      mod.id === modId 
        ? { ...mod, isFree: !mod.isFree }
        : mod
    ))
  }

  const deleteMod = (modId: string) => {
    setMods(mods.filter(mod => mod.id !== modId))
  }

  const saveMod = (mod: Mod) => {
    setMods(mods.map(m => m.id === mod.id ? mod : m))
    setEditingMod(null)
  }

  const addNewMod = () => {
    if (newMod.name && newMod.description) {
      const mod: Mod = {
        id: Date.now().toString(),
        name: newMod.name,
        description: newMod.description,
        price: newMod.price || 0,
        isFree: newMod.isFree || false,
        downloads: 0,
        features: newMod.features || [],
        version: newMod.version || '1.0',
        category: newMod.category || 'General'
      }
      setMods([...mods, mod])
      setNewMod({
        name: '',
        description: '',
        price: 0,
        isFree: false,
        features: [],
        version: '1.0',
        category: 'General'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-devil-black via-devil-gray to-devil-black">
      {/* Admin Header */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-devil-red/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-devil-red/20 rounded-full flex items-center justify-center devil-glow">
                <Crown className="text-devil-red" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-metal font-bold flame-text">
                  DEVILS WISH ADMIN
                </h1>
                <p className="text-gray-400 text-sm">Mod Store Control Panel</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Total Revenue</div>
                <div className="text-xl font-bold text-devil-red">A${stats.totalRevenue.toFixed(2)}</div>
              </div>
              <button className="bg-devil-red hover:bg-devil-darkred px-4 py-2 rounded-lg transition-all">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30 sticky top-8">
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: Shield },
                  { id: 'mods', label: 'Manage Mods', icon: Settings },
                  { id: 'add-mod', label: 'Add New Mod', icon: Plus },
                  { id: 'users', label: 'Users', icon: Users },
                  { id: 'analytics', label: 'Analytics', icon: DollarSign },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? 'bg-devil-red text-white devil-glow'
                        : 'text-gray-400 hover:text-white hover:bg-devil-red/20'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-metal font-bold text-white mb-2">Dashboard Overview</h2>
                  <p className="text-gray-400">Welcome to your Devils Wish Mod Store control panel</p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[
                    { label: 'Total Mods', value: stats.totalMods, icon: Settings, color: 'text-blue-400' },
                    { label: 'Total Downloads', value: stats.totalDownloads, icon: Download, color: 'text-green-400' },
                    { label: 'Revenue', value: `A$${stats.totalRevenue.toFixed(2)}`, icon: DollarSign, color: 'text-devil-red' },
                    { label: 'Active Users', value: stats.activeUsers, icon: Users, color: 'text-purple-400' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gradient-to-br from-devil-gray to-black/50 p-6 rounded-xl border border-devil-red/30 card-hover">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-sm">{stat.label}</p>
                          <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                        <stat.icon className={stat.color} size={32} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30">
                  <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: 'EliteFPSBooster downloaded', user: 'ServerAdmin_47', time: '2 minutes ago' },
                      { action: 'New user registered', user: 'DayZPro_Gaming', time: '15 minutes ago' },
                      { action: 'EliteFPSBooster purchased', user: 'ModdedServer_UK', time: '1 hour ago' },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-devil-red/10">
                        <div>
                          <p className="text-white font-medium">{activity.action}</p>
                          <p className="text-gray-400 text-sm">by {activity.user}</p>
                        </div>
                        <span className="text-gray-500 text-sm">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Manage Mods */}
            {activeTab === 'mods' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-metal font-bold text-white mb-2">Manage Mods</h2>
                  <p className="text-gray-400">Control pricing, visibility, and mod details</p>
                </div>

                <div className="grid gap-6">
                  {mods.map((mod) => (
                    <div key={mod.id} className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30">
                      {editingMod?.id === mod.id ? (
                        // Edit Mode
                        <div className="space-y-4">
                          <input
                            value={editingMod.name}
                            onChange={(e) => setEditingMod({ ...editingMod, name: e.target.value })}
                            className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                            placeholder="Mod Name"
                          />
                          <textarea
                            value={editingMod.description}
                            onChange={(e) => setEditingMod({ ...editingMod, description: e.target.value })}
                            className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white h-24"
                            placeholder="Mod Description"
                          />
                          <div className="grid md:grid-cols-3 gap-4">
                            <input
                              type="number"
                              value={editingMod.price}
                              onChange={(e) => setEditingMod({ ...editingMod, price: parseFloat(e.target.value) })}
                              className="bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                              placeholder="Price"
                            />
                            <input
                              value={editingMod.version}
                              onChange={(e) => setEditingMod({ ...editingMod, version: e.target.value })}
                              className="bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                              placeholder="Version"
                            />
                            <select
                              value={editingMod.category}
                              onChange={(e) => setEditingMod({ ...editingMod, category: e.target.value })}
                              className="bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                            >
                              <option value="Performance">Performance</option>
                              <option value="Gameplay">Gameplay</option>
                              <option value="Admin">Admin Tools</option>
                              <option value="General">General</option>
                            </select>
                          </div>
                          <div className="flex space-x-4">
                            <button
                              onClick={() => saveMod(editingMod)}
                              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2"
                            >
                              <Save size={16} />
                              <span>Save</span>
                            </button>
                            <button
                              onClick={() => setEditingMod(null)}
                              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-medium transition-all"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        // View Mode
                        <div className="grid lg:grid-cols-3 gap-6">
                          <div className="lg:col-span-2">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-white">{mod.name}</h3>
                                <p className="text-devil-red font-medium">v{mod.version} • {mod.category}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => toggleModPrice(mod.id)}
                                  className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium transition-all ${
                                    mod.isFree 
                                      ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                                      : 'bg-devil-red/20 text-devil-red border border-devil-red/30'
                                  }`}
                                >
                                  {mod.isFree ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                                  <span>{mod.isFree ? 'FREE' : `A$${mod.price}`}</span>
                                </button>
                              </div>
                            </div>
                            <p className="text-gray-300 mb-4">{mod.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {mod.features.map((feature, idx) => (
                                <span key={idx} className="bg-devil-red/20 text-devil-red px-3 py-1 rounded-full text-sm">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-devil-black/30 rounded-lg p-4">
                              <div className="text-center text-gray-400 mb-2">
                                <ImageIcon size={32} className="mx-auto mb-2" />
                                Screenshot
                              </div>
                              <button className="w-full bg-devil-red/20 hover:bg-devil-red/30 border border-devil-red/30 rounded-lg py-2 text-devil-red text-sm font-medium transition-all">
                                Upload Image
                              </button>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">{mod.downloads}</div>
                              <div className="text-gray-400 text-sm">Downloads</div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => setEditingMod(mod)}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center space-x-1"
                              >
                                <Edit3 size={14} />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => deleteMod(mod.id)}
                                className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-center space-x-1"
                              >
                                <Trash2 size={14} />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Add New Mod */}
            {activeTab === 'add-mod' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-metal font-bold text-white mb-2">Add New Mod</h2>
                  <p className="text-gray-400">Upload and configure a new mod for your store</p>
                </div>

                <div className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Mod Name</label>
                        <input
                          value={newMod.name}
                          onChange={(e) => setNewMod({ ...newMod, name: e.target.value })}
                          className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                          placeholder="Enter mod name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">Description</label>
                        <textarea
                          value={newMod.description}
                          onChange={(e) => setNewMod({ ...newMod, description: e.target.value })}
                          className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white h-24"
                          placeholder="Describe your mod's features and benefits"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white font-medium mb-2">Price ($)</label>
                          <input
                            type="number"
                            step="0.01"
                            value={newMod.price}
                            onChange={(e) => setNewMod({ ...newMod, price: parseFloat(e.target.value) })}
                            className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                            placeholder="0.00"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2">Version</label>
                          <input
                            value={newMod.version}
                            onChange={(e) => setNewMod({ ...newMod, version: e.target.value })}
                            className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                            placeholder="1.0"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Category</label>
                        <select
                          value={newMod.category}
                          onChange={(e) => setNewMod({ ...newMod, category: e.target.value })}
                          className="w-full bg-devil-black/50 border border-devil-red/30 rounded-lg px-4 py-2 text-white"
                        >
                          <option value="Performance">Performance</option>
                          <option value="Gameplay">Gameplay</option>
                          <option value="Admin">Admin Tools</option>
                          <option value="General">General</option>
                        </select>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setNewMod({ ...newMod, isFree: !newMod.isFree })}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                            newMod.isFree 
                              ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                              : 'bg-devil-red/20 text-devil-red border border-devil-red/30'
                          }`}
                        >
                          {newMod.isFree ? <ToggleRight size={16} /> : <ToggleLeft size={16} />}
                          <span>{newMod.isFree ? 'FREE' : 'PAID'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Mod File</label>
                        <div className="border-2 border-dashed border-devil-red/30 rounded-lg p-8 text-center">
                          <Upload className="mx-auto text-devil-red mb-4" size={48} />
                          <p className="text-white font-medium">Drop your .pbo file here</p>
                          <p className="text-gray-400 text-sm mt-2">or click to browse</p>
                          <button className="mt-4 bg-devil-red hover:bg-devil-darkred px-6 py-2 rounded-lg font-medium transition-all">
                            Select File
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Screenshot</label>
                        <div className="border-2 border-dashed border-devil-red/30 rounded-lg p-8 text-center">
                          <ImageIcon className="mx-auto text-devil-red mb-4" size={48} />
                          <p className="text-white font-medium">Upload screenshot</p>
                          <p className="text-gray-400 text-sm mt-2">PNG, JPG up to 5MB</p>
                          <button className="mt-4 bg-devil-red hover:bg-devil-darkred px-6 py-2 rounded-lg font-medium transition-all">
                            Select Image
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-devil-red/30">
                    <div className="flex space-x-4">
                      <button
                        onClick={addNewMod}
                        className="bg-devil-red hover:bg-devil-darkred px-8 py-3 rounded-lg font-bold transition-all devil-glow flex items-center space-x-2"
                      >
                        <Plus size={20} />
                        <span>Add Mod to Store</span>
                      </button>
                      <button className="border-2 border-devil-red text-devil-red hover:bg-devil-red hover:text-white px-8 py-3 rounded-lg font-bold transition-all">
                        Save as Draft
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-metal font-bold text-white mb-2">Sales Analytics</h2>
                  <p className="text-gray-400">Track your mod performance and revenue</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30">
                    <h3 className="text-xl font-bold text-white mb-4">Revenue Breakdown</h3>
                    <div className="space-y-4">
                      {mods.map((mod) => (
                        <div key={mod.id} className="flex justify-between items-center">
                          <span className="text-gray-300">{mod.name}</span>
                          <span className="text-devil-red font-bold">
                            A${mod.isFree ? '0.00' : (mod.price * mod.downloads).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30">
                    <h3 className="text-xl font-bold text-white mb-4">Download Stats</h3>
                    <div className="space-y-4">
                      {mods.map((mod) => (
                        <div key={mod.id} className="flex justify-between items-center">
                          <span className="text-gray-300">{mod.name}</span>
                          <div className="flex items-center space-x-2">
                            <Download size={16} className="text-gray-400" />
                            <span className="text-white font-medium">{mod.downloads}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-metal font-bold text-white mb-2">User Management</h2>
                  <p className="text-gray-400">Manage user accounts and permissions</p>
                </div>

                <div className="bg-gradient-to-br from-devil-gray to-black/50 rounded-xl p-6 border border-devil-red/30">
                  <p className="text-center text-gray-400 text-lg">User management coming soon...</p>
                  <p className="text-center text-gray-500 mt-2">Track purchases, manage access, and handle support requests</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
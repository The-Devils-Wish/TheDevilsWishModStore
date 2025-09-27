'use client';

import { useState, useEffect } from 'react';
import { User, Settings, LogOut, Plus, Minus, CreditCard, Shield, Server, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CustomerLicense {
  id: number;
  modName: string;
  licenseId: string;
  issuedDate: string;
  licenseType: string;
  serverInstances: number;
  maxInstances: number;
  ips: string[];
  price: number;
}

export default function CustomerDashboard() {
  const [customer, setCustomer] = useState({
    name: "The Devils Wish",
    username: "thedevilswish",
    customerId: "64385",
    discordId: "1047178060975329361"
  });

  const [licenses, setLicenses] = useState<CustomerLicense[]>([
    {
      id: 1,
      modName: "EliteFPSBooster",
      licenseId: "6083",
      issuedDate: "13.06.2024",
      licenseType: "One time Payment",
      serverInstances: 2,
      maxInstances: 2,
      ips: ["51.222.245.3", ""],
      price: 19.99
    },
    {
      id: 2,
      modName: "DevilsArsenal",
      licenseId: "5914",
      issuedDate: "20.05.2024",
      licenseType: "One time Payment",
      serverInstances: 1,
      maxInstances: 1,
      ips: ["51.222.245.3"],
      price: 14.99
    },
    {
      id: 3,
      modName: "AdminCommand Pro",
      licenseId: "6044",
      issuedDate: "10.06.2024",
      licenseType: "One time Payment",
      serverInstances: 1,
      maxInstances: 1,
      ips: ["51.222.245.3"],
      price: 24.99
    },
    {
      id: 4,
      modName: "ZombieAI Enhanced",
      licenseId: "7313",
      issuedDate: "12.10.2024",
      licenseType: "One time Payment",
      serverInstances: 1,
      maxInstances: 1,
      ips: ["51.222.245.3"],
      price: 16.99
    }
  ]);

  const [showPasskeySetup, setShowPasskeySetup] = useState(false);

  const handleAddServerInstance = (licenseId: number) => {
    setLicenses(prev => prev.map(license => {
      if (license.id === licenseId && license.serverInstances < 10) {
        return {
          ...license,
          serverInstances: license.serverInstances + 1,
          maxInstances: license.maxInstances + 1,
          ips: [...license.ips, ""]
        };
      }
      return license;
    }));
  };

  const handleRemoveServerInstance = (licenseId: number, ipIndex: number) => {
    setLicenses(prev => prev.map(license => {
      if (license.id === licenseId && license.ips.length > 1) {
        const newIps = [...license.ips];
        newIps.splice(ipIndex, 1);
        return {
          ...license,
          serverInstances: license.serverInstances - 1,
          maxInstances: license.maxInstances - 1,
          ips: newIps
        };
      }
      return license;
    }));
  };

  const handleIpChange = (licenseId: number, ipIndex: number, newIp: string) => {
    setLicenses(prev => prev.map(license => {
      if (license.id === licenseId) {
        const newIps = [...license.ips];
        newIps[ipIndex] = newIp;
        return { ...license, ips: newIps };
      }
      return license;
    }));
  };

  const calculateAdditionalCost = (license: CustomerLicense) => {
    const additionalInstances = license.serverInstances - 1;
    return additionalInstances * (license.price * 0.5);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DW</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                THE DEVILS WISH CUSTOMER PANEL
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
              <button className="text-gray-300 hover:text-white">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Customer Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{customer.name} ({customer.username})</h2>
              <p className="text-gray-400">Discord ID: {customer.discordId}</p>
              <p className="text-gray-400">Customer ID: {customer.customerId}</p>
            </div>
            <div className="ml-auto">
              <button
                onClick={() => setShowPasskeySetup(!showPasskeySetup)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Setup secure Passkey login
              </button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Products</h3>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {licenses.map((license) => (
              <motion.div
                key={license.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: license.id * 0.1 }}
              >
                {/* Mod Header */}
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{license.modName}</h4>
                      <p className="text-gray-400 text-sm">License ID: {license.licenseId}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Issued Date:</p>
                      <p className="text-white">{license.issuedDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">License Type:</p>
                      <p className="text-white">{license.licenseType}</p>
                    </div>
                  </div>
                </div>

                {/* Server Instances */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400">Server Instances:</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 font-semibold">
                        {license.serverInstances === 1 ? 'Unlimited' : license.serverInstances}
                      </span>
                      <button
                        onClick={() => handleAddServerInstance(license.id)}
                        className="bg-green-600 hover:bg-green-700 text-white p-1 rounded transition-colors"
                        disabled={license.serverInstances >= 10}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* IP Management */}
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm">IPs:</p>
                    {license.ips.map((ip, ipIndex) => (
                      <div key={`${license.id}-ip-${ipIndex}`} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={ip}
                          onChange={(e) => handleIpChange(license.id, ipIndex, e.target.value)}
                          placeholder="51.222.245.3"
                          className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        {license.ips.length > 1 && (
                          <button
                            onClick={() => handleRemoveServerInstance(license.id, ipIndex)}
                            className="bg-red-600 hover:bg-red-700 text-white p-1 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                        )}
                        <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded text-sm transition-colors">
                          Add User
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Additional Cost Display */}
                  {license.serverInstances > 1 && (
                    <div className="mt-4 p-3 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                      <p className="text-blue-300 text-sm">
                        Additional Instances: <strong>${calculateAdditionalCost(license).toFixed(2)}</strong>
                      </p>
                      <p className="text-blue-200 text-xs mt-1">50% discount applied for extra server instances</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/" className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg text-center transition-colors">
              <CreditCard className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Browse More Mods</p>
            </Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg text-center transition-colors">
              <Server className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Server Status</p>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg text-center transition-colors">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Download Licenses</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
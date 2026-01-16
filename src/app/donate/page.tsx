"use client";
import { useState } from "react";
import { Copy, Check, X, Heart, Gift } from 'lucide-react';

function DonatePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // I included Mine you can change for yours.
  const solAddress = "0x2890AbeB61ff74c8e60D21BE818B9D1aAC83dad7";
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(solAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      {/* Donate Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <Gift className="w-5 h-5" />
        <span className="hidden sm:inline">Support Me Via Ethereum</span>
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 animate-fade-in-up border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                Support My Work
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close donation popup"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                Your support helps me continue building amazing things. Every contribution means a lot!
              </p>

              {/* sol Address Section */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ethereum Address
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm font-mono text-gray-800 break-all">
                    {solAddress}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-200 ${
                      copied 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                    }`}
                    title={copied ? 'Copied!' : 'Copy address'}
                    aria-label={copied ? 'Address copied' : 'Copy address to clipboard'}
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-green-600 text-sm mt-2 flex items-center gap-1 animate-fade-in">
                    <Check className="w-4 h-4" />
                    Address copied to clipboard!
                  </p>
                )}
              </div>
              
              <p className="text-xs text-gray-400 text-center">
                Thank you for your generosity!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function DonatePage() {
  return <DonatePopup />;
}

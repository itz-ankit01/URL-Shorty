'use client'

import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast';
import { shortenUrl } from '../serverActions/urlServerActions';
export default function HomePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
          {/* Animated background elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="p-8 relative z-10">
            {/* Header with animated gradient text */}
            <h1 className="text-4xl font-extrabold text-center mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-purple-200">
                URL Shortener
              </span>
            </h1>
            
            {/* URL Input Form */}
            <form className="space-y-6" action={shortenUrl}  method="POST">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Paste your long URL here..."
                        name="originalUrl"
                        className="w-full px-6 py-4 rounded-xl bg-white/20 border-2 border-white/30 focus:border-white/50 focus:outline-none text-white placeholder-white/70 backdrop-blur-sm transition-all duration-300"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </div>
                </div>
                
                <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    Shorten URL
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <Toaster />
            </form>
            <div className="mt-8 text-center">
              <Link href="/urls" prefetch={true} className="inline-flex items-center px-6 py-3 border-2 border-white/30 hover:border-white/50 text-white font-medium rounded-xl transition-all duration-300 group">
                <span>View All Shortened URLs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
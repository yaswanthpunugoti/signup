import React from "react";

export default function MobileShell({children}){
  return (
    <div className="relative">
      <div className="hidden lg:block text-sm text-gray-400 absolute -top-10 left-1/2 transform -translate-x-1/2">
      </div>
      <div className="device mx-auto lg:scale-100 transform">
        {/* status bar */}
        <div className="h-12 flex items-center justify-between px-4 border-b border-gray-100">
          <div className="text-sm font-medium"> </div>
        </div>
        <div className="h-[calc(100%-96px)] overflow-auto">
          {children}
        </div>
        <div className="h-16 border-t border-gray-100"></div>
      </div>

      {/* small-screen full width fallback */}
      <div className="lg:hidden w-full max-w-md mx-auto">
        <div className="min-h-screen bg-white">
          <div className="h-12 flex items-center justify-between px-4 border-b border-gray-100">
            <div></div>
          </div>
          <div className="min-h-[calc(100vh-96px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

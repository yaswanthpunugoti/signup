import React from 'react';

export default function Account(){
  return (
    <div className="p-6">
      <h3 className="text-base font-semibold text-gray-700">Account Settings</h3>

      <div className="mt-4 flex items-start space-x-4">
        <div className="relative">
          <img src="/src/assets/profile.jpg" className="w-20 h-20 rounded-full object-cover" />
          <div className="absolute -right-1 bottom-0 bg-popxPurple w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 7a5 5 0 100 10 5 5 0 000-10z"/><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /></svg>
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-900">Marry Doe</div>
          <div className="text-sm text-gray-500">Marry@Gmail.Com</div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>

      <div className="mt-6 border-t border-dashed border-gray-200 pt-4"></div>
    </div>
  )
}


import React from 'react';
import Link from 'next/link';
import { useLogout } from '@/hooks/useLogout';
const Header = () => {
   const { handleLogout, loading } = useLogout();
   
   return (
      <header className="bg-white">
<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
   <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      </a>
   </div>
   <div className="flex lg:hidden">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
      <span className="sr-only">Open main menu</span>
      <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </button>
   </div>
   <div className="hidden lg:flex lg:gap-x-12">
      <Link href={'/'} className="text-sm/6 font-semibold text-gray-900">Phòng ban</Link>
      <Link href={'/tree'} className="text-sm/6 font-semibold text-gray-900">Phòng ban dạng cây</Link>
   </div>
   <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <button onClick={handleLogout} disabled={loading}  className='px-4 py-3 bg-red-500 cursor-pointer text-white hover:opacity-50 rounded-2xl'>Logout</button>
   </div>
</nav>
<div className="lg:hidden" role="dialog" aria-modal="true">
   <div className="fixed inset-0 z-50"></div>
   <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
         <span className="sr-only">Your Company</span>
         <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
      </a>
      <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
         <span className="sr-only">Close menu</span>
         <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
         </svg>
      </button>
      </div>
      <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
         <div className="space-y-2 py-6">
            <div className="-mx-3">
            <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
               Product
               
               <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
               </svg>
            </button>
            <div className="mt-2 space-y-2" id="disclosure-1">
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Analytics</a>
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Engagement</a>
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Security</a>
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Integrations</a>
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Automations</a>
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Watch demo</a>
               <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">Contact sales</a>
            </div>
            </div>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
         </div>
         <div className="py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
         </div>
      </div>
      </div>
   </div>
</div>
</header>

   );
};

export default Header;
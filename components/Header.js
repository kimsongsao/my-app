import React from 'react'

function Header() {
  return (
    <header class="bg-blue-800 absolute inset-x-0 top-0 z-50 text-white">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Sao Kimsong</span>
          <a href='/'>Sao Kimsong</a>
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">About</a>
        <a href="/products" class="text-sm/6 font-semibold text-gray-900">Product</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Services</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Projects</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Contact</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>
  )
}

export default Header
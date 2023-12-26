'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const Nav = () => {
  const [navbar, setNavbar] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavbar(true)
    }else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.addEventListener('scroll',scrollHandler)
    }
  }, [])


    return (
<nav className={ navbar ? "fixed w-[100%] flex bg-white items-center justify-between p-6 lg:px-8" :"flex items-center justify-between p-6 lg:px-8"} aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Gokilkacau</h2>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Product</Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>
        <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">Dashboard</Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="/onboarding/sign-in" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </nav>
    )
}

export default Nav
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Screen Time vs Anxiety", path: "/screen-time" },
    { name: "Leverage Points", path: "/leverage-points" },
    { name: "Blog", path: "/blog" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-teal-500" />
            <span className="font-bold text-gray-800 text-lg">Mental Health Among Urban Students</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`${
                  pathname === route.path ? "text-teal-500 font-medium" : "text-gray-600 hover:text-gray-800"
                } transition-colors`}
              >
                {route.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <button className="text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

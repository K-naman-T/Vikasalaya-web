import Link from 'next/link'
import { cn } from "@/lib/utils"

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Programs', link: '/programs' },
  { name: 'Resources', link: '/resources' },
  { name: 'Events', link: '/events' },
  { name: 'Contact', link: '/contact' }
]

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-yellow-500">
            Vikasalaya
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className={cn(
                  "text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/donate" 
              className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
            >
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

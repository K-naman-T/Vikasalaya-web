import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: vikasalaya@gmail.com</p>
            <p>Phone: 7204453790; 8088212774</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            <p className="mb-2">Pradhan Khanta, Baliapur, Dhanbad</p>
            <p>Ohana 857, KR Puram, Bangalore, 560049</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs">Our Programs</Link></li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li><Link href="/donate">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/vikasalaya/" className="hover:text-yellow-300">
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/in/vikasalaya-foundation-253323258" className="hover:text-yellow-300">
                LinkedIn
              </Link>
              <Link href="https://www.facebook.com/people/Vikasalaya-Vikasalaya/100087451647205/" className="hover:text-yellow-300">
                Facebook
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-yellow-500 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Vikasalaya Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

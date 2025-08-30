import React from 'react'
import Logo from "/logo.svg"
import name from "/name.svg"
import insta from "/insta.svg"
import linkdin from "/linkdin.svg"
import facebook from "/facebook.svg"
import x from "/x.svg"

// Optimized image component
const OptimizedImage = ({ src, alt, className, loading = "lazy", ...props }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading={loading}
    decoding="async"
    {...props}
  />
);

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <OptimizedImage src={Logo} className="h-10 w-auto" alt="Beacon Network Logo" />
              <OptimizedImage src={name} className="h-10 w-auto" alt="Beacon Network" />
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Connecting opportunities with talent. Your gateway to professional growth and success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <OptimizedImage src={facebook} className="h-6 w-6" alt="Facebook" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <OptimizedImage src={insta} className="h-6 w-6" alt="Instagram" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <OptimizedImage src={linkdin} className="h-6 w-6" alt="LinkedIn" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <OptimizedImage src={x} className="h-6 w-6" alt="X" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/about" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Why Us?
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Join Our Team
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Become a Seller
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/contact-us" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a 
                  href="/contact-us" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/terms-and-conditions" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="/privacy-policy" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              {/* <li>
                <a 
                  href="/contact-us" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
                >
                  Refund Policy
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Beacon Network. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <span className="text-gray-500 text-xs">
                {/* Made with ❤️ for professional growth */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

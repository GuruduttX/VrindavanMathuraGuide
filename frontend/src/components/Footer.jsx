import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-amber-600" />
              <span className="text-lg font-semibold text-gray-900">Vrindavan Mathura Guide</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              An authoritative, neutral guide to Mathura-Vrindavan temples, spiritual places, and pilgrimage planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/temples" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">Temples</Link></li>
              <li><Link to="/spiritual-places" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">Spiritual Places</Link></li>
              <li><Link to="/festivals" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">Festivals & Rituals</Link></li>
              <li><Link to="/plan-your-visit" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">Plan Your Visit</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">Contact</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@vrindavanmathuraguide.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-600">
                <Globe className="h-4 w-4" />
                <span>vrindavanmathuraguide.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © 2025 Vrindavan Mathura Guide. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Non-commercial informational resource | Not affiliated with any tour operators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
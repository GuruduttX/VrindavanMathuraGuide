import Image from "next/image";
import {
  MapPin,
  Mail,
  Instagram,
  Twitter,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialMedia = [
    { icon: Instagram, url: "https://www.instagram.com/mathuravrindavantour" },
    { icon: Youtube, url: "https://www.youtube.com/@mathuravrindavantour" },
    { icon: Twitter, url: "https://twitter.com/mathuravrindavan" },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-950 via-orange-900 to-orange-800">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 xl:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* BRAND / CONTACT */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-5">
              Trusted Mathura–Vrindavan Tour Operator
            </h3>
            <div className="flex items-center gap-5 mb-8"> 
                <Image src="/images/utils/CTAIMAGE.png" alt="Meta Partner" width={89} height={40} className="object-contain" /> 
                <Image src="/images/utils/CTAIMAGE.png" alt="Google Partner" width={90} height={40} className="object-contain" /> 
                </div>

            {/* <p className="text-sm text-gray-300 mb-6">
              We specialize in spiritual tours of Mathura, Vrindavan, Govardhan & Braj Bhoomi,
              offering comfortable, well-planned yatras for families and senior citizens.
            </p> */}

            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-center text-gray-300">
                <Phone size={16} />
                <span>+91 89236 60886</span>
              </div>

              <div className="flex gap-3 items-start text-gray-300">
                <MapPin size={16} className="mt-1 shrink-0" />
                <p>
                  Mathura – Vrindavan Road, Uttar Pradesh, India
                </p>
              </div>

              <div className="flex gap-3 items-center text-gray-300">
                <Mail size={16} />
                <span>support@mathuravrindavantour.com</span>
              </div>
            </div>
          </div>

          {/* TOUR PACKAGES */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Tour Packages
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/">Mathura Vrindavan 1 Day Tour</Link></li>
              <li><Link href="/">2D / 1N Vrindavan Darshan</Link></li>
              <li><Link href="/">Govardhan Parikrama Tour</Link></li>
              <li><Link href="/">Barsana & Nandgaon Tour</Link></li>
            </ul>
          </div>

          {/* PILGRIMAGE */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Pilgrimage Highlights
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Shri Krishna Janmabhoomi</li>
              <li>Banke Bihari Temple</li>
              <li>Prem Mandir Aarti</li>
              <li>Yamuna Aarti</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/policies">Travel Policies</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-5">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialMedia.map((item, i) => (
                <Link
                  href={item.url}
                  key={i}
                  className="p-2 rounded-full borde bg-white border-white/20
                  hover:bg-white text-orange-900 transition"
                >
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* DESTINATION STRIP */}
      <div className="border-t border-white/10 bg-orange-900/60">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-300
          flex flex-wrap gap-x-2 gap-y-1 justify-center text-center">
          <span>Mathura Vrindavan Tour Packages</span>
          <span>|</span>
          <span>Krishna Janmabhoomi Darshan</span>
          <span>|</span>
          <span>Govardhan Parikrama</span>
          <span>|</span>
          <span>Barsana Radha Rani Temple</span>
          <span>|</span>
          <span>Braj 84 Kos Yatra</span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-400
          flex flex-wrap justify-center gap-6 text-center">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <p>© {new Date().getFullYear()} Mathura Vrindavan Tour. All rights reserved.</p>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>

    </footer>
  );
}

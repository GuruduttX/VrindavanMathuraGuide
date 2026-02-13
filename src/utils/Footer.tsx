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
    <footer className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-14 xl:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* BRAND / CONTACT */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-5">
              Trusted Mathura–Vrindavan Tour Operator
            </h3>

            <div className="flex items-center gap-5 mb-8">
              <Image src="/images/utils/CTAIMAGE.png" alt="Partner" width={90} height={40} />
              <Image src="/images/utils/CTAIMAGE.png" alt="Partner" width={90} height={40} />
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-center">
                <Phone size={16} />
                <span>+91 89236 60886</span>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={16} className="mt-1 shrink-0" />
                <p>Mathura – Vrindavan Road, Uttar Pradesh, India</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={16} />
                <span>support@mathuravrindavantour.com</span>
              </div>
            </div>
          </div>

          {/* TOUR PACKAGES */}
          <div>
            <h4 className="font-semibold mb-5">Tour Packages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">1 Day Vrindavan Darshan</Link></li>
              <li><Link href="/">Mathura Vrindavan Tour</Link></li>
              <li><Link href="/">Govardhan Parikrama</Link></li>
              <li><Link href="/">Barsana & Nandgaon</Link></li>
            </ul>
          </div>

          {/* PILGRIMAGE */}
          <div className="md:block hidden">
            <h4 className="font-semibold mb-5 ">Pilgrimage Highlights</h4>
            <ul className="space-y-2 text-sm">
              <li>Krishna Janmabhoomi</li>
              <li>Banke Bihari Temple</li>
              <li>Prem Mandir Aarti</li>
              <li>Yamuna Aarti</li>
            </ul>
          </div>

          {/* COMPANY + LINKS (same pattern as reference footer) */}
          <div className=" flex gap-24 items-start  ">
          <div className="md:hidden block">
            <h4 className="font-semibold mb-5">Pilgrimage Highlights</h4>
            <ul className="space-y-2 text-sm">
              <li>Krishna Janmabhoomi</li>
              <li>Banke Bihari Temple</li>
              <li>Prem Mandir Aarti</li>
              <li>Yamuna Aarti</li>
            </ul>
          </div>

             <div>

              <h4 className="font-semibold  mb-5 sm:ml-12 ml-0 ">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:ml-12 ml-0">
                <li><Link href="/tour-packages">All Packages</Link></li>
                {/* <li><Link href="/blog">Blogs</Link></li> */}
                <li><Link href="/">Custom Yatra</Link></li>
              </ul>
            </div>

             </div>
            
              
         

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-5 sm:ml-12 ml-0">
              Follow Us
            </h4>
            <div className="flex gap-4 sm:ml-12 ml-0">
              {socialMedia.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className="p-2 rounded-full border border-white/30 hover:bg-white hover:text-orange-700 transition"
                >
                  <item.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* DESTINATION STRIP */}
      <div className="border-t border-white/20 bg-orange-900/50">
        <div className="max-w-7xl mx-auto px-6 py-5 text-sm
          flex flex-wrap gap-x-2 gap-y-1 justify-center text-center">
          <span>Mathura Vrindavan Tours</span>
          <span>|</span>
          <span>Govardhan Parikrama</span>
          <span>|</span>
          <span>Barsana Darshan</span>
          <span>|</span>
          <span>Braj 84 Kos Yatra</span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl flex justify-around mx-auto px-6 py-4 text-xs text-center">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <p>© {new Date().getFullYear()} Mathura Vrindavan Tour</p>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>

    </footer>
  );
}

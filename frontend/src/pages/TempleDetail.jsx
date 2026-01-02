import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  MapPin, 
  Clock, 
  AlertCircle, 
  Info, 
  ChevronRight, 
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';

const TemplesGuide = () => {
  // Toggle for content sections if needed, or keep static
  const [activeSection, setActiveSection] = useState('mathura');

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Optional: Background Pattern/Image Overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1561585258-40d4c4c77571?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-amber-600 hover:bg-amber-700 text-white border-none px-4 py-1 text-sm">
            Pilgrim's Guide 2026
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif tracking-tight">
            Temples of Mathura Vrindavan
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            The complete authoritative guide to the sacred lands of Braj—from the birthplace in Mathura to the playgrounds of Vrindavan.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* 2. SIDEBAR NAVIGATION (Sticky on Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 bg-white p-6 rounded-xl shadow-sm border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#mathura" className="hover:text-amber-600 flex items-center gap-2 transition-colors">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Mathura Temples
                </a>
              </li>
              <li>
                <a href="#vrindavan" className="hover:text-amber-600 flex items-center gap-2 transition-colors">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Vrindavan Temples
                </a>
              </li>
              <li>
                <a href="#tips" className="hover:text-amber-600 flex items-center gap-2 transition-colors">
                  <Info className="w-4 h-4" /> Visitor Tips
                </a>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-stone-100">
              <p className="text-xs text-slate-500 mb-2">Planning a family trip?</p>
              <Button variant="outline" className="w-full border-amber-600 text-amber-700 hover:bg-amber-50">
                Get Custom Itinerary
              </Button>
            </div>
          </div>
        </aside>

        {/* 3. MAIN CONTENT AREA */}
        <div className="col-span-1 lg:col-span-9 space-y-16">

          {/* Intro Text */}
          <section className="prose prose-lg max-w-none text-slate-600">
            <p className="text-xl text-slate-800 leading-relaxed">
              Mathura and Vrindavan are not just tourist destinations; they are the heart of India's spiritual geography.
            </p>
            <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-amber-900 text-lg mb-2 flex items-center gap-2">
                  <Sun className="h-5 w-5" /> Mathura (Janmabhoomi)
                </h4>
                <p className="text-sm text-amber-800">
                  The city of kings and history. Majestic, urban, and centered around the significance of Krishna’s arrival.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-900 text-lg mb-2 flex items-center gap-2">
                  <Moon className="h-5 w-5" /> Vrindavan (Leela Bhoomi)
                </h4>
                <p className="text-sm text-green-800">
                  The land of love and play. Intimate, devotional, and centered on Bhakti and Leela.
                </p>
              </div>
            </div>
          </section>

          {/* MATHURA SECTION */}
          <section id="mathura" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Mathura: The Royal Heritage</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            {/* Janmabhoomi Card */}
            <Card className="mb-8 overflow-hidden border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-slate-200 min-h-[200px] relative">
                  {/* Placeholder for Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                    <span className="text-sm font-medium">Janmabhoomi Image</span>
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-slate-900">Shri Krishna Janmabhoomi</h3>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">Must Visit</Badge>
                  </div>
                  <p className="text-slate-600 mb-4">
                    The holiest site marking the prison cell where Lord Krishna was born. A place of solemn history and deep reverence.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-600 mt-0.5" />
                      <div>
                        <span className="block font-semibold text-slate-900">Timings</span>
                        <span className="text-slate-600">5 AM–12 PM | 4 PM–9:30 PM</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <div>
                        <span className="block font-semibold text-slate-900">Important</span>
                        <span className="text-slate-600">Strict Security. No mobiles/cameras.</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/temples/janmabhoomi">
                    <Button variant="outline" size="sm" className="mt-2">View Full Details <ChevronRight className="w-4 h-4 ml-1" /></Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Dwarkadhish Card */}
            <Card className="mb-8 border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Dwarkadhish Temple</h3>
                    <p className="text-slate-600 text-sm mb-3 max-w-2xl">
                      Dedicated to Krishna as the "King of Dwarka." Famous for its Rajasthani architecture and the "Hindola" (Swing) festival during monsoon.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6:30 AM – 10:30 AM</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Near Vishram Ghat</span>
                    </div>
                  </div>
                  <Link to="/temples/dwarkadhish">
                     <Button variant="ghost" className="text-amber-700">Details <ArrowRight className="w-4 h-4 ml-1" /></Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* VRINDAVAN SECTION */}
          <section id="vrindavan" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Vrindavan: The Land of Devotion</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>

            {/* Banke Bihari Card (Featured) */}
            <Card className="mb-8 border-l-4 border-l-amber-600 shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="mb-2 bg-amber-600 hover:bg-amber-700">Most Popular</Badge>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Banke Bihari Temple</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">
                  The energy here is electric. The deity is treated as a living child, and curtains are pulled periodically. Not for silent meditation, but for ecstatic devotion.
                </p>
                
                <div className="bg-stone-50 rounded-lg p-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2">
                       <Sun className="w-4 h-4 text-amber-500" /> Darshan Experience
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High intensity, crowded, vibrant. Best visited on weekdays early morning (8 AM).
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2">
                       <AlertCircle className="w-4 h-4 text-red-500" /> Caution
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Beware of monkeys taking glasses. Keep children close.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <Link to="/temples/banke-bihari">
                    <Button>Plan Darshan</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Prem Mandir Card */}
            <Card className="mb-8 border-stone-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Prem Mandir</h3>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Wheelchair Friendly</Badge>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  A massive white marble complex depicting Radha-Krishna pastimes. Famous for its evening light show and musical fountain.
                </p>
                <div className="text-sm text-slate-500 flex items-center gap-2">
                   <Clock className="w-4 h-4" /> <span>Best Time: Sunset (Light show approx 7:30 PM)</span>
                </div>
              </CardContent>
            </Card>
            
             {/* ISKCON Card */}
             <Card className="mb-8 border-stone-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">ISKCON Vrindavan</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Krishna Balaram Mandir. Clean, organized, and famous for 24-hour Kirtan. Very welcoming to international tourists.
                </p>
                <Link to="/temples/iskcon">
                   <Button variant="link" className="p-0 h-auto text-amber-700">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* TIPS SECTION */}
          <section id="tips" className="bg-slate-800 text-slate-200 rounded-2xl p-8 shadow-xl scroll-mt-24">
            <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-amber-400" /> First-Time Visitor Essentials
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-amber-400 mb-2 text-lg">🐒 The Monkey Rule</h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  Vrindavan monkeys target <strong>glasses (spectacles)</strong> and food. Wear contacts or use a strap. If they steal something, do not fight—trade it for a Frooti (juice pack).
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-400 mb-2 text-lg">🚫 Afternoon Rest</h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  Most temples close strictly between <strong>12:00 PM and 4:00 PM</strong>. Plan your lunch and rest during this time.
                </p>
              </div>
              <div>
                 <h4 className="font-bold text-amber-400 mb-2 text-lg">🛺 E-Rickshaws Only</h4>
                 <p className="text-sm opacity-90 leading-relaxed">
                   Cars cannot enter inner Vrindavan lanes. Park at your hotel or designated lots and use local Tuk-Tuks.
                 </p>
              </div>
              <div>
                 <h4 className="font-bold text-amber-400 mb-2 text-lg">👟 Footwear</h4>
                 <p className="text-sm opacity-90 leading-relaxed">
                   Wear slip-ons. You will be taking them off constantly. Expect your feet to get dirty (it's considered holy dust).
                 </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TemplesGuide;

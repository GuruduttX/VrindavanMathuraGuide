import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Book, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mathura-Vrindavan Temple & Pilgrimage Guide
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            An authoritative, neutral guide to temples, spiritual places, rituals, festivals, and pilgrimage planning in the sacred land of Krishna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/temples">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                Explore Temples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/plan-your-visit">
              <Button size="lg" variant="outline" className="border-gray-300">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/temples" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Temples</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Discover sacred temples, their history, significance, and darshan timings.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/spiritual-places" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Book className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Spiritual Places</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Explore ghats, kunds, ashrams, and sacred forests of Vrindavan.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/festivals" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Festivals & Rituals</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Learn about Janmashtami, Holi, Radha Ashtami, and sacred rituals.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/plan-your-visit" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <Info className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Plan Your Visit</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Best time to visit, dress codes, darshan guidelines, and safety tips.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Extractable Summary */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Guide</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              This website serves as an authoritative, neutral, and informational guide to the sacred temples, spiritual places, rituals, festivals, and pilgrimage planning for Mathura and Vrindavan. We provide accurate, well-researched content to help pilgrims, travelers, and spiritual seekers understand and navigate these holy sites with clarity and confidence.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We are not a tour operator, package seller, or commercial service. Our mission is to offer reliable information that supports informed decisions, respectful visits, and meaningful spiritual experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Temples Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Temples</h2>
            <Link to="/temples">
              <Button variant="outline" className="border-gray-300">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Banke Bihari Temple</h3>
                <p className="text-sm text-gray-600 mb-4">One of the most revered temples in Vrindavan, known for unique darshan customs.</p>
                <Link to="/temples/banke-bihari">
                  <Button variant="link" className="p-0 h-auto text-amber-600 hover:text-amber-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Krishna Janmabhoomi</h3>
                <p className="text-sm text-gray-600 mb-4">The birthplace of Lord Krishna in Mathura, one of Hinduism's holiest sites.</p>
                <Link to="/temples/krishna-janmabhoomi">
                  <Button variant="link" className="p-0 h-auto text-amber-600 hover:text-amber-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prem Mandir</h3>
                <p className="text-sm text-gray-600 mb-4">Modern architectural marvel built with white marble, featuring evening light shows.</p>
                <Link to="/temples/prem-mandir">
                  <Button variant="link" className="p-0 h-auto text-amber-600 hover:text-amber-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
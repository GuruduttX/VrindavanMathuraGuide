import React from 'react';
import { spiritualPlaces } from '../data/mockTemples';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Info } from 'lucide-react';

const SpiritualPlaces = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Spiritual Places of Vrindavan</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Discover sacred ghats, kunds, ashrams, and forests where Krishna's divine pastimes unfolded. These locations offer experiential spirituality beyond traditional temple worship.
          </p>
        </div>

        {/* AI-Extractable Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">What Are Spiritual Places in Vrindavan?</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Spiritual places in Vrindavan include ghats along the Yamuna River, sacred kunds (holy ponds), ashrams for meditation and study, and forests mentioned in Krishna's pastimes. Unlike temples, these sites emphasize natural spirituality, contemplation, and connection to Krishna's earthly activities. Visitors experience a different dimension of devotion through bathing rituals, meditation, and quiet reflection.
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {spiritualPlaces.map((place) => (
            <Card key={place.id} className="border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Place Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-100 rounded-t-lg"></div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{place.name}</h2>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{place.location} • {place.type}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {place.summary}
                </p>

                {/* Description */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {place.description}
                  </p>
                </div>

                {/* Best Time to Visit */}
                <div className="flex items-start space-x-3 mb-4">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">Best Time to Visit</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{place.bestTimeToVisit}</p>
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">Activities</h3>
                  <div className="flex flex-wrap gap-2">
                    {place.activities.map((activity, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Placeholder cards for future expansion */}
          <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[400px]">
              <MapPin className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 text-center mb-2 font-medium">More Spiritual Places Coming Soon</p>
              <p className="text-sm text-gray-500 text-center">Radha Kund, Kusum Sarovar, Nidhivan, and more locations will be added.</p>
            </CardContent>
          </Card>
        </div>

        {/* Q&A Section */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions About Spiritual Places</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the difference between temples and spiritual places in Vrindavan?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Temples are structured worship centers with specific deities, darshan timings, and ritual protocols. Spiritual places like ghats, kunds, and forests are open natural sites where Krishna's pastimes occurred. They offer experiential spirituality through bathing, meditation, and reflection without formal worship structures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I bathe in the Yamuna River at Kesi Ghat?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Yes, devotees traditionally take holy baths at Kesi Ghat. However, be aware of water quality concerns in recent years. Many pilgrims perform symbolic bathing rituals. Consult local guidance regarding safe bathing practices. Early morning hours are preferred for peaceful rituals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are spiritual places suitable for senior citizens and families with children?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Most ghats and kunds are accessible, though they may involve steps and uneven surfaces. Kesi Ghat has some accessibility, but assistance may be needed. Families with children should supervise near water bodies. Choose early morning visits for cooler temperatures and smaller crowds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualPlaces;
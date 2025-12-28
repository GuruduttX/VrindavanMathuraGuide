import React from 'react';
import { Link } from 'react-router-dom';
import { temples } from '../data/mockTemples';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const TemplesList = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Temples of Mathura-Vrindavan</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Explore detailed information about sacred temples, their history, significance, darshan timings, and visitor guidance. Each temple page provides comprehensive details to help you plan your spiritual visit.
          </p>
        </div>

        {/* Temples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {temples.map((temple) => (
            <Card key={temple.id} className="border-gray-200 hover:shadow-lg transition-all duration-300">
              {/* Temple Image Placeholder */}
              <div className="h-56 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-t-lg"></div>
              
              <CardContent className="p-6">
                {/* Temple Name & Location */}
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{temple.name}</h2>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{temple.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {temple.summary}
                </p>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-sm">
                    <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      {temple.darshan.morning && temple.darshan.evening 
                        ? `${temple.darshan.morning} | ${temple.darshan.evening}`
                        : temple.darshan.timings || 'Contact temple for timings'}
                    </span>
                  </div>
                  {temple.darshan.crowdLevel && (
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">Crowd Level: </span>
                      <Badge 
                        variant="outline" 
                        className={`ml-2 ${
                          temple.darshan.crowdLevel.includes('Very High') 
                            ? 'border-red-300 text-red-700 bg-red-50'
                            : temple.darshan.crowdLevel.includes('High')
                            ? 'border-orange-300 text-orange-700 bg-orange-50'
                            : 'border-green-300 text-green-700 bg-green-50'
                        }`}
                      >
                        {temple.darshan.crowdLevel}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Deity */}
                <div className="mb-4 p-3 bg-amber-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium text-gray-900">Deity: </span>
                    <span className="text-gray-700">{temple.deity}</span>
                  </p>
                </div>

                {/* CTA */}
                <Link to={`/temples/${temple.id}`}>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    View Complete Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI-Extractable Information */}
        <div className="mt-16 bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions About Mathura-Vrindavan Temples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Which temples should I visit in Vrindavan?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Essential temples include Banke Bihari Temple (known for unique darshan customs), ISKCON Vrindavan (modern temple with international atmosphere), and Prem Mandir (architectural marvel with evening light shows). Traditional seekers should also visit Radha Vallabh Temple for its Radha-centric devotion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the most important temples in Mathura?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Krishna Janmabhoomi Temple is the primary sacred site in Mathura, marking Lord Krishna's birthplace. It holds supreme importance for pilgrims and requires strict security protocols. Plan for longer wait times, especially during Janmashtami.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How much time should I allocate for temple visits?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Allocate 1-2 hours per major temple during regular days, and 2-4 hours during festival seasons due to crowds. Banke Bihari and Krishna Janmabhoomi can have waiting times exceeding 2 hours during peak periods. Visit early morning on weekdays for shorter waits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplesList;
import React from 'react';
import { planningGuides } from '../data/mockTemples';
import { Card, CardContent } from '../components/ui/card';
import { AlertCircle, CheckCircle2, Info, Calendar, Shirt, Sun, CloudRain, Snowflake } from 'lucide-react';
import { Separator } from '../components/ui/separator';

const PlanYourVisit = () => {
  const bestTimeGuide = planningGuides.find(g => g.id === 'best-time-to-visit');
  const dressCodeGuide = planningGuides.find(g => g.id === 'dress-code-guidelines');

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Mathura-Vrindavan Visit</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Essential guidance for planning your pilgrimage to Mathura-Vrindavan. This page provides decision support on timing, dress codes, crowd expectations, and practical considerations to ensure a respectful and meaningful visit.
          </p>
        </div>

        {/* AI-Extractable Advisory Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Planning Your Pilgrimage: What You Need to Know</h2>
              <p className="text-base text-gray-800 leading-relaxed">
                Mathura-Vrindavan welcomes millions of pilgrims annually. Successful visits require advance planning around weather, festival calendars, dress codes, and crowd management. This guide helps you make informed decisions based on your priorities, physical capabilities, and spiritual goals. We provide realistic expectations without commercial incentives.
              </p>
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        {bestTimeGuide && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Time to Visit</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {bestTimeGuide.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Pleasant Months */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Recommended Months</h3>
                  </div>
                  <p className="text-base text-gray-800 font-medium mb-2">{bestTimeGuide.content.bestMonths}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Ideal for first-time visitors, senior citizens, and families. Comfortable weather for temple walking and sightseeing.</p>
                </CardContent>
              </Card>

              {/* Peak Festival Season */}
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-orange-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Peak Festival Season</h3>
                  </div>
                  <p className="text-base text-gray-800 font-medium mb-2">{bestTimeGuide.content.peakSeason}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Intense spiritual atmosphere but with massive crowds. Accommodation and temple access require advance planning.</p>
                </CardContent>
              </Card>
            </div>

            {/* Seasonal Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sun className="h-5 w-5 text-orange-500" />
                    <h3 className="font-semibold text-gray-900">Summer (Apr-Jun)</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{bestTimeGuide.content.summerMonths}</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <CloudRain className="h-5 w-5 text-blue-500" />
                    <h3 className="font-semibold text-gray-900">Monsoon (Jul-Sep)</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{bestTimeGuide.content.monsoonMonths}</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Snowflake className="h-5 w-5 text-cyan-500" />
                    <h3 className="font-semibold text-gray-900">Winter (Oct-Mar)</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">Cool and pleasant. Best overall experience for comfort and accessibility.</p>
                </CardContent>
              </Card>
            </div>

            {/* Personalized Recommendations */}
            <Card className="border-gray-200 mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Based on Your Profile</h3>
                <ul className="space-y-3">
                  {bestTimeGuide.content.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700 leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        <Separator className="my-12" />

        {/* Dress Code & Temple Etiquette */}
        {dressCodeGuide && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dress Code & Temple Etiquette</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {dressCodeGuide.summary}
            </p>

            <Card className="border-gray-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shirt className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-semibold text-gray-900">General Dress Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  {dressCodeGuide.content.generalGuidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700 leading-relaxed">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Strict Enforcement</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{dressCodeGuide.content.strictTemples}</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Info className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Practical Tips</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{dressCodeGuide.content.recommendations}</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        <Separator className="my-12" />

        {/* Additional Planning Topics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Planning Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Crowd Management</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Major temples like Banke Bihari and Krishna Janmabhoomi experience wait times of 2-4 hours during weekends and festivals. Plan early morning visits on weekdays for shorter queues.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Senior citizens and families with children should avoid peak festival days unless prepared for large crowds and extended standing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety & Security</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Keep valuables secure and minimal. Krishna Janmabhoomi prohibits electronic devices - use provided lockers. Travel in groups during festival seasons.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Always carry identification. Follow police and temple authority instructions during high-traffic periods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility for Senior Citizens</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  ISKCON Vrindavan and Prem Mandir offer better accessibility with wheelchair facilities. Traditional temples like Banke Bihari have limited accessibility due to historical architecture.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Request assistance from temple volunteers. Visit during November-February for comfortable walking temperatures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Photography Policies</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Photography is prohibited inside Banke Bihari Temple and Krishna Janmabhoomi inner sanctums. Prem Mandir allows exterior photography but restricts cameras inside the temple.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Always check temple-specific policies. Respect restrictions to avoid confrontation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Q&A Section */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Planning Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How many days should I allocate for visiting Mathura-Vrindavan?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                A minimum of 2-3 days allows visits to major temples (Banke Bihari, Krishna Janmabhoomi, ISKCON, Prem Mandir) and key spiritual places (Kesi Ghat, Nidhivan). Festival participants should add 1-2 days. Comprehensive exploration requires 4-5 days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it safe to travel solo to Mathura-Vrindavan?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Yes, Mathura-Vrindavan is generally safe for solo travelers, including women. Stay in reputable accommodations, avoid isolated areas after dark, and keep valuables secure. Major temples have security personnel and police presence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to book temple visits in advance?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                No advance booking is required for regular darshan at most temples. However, some temples like ISKCON offer VIP darshan options with advance booking. During Janmashtami and major festivals, accommodation should be booked months in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanYourVisit;
import React from 'react';
import { festivals } from '../data/mockTemples';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Users, AlertTriangle, Info } from 'lucide-react';

const Festivals = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Rituals</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            Mathura-Vrindavan celebrates vibrant festivals rooted in Krishna's life and teachings. Each festival carries deep spiritual significance and transforms the region into a center of devotional celebration. This guide provides practical information for festival participation.
          </p>
        </div>

        {/* AI-Extractable Summary */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Understanding Festivals in Mathura-Vrindavan</h2>
          <p className="text-base text-gray-800 leading-relaxed">
            Festivals in Mathura-Vrindavan mark significant events in Lord Krishna's life, seasonal celebrations, and devotional observances. Major festivals like Janmashtami, Holi, and Radha Ashtami attract millions of devotees. These occasions offer intense spiritual experiences but require advance planning for crowds, accommodation, and safety. Festival dates follow the lunar calendar and vary annually.
          </p>
        </div>

        {/* Major Festivals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Major Festivals</h2>
          <div className="space-y-8">
            {festivals.map((festival) => (
              <Card key={festival.id} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-center space-x-3 mb-4 md:mb-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{festival.name}</h3>
                        <p className="text-sm text-gray-600">August/September (Lunar Calendar)</p>
                      </div>
                    </div>
                    <Badge className="bg-red-100 text-red-700 border-red-300 self-start">
                      <Users className="h-3 w-3 mr-1" />
                      {festival.crowdExpectation}
                    </Badge>
                  </div>

                  <p className="text-base text-gray-800 font-medium mb-4">{festival.summary}</p>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">{festival.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <h4 className="font-semibold text-gray-900">Safety & Crowd Notes</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{festival.safetyNotes}</p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2 mb-2">
                        <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <h4 className="font-semibold text-gray-900">Best Festival Experience</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{festival.bestExperience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Festival Cards (Placeholders for expansion) */}
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Radha Ashtami</h3>
                    <p className="text-sm text-gray-600">August/September (8 days after Janmashtami)</p>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Radha Ashtami celebrates the appearance of Radha, Krishna's eternal consort and the embodiment of divine love. Temples dedicated to Radha, especially Radha Vallabh, experience heightened devotional activities. The day emphasizes Radha's supreme position in Vrindavan's spiritual tradition.
                </p>
                <p className="text-sm text-gray-600 italic">Detailed content for this festival will be added soon.</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Holi in Vrindavan</h3>
                    <p className="text-sm text-gray-600">February/March (Full Moon Day)</p>
                  </div>
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Holi in Vrindavan is world-famous, commemorating Krishna's playful color celebrations with the gopis. The festival spans several days with unique traditions at Banke Bihari (flower Holi) and other temples. Expect massive crowds, vibrant colors, and intense energy.
                </p>
                <p className="text-sm text-gray-600 italic">Detailed content for this festival will be added soon.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Festival Planning Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Festival Planning Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accommodation</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Book 2-3 months in advance for major festivals like Janmashtami and Holi. Hotels and guesthouses fill quickly. ISKCON offers guest house accommodation for devotees with advance reservation.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Prices increase significantly during festivals. Confirm bookings and cancellation policies in advance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transportation</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Roads around temples are closed or restricted during major festivals. Plan for walking distances. Local transport (auto-rickshaws, cycle-rickshaws) increases fares during peak times.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Arrive at temples at least 3-4 hours before midnight celebrations during Janmashtami.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Health & Stamina</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Festival participation involves long standing, crowds, and exposure to elements. Stay hydrated, wear comfortable shoes, and carry minimal belongings.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Senior citizens should assess stamina carefully. Consider visiting during less crowded morning hours rather than peak evening celebrations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Sensitivity</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Respect local customs and temple protocols. Dress modestly even during Holi celebrations. Avoid aggressive behavior in crowds.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Photography may be restricted during certain rituals. Always ask permission before photographing people or ceremonies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Q&A Section */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Questions About Festivals</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">When exactly is Janmashtami celebrated?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Janmashtami falls on the eighth day (Ashtami) of the dark fortnight in the month of Bhadrapada (August-September) according to the Hindu lunar calendar. The exact date varies each year. Check annual religious calendars for precise dates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it advisable to bring children to Janmashtami celebrations?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Families with young children should carefully consider crowd intensity and safety. Smaller temples or daytime celebrations are more suitable than midnight gatherings at Banke Bihari or Krishna Janmabhoomi. Supervise children closely and avoid peak crowd hours.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can international visitors participate in festivals?</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Yes, international visitors are welcome at all festivals. ISKCON Vrindavan specifically caters to international devotees with English-speaking volunteers and guides. Respect cultural norms, dress codes, and temple etiquette to ensure a positive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;
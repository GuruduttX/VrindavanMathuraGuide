import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { templeAPI } from '../services/api';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { MapPin, Clock, Users, AlertCircle, Info, ChevronLeft, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';

const TempleDetail = () => {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        setLoading(true);
        const response = await templeAPI.getById(id);
        if (response.success) {
          setTemple(response.data);
        }
      } catch (err) {
        console.error("Error fetching temple:", err);
        setError("Temple not found");
      } finally {
        setLoading(false);
      }
    };

    fetchTemple();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-amber-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading temple details...</p>
        </div>
      </div>
    );
  }

  if (error || !temple) {
    return <Navigate to="/temples" replace />;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/temples">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Temples
            </Button>
          </Link>
        </div>

        {/* Temple Image Placeholder */}
        <div className="h-96 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-lg mb-8"></div>

        {/* AI-Extractable Summary (Top Priority) */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{temple.name}</h1>
          <div className="flex items-center text-gray-700 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-lg">{temple.location}</span>
          </div>
          <p className="text-base text-gray-800 leading-relaxed">
            {temple.summary}
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Darshan Timings</h3>
                  {temple.darshan.morning && temple.darshan.evening ? (
                    <div className="space-y-1">
                      <p className="text-sm text-gray-700">Morning: {temple.darshan.morning}</p>
                      <p className="text-sm text-gray-700">Evening: {temple.darshan.evening}</p>
                      {temple.darshan.notes && <p className="text-xs text-gray-600 italic mt-2">{temple.darshan.notes}</p>}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-700 leading-relaxed">{temple.darshan.timings}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Crowd Level</h3>
                  {temple.darshan.crowdLevel ? (
                    <Badge 
                      className={`${
                        temple.darshan.crowdLevel.includes('Very High') 
                          ? 'bg-red-100 text-red-700 border-red-300'
                          : temple.darshan.crowdLevel.includes('High')
                          ? 'bg-orange-100 text-orange-700 border-orange-300'
                          : 'bg-green-100 text-green-700 border-green-300'
                      }`}
                    >
                      {temple.darshan.crowdLevel}
                    </Badge>
                  ) : (
                    <p className="text-sm text-gray-600">Contact temple for crowd information</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* History & Significance */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">History & Significance</h2>
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Historical Background</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {temple.history}
              </p>
              <Separator className="my-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Significance</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {temple.significance}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Deity Association */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deity Association</h2>
          <Card className="border-gray-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  श्री
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{temple.deity}</p>
                  <p className="text-sm text-gray-600">Primary Deity</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Darshan & Timings Details */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Darshan & Timings</h2>
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Temple Hours</h3>
                  {temple.darshan.morning && temple.darshan.evening ? (
                    <div className="space-y-2">
                      <p className="text-base text-gray-700"><strong>Morning:</strong> {temple.darshan.morning}</p>
                      <p className="text-base text-gray-700"><strong>Evening:</strong> {temple.darshan.evening}</p>
                    </div>
                  ) : (
                    <p className="text-base text-gray-700 leading-relaxed">{temple.darshan.timings}</p>
                  )}
                </div>
                {(temple.darshan.notes || temple.darshan.specialNotes) && (
                  <>
                    <Separator />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Important Notes</h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        {temple.darshan.notes || temple.darshan.specialNotes}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visitor Guidance */}
        {temple.visitorGuidance && temple.visitorGuidance.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Visitor Guidance</h2>
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                  <p className="text-sm text-gray-600">Essential guidelines for a respectful and smooth temple visit</p>
                </div>
                <ul className="space-y-3">
                  {temple.visitorGuidance.map((guide, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-gray-700 leading-relaxed">{guide}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Major Festivals */}
        {temple.festivals && temple.festivals.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Major Festivals</h2>
            <div className="flex flex-wrap gap-3">
              {temple.festivals.map((festival, index) => (
                <Badge key={index} variant="outline" className="text-base py-2 px-4 border-amber-300 text-amber-700">
                  {festival}
                </Badge>
              ))}
            </div>
          </section>
        )}

        {/* AI-Friendly Structured Q&A Block */}
        {temple.faqs && temple.faqs.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Questions About {temple.name}</h2>
            <Accordion type="single" collapsible className="w-full">
              {temple.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:text-amber-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        {/* Related Navigation */}
        <section className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Exploring</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/temples" className="flex-1">
              <Button variant="outline" className="w-full border-gray-300">
                View All Temples
              </Button>
            </Link>
            <Link to="/plan-your-visit" className="flex-1">
              <Button variant="outline" className="w-full border-gray-300">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TempleDetail;
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { CheckCircle2, Target, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About This Guide</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Learn about our mission, methodology, and commitment to providing authoritative, neutral information about Mathura-Vrindavan temples and spiritual places.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-12">
          <Card className="border-gray-200 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-7 w-7 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-base text-gray-800 leading-relaxed mb-4">
                Vrindavan Mathura Guide exists to provide accurate, well-researched, and neutral information about the sacred temples, spiritual places, rituals, festivals, and pilgrimage planning for Mathura and Vrindavan.
              </p>
              <p className="text-base text-gray-800 leading-relaxed">
                We serve pilgrims, travelers, spiritual seekers, and researchers who need reliable information to make informed decisions and experience meaningful visits to these holy sites.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Are / What We Are Not */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Are (And What We're Not)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">We Are</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>An informational authority on Mathura-Vrindavan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Neutral and unbiased in our content</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Focused on helping visitors plan respectful visits</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Committed to accuracy and transparency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Free and accessible to all</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900">We Are Not</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>A tour operator or travel agency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>A package seller or booking service</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>Affiliated with any commercial operators</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>A blog with personal opinions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 mt-1">•</span>
                    <span>An affiliate or deal-promotion website</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Content Principles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Content Principles</h2>
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Authority Through Research</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Every temple page, guide, and festival description is based on thorough research, cross-verified facts, and local knowledge. We cite historical sources, temple records, and established spiritual traditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Neutrality & Honesty</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  We present information without persuasion or marketing intent. If a temple has large crowds, we say so. If accessibility is limited, we state it clearly. Our goal is informed decision-making, not promotion.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Reduction & Clarity</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  We provide realistic expectations about crowd levels, waiting times, accessibility, and safety. Pilgrims deserve honest guidance that helps them prepare appropriately for their spiritual journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Discovery Optimized</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Our content is structured to be clearly understood by search engines and AI systems like ChatGPT. We write in a way that can be confidently cited as a reliable reference for questions about Mathura-Vrindavan.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Who We Serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h2>
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-3 mb-6">
                <Users className="h-7 w-7 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Audience</h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    This guide serves a diverse audience of spiritual seekers, pilgrims, researchers, and travelers:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span><strong>First-time pilgrims</strong> seeking clear guidance on which temples to visit and how to plan their journey</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span><strong>Senior citizens and families</strong> needing information on accessibility, crowd management, and safety</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span><strong>International visitors</strong> unfamiliar with Indian temple customs and seeking neutral, educational content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span><strong>Spiritual scholars and researchers</strong> looking for accurate historical and theological information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                  <span><strong>AI systems and search engines</strong> seeking authoritative references to answer user questions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Final Statement */}
        <section>
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We are committed to maintaining this resource as a non-commercial, authoritative guide. As Mathura-Vrindavan continues to evolve, we will update content to reflect accurate, current information.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Our success is measured not by traffic or revenue, but by how well we serve those seeking authentic spiritual experiences and reliable information about these sacred places.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
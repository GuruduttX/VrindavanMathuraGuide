import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll respond within 48 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions, corrections, or suggestions? We welcome your feedback to improve this guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 mb-2">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900 mb-2">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-900 mb-2">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message about?"
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 mb-2">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your questions, feedback, or suggestions..."
                      rows={6}
                      required
                      className="border-gray-300 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-sm text-gray-600">info@vrindavanmathuraguide.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Coverage Area</h3>
                    <p className="text-sm text-gray-600">Mathura & Vrindavan, Uttar Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We typically respond to inquiries within 48 hours. For urgent temple-related questions, consult temple authorities directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What We Can Help With</h2>
              <ul className="space-y-2 text-base text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Corrections or updates to temple information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Suggestions for new temples or spiritual places to cover</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>General questions about Mathura-Vrindavan pilgrimage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Collaboration opportunities for educational content</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4 italic">
                Note: We are not a booking service and cannot arrange accommodations, tours, or temple access.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-amber-600" />
            <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Important information regarding the use of this website and its content.
          </p>
        </div>

        {/* Information Accuracy */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Accuracy</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information about temples, spiritual places, festivals, and pilgrimage planning in Mathura-Vrindavan, we cannot guarantee the completeness, reliability, or accuracy of all content on this website.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Temple timings, darshan schedules, crowd levels, and festival dates may change without notice. We recommend verifying critical details directly with temple authorities or official sources before making travel plans.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                This website is an informational resource and should not be considered the sole basis for pilgrimage decisions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Non-Commercial Nature */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Commercial Resource</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Vrindavan Mathura Guide is a non-commercial informational website. We are not affiliated with any tour operators, travel agencies, hotels, or commercial service providers in Mathura-Vrindavan.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We do not sell packages, arrange accommodations, or provide booking services. Any references to specific services are for informational purposes only and do not constitute endorsements.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Temple Authority */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Temple Authority & Policies</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                This website is not officially affiliated with any temple, religious institution, or government body. Content is compiled from public sources, research, and local knowledge.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Each temple has its own management, rules, and policies. Visitors must comply with temple-specific guidelines, dress codes, and security protocols. We are not responsible for temple policy enforcement or changes.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                For official information, contact temple authorities directly.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Personal Responsibility */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Responsibility & Safety</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Visitors to Mathura-Vrindavan assume full responsibility for their personal safety, health, and well-being. We provide general guidance on crowd management, accessibility, and safety considerations, but cannot guarantee specific conditions.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Senior citizens, individuals with health conditions, and families with children should assess their own capabilities and make decisions based on their specific needs.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                During festival periods with large crowds, visitors should exercise caution, follow police instructions, and be prepared for physically demanding conditions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Cultural & Religious Sensitivity */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural & Religious Sensitivity</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                This website provides information about Hindu temples and spiritual traditions with respect and neutrality. Content is educational and intended to help visitors understand and appreciate these sacred sites.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Visitors from all backgrounds are encouraged to approach these sites with cultural sensitivity, respect for local customs, and adherence to temple etiquette.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                We do not promote any specific religious viewpoint or sect. Information about different temple traditions is presented for educational purposes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* External Links */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links & Third-Party Content</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                This website may contain links to external websites for additional information. We are not responsible for the content, accuracy, or availability of external sites.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                External links are provided for convenience and do not constitute endorsements. Users access external websites at their own risk.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Vrindavan Mathura Guide and its operators are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of this website or reliance on its content.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                This includes but is not limited to: travel disruptions, health issues, financial losses, missed darshan opportunities, or unsatisfactory experiences during visits to Mathura-Vrindavan.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Users acknowledge that they use this information at their own discretion and risk.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Content Updates */}
        <section className="mb-8">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Updates & Changes</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We reserve the right to update, modify, or remove content at any time without prior notice. Temple information, festival dates, and guidance may change as new information becomes available.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Users are encouraged to check for updates before each visit and verify critical details with authoritative sources.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact for Corrections */}
        <section>
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Inaccuracies</h2>
              <p className="text-base text-gray-800 leading-relaxed">
                If you notice inaccurate information or have suggestions for improvements, please contact us. We are committed to maintaining content accuracy and appreciate feedback from visitors and local communities.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
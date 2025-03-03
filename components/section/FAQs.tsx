"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How can I become a member?",
    answer: "You can become a member by registering through our website or contacting our support team for further assistance. Our streamlined registration process takes just a few minutes to complete.",
    category: "Membership"
  },
  {
    question: "What are the benefits of joining NPWA?",
    answer: "As a member, you'll enjoy numerous benefits including: access to exclusive events and workshops, professional networking opportunities, industry resources and publications, mentorship programs, and special discounts on partner services.",
    category: "Benefits"
  },
  {
    question: "How do I submit my feedback?",
    answer: "You can submit feedback through multiple channels: our online feedback form, direct email to support, or during our regular member surveys. All feedback is reviewed by our team to continuously improve our services.",
    category: "Support"
  },
  {
    question: "Can I update my membership details?",
    answer: "Yes, you can easily update your membership details through your personal dashboard. Log in to your account, navigate to 'Profile Settings,' and modify your information as needed. Changes are updated instantly.",
    category: "Membership"
  },
  {
    question: "Is there a fee for membership?",
    answer: "While basic membership is free, we offer premium tiers with enhanced benefits. Our Premium tier is $49.99/month, Gold tier is $79.99/month, and Platinum tier is $129.99/month. Each tier includes progressively more exclusive benefits.",
    category: "Pricing"
  },
  {
    question: "How is my feedback used?",
    answer: "Your feedback directly influences our service improvements. We analyze all member input to identify trends, prioritize enhancements, and develop new programs that better serve our community's needs.",
    category: "Support"
  },
  {
    question: "How can I contact NPWA support?",
    answer: "Our support team is available through multiple channels: Email: support@npwa.com, Phone: 1-800-NPWA-HELP (Mon-Fri, 9AM-5PM EST), Live Chat on our website, or by scheduling a video consultation.",
    category: "Support"
  },
  {
    question: "What events does NPWA organize?",
    answer: "We host a diverse range of events including monthly professional development workshops, quarterly networking mixers, annual leadership conferences, industry-specific seminars, and special interest group meetings. Check our events calendar for upcoming opportunities.",
    category: "Events"
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQs" className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find detailed answers to common questions about NPWA membership, benefits, and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transform transition-all duration-300 ${
                hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`border rounded-xl shadow-lg overflow-hidden bg-white
                  ${openIndex === index ? 'ring-2 ring-blue-400' : ''}
                  ${hoveredIndex === index ? 'shadow-xl' : 'shadow-md'}`}
              >
                {/* Question */}
                <button
                  className={`w-full text-left px-8 py-6 flex items-center justify-between gap-4
                    ${openIndex === index 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' 
                      : 'bg-white text-gray-800 hover:bg-blue-50'
                    } transition-all duration-300`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-medium px-3 py-1 rounded-full
                        ${openIndex === index 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-blue-100 text-blue-600'}`}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </div>
                  <ChevronRight 
                    className={`w-6 h-6 transform transition-transform duration-300
                      ${openIndex === index ? 'rotate-90 text-white' : 'text-blue-600'}`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300
                    ${openIndex === index 
                      ? 'grid-rows-[1fr] opacity-100' 
                      : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                      <p className="text-lg leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
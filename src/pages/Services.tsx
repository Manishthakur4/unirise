
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import services from '@/data/services';

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-scale-navy to-scale-teal text-white py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Scale Services</h1>
              <p className="text-lg leading-relaxed mb-8">
                We offer comprehensive services to ensure your weighing equipment performs at its best. From calibration to repairs, our factory-trained technicians have you covered.
              </p>
              <Button asChild className="bg-white text-scale-navy hover:bg-white/90 px-6 py-3 text-lg">
                <a href="#services">Explore Our Services</a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section id="services" className="py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Our Services</h2>
              <p className="section-subheading mx-auto">
                Comprehensive solutions to keep your weighing equipment accurate and reliable
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                  <div className="p-4 bg-scale-navy text-white font-bold">
                    Services Menu
                  </div>
                  <nav className="p-4">
                    <ul className="space-y-2">
                      {services.map((service) => (
                        <li key={service.id}>
                          <button
                            onClick={() => setActiveService(service.id)}
                            className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                              activeService === service.id
                                ? 'bg-scale-teal text-white'
                                : 'text-scale-navy hover:bg-gray-100'
                            }`}
                          >
                            {service.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className={`bg-white rounded-lg shadow-md overflow-hidden transition-opacity duration-300 ${
                      activeService === service.id ? 'block animate-fade-in' : 'hidden'
                    }`}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={service.images} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-scale-navy/80 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-scale-navy mb-4">Key Benefits</h4>
                      <ul className="space-y-3 mb-6">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-scale-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-scale-gray">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-xl font-bold text-scale-navy mb-4">About this Service</h4>
                      <p className="text-scale-gray mb-6">{service.longDescription}</p>
                      
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <Button asChild className="bg-scale-navy hover:bg-scale-navy/90">
                          <Link to="/contact">Request This Service</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-scale-navy text-scale-navy hover:bg-scale-navy/10">
                          <Link to="/contact">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Our Service Process</h2>
              <p className="section-subheading mx-auto">
                How we ensure your equipment gets the care it deserves
              </p>
            </div>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-scale-teal/30 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: 1,
                    title: "Initial Assessment",
                    description: "We evaluate your equipment and specific requirements to provide accurate recommendations."
                  },
                  {
                    step: 2,
                    title: "Service Proposal",
                    description: "You receive a detailed proposal outlining the recommended services and associated costs."
                  },
                  {
                    step: 3,
                    title: "Service Execution",
                    description: "Our factory-trained technicians perform the required services with precision and care."
                  },
                  {
                    step: 4,
                    title: "Documentation & Follow-up",
                    description: "We provide comprehensive documentation and ensure your complete satisfaction."
                  }
                ].map((process) => (
                  <div key={process.step} className="relative">
                    <div className="bg-white rounded-lg shadow-md p-6 relative z-10">
                      <div className="mx-auto md:mx-0 bg-scale-teal text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                        {process.step}
                      </div>
                      <h3 className="text-xl font-bold text-scale-navy mb-3">{process.title}</h3>
                      <p className="text-scale-gray">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        {/* <section className="py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">What Our Clients Say</h2>
              <p className="section-subheading mx-auto">
                Hear from businesses who rely on our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Unirise's calibration service is exceptional. Their technicians are professional, thorough, and maintain the accuracy of our laboratory scales year after year.",
                  author: "Dr. Emily Chen",
                  role: "Lab Director",
                  company: "NexGen Pharmaceuticals"
                },
                {
                  quote: "When our main production scale broke down, Unirise had a technician on-site within hours. Their repair service saved us from costly downtime.",
                  author: "James Wilson",
                  role: "Operations Manager",
                  company: "American Food Processing"
                },
                {
                  quote: "Their integration team helped us connect our scales to our inventory management system. The data automation has significantly reduced errors and saved us countless hours.",
                  author: "Sarah Rodriguez",
                  role: "IT Director",
                  company: "Global Supply Co."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-scale-teal mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                  </div>
                  <p className="text-scale-gray italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-scale-navy">{testimonial.author}</p>
                    <p className="text-scale-gray text-sm">{testimonial.role}</p>
                    <p className="text-scale-gray text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="section-subheading mx-auto">
                Common questions about our service offerings
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How often should I have my scales calibrated?",
                    answer: "The recommended calibration frequency depends on the scale type, usage patterns, and regulatory requirements. Generally, we recommend quarterly or semi-annual calibration for critical weighing applications and annual calibration for less critical uses. Our technicians can help establish the optimal calibration schedule for your specific equipment."
                  },
                  {
                    question: "Do you provide emergency repair services?",
                    answer: "Yes, we offer emergency repair services for critical weighing equipment. Our goal is to have a technician on-site within 24-48 hours of your call. For established service contract customers, we prioritize emergency response times."
                  },
                  {
                    question: "Can you integrate scales with my existing software?",
                    answer: "Absolutely. Our integration services can connect your weighing equipment with most ERP, inventory management, or custom software systems. We specialize in creating seamless data flows that eliminate manual data entry and improve accuracy."
                  },
                  {
                    question: "Are your calibration services traceable to national standards?",
                    answer: "Yes, all our calibration services are performed using NIST-traceable standards and follow documented procedures that comply with ISO requirements. We provide comprehensive calibration certificates for each service performed."
                  },
                  {
                    question: "Do you service all brands of scales?",
                    answer: "We service and repair virtually all brands and types of weighing equipment. Our technicians are factory-trained on major brands and have experience with a wide range of scales from precision laboratory balances to large industrial floor scales."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold text-scale-navy mb-3">{faq.question}</h3>
                    <p className="text-scale-gray">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-scale-teal text-white">
          <div className="scale-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Schedule a Service?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our service team to discuss your specific needs and schedule an appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-white text-scale-teal hover:bg-white/90">
                <Link to="/contact">Contact Service Team</Link>
              </Button>
              <Button asChild className="bg-scale-navy hover:bg-scale-navy/90">
                <a href="tel:+919540488176">Call +91 9540488176,77</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;

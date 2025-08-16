
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-scale-navy text-white py-16">
          <div className="scale-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">About Unirise</h1>
                <p className="text-lg leading-relaxed mb-6">
                  For over 10 years, Unirise has been the trusted provider of precision weighing solutions for businesses across industries. From laboratory research to industrial manufacturing, we've helped thousands of customers find the perfect scales for their needs.
                </p>
                <div className="flex space-x-4">
                  <Button asChild className="bg-scale-teal hover:bg-scale-teal/90">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Link to="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/unirise-techno-services-pvt-ltd-greater-noida-corporate-companies-305dxgnafe.jpg" 
                  alt="Unirise team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Our Story</h2>
              <p className="section-subheading mx-auto">
                From humble beginnings to industry leaders
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/unirise-techno-services-pvt-ltd-greater-noida-corporate-companies-305dxgnafe.jpg" 
                  alt="Unirise founding" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-scale-navy mb-4">From Garage to Global</h3>
                {/* <p className="text-scale-gray mb-4">
                  Unirise was founded in 2015 by Mr.Govind Kumar Jha & Mr. Gopal Jha, two engineers who saw a gap in the market for high-quality, affordable weighing solutions. What started as a small operation in their garage has grown into a successfull company with customers in over 50 countries.
                </p> */}
                <p className="text-scale-gray mb-4">
                  Our founders' deep expertise in metrology and precision measurement remains at the core of our business. While we've grown substantially, we maintain the same commitment to quality, accuracy, and customer service that defined our early days.
                </p>
                <p className="text-scale-gray">
                  Today, Unirise is recognized as an industry leader, known for our extensive product selection, technical expertise, and dedicated support team. We continue to innovate and expand our offerings to meet the evolving needs of our customers.
                </p>
              </div>
            </div>
            
            {/* Timeline */}
            <div className="mt-16 relative before:absolute before:inset-0 before:left-1/2 before:-ml-0.5 before:w-0.5 before:bg-gray-200">
              <div className="ml-auto pl-8 pr-0 w-1/2 relative mb-12">
                <div className="absolute top-5 left-0 -ml-5 w-10 h-10 rounded-full bg-scale-teal text-white flex items-center justify-center">2015</div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-scale-navy mb-2">Company Founded</h4>
                  <p className="text-scale-gray">Unirise begins operations, focusing on laboratory and analytical balances.</p>
                </div>
              </div>
              
              <div className="mr-auto pr-8 pl-0 w-1/2 relative mb-12">
                <div className="absolute top-5 right-0 -mr-5 w-10 h-10 rounded-full bg-scale-teal text-white flex items-center justify-center">2017</div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-scale-navy mb-2">Expansion to Industrial Scales</h4>
                  <p className="text-scale-gray">Product line grows to include industrial and commercial weighing equipment.</p>
                </div>
              </div>
              
              <div className="ml-auto pl-8 pr-0 w-1/2 relative mb-12">
                <div className="absolute top-5 left-0 -ml-5 w-10 h-10 rounded-full bg-scale-teal text-white flex items-center justify-center">2020</div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-scale-navy mb-2">Service Division Launch</h4>
                  <p className="text-scale-gray">Technical services department established for calibration, repair, and maintenance.</p>
                </div>
              </div>
              
              <div className="mr-auto pr-8 pl-0 w-1/2 relative mb-12">
                <div className="absolute top-5 right-0 -mr-5 w-10 h-10 rounded-full bg-scale-teal text-white flex items-center justify-center">2023</div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-scale-navy mb-2">Expanding Expansions</h4>
                  <p className="text-scale-gray">Unirise begins shipping and deliverind, serving customers globally.</p>
                </div>
              </div>
              
              <div className="ml-auto pl-8 pr-0 w-1/2 relative">
                <div className="absolute top-5 left-0 -ml-5 w-10 h-10 rounded-full bg-scale-teal text-white flex items-center justify-center">2025</div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-scale-navy mb-2">Digital Transformation</h4>
                  <p className="text-scale-gray">Launch of IoT-enabled scales and cloud integration services for modern businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        {/* <section className="py-16 bg-gray-50">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Our Leadership Team</h2>
              <p className="section-subheading mx-auto">
                Meet the experts behind Unirise's success
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Michael Thompson",
                  title: "Co-Founder & CEO",
                  bio: "With 25+ years in precision measurement, Michael leads our company vision and strategy.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Susan Thompson",
                  title: "Co-Founder & CTO",
                  bio: "Susan oversees product development and ensures our scales meet the highest quality standards.",
                  image: "/placeholder.svg"
                },
                {
                  name: "David Chen",
                  title: "Director of Operations",
                  bio: "David manages our global supply chain and ensures efficient fulfillment for all customers.",
                  image: "/placeholder.svg"
                },
                {
                  name: "Rebecca Martinez",
                  title: "Customer Success Manager",
                  bio: "Rebecca leads our support team, ensuring exceptional service and customer satisfaction.",
                  image: "/placeholder.svg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-scale-navy">{member.name}</h3>
                    <p className="text-scale-teal text-sm font-medium mb-3">{member.title}</p>
                    <p className="text-scale-gray">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* Our Values */}
        {/* <section className="py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-heading">Our Core Values</h2>
              <p className="section-subheading mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "Precision",
                  description: "We're committed to accuracy in every aspect of our business, from the products we sell to the advice we provide."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Innovation",
                  description: "We continuously seek new technologies and solutions to help our customers meet their weighing challenges."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Customer-First",
                  description: "We place our customers at the center of everything we do, ensuring their success through personalized service."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Quality",
                  description: "We offer only products that meet our rigorous standards for durability, accuracy, and performance."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                  title: "Integrity",
                  description: "We operate with honesty and transparency in all our dealings, building trust with customers and partners."
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "Continuous Improvement",
                  description: "We're always looking for ways to enhance our products, services, and internal processes."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-scale-navy mb-3">{value.title}</h3>
                  <p className="text-scale-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* CTA Section */}
        <section className="py-16 bg-scale-navy text-white">
          <div className="scale-container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a single scale or a complete weighing solution for your business, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-scale-teal hover:bg-scale-teal/90">
                <Link to="/products">Shop Our Products</Link>
              </Button>
              <Button asChild className="bg-scale-orange hover:bg-scale-orange/90">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

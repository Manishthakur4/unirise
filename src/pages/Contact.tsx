
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceInterest: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          serviceInterest: [...prev.serviceInterest, value]
        };
      } else {
        return {
          ...prev,
          serviceInterest: prev.serviceInterest.filter(item => item !== value)
        };
      }
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. Our team will get back to you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        serviceInterest: []
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-scale-navy to-scale-teal text-white py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg leading-relaxed">
                Have questions or need assistance? Our team is here to help you find the perfect weighing solution for your needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="scale-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-scale-navy rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-scale-navy mb-2">Call Us</h3>
                <p className="text-scale-gray mb-4">Our support team is available Monday-Friday, 8am-6pm EST</p>
                <a href="tel:+15551234567" className="text-scale-teal hover:underline font-medium">
                  (555) 123-4567
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-scale-teal rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-scale-navy mb-2">Email Us</h3>
                <p className="text-scale-gray mb-4">Send us an email and we'll respond as soon as possible</p>
                <a href="mailto:info@scalesavvy.com" className="text-scale-teal hover:underline font-medium">
                  info@scalesavvy.com
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-scale-orange rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-scale-navy mb-2">Visit Us</h3>
                <p className="text-scale-gray mb-4">Our headquarters are open for visitors Monday-Friday, 9am-5pm</p>
                <address className="not-italic text-scale-teal">
                  123 Weighing Avenue<br />
                  Scale City, SC 12345
                </address>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 bg-scale-navy text-white">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-scale-navy mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-scale-navy mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-scale-navy mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-scale-navy mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-scale-navy mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-scale-navy mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      >
                        <option value="">Select a Subject</option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Product Support">Product Support</option>
                        <option value="Service Request">Service Request</option>
                        <option value="Warranty Claim">Warranty Claim</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-scale-navy mb-1">
                      What services are you interested in?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Scale Purchases",
                        "Calibration Services",
                        "Scale Repair",
                        "Scale Rental",
                        "Custom Integration",
                        "Consultation"
                      ].map((service) => (
                        <div key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.replace(/\s+/g, '')}
                            name="serviceInterest"
                            value={service}
                            checked={formData.serviceInterest.includes(service)}
                            onChange={handleCheckboxChange}
                            className="mr-2 rounded text-scale-teal focus:ring-scale-teal"
                          />
                          <label htmlFor={service.replace(/\s+/g, '')} className="text-scale-gray">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-scale-navy mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:ring-scale-teal focus:border-scale-teal"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-scale-teal hover:bg-scale-teal/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-12 bg-gray-50">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="section-heading">Our Location</h2>
              <p className="text-scale-gray">
                Visit our headquarters to see our showroom and meet with our experts in person.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[16/9] w-full bg-gray-200 flex items-center justify-center">
                <p className="text-scale-gray">Interactive Map Would Be Embedded Here</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-scale-navy mb-2">ScaleSavvy Headquarters</h3>
                <address className="not-italic text-scale-gray mb-4">
                  123 Weighing Avenue<br />
                  Scale City, SC 12345<br />
                  United States
                </address>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-scale-navy mb-1">Business Hours</h4>
                    <p className="text-scale-gray">Monday-Friday: 9am-5pm EST</p>
                    <p className="text-scale-gray">Saturday: 10am-2pm EST</p>
                    <p className="text-scale-gray">Sunday: Closed</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-scale-navy mb-1">Contact</h4>
                    <p className="text-scale-gray">Phone: (555) 123-4567</p>
                    <p className="text-scale-gray">Email: info@scalesavvy.com</p>
                    <p className="text-scale-gray">Fax: (555) 123-4568</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-12">
          <div className="scale-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-scale-navy mb-4">Need Technical Support?</h3>
                <p className="text-scale-gray mb-4">
                  Our technical support team is available to help with product questions, troubleshooting, and more.
                </p>
                <a href="mailto:support@scalesavvy.com" className="text-scale-teal hover:underline font-medium">
                  support@scalesavvy.com
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-scale-navy mb-4">Request a Catalog</h3>
                <p className="text-scale-gray mb-4">
                  Browse our complete product line in our comprehensive digital or print catalog.
                </p>
                <a href="#" className="text-scale-teal hover:underline font-medium">
                  Request Catalog
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-scale-navy mb-4">Career Opportunities</h3>
                <p className="text-scale-gray mb-4">
                  Interested in joining our team? Check out our current job openings.
                </p>
                <a href="#" className="text-scale-teal hover:underline font-medium">
                  View Careers
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

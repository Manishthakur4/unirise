import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');
  const productName = searchParams.get('name');
  const isQuoteRequest = searchParams.get('quote') === 'true';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: isQuoteRequest ? 'Quote Request' : (productId ? 'Product Inquiry' : ''),
    message: productName ? `I'm interested in learning more about the ${productName}.` : '',
    serviceInterest: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Update form when URL parameters change
    if (productName) {
      setFormData(prev => ({
        ...prev,
        subject: isQuoteRequest ? 'Quote Request' : 'Product Inquiry',
        message: isQuoteRequest 
          ? `I'd like to request a quote for the ${productName}.` 
          : `I'm interested in learning more about the ${productName}.`
      }));
    }
  }, [productName, isQuoteRequest]);
  
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the message to include service interests
      const serviceInterestsText = formData.serviceInterest.length > 0 
        ? `\n\nServices Interested In: ${formData.serviceInterest.join(', ')}`
        : '';
        
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_name: 'Unirise Sales Team',
        from_email: formData.email,
        to_email: 'sales@Unirisetechnoservices.com',
        reply_to: formData.email,
        subject: formData.subject,
        message: `${formData.message}${serviceInterestsText}`,
        phone: formData.phone,
        company: formData.company
      };

      // Use the EmailJS serviceID, templateID, and userID
      await emailjs.send(
        'service_nydlu0o', // Replace with your actual service ID
        'template_ho5ry1l', // Replace with your actual template ID
        templateParams,
        'gTsCNreIeonwunqdT' // Replace with your actual User ID
      );

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting Unirise. Our team will get back to you shortly.",
      });

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
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Message Sending Failed",
        description: "There was an issue sending your message. Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white ">
      <Navbar />
      <main className="pt-24 pb-16 ">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unirise-red to-unirise-light text-black py-16">
          <div className="scale-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg leading-relaxed">
                Have questions about our weighing solutions? Our team at Unirise is here to help. We believe in service.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="scale-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-unirise-red rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Our support team is available Monday-Friday, 8am-6pm IST</p>
                <a href="tel:+919540488176" className="text-unirise-red hover:underline font-medium">
                 +91 9540488176-77 
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-unirise-light rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond as soon as possible</p>
                <a href="mailto:info@Unirisetechnoservices.com" className="text-unirise-red hover:underline font-medium">
                info@Unirisetechnoservices.com
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-unirise-accent rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our headquarters are open for visitors Monday-Saturday, 9am-6pm IST</p>
                <address className="not-italic text-unirise-red">
                 Block B-68, Sector-88<br />
                 Noida, UP 201305
                </address>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 bg-unirise-red text-white">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                  {productName && (
                    <div className="mt-3 p-3 bg-white/20 rounded-lg">
                      <p className="font-medium">
                        {isQuoteRequest 
                          ? `Requesting a quote for: ${productName}`
                          : `Inquiry about: ${productName}`
                        }
                      </p>
                    </div>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-800 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-800 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-800 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      >
                        <option value="">Select a Subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Service Request">Service Request</option>
                        <option value="Warranty Claim">Warranty Claim</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-800 mb-1">
                      What services are you interested in?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Scale Purchases",
                        "Calibration Services",
                        "Scale Repair",
                        // "Scale Rental",
                        "Custom Integration",
                        // "Consultation"
                      ].map((service) => (
                        <div key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service.replace(/\s+/g, '')}
                            name="serviceInterest"
                            value={service}
                            checked={formData.serviceInterest.includes(service)}
                            onChange={handleCheckboxChange}
                            className="mr-2 rounded text-unirise-red focus:ring-unirise-red"
                          />
                          <label htmlFor={service.replace(/\s+/g, '')} className="text-gray-600">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border rounded-md focus:ring-unirise-red focus:border-unirise-red"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-unirise-red hover:bg-unirise-red/90"
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
              <p className="text-gray-600">
                Visit our headquarters to see our showroom and meet with our experts in person.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[16/9] w-full bg-gray-200 flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?q=28.5297068,77.4228262&z=15&output=embed"
                style={{
                  border: 'none',
                  overflow: 'hidden',
                  margin: 0,
                  display: 'block' // Add this to prevent inline spacing issues
                }}
                allowFullScreen
                title="Google Map" // Always add title for accessibility
              />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Unirise Headquarters</h3>
                <address className="not-italic text-gray-600 mb-4">
                  Block B-68, Sector-88<br />
                  Noida, UP 201305<br />
                  
                </address>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday-Saturday: 9am-6pm IST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Contact</h4>
                    <p className="text-gray-600">Phone: +91 9540488176,77 </p>
                    <p className="text-gray-600">Email: info@Unirisetechnoservices.com</p>
                    {/* <p className="text-gray-600">Fax: (555) 123-4568</p> */}
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Need Technical Support?</h3>
                <p className="text-gray-600 mb-4">
                  Our technical support team is available to help with product questions, troubleshooting, and more.
                </p>
                <a href="mailto:info@Unirisetechnoservices.com" className="text-unirise-red hover:underline font-medium">
                  info@Unirisetechnoservices.com
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Request a Catalog</h3>
                <p className="text-gray-600 mb-4">
                  Browse our complete product line in our comprehensive digital or print catalog.
                </p>
                <a href="#" className="text-unirise-red hover:underline font-medium">
                  Request Catalog
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Center</h3>
                <p className="text-gray-600 mb-4">
                  Unirise offers professional calibration, repair, and maintenance services for all types of scales.
                </p>
                <a href="#" className="text-unirise-red hover:underline font-medium">
                  Service Details
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

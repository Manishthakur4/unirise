
import { Link } from 'react-router-dom';

const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Industry-Leading Accuracy",
      description: "Our scales are engineered to provide exceptional precision, ensuring reliable measurements for your critical applications."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast, Shipping",
      description: "Get your scales quickly with our expedited shipping on all orders over your areas, and enjoy stress free shipping on qualifying purchases."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Expert Calibration",
      description: "Every scale comes pre-calibrated, and we offer professional calibration services to maintain NIST-traceable accuracy."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-scale-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Dedicated Support",
      description: "Our team of weighing experts is available to help you choose the right scale and solve any technical challenges."
    }
  ];

  const testimonials = [
    {
      quote: "Unirise has consistently delivered high-quality scales that meet our strict laboratory requirements. Their calibration service ensures our measurements remain precise year after year.",
      author: "Dr. Sarah Johnson",
      company: "PharmaTech Research",
      image: "/placeholder.svg"
    },
    {
      quote: "We've outfitted our entire warehouse with industrial scales from Unirise. Their durability and accuracy have significantly improved our inventory management efficiency.",
      author: "Michael Rodriguez",
      company: "Global Distribution Co.",
      image: "/placeholder.svg"
    },
    {
      quote: "As a small business owner, I appreciate the personalized service Unirise provides. They helped me find the perfect retail scale solution within my budget.",
      author: "Jennifer Lee",
      company: "Artisan Chocolates",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="scale-container">
        {/* Benefits Section */}
        <div className="text-center mb-12">
          <h2 className="section-heading">Why Choose Unirise</h2>
          <p className="section-subheading mx-auto">
            Trusted by thousands of businesses for quality, precision, and exceptional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-scale-navy mb-2">{benefit.title}</h3>
              <p className="text-scale-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 bg-scale-navy text-white rounded-lg mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-scale-teal mb-2">10+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-scale-teal mb-2">10k+</div>
            <div className="text-sm">Scales Sold</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-scale-teal mb-2">100%</div>
            <div className="text-sm">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-scale-teal mb-2">24/7</div>
            <div className="text-sm">Technical Support</div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        {/* <div className="mb-12">
          <h2 className="section-heading text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
                <div className="absolute -top-5 left-6 text-scale-teal text-6xl">"</div>
                <p className="text-scale-gray italic mb-4 pt-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-scale-navy">{testimonial.author}</div>
                    <div className="text-sm text-scale-gray">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-scale-navy to-scale-teal text-white rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Scale?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Browse our extensive collection of high-quality scales or contact our experts for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="btn-accent px-8 py-3 rounded-md font-semibold text-white bg-scale-orange hover:bg-scale-orange/90">
              Shop Now
            </Link>
            <Link to="/contact" className="px-8 py-3 rounded-md font-semibold bg-white text-scale-navy hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

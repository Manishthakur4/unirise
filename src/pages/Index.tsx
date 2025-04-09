
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Benefits from '@/components/home/Benefits';
import BrandPartners from '@/components/home/BrandPartners';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BrandPartners />
      <main className="pt-28"> {/* Adjusted padding to account for smaller logo */}
        <Hero />
        <FeaturedProducts />
        
        {/* Slogan Section */}
        <section className="py-16 bg-unirise-red text-white">
          <div className="scale-container text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">We Believe In Service</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              At Unirise, our commitment to exceptional service goes beyond just selling quality weighing scales. 
              We're dedicated to providing solutions that meet your unique requirements.
            </p>
            <Button asChild className="bg-white text-unirise-red hover:bg-gray-100 text-lg px-8 py-6">
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </section>
        
        <Benefits />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

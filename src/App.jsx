import React, { useState } from 'react';
import './App.css'
import { Music, Calendar, Star, Phone, Mail, MapPin, Instagram, Facebook, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-purple-500 selection:text-white">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img className='logo' src="large.png" alt="logo" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-purple-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                  >
                    {item}
                  </button>
                ))}
                <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-b border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop" 
            alt="DJ Party Crowd" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-purple-900/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <div className="inline-block p-2 px-4 rounded-full bg-purple-600/20 border border-purple-500/50 backdrop-blur-sm mb-6 animate-fade-in-up">
            <span className="text-purple-300 text-sm font-semibold tracking-wider">PREMIUM EVENT MANAGEMENT</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Make Your Event <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Unforgettable
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Jhunjhunu's premier DJ & Event Management service. We bring the sound, the lights, and the energy to weddings, parties, and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-600/30">
              Get a Quote
            </button>
            <button onClick={() => scrollToSection('gallery')} className="px-8 py-4 bg-transparent border border-gray-500 hover:border-white hover:bg-white/5 rounded-full font-bold text-lg transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-400">Everything you need for a spectacular event.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-800/80 transition-all hover:-translate-y-2 border border-gray-700 hover:border-purple-500/50 group">
              <div className="w-14 h-14 bg-purple-900/50 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:text-purple-300">
                <Music size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional DJ</h3>
              <p className="text-gray-400">
                High-energy mixing across all genres: Bollywood, Punjabi, EDM, and Retro. Premium sound systems that fill the venue.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-800/80 transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50 group">
              <div className="w-14 h-14 bg-pink-900/50 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:text-pink-300">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Lighting & Visuals</h3>
              <p className="text-gray-400">
                Intelligent lighting, lasers, smoke machines, and LED walls to create an immersive visual atmosphere.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-800/80 transition-all hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50 group">
              <div className="w-14 h-14 bg-blue-900/50 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:text-blue-300">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Event Planning</h3>
              <p className="text-gray-400">
                Full-scale management for weddings, anniversaries, and corporate launches. We handle the logistics so you can party.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Recent Events</h2>
              <p className="text-gray-400">Moments we've created in Jhunjhunu & beyond.</p>
            </div>
            <button className="hidden md:block text-purple-400 hover:text-purple-300 font-medium mt-4 md:mt-0">
              View All on Instagram →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600&auto=format&fit=crop" alt="Concert" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-bold text-lg">Royal Wedding, Mandawa</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl h-64 md:h-80 lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop" alt="DJ Setup" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-bold text-lg">College Fest Night</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl h-64 md:h-80 lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1506157786151-b8491531f436?q=80&w=1200&auto=format&fit=crop" alt="Crowd" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-bold text-lg">New Year's Eve Bash</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl h-64 md:h-80">
              <img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=600&auto=format&fit=crop" alt="Speaker" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-bold text-lg">Private Birthday Party</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section id="testimonials" className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-6 fill-current" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
          
          <div className="bg-gray-800 p-8 md:p-12 rounded-2xl relative">
            <p className="text-xl md:text-2xl text-gray-300 italic mb-8">
              "Anmol made our wedding sangeet absolutely magical. The music selection was perfect for all age groups, and the lighting setup transformed the venue. Highly recommended for anyone in Jhunjhunu!"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Rahul Sharma</p>
                <p className="text-sm text-gray-500">Wedding Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's Plan Your Event</h2>
                <p className="text-gray-400 mb-10">
                  Ready to bring your vision to life? Contact us today for bookings and inquiries.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300">
                    <Phone className="text-purple-500" />
                    <span>+91 91167 04113</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <Mail className="text-purple-500" />
                    <span>booking@djanmoljhunjhunu.in</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <MapPin className="text-purple-500" />
                    <span>Malsisar Road, Jhunjhunu, Rajasthan</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/dj_anmol_jhunjhunu/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-10 md:p-16 md:w-1/2">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input type="text" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="+91..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Event Type</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors">
                    <option>Wedding</option>
                    <option>Corporate Party</option>
                    <option>Birthday</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tell us about your event..."></textarea>
                </div>
                <button type="button" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Dj Anmol Jhunjhunu. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
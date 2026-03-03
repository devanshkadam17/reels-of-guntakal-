/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Instagram, Mail, Phone, MessageSquare, CheckCircle2, TrendingUp, Users, Image as ImageIcon, PlayCircle, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    whatsapp: '',
    category: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration point for EmailJS or other backend services
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will get back to you soon.');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tighter text-white">
            REELS OF <span className="text-accent">GUNTAKAL</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#packages" className="hover:text-white transition-colors">Packages</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#inquiry" className="px-5 py-2.5 bg-accent text-white rounded-full hover:bg-accent-hover transition-all font-semibold">Promote Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-60" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight leading-[1.1]">
              Reels of <span className="text-accent">Guntakal</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
              Promote Your Business to <span className="text-white font-semibold">100,000+</span> Audience
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#inquiry" className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-hover hover:scale-105 transition-all gold-glow">
                Promote Your Business
              </a>
              <a href="#packages" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                View Promotion Packages
              </a>
            </div>

            <a 
              href="https://instagram.com/reels_of_guntakal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-accent transition-colors group"
            >
              <Instagram size={20} />
              <span className="font-medium">Follow us on Instagram</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark-bg relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                The Digital Pulse of Guntakal
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Reels of Guntakal is the most influential local platform dedicated to showcasing the best of our city. From hidden food gems and local shops to essential services and travel spots, we connect businesses with the people who matter most.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                With a massive community of over 100,000 followers, we provide local businesses with the visibility they need to thrive in the digital age.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { label: 'Followers', value: '104K+', icon: <Users className="text-accent" /> },
                { label: 'Posts Shared', value: '1500+', icon: <ImageIcon className="text-accent" /> },
                { label: 'Local Businesses', value: 'Trusted', icon: <Star className="text-accent" /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-dark-card border border-white/5 rounded-2xl flex items-center gap-6"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-display">{stat.value}</div>
                    <div className="text-zinc-500 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Packages Section */}
      <section id="packages" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Pricing</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Promotion Packages</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <motion.div 
              {...fadeIn}
              className="p-8 bg-dark-card border border-white/5 rounded-3xl hover:border-white/10 transition-all"
            >
              <h4 className="text-xl font-bold mb-2">Basic Package</h4>
              <p className="text-zinc-500 mb-6">Perfect for quick announcements</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>1 Instagram Story</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>24-hour visibility</span>
                </div>
              </div>
              <a href="#inquiry" className="block w-full py-4 text-center border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">
                Select Basic
              </a>
            </motion.div>

            {/* Premium Package (Highlighted) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-accent rounded-3xl gold-glow-strong relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Premium Package</h4>
              <p className="text-white/80 mb-6">Maximum reach and engagement</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  <span>1 Reel Video</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  <span>2 Stories</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  <span>Featured Highlight</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={18} />
                  <span>Maximum Reach</span>
                </div>
              </div>
              <a href="#inquiry" className="block w-full py-4 text-center bg-white text-accent rounded-xl font-bold hover:scale-[1.02] transition-all">
                Select Premium
              </a>
            </motion.div>

            {/* Standard Package */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="p-8 bg-dark-card border border-white/5 rounded-3xl hover:border-white/10 transition-all"
            >
              <h4 className="text-xl font-bold mb-2">Standard Package</h4>
              <p className="text-zinc-500 mb-6">Ideal for business growth</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>1 Feed Post</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>2 Stories</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span>Business Tagging</span>
                </div>
              </div>
              <a href="#inquiry" className="block w-full py-4 text-center border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">
                Select Standard
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Promote With Us Section */}
      <section id="why-us" className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent font-bold mb-4">Benefits</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Why Promote With Us</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Targeted Local Audience', desc: 'Reach people living directly in Guntakal and surrounding areas.', icon: <Users /> },
              { title: 'High Engagement', desc: 'Our followers are active and genuinely interested in local updates.', icon: <TrendingUp /> },
              { title: 'Affordable Marketing', desc: 'Premium visibility at a fraction of traditional advertising costs.', icon: <Star /> },
              { title: 'Limited Daily Slots', desc: 'We limit promotions to ensure each business gets maximum attention.', icon: <PlayCircle /> }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-dark-card border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-all"
              >
                <div className="text-accent mb-6">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Inquiry Form Section */}
      <section id="inquiry" className="py-24 bg-zinc-950 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-dark-card border border-white/5 p-8 md:p-12 rounded-[2rem] gold-glow">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Submit Your Promotion Request</h3>
              <p className="text-zinc-400">Fill out the form below and we'll get in touch with you shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Business Name *</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Guntakal Grand Hotel"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Owner Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Phone Number *</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="10-digit number"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp number"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Business Category</label>
                  <select 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="" className="bg-dark-card">Select Category</option>
                    <option value="food" className="bg-dark-card">Food & Restaurant</option>
                    <option value="shopping" className="bg-dark-card">Shopping & Retail</option>
                    <option value="services" className="bg-dark-card">Professional Services</option>
                    <option value="travel" className="bg-dark-card">Travel & Tourism</option>
                    <option value="other" className="bg-dark-card">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Promotion Budget</label>
                  <input 
                    type="text" 
                    placeholder="Approx. budget"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your business and what you want to promote..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              {/* 
                NOTE: To integrate EmailJS later:
                1. Install emailjs-com: npm install @emailjs/browser
                2. Import emailjs from '@emailjs/browser'
                3. Use emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
              */}

              <button 
                type="submit" 
                className="w-full py-5 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-hover hover:scale-[1.01] transition-all gold-glow"
              >
                Submit Promotion Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-dark-bg border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-display font-bold tracking-tighter text-white mb-2">
                REELS OF <span className="text-accent">GUNTAKAL</span>
              </div>
              <p className="text-zinc-500 text-sm">Empowering local businesses through digital storytelling.</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-6">
                <a href="https://instagram.com/reels_of_guntakal" className="text-zinc-400 hover:text-accent transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="mailto:promotions@reelsofguntakal.com" className="text-zinc-400 hover:text-accent transition-colors">
                  <Mail size={24} />
                </a>
                <a href="tel:+910000000000" className="text-zinc-400 hover:text-accent transition-colors">
                  <Phone size={24} />
                </a>
              </div>
              <div className="text-zinc-500 text-sm">
                promotions@reelsofguntakal.com
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-zinc-600 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Reels of Guntakal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

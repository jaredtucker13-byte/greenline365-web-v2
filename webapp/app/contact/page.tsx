'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type FormType = 'suggest' | 'report' | 'general';

function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get('type') as FormType) || 'general';
  const [formType, setFormType] = useState<FormType>(initialType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    businessCategory: '',
    businessLocation: '',
    message: '',
    listingUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to /api/contact or Supabase insert
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-2xl p-10 border border-gold/10 text-center max-w-lg mx-auto"
      >
        <div className="w-14 h-14 rounded-xl glass-gold flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">\u2705</span>
        </div>
        <h2 className="font-heading font-light text-white text-2xl mb-4">
          Thank You
        </h2>
        <p className="text-white/55 font-body text-sm mb-8 leading-relaxed">
          We&apos;ve received your submission and our team will review it shortly.
          Your input helps make GreenLine365 better for everyone.
        </p>
        <Link
          href="/"
          className="btn-primary px-8 py-3 rounded-full text-sm inline-block"
        >
          Back to Directory
        </Link>
      </motion.div>
    );
  }

  return (
    <>
      {/* Form Type Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {([
          { type: 'suggest' as FormType, label: '\u{1F4A1} Suggest a Business' },
          { type: 'report' as FormType, label: '\u{1F527} Report an Issue' },
          { type: 'general' as FormType, label: '\u{1F4AC} General Contact' },
        ]).map((option) => (
          <button
            key={option.type}
            onClick={() => setFormType(option.type)}
            className={`px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
              formType === option.type
                ? 'btn-primary'
                : 'glass border border-white/10 text-white/55 hover:text-white hover:border-gold/30'
            }`}
          >
            {option.label}
          </button>
        ))}
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 md:p-8 border border-gold/10 space-y-6"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder-white/25 focus:border-gold/40 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder-white/25 focus:border-gold/40 focus:outline-none transition-colors"
                placeholder="you@email.com"
              />
            </div>
          </div>

          {/* Suggest a Business Fields */}
          {formType === 'suggest' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              <div>
                <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder-white/25 focus:border-gold/40 focus:outline-none transition-colors"
                  placeholder="e.g., Tony's Mobile Detailing"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body focus:border-gold/40 focus:outline-none transition-colors"
                  >
                    <option value="">Select a category</option>
                    <option value="home-services">Home Services</option>
                    <option value="automotive">Automotive</option>
                    <option value="marine">Marine &amp; Dock Services</option>
                    <option value="health">Health &amp; Wellness</option>
                    <option value="professional">Professional Services</option>
                    <option value="education">Education &amp; Childcare</option>
                    <option value="pets">Pets</option>
                    <option value="mobile">Mobile Services</option>
                    <option value="dining">Dining &amp; Nightlife</option>
                    <option value="shopping">Style &amp; Shopping</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
                    Location
                  </label>
                  <input
                    type="text"
                    name="businessLocation"
                    value={formData.businessLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder-white/25 focus:border-gold/40 focus:outline-none transition-colors"
                    placeholder="e.g., Tampa, FL"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Report Issue Fields */}
          {formType === 'report' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              <div>
                <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
                  Listing URL or Business Name
                </label>
                <input
                  type="text"
                  name="listingUrl"
                  value={formData.listingUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder-white/25 focus:border-gold/40 focus:outline-none transition-colors"
                  placeholder="Paste the listing link or type the business name"
                />
              </div>
            </motion.div>
          )}

          {/* Message */}
          <div>
            <label className="block text-white/50 font-body text-xs font-semibold mb-2 uppercase tracking-wider">
              {formType === 'suggest'
                ? 'Why should we list this business? (Optional)'
                : formType === 'report'
                ? 'What needs to be updated?'
                : 'Your Message'}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required={formType !== 'suggest'}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body placeholder-white/25 focus:border-gold/40 focus:outline-none transition-colors resize-none"
              placeholder={
                formType === 'suggest'
                  ? 'Tell us a bit about this business and why the community would benefit...'
                  : formType === 'report'
                  ? 'Describe what information is incorrect or outdated...'
                  : 'How can we help?'
              }
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary py-3.5 rounded-full text-sm font-heading font-semibold"
          >
            {formType === 'suggest'
              ? 'Submit Suggestion'
              : formType === 'report'
              ? 'Submit Report'
              : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030812] pt-28 pb-20">
      <div className="max-w-[720px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold mb-6">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-light text-white tracking-tight leading-[1.1] mb-6">
            Help Us Build a Better{' '}
            <span className="text-gradient-gold font-semibold">Directory</span>
          </h1>
          <p className="text-sm font-body text-white/55 max-w-xl mx-auto leading-relaxed">
            Whether you want to suggest a business, report outdated info, or just say
            hello — we&apos;d love to hear from you.
          </p>
        </motion.div>

        <Suspense fallback={<div className="text-white/40 text-center text-sm">Loading...</div>}>
          <ContactForm />
        </Suspense>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-white/35 text-xs font-body mb-4">
            You can also reach us on social media
          </p>
          <div className="flex justify-center gap-6">
            {[
              { label: 'Facebook', href: 'https://facebook.com/greenline365' },
              { label: 'Instagram', href: 'https://instagram.com/greenline365' },
              { label: 'X', href: 'https://twitter.com/greenline365' },
              { label: 'TikTok', href: 'https://tiktok.com/@greenline365' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold text-xs font-body transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030812] pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* ========== HERO — Mission Statement ========== */}
        <section className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold mb-6">
              About GreenLine365
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-light text-white tracking-tight leading-[1.1] mb-8">
              The Operating System for Your{' '}
              <span className="text-gradient-gold font-semibold">Local Economy</span>
            </h1>
            <p className="text-base sm:text-lg font-body text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              GreenLine365 is a curated community directory built to connect you with
              verified local businesses, mobile services that come to your door, and
              destination guides that reveal the hidden gems in your city. No ads.
              No pay-to-play rankings. Just the best of your neighborhood, organized
              and easy to find.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#categories"
                className="btn-primary px-8 py-3 rounded-full text-sm"
              >
                Explore the Directory
              </Link>
              <Link
                href="/contact"
                className="btn-ghost px-8 py-3 rounded-full text-sm"
              >
                Suggest a Business
              </Link>
            </div>
          </motion.div>
        </section>

        <div className="section-divider-gold mb-24" />

        {/* ========== THE WHY — Community Mission ========== */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Why We Built This
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-tight mb-6">
                Finding a Reliable Local Pro{' '}
                <span className="text-gradient-gold font-semibold">
                  Shouldn&apos;t Feel Like a Gamble
                </span>
              </h2>
              <div className="space-y-4 font-body text-sm text-white/55 leading-relaxed">
                <p>
                  Generic search engines bury the best local businesses under ads,
                  outdated listings, and companies that aren&apos;t even in your area
                  anymore. You end up scrolling through ten pages of noise just to find
                  someone who can fix your AC or detail your car.
                </p>
                <p>
                  GreenLine365 was built to fix that. We&apos;re a{' '}
                  <strong className="text-white font-medium">curated local ecosystem</strong>{' '}
                  where every business is categorized, verified, and easy to reach — whether
                  you need an HVAC tech at 2 AM or the best barber in Ybor City.
                </p>
                <p>
                  This isn&apos;t a project built in Silicon Valley. It was built right
                  here in{' '}
                  <strong className="text-gold font-medium">Tampa, Florida</strong>{' '}
                  by someone who spent 16 years in professional kitchens and five years
                  crawling through attics as an HVAC technician. We know what it&apos;s
                  like to need a good pro and not know who to call.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold/10">
                <Image
                  src="/images/jared-family.jpg"
                  alt="GreenLine365 founder with family in Tampa, Florida"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030812]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/60 text-sm font-body italic">
                    Built by real people, for real neighborhoods.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-divider-gold mb-24" />

        {/* ========== HOW IT WORKS ========== */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-tight mb-4">
              A Smarter Way to{' '}
              <span className="text-gradient-gold font-semibold">Discover Local</span>
            </h2>
            <p className="text-sm font-body text-white/50 max-w-2xl mx-auto">
              Everything you need to find, save, and connect with the best
              businesses in your area.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '\u{1F50D}',
                title: 'Curated, Not Crowded',
                description:
                  'Every business is logically categorized and vetted. No pay-to-play rankings. No clutter. Just the pros who earned their spot.',
              },
              {
                icon: '\u{1F690}',
                title: 'Mobile Services',
                description:
                  'We spotlight mobile-first businesses — detailers, mobile mechanics, groomers — pros who deliver exceptional service right to your door.',
              },
              {
                icon: '\u{2B50}',
                title: 'Save Your Favorites',
                description:
                  'Create a free profile to bookmark businesses, access exclusive community coupons, and get notified about local deals.',
              },
              {
                icon: '\u{1F5FA}\u{FE0F}',
                title: 'Explore Destinations',
                description:
                  'Our curated travel guides include Entertainment Loops and hidden gems inside each Destination page — your personal concierge to Florida.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg glass-gold flex items-center justify-center mb-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-heading font-semibold text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 font-body text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ========== STATS BAR ========== */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-gold/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '538+', label: 'Verified Businesses' },
                { value: '13', label: 'Categories' },
                { value: '8', label: 'Florida Destinations' },
                { value: '100%', label: 'Free to Browse' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-heading font-light text-gold mb-1">
                    {stat.value}
                  </div>
                  <span className="block text-[10px] sm:text-xs text-white/50 uppercase tracking-wider font-body">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="section-divider-gold mb-24" />

        {/* ========== POWERED BY — Trust & Technology ========== */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Built With Modern Technology
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-tight mb-6">
                Accurate Info.{' '}
                <span className="text-gradient-gold font-semibold">Always Up to Date.</span>
              </h2>
              <div className="space-y-4 font-body text-sm text-white/55 leading-relaxed">
                <p>
                  GreenLine365 is powered by AI and smart automation to ensure
                  listings stay accurate, categories stay relevant, and you always
                  have the most up-to-date information at your fingertips. No stale
                  phone numbers. No businesses that closed two years ago.
                </p>
                <p>
                  <strong className="text-white font-medium">Your privacy matters.</strong>{' '}
                  Our platform is built with{' '}
                  <strong className="text-gold font-medium">AES-256 encryption</strong>{' '}
                  — the same standard used by major financial institutions. When you
                  create a profile, your data is protected at the highest level.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {[
                { icon: '\u{1F916}', title: 'AI-Powered Accuracy', desc: 'Listings are monitored and updated using intelligent automation so you never get bad info.' },
                { icon: '\u{1F510}', title: 'AES-256 Encryption', desc: 'Military-grade security protects your profile and personal data.' },
                { icon: '\u{1F6AB}', title: 'No Pay-to-Play', desc: 'Rankings are earned through quality and community trust, not advertising dollars.' },
                { icon: '\u{1F4F1}', title: 'Mobile-First Design', desc: 'Built to work beautifully on your phone — find a pro from anywhere.' },
              ].map((badge) => (
                <div
                  key={badge.title}
                  className="glass rounded-xl p-4 border border-white/5 hover:border-gold/30 flex gap-4 items-start transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg glass-gold flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{badge.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-semibold text-sm mb-1">
                      {badge.title}
                    </h4>
                    <p className="text-white/50 font-body text-xs leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="section-divider-gold mb-24" />

        {/* ========== FOR BUSINESS OWNERS ========== */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-12 border border-gold/10 text-center"
          >
            <div className="w-14 h-14 rounded-xl glass-gold flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">\u{1F3C6}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-tight mb-4">
              Are You a Local Business?{' '}
              <span className="text-gradient-gold font-semibold">Join the Directory.</span>
            </h2>
            <p className="text-sm font-body text-white/55 max-w-2xl mx-auto mb-8 leading-relaxed">
              Being listed on GreenLine365 means your business has been recognized
              as part of the curated local ecosystem. It&apos;s not just a listing —
              it&apos;s a mark of trust that tells your community you&apos;re the real deal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup-business"
                className="btn-primary px-8 py-3 rounded-full text-sm"
              >
                Add Your Business
              </Link>
              <Link
                href="/pricing"
                className="btn-ghost px-8 py-3 rounded-full text-sm"
              >
                View Listing Tiers
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ========== COMMUNITY ENGAGEMENT ========== */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Built Together
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-tight mb-4">
              Help Us Grow the{' '}
              <span className="text-gradient-gold font-semibold">Directory</span>
            </h2>
            <p className="text-sm font-body text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed">
              Know a great local business that should be listed? Spotted outdated info?
              We&apos;re building this together. Your input makes the directory better
              for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=suggest"
                className="btn-primary px-8 py-3 rounded-full text-sm"
              >
                Suggest a Business
              </Link>
              <Link
                href="/contact?type=report"
                className="btn-ghost px-8 py-3 rounded-full text-sm"
              >
                Report an Issue
              </Link>
              <Link
                href="/contact"
                className="btn-ghost px-8 py-3 rounded-full text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ========== TAMPA PRIDE ========== */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-gold flex items-center justify-center">
                <span className="text-xl">\u{1F4CD}</span>
              </div>
              <div>
                <p className="text-white font-heading font-semibold text-sm">
                  Proudly Built in Tampa, Florida
                </p>
                <p className="text-white/50 font-body text-xs">
                  Curating the best of Florida&apos;s local economy, one neighborhood at a time
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-xs font-body">
              <span>\u{1F334}</span>
              <span>Made with \u{2600}\u{FE0F} in the Sunshine State</span>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

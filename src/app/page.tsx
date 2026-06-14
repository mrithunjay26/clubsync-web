'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document
        .querySelectorAll('.scroll-animate, .slide-in-left, .slide-in-right, .bounce-in')
        .forEach((el) => {
          if (el.getBoundingClientRect().top < window.innerHeight - 150) {
            el.classList.add('animate');
          }
        });
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert(
        "Thank you for your application! If approved, you'll receive a setup email within 48 hours."
      );
      setModalOpen(false);
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  }

  return (
    <div className="gradient-bg text-gray-100 overflow-x-hidden">
      {/* ── Background Elements ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="floating-orb absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl" style={{ animationDelay: '-5s' }} />
        <div className="floating-orb absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-600/15 rounded-full blur-2xl" style={{ animationDelay: '-8s' }} />
        <div className="floating-orb absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500/15 to-teal-600/15 rounded-full blur-2xl" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[20%] left-[16%] w-4 h-4 bg-indigo-400 rounded-full opacity-60 floating-orb" />
        <div className="absolute top-3/4 right-[20%] w-3 h-3 bg-cyan-400 rounded-full opacity-40 floating-orb" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-1/2 left-[80%] w-5 h-5 bg-purple-400 rounded-full opacity-50 floating-orb" style={{ animationDelay: '-2s' }} />
        <div className="absolute bottom-1/3 left-[12%] w-2 h-2 bg-emerald-400 rounded-full opacity-30 floating-orb" style={{ animationDelay: '-7s' }} />
      </div>

      {/* ── CLUBSYNC Watermark ── */}
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h1 className="text-[20vw] md:text-[15vw] font-black text-white opacity-[0.02] select-none tracking-wider">
          CLUBSYNC
        </h1>
      </div>

      {/* ── RGB Line ── */}
      <div className="fixed top-0 left-0 right-0 h-1 rgb-line z-50" />

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl md:text-3xl font-black brand-text">STUIMPACT</span>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#vision" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Vision</a>
              <a href="#for-students" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Students</a>
              <a href="#for-asb" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">ASB</a>
              <a href="#for-clubs" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Clubs</a>
              <a href="#for-administrators" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Administrators</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Features</a>
              <a href="/login" className="glow-button bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-2xl font-bold transition-all duration-300">Open Beta</a>
              <button
                onClick={() => setModalOpen(true)}
                className="glow-button bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300"
              >
                Club Signup
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(true)} className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-gray-700 p-8 md:hidden${mobileMenuOpen ? ' open' : ''}`}>
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold brand-text">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-8">
            {['#vision', '#for-students', '#for-asb', '#for-clubs', '#for-administrators', '#features'].map((href, i) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg">
                {['Vision', 'Students', 'ASB', 'Clubs', 'Administrators', 'Features'][i]}
              </a>
            ))}
            <a href="/login" className="block glow-button bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-center transition-all duration-300 mt-8">Open Beta</a>
            <button
              onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
              className="w-full glow-button bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-2xl text-base font-bold text-center transition-all duration-300"
            >
              Club Signup
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative z-10 min-h-screen flex items-center py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 slide-in-left">
              <div className="space-y-6 md:space-y-8">
                <div className="glass-card rounded-3xl p-4 md:p-6 inline-block">
                  <span className="text-sm md:text-lg font-bold text-emerald-400">🚀 200+ Beta Testers • October 2027 Launch</span>
                </div>
                <h1 className="hero-title font-black leading-tight">
                  <span className="brand-text shimmer-text block">ClubSync</span>
                  <span className="text-white block mt-2 md:mt-4">The Future of Student Connection</span>
                </h1>
                <div className="h-2 w-32 md:w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full" />
                <p className="hero-description text-gray-300 font-light leading-relaxed max-w-2xl">
                  Built by the <span className="brand-text font-bold">StuImpact team</span>, ClubSync helps Washington&apos;s students <span className="success-highlight font-bold">connect, collaborate, and create lasting impact through service, learning, and community engagement</span> — all within a secure, educationally-focused environment.
                </p>
                <div className="glass-card-dark rounded-3xl p-6 md:p-8 border border-cyan-500/40">
                  <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">🎯 Our Mission</h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    As a <span className="brand-text font-semibold">StuImpact initiative</span>, ClubSync exists to empower the next generation of leaders through service, learning, and community engagement — connecting students and clubs to <span className="success-highlight font-semibold">volunteer opportunities, internships, and mentorship</span> across Washington state.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8">
                  <a href="/login" className="glow-button bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold text-center transition-all duration-300">
                    Try Open Beta
                    <span className="block text-xs md:text-sm opacity-80 mt-1">⚠️ Prerelease Version</span>
                  </a>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="glow-button bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold text-center transition-all duration-300"
                  >
                    Club Signup
                  </button>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 pt-6 md:pt-8">
                  <span className="font-medium text-sm md:text-base">Scroll to discover the revolution</span>
                  <svg className="h-5 w-5 md:h-6 md:w-6 scroll-indicator" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="lg:w-1/2 slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl opacity-30 filter blur-3xl" />
                <div className="relative hero-dashboard rounded-3xl p-6 md:p-10 shadow-2xl floating-orb">
                  <div className="flex items-center mb-6 md:mb-8">
                    <div className="flex space-x-2 md:space-x-3">
                      <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-500" />
                      <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 md:ml-8 text-gray-300 font-bold text-sm md:text-lg">ClubSync Platform Preview</div>
                    <div className="ml-auto">
                      <span className="glass-card px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold text-green-400">🔒 Ultra Secure</span>
                    </div>
                  </div>
                  <div className="space-y-4 md:space-y-8">
                    <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-center justify-between">
                      <div className="flex items-center space-x-3 md:space-x-6">
                        <div className="h-6 w-6 md:h-10 md:w-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        <div className="h-3 w-24 md:h-5 md:w-40 bg-gray-600 rounded-full" />
                      </div>
                      <div className="flex space-x-2 md:space-x-3">
                        <div className="h-5 w-5 md:h-8 md:w-8 bg-gray-600 rounded-lg" />
                        <div className="h-5 w-5 md:h-8 md:w-8 bg-gray-600 rounded-lg" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:gap-6">
                      <div className="glass-card rounded-2xl md:rounded-3xl p-3 md:p-6 space-y-2 md:space-y-4">
                        <div className="h-2 md:h-4 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        <div className="space-y-2 md:space-y-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-2 md:h-3 w-full bg-gray-600 rounded-full" />
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2 space-y-2 md:space-y-4">
                        {[
                          { color: 'cyan', accent: 'green' },
                          { color: 'purple', accent: 'yellow' },
                          { color: 'emerald', accent: 'blue' },
                        ].map(({ color, accent }, i) => (
                          <div key={i} className="glass-card rounded-2xl md:rounded-3xl p-3 md:p-6 space-y-2 md:space-y-4">
                            <div className="flex items-center space-x-2 md:space-x-4">
                              <div className={`h-4 w-4 md:h-8 md:w-8 bg-gradient-to-r from-${color}-500 to-${color === 'emerald' ? 'teal' : color === 'purple' ? 'pink' : 'blue'}-500 rounded-full`} />
                              <div className="h-2 md:h-4 w-20 md:w-32 bg-gray-600 rounded-full" />
                              <div className={`ml-auto h-2 md:h-4 w-12 md:w-20 bg-${accent}-500 rounded-full`} />
                            </div>
                            {i === 1 ? (
                              <div className="h-12 md:h-20 w-full bg-gray-700 rounded-xl md:rounded-2xl" />
                            ) : (
                              <>
                                <div className="h-2 md:h-3 w-full bg-gray-600 rounded-full" />
                                <div className="h-2 md:h-3 w-5/6 bg-gray-600 rounded-full" />
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="glass-card rounded-2xl md:rounded-3xl p-2 md:p-4 flex items-center justify-between">
                      <div className="flex space-x-2 md:space-x-4">
                        <div className="h-6 w-6 md:h-10 md:w-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl md:rounded-2xl" />
                        <div className="h-6 w-6 md:h-10 md:w-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl" />
                        <div className="h-6 w-6 md:h-10 md:w-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl md:rounded-2xl" />
                      </div>
                      <div className="h-6 w-20 md:h-10 md:w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl md:rounded-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision Section ── */}
      <section id="vision" className="relative z-10 py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Connecting Washington&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-400">Future Leaders</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
              ClubSync is <span className="font-semibold text-white">the bridge</span> that connects schools, unites clubs, and strengthens student leadership across Washington through service, learning, and community engagement. Not just a platform—<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">a StuImpact movement built for tomorrow</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {[
              { title: 'Schools', desc: "A unified network bringing Washington's high schools together, creating new opportunities for collaboration and leadership." },
              { title: 'Clubs', desc: 'A digital home for student clubs to showcase themselves, discover peers, and grow their impact through meaningful partnerships.' },
              { title: 'ASB', desc: 'Simplified tools that empower student governments to lead with vision, coordinate activities, and inspire their campuses.' },
              { title: 'Events', desc: 'A smarter way to organize and co-host events—building stronger bonds across schools and communities.' },
            ].map(({ title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-28 glass-card-dark rounded-3xl p-10 md:p-14 text-center border border-emerald-600/30 scroll-animate">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              {[
                { stat: '200+', label: 'Students in the', highlight: 'Beta', color: 'from-emerald-400 to-teal-400' },
                { stat: 'Oct 2027', label: 'Official', highlight: 'Launch', color: 'from-indigo-400 to-purple-400' },
                { stat: 'Live Now', label: 'Prerelease', highlight: 'Access', color: 'from-green-400 to-emerald-400' },
              ].map(({ stat, label, highlight, color }) => (
                <div key={stat}>
                  <div className="text-5xl md:text-6xl font-extrabold text-white mb-3">{stat}</div>
                  <p className="text-gray-400 text-lg">{label} <span className={`bg-clip-text text-transparent bg-gradient-to-r ${color}`}>{highlight}</span></p>
                </div>
              ))}
            </div>
            <div className="mt-16 max-w-3xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-300 italic leading-relaxed">
                &quot;We&apos;re not just building software—we&apos;re building the <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-indigo-400 to-purple-400">future of student leadership</span> in Washington.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── For Students Section ── */}
      <section id="for-students" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-10 shimmer-text">For Students: Your Dreams, Amplified</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Imagine having <span className="success-highlight font-bold">meaningful volunteer, internship, and mentorship opportunities at your fingertips</span>, connecting with passionate peers across Washington, and building a record of real service and learning. This isn&apos;t just another app—it&apos;s where your impact begins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
            <div className="space-y-8 md:space-y-10 slide-in-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black brand-text">Why Students Are Choosing ClubSync</h3>

              <div className="glass-card rounded-3xl p-6 md:p-8 feature-card border border-green-500/40">
                <h4 className="text-xl md:text-2xl font-bold success-highlight mb-4">🌟 Transform Your High School Experience</h4>
                <ul className="space-y-3 md:space-y-4 text-gray-300 text-base md:text-lg">
                  {[
                    { bold: 'Connect with 2,000+ like-minded students', rest: ' across Washington who share your passions and ambitions' },
                    { bold: 'Discover leadership opportunities', rest: " you never knew existed—from organizing statewide events to leading cross-school initiatives" },
                    { bold: 'Access 250+ opportunities each semester', rest: '—volunteer projects, nonprofit internships, and mentorship—curated through StuImpact' },
                    { bold: 'Create lasting friendships', rest: ' with students who will become your college roommates, business partners, and lifelong connections' },
                    { bold: 'Make real impact', rest: ' through coordinated community service projects that actually change lives' },
                  ].map(({ bold, rest }) => (
                    <li key={bold} className="flex items-start space-x-3 md:space-x-4">
                      <span className="text-green-400 mt-1 text-lg md:text-xl">•</span>
                      <span><span className="font-semibold text-green-300">{bold}</span>{rest}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-3xl p-6 md:p-8 feature-card border border-purple-500/40">
                <h4 className="text-xl md:text-2xl font-bold text-purple-400 mb-4">💫 Your Success Story Starts Here</h4>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Picture this: You&apos;re a sophomore who loves environmental science. Through ClubSync, you connect with eco clubs from 15 different schools, organize a statewide beach cleanup that removes 2,000 pounds of trash, and log verified service hours alongside a nonprofit internship. <span className="brand-text font-semibold">This isn&apos;t a fantasy—it&apos;s what service through ClubSync makes possible.</span>
                </p>
              </div>

              <div className="glass-card rounded-3xl p-6 md:p-8 feature-card border border-cyan-500/40">
                <h4 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">🚀 Beyond Your Wildest Dreams</h4>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Stop settling for small-scale club meetings in empty classrooms. <span className="impact-highlight font-semibold">ClubSync transforms you from a participant into a leader</span>, from a follower into an innovator, from someone who dreams into someone who achieves.
                </p>
              </div>
            </div>

            {/* Student dashboard preview */}
            <div className="relative slide-in-right">
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl opacity-30 filter blur-3xl" />
              <div className="relative hero-dashboard rounded-3xl p-6 md:p-10 shadow-2xl floating-orb">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="flex space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 md:ml-8 text-gray-300 font-bold text-sm md:text-lg">Your Future Dashboard</div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-center space-x-4 md:space-x-6">
                    <div className="h-12 w-12 md:h-16 md:w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm md:text-lg">YOU</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-3 md:h-5 w-32 md:w-40 bg-white rounded-full mb-2 md:mb-3" />
                      <div className="h-2 md:h-4 w-24 md:w-32 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-right">
                      <div className="h-2 md:h-4 w-16 md:w-20 bg-yellow-500 rounded-full mb-1 md:mb-2" />
                      <div className="h-2 md:h-4 w-16 md:w-24 bg-purple-500 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      { bg: 'from-emerald-500 to-teal-500', accent: 'text-emerald-400', label: '🌟 Leadership Opportunity Available', wide: false },
                      { bg: 'from-orange-500 to-red-500', accent: 'text-orange-400', label: '🎯 Cross-School Project', wide: true },
                      { bg: 'from-purple-500 to-pink-500', accent: 'text-purple-400', label: '💫 College Prep Event', wide: false },
                    ].map(({ bg, accent, label, wide }, i) => (
                      <div key={i} className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                        <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
                          <div className={`h-6 w-6 md:h-8 md:w-8 bg-gradient-to-r ${bg} rounded-full`} />
                          <div className="h-2 md:h-4 w-24 md:w-32 bg-white rounded-full" />
                          <div className="ml-auto h-2 md:h-4 w-16 md:w-20 bg-green-500 rounded-full" />
                        </div>
                        {wide ? (
                          <div className="h-16 md:h-20 w-full bg-gray-700 rounded-xl md:rounded-2xl" />
                        ) : (
                          <div className="space-y-1 md:space-y-2">
                            <div className="h-2 md:h-4 w-full bg-gray-600 rounded-full" />
                            <div className="h-2 md:h-4 w-4/5 bg-gray-600 rounded-full" />
                          </div>
                        )}
                        <div className={`text-xs md:text-sm ${accent} font-semibold mt-2`}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student success stories */}
          <div className="glass-card-dark rounded-3xl p-8 md:p-12 border border-emerald-700/50 scroll-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-center brand-text mb-8 md:mb-10">Real Student Success Stories (Beta Preview)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { name: 'Sarah', title: 'Service That Scaled', quote: '"ClubSync helped me organize a mental health awareness campaign across 12 schools and log over 80 verified service hours along the way."', from: 'from-emerald-500 to-teal-500', delay: '0s' },
                { name: 'Marcus', title: 'Mentorship in Action', quote: '"Through ClubSync\'s robotics network I was paired with a STEM mentor, and our team took on a real-world tech challenge together."', from: 'from-purple-500 to-pink-500', delay: '0.2s' },
                { name: 'Aisha', title: 'Community Leader', quote: '"I coordinated food drives across 20 schools, feeding 500 families, and found a nonprofit internship through StuImpact in the process."', from: 'from-indigo-500 to-purple-500', delay: '0.4s' },
              ].map(({ name, title, quote, from, delay }) => (
                <div key={name} className="text-center bounce-in" style={{ animationDelay: delay }}>
                  <div className={`h-16 w-16 md:h-20 md:w-20 bg-gradient-to-r ${from} rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">{name}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h4>
                  <p className="text-gray-300 text-base md:text-lg">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── For ASB Section ── */}
      <section id="for-asb" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-10 shimmer-text">For ASB: Lead Like Never Before</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Stop managing chaos. Start <span className="leadership-highlight font-bold">orchestrating excellence</span>. ClubSync transforms you from a club babysitter into a visionary leader who shapes the entire student experience across your school and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
            {/* ASB Dashboard mockup */}
            <div className="relative slide-in-left">
              <div className="absolute inset-0 bg-purple-500 rounded-3xl opacity-30 filter blur-3xl" />
              <div className="relative hero-dashboard rounded-3xl p-6 md:p-10 shadow-2xl floating-orb">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="flex space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 md:ml-8 text-gray-300 font-bold text-sm md:text-lg">ASB Command Center</div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[
                      { bg: 'from-indigo-500 to-purple-500', text: 'text-indigo-400', label: 'Active Clubs' },
                      { bg: 'from-cyan-500 to-blue-500', text: 'text-cyan-400', label: 'Events This Month' },
                      { bg: 'from-emerald-500 to-teal-500', text: 'text-emerald-400', label: 'Student Impact' },
                    ].map(({ bg, text, label }) => (
                      <div key={label} className="glass-card rounded-2xl md:rounded-3xl p-3 md:p-4 text-center feature-card">
                        <div className={`h-6 w-6 md:h-8 md:w-8 bg-gradient-to-r ${bg} rounded-xl md:rounded-2xl mx-auto mb-2 md:mb-3`} />
                        <div className="h-2 md:h-3 w-8 md:w-10 bg-gray-600 rounded-full mx-auto mb-1 md:mb-2" />
                        <div className="h-3 md:h-5 w-12 md:w-16 bg-white rounded-full mx-auto" />
                        <div className={`text-xs ${text} mt-1`}>{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="h-3 md:h-5 w-24 md:w-32 bg-yellow-500 rounded-full" />
                      <div className="h-6 w-6 md:h-8 md:w-8 bg-gray-600 rounded-xl md:rounded-2xl" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-2 md:p-3 bg-gray-800 rounded-xl md:rounded-2xl">
                          <div className="h-2 md:h-4 w-32 md:w-40 bg-gray-600 rounded-full" />
                          <div className="flex space-x-2 md:space-x-3">
                            <div className="h-6 w-12 md:h-8 md:w-16 bg-green-500 rounded-xl md:rounded-2xl" />
                            <div className="h-6 w-12 md:h-8 md:w-16 bg-red-500 rounded-xl md:rounded-2xl" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="h-3 md:h-5 w-28 md:w-36 bg-blue-500 rounded-full mb-3 md:mb-4" />
                    <div className="space-y-2 md:space-y-3">
                      {[
                        { dot: 'bg-green-400', w: 'w-24 md:w-32' },
                        { dot: 'bg-yellow-400', w: 'w-28 md:w-36' },
                        { dot: 'bg-blue-400', w: 'w-20 md:w-28' },
                      ].map(({ dot, w }, i) => (
                        <div key={i} className="flex items-center space-x-3 md:space-x-4">
                          <div className={`h-3 w-3 md:h-5 md:w-5 ${dot} rounded-full`} />
                          <div className={`h-2 md:h-4 ${w} bg-gray-600 rounded-full`} />
                          <div className="ml-auto h-2 md:h-4 w-16 md:w-20 bg-gray-600 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-10 slide-in-right">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black brand-text">From Club Manager to Campus Visionary</h3>
              {[
                { icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01', from: 'from-indigo-500 to-purple-500', border: 'border-indigo-500/40', title: '🎯 Your Leadership Superpower', body: "Imagine approving 15 club events in 5 minutes instead of spending hours in meetings. ClubSync's automated workflow system handles scheduling conflicts, venue booking, and compliance checks automatically. You focus on the big picture while the platform handles the details.", highlight: 'ClubSync\'s automated workflow system', hClass: 'leadership-highlight' },
                { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', from: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/40', title: '📊 Data That Drives Decisions', body: 'Stop guessing what students want. Real-time analytics show you exactly which clubs are thriving, which events drive the most engagement, and where students need more support. Make decisions based on data, not hunches.', highlight: 'Real-time analytics show you exactly', hClass: 'impact-highlight' },
                { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', from: 'from-emerald-500 to-teal-500', border: 'border-emerald-500/40', title: '🌟 Legacy Builder', body: "Don't just manage your school year—create a legacy that lasts decades. Connect with ASBs across Washington, share successful programs, and build initiatives that transform student life statewide. Your leadership ripples across the entire state.", highlight: 'create a legacy that lasts decades', hClass: 'success-highlight' },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', from: 'from-purple-500 to-pink-500', border: 'border-purple-500/40', title: '💫 A Record of Real Impact', body: 'Picture your story: "As ASB President, I coordinated 50+ clubs, managed 200+ events, and built partnerships with 15 schools across Washington, supporting over 5,000 students through service and learning." ClubSync helps you lead—and gives you a verified record of the impact you made.', highlight: 'a verified record of the impact you made', hClass: 'brand-text' },
              ].map(({ icon, from, border, title, body }) => (
                <div key={title} className={`glass-card rounded-3xl p-6 md:p-8 feature-card ${border}`}>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
                    <span className={`h-8 w-8 md:h-10 md:w-10 bg-gradient-to-r ${from} rounded-xl md:rounded-2xl mr-3 md:mr-4 flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                    </span>
                    {title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ASB Metrics */}
          <div className="glass-card-dark rounded-3xl p-8 md:p-12 border border-purple-700/50 scroll-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-center brand-text mb-8 md:mb-10">Transform Your School&apos;s Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { stat: '5x', title: 'More Efficient Operations', desc: 'ASBs using ClubSync report 5x faster event approvals and 80% less administrative overhead', from: 'from-indigo-500 to-purple-500', delay: '0s' },
                { stat: '3x', title: 'Higher Student Engagement', desc: 'Schools see 3x more students participating in clubs and activities through better coordination', from: 'from-cyan-500 to-blue-500', delay: '0.2s' },
                { stat: '10x', title: 'Greater Community Impact', desc: 'Coordinated efforts through ClubSync generate 10x more volunteer hours and community service', from: 'from-emerald-500 to-teal-500', delay: '0.4s' },
              ].map(({ stat, title, desc, from, delay }) => (
                <div key={stat} className="text-center bounce-in" style={{ animationDelay: delay }}>
                  <div className={`h-16 w-16 md:h-20 md:w-20 bg-gradient-to-r ${from} rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">{stat}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h4>
                  <p className="text-gray-300 text-base md:text-lg">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── For Clubs Section ── */}
      <section id="for-clubs" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-10 shimmer-text">For Club Leaders: From Classroom to Statewide Movement</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Stop being limited by your school&apos;s walls. <span className="impact-highlight font-bold">Transform your passion project into a statewide movement</span> that creates real change, builds your leadership portfolio, and connects you with resources you never knew existed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
            <div className="space-y-8 md:space-y-10 slide-in-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black brand-text">Your Club&apos;s Transformation Story</h3>
              {[
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', from: 'from-purple-500 to-pink-500', border: 'border-purple-500/40', title: '🚀 From 12 Members to 500+ Network', body: 'Your environmental club has 12 dedicated members. Through ClubSync, you connect with 25 similar clubs across Washington, coordinate a statewide Earth Day event, and suddenly you\'re leading a movement of 500+ passionate environmentalists.', highlight: "This isn't just growth—it's exponential impact.", hClass: 'success-highlight' },
                { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', from: 'from-emerald-500 to-teal-500', border: 'border-emerald-500/40', title: '📈 Measure Your Real Impact', body: "Stop wondering if your club matters. ClubSync's analytics show you exactly how many lives you've touched—volunteer hours logged, community members helped, environmental impact created. Turn your passion into quantifiable change.", highlight: "ClubSync's analytics show you exactly", hClass: 'impact-highlight' },
                { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', from: 'from-indigo-500 to-purple-500', border: 'border-indigo-500/40', title: '⚡ Automate the Boring Stuff', body: "Spend 90% less time on attendance sheets, permission slips, and scheduling conflicts. ClubSync handles the administrative work automatically, so you can focus on what you love—creating amazing experiences and making real impact.", highlight: 'ClubSync handles the administrative work automatically', hClass: 'leadership-highlight' },
                { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', from: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/40', title: '🌟 Build Your Dream Team', body: 'Find the perfect co-leaders, advisors, and collaborators from across Washington. ClubSync connects you with students who share your exact passion and vision, creating dream teams that achieve the impossible.', highlight: 'ClubSync connects you with students who share your exact passion', hClass: 'brand-text' },
              ].map(({ icon, from, border, title, body }) => (
                <div key={title} className={`glass-card rounded-3xl p-6 md:p-8 feature-card ${border}`}>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
                    <span className={`h-8 w-8 md:h-10 md:w-10 bg-gradient-to-r ${from} rounded-xl md:rounded-2xl mr-3 md:mr-4 flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                      </svg>
                    </span>
                    {title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">{body}</p>
                </div>
              ))}
            </div>

            {/* Club dashboard mockup */}
            <div className="relative slide-in-right">
              <div className="absolute inset-0 bg-emerald-500 rounded-3xl opacity-30 filter blur-3xl" />
              <div className="relative hero-dashboard rounded-3xl p-6 md:p-10 shadow-2xl floating-orb">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="flex space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 md:ml-8 text-gray-300 font-bold text-sm md:text-lg">Your Club&apos;s Command Center</div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="flex items-center space-x-4 md:space-x-6 mb-3 md:mb-4">
                      <div className="h-12 w-12 md:h-16 md:w-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl md:rounded-3xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 md:h-5 w-32 md:w-40 bg-white rounded-full mb-2 md:mb-3" />
                        <div className="h-2 md:h-4 w-24 md:w-32 bg-gray-600 rounded-full" />
                      </div>
                      <div className="text-right">
                        <div className="h-2 md:h-4 w-16 md:w-20 bg-green-500 rounded-full mb-1 md:mb-2" />
                        <div className="h-2 md:h-4 w-12 md:w-16 bg-gray-600 rounded-full" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                      {[
                        { bg: 'bg-indigo-500', text: 'text-indigo-400', label: 'Members' },
                        { bg: 'bg-cyan-500', text: 'text-cyan-400', label: 'Impact Score' },
                        { bg: 'bg-purple-500', text: 'text-purple-400', label: 'Partnerships' },
                      ].map(({ bg, text, label }) => (
                        <div key={label} className="text-center">
                          <div className={`h-6 md:h-8 w-full ${bg} rounded-xl md:rounded-2xl mb-1 md:mb-2`} />
                          <div className="h-2 md:h-3 w-12 md:w-16 bg-gray-600 rounded-full mx-auto" />
                          <div className={`text-xs ${text} mt-1`}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="h-3 md:h-5 w-32 md:w-40 bg-yellow-500 rounded-full mb-3 md:mb-4" />
                    <div className="space-y-3 md:space-y-4">
                      {[
                        { from: 'from-blue-500 to-cyan-500', btnBg: 'bg-green-500' },
                        { from: 'from-purple-500 to-pink-500', btnBg: 'bg-blue-500' },
                      ].map(({ from, btnBg }, i) => (
                        <div key={i} className="flex items-center justify-between p-3 md:p-4 bg-gray-800 rounded-xl md:rounded-2xl">
                          <div className="flex items-center space-x-3 md:space-x-4">
                            <div className={`h-6 w-6 md:h-8 md:w-8 bg-gradient-to-r ${from} rounded-full`} />
                            <div className="h-2 md:h-4 w-28 md:w-36 bg-gray-600 rounded-full" />
                          </div>
                          <div className={`h-6 w-16 md:h-8 md:w-20 ${btnBg} rounded-xl md:rounded-2xl`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {[
                      { from: 'from-emerald-500 to-teal-500', text: 'text-emerald-400', label: 'Volunteer Hours' },
                      { from: 'from-orange-500 to-red-500', text: 'text-orange-400', label: 'Events Hosted' },
                    ].map(({ from, text, label }) => (
                      <div key={label} className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 text-center feature-card">
                        <div className={`h-8 w-8 md:h-10 md:w-10 bg-gradient-to-r ${from} rounded-xl md:rounded-2xl mx-auto mb-2 md:mb-3`} />
                        <div className="h-3 md:h-5 w-12 md:w-16 bg-white rounded-full mx-auto mb-1 md:mb-2" />
                        <div className="h-2 md:h-3 w-16 md:w-20 bg-gray-600 rounded-full mx-auto" />
                        <div className={`text-xs ${text} mt-1`}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Club stories */}
          <div className="glass-card-dark rounded-3xl p-8 md:p-12 border border-emerald-700/50 scroll-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-center brand-text mb-8 md:mb-10">Real Club Transformation Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { icon: '🌱', from: 'from-emerald-500 to-teal-500', title: 'Environmental Club Revolution', quote: '"We went from 8 members to coordinating with 30 schools. Our beach cleanup removed 5,000 pounds of trash and got featured on local news."', delay: '0s' },
                { icon: '🎭', from: 'from-purple-500 to-pink-500', title: 'Drama Club Network', quote: '"Through ClubSync, we created a statewide theater festival with 20 schools. Now we\'re planning a tour across Washington."', delay: '0.2s' },
                { icon: '🤖', from: 'from-indigo-500 to-purple-500', title: 'Robotics Alliance', quote: '"We formed a robotics alliance with 15 schools, shared resources, and now we\'re competing at the national level together."', delay: '0.4s' },
              ].map(({ icon, from, title, quote, delay }) => (
                <div key={title} className="text-center bounce-in" style={{ animationDelay: delay }}>
                  <div className={`h-16 w-16 md:h-20 md:w-20 bg-gradient-to-r ${from} rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center`}>
                    <span className="text-xl md:text-2xl font-bold text-white">{icon}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h4>
                  <p className="text-gray-300 text-base md:text-lg">{quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── For Administrators Section ── */}
      <section id="for-administrators" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-10 shimmer-text">For Superintendents &amp; Administrators: The Safe Solution You&apos;ve Been Waiting For</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Stop losing sleep over student safety on unmonitored platforms. <span className="safety-highlight font-bold">ClubSync eliminates your liability concerns</span> while dramatically improving student engagement and educational outcomes across your entire district.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
            <div className="space-y-8 md:space-y-10 slide-in-left">
              <div className="glass-card-dark rounded-3xl p-8 md:p-10 border border-red-500/40">
                <h3 className="text-2xl md:text-3xl font-bold danger-highlight mb-6 md:mb-8">🚨 The Crisis You&apos;re Already Facing</h3>
                <div className="space-y-4 md:space-y-6 text-gray-300">
                  {[
                    { title: 'Legal Liability Nightmare', desc: "Every day students use Discord, your district faces potential lawsuits from cyberbullying, inappropriate content, and safety incidents you can't monitor or prevent" },
                    { title: 'Parent Outrage', desc: 'Angry parents demanding answers when their children encounter predators, bullies, or inappropriate content on platforms your school "allows"' },
                    { title: 'Zero Educational Value', desc: 'Gaming platforms that distract from learning, waste instructional time, and undermine your educational mission' },
                    { title: 'Board Pressure', desc: 'School board members questioning why the district allows students to use unmonitored platforms during school activities' },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex items-start space-x-3 md:space-x-4">
                      <span className="text-red-400 mt-1 font-bold text-lg md:text-xl">•</span>
                      <div>
                        <p className="font-bold text-red-300 text-base md:text-lg">{title}</p>
                        <p className="text-base md:text-lg">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card-dark rounded-3xl p-8 md:p-10 border border-green-500/40">
                <h3 className="text-2xl md:text-3xl font-bold safety-highlight mb-6 md:mb-8">✅ Your Complete Solution</h3>
                <div className="space-y-4 md:space-y-6 text-gray-300">
                  {[
                    { title: 'Zero Liability Risk', desc: 'FERPA-compliant platform with 24/7 monitoring, content filtering, and automatic incident reporting protects your district legally' },
                    { title: 'Parent Confidence', desc: "Parents love ClubSync because they can see their child's activities, know they're safe, and watch them develop real leadership skills" },
                    { title: 'Educational Excellence', desc: 'Purpose-built for learning with features that enhance academic achievement, leadership development, and college readiness' },
                    { title: 'Board Approval', desc: 'School boards love the comprehensive oversight, safety features, and positive educational outcomes ClubSync delivers' },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex items-start space-x-3 md:space-x-4">
                      <span className="text-green-400 mt-1 font-bold text-lg md:text-xl">•</span>
                      <div>
                        <p className="font-bold text-green-300 text-base md:text-lg">{title}</p>
                        <p className="text-base md:text-lg">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admin dashboard mockup */}
            <div className="relative slide-in-right">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-30 filter blur-3xl" />
              <div className="relative hero-dashboard rounded-3xl p-6 md:p-10 shadow-2xl floating-orb">
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="flex space-x-2 md:space-x-3">
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-4 md:ml-8 text-gray-300 font-bold text-sm md:text-lg">District Command Center</div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="h-3 md:h-5 w-28 md:w-36 bg-blue-500 rounded-full" />
                      <div className="h-6 w-6 md:h-8 md:w-8 bg-gray-600 rounded-xl md:rounded-2xl" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 md:gap-3">
                      {[
                        { bg: 'bg-indigo-500', text: 'text-indigo-400', label: 'Schools' },
                        { bg: 'bg-emerald-500', text: 'text-emerald-400', label: 'Students' },
                        { bg: 'bg-purple-500', text: 'text-purple-400', label: 'Clubs' },
                        { bg: 'bg-cyan-500', text: 'text-cyan-400', label: 'Events' },
                      ].map(({ bg, text, label }) => (
                        <div key={label} className="text-center">
                          <div className={`h-8 md:h-10 w-full ${bg} rounded-xl md:rounded-2xl mb-1 md:mb-2`} />
                          <div className="h-2 md:h-3 w-8 md:w-10 bg-gray-600 rounded-full mx-auto" />
                          <div className={`text-xs ${text} mt-1`}>{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="h-3 md:h-5 w-24 md:w-32 bg-green-500 rounded-full" />
                      <div className="flex space-x-2 md:space-x-3">
                        <div className="h-3 w-3 md:h-5 md:w-5 bg-green-400 rounded-full" />
                        <div className="h-2 md:h-4 w-12 md:w-16 bg-gray-600 rounded-full" />
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between p-2 md:p-3 bg-green-900/30 rounded-xl md:rounded-2xl border border-green-500/30">
                          <div className="h-2 md:h-3 w-20 md:w-28 bg-gray-600 rounded-full" />
                          <div className="h-2 md:h-3 w-16 md:w-20 bg-green-500 rounded-full" />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-green-400 font-semibold mt-2">🛡️ All Systems Secure</div>
                  </div>
                  <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 feature-card">
                    <div className="h-3 md:h-5 w-32 md:w-40 bg-blue-500 rounded-full mb-3 md:mb-4" />
                    <div className="space-y-2 md:space-y-3">
                      {[
                        { dot: 'bg-blue-400', w: 'w-28 md:w-36', right: 'bg-green-500' },
                        { dot: 'bg-purple-400', w: 'w-24 md:w-32', right: 'bg-green-500' },
                      ].map(({ dot, w, right }, i) => (
                        <div key={i} className="flex items-center space-x-3 md:space-x-4">
                          <div className={`h-3 w-3 md:h-5 md:w-5 ${dot} rounded-full`} />
                          <div className={`h-2 md:h-4 ${w} bg-gray-600 rounded-full`} />
                          <div className={`ml-auto h-2 md:h-4 w-16 md:w-20 ${right} rounded-full`} />
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-blue-400 font-semibold mt-2">📊 FERPA Compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Admin benefits */}
          <div className="glass-card-dark rounded-3xl p-8 md:p-12 border border-blue-700/50 scroll-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-center brand-text mb-8 md:mb-10">Why Forward-Thinking Districts Choose ClubSync</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                { icon: '🛡️', from: 'from-green-500 to-emerald-500', title: 'Complete Legal Protection', desc: 'FERPA-compliant with 24/7 monitoring, content filtering, and automatic incident reporting. Zero liability risk.', delay: '0s' },
                { icon: '📈', from: 'from-blue-500 to-cyan-500', title: 'Measurable Outcomes', desc: 'Track student engagement, leadership development, and academic achievement with comprehensive analytics.', delay: '0.2s' },
                { icon: '💰', from: 'from-purple-500 to-indigo-500', title: 'Cost-Effective Solution', desc: 'Replace multiple platforms with one comprehensive solution. Reduce IT overhead and administrative burden.', delay: '0.4s' },
              ].map(({ icon, from, title, desc, delay }) => (
                <div key={title} className="text-center bounce-in" style={{ animationDelay: delay }}>
                  <div className={`h-16 w-16 md:h-20 md:w-20 bg-gradient-to-r ${from} rounded-3xl mx-auto mb-4 md:mb-6 flex items-center justify-center`}>
                    <span className="text-2xl md:text-3xl font-bold text-white">{icon}</span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h4>
                  <p className="text-gray-300 text-base md:text-lg">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section id="features" className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-10 shimmer-text">Features That Change Everything</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
              Every feature in ClubSync was <span className="brand-text font-bold">meticulously designed and tested</span> during our extensive beta program to solve real problems that students, clubs, and administrators face every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {[
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', from: 'from-indigo-500 to-purple-500', border: 'border-indigo-500/40', title: 'Cross-School Collaboration', desc: 'Connect with clubs across Washington state. Organize joint events, share resources, and create statewide movements that make real impact.' },
              { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', from: 'from-emerald-500 to-teal-500', border: 'border-emerald-500/40', title: 'Ultra-Secure Platform', desc: 'FERPA-compliant with advanced safety features, content moderation, and 24/7 monitoring. Parents and administrators can rest easy.' },
              { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', from: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/40', title: 'Impact Analytics', desc: 'Track volunteer hours, leadership roles, and community impact automatically. Perfect for college applications and grant reporting.' },
              { icon: 'M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2h-6a2 2 0 00-2 2z', from: 'from-purple-500 to-pink-500', border: 'border-purple-500/40', title: 'Smart Event Management', desc: 'Automated scheduling, venue booking, and conflict resolution. Plan complex multi-school events with zero administrative headaches.' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', from: 'from-yellow-500 to-orange-500', border: 'border-yellow-500/40', title: 'Leadership Development', desc: 'Built-in mentorship programs, skill-building challenges, and leadership pathways that prepare students for college and careers.' },
              { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', from: 'from-pink-500 to-rose-500', border: 'border-pink-500/40', title: 'Community Impact Tracking', desc: 'Measure and showcase the real-world impact of student activities. Perfect for demonstrating educational outcomes to stakeholders.' },
            ].map(({ icon, from, border, title, desc }) => (
              <div key={title} className={`glass-card rounded-3xl p-6 md:p-8 feature-card ${border} scroll-animate`}>
                <div className={`h-12 w-12 md:h-16 md:w-16 bg-gradient-to-r ${from} rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Call to Action Section ── */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-dark rounded-3xl p-8 md:p-16 text-center border border-indigo-500/50 scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 brand-text shimmer-text">Ready to Transform Student Leadership?</h2>
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
              Join the <span className="success-highlight font-bold">200+ beta testers</span> who are already experiencing the future of student connection. Be part of the revolution launching statewide this October.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-8 md:mb-12">
              <a href="/login" className="glow-button bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 text-center">
                Join Open Beta Now
                <span className="block text-sm md:text-base opacity-80 mt-1">⚠️ Prerelease Access</span>
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="glow-button bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 text-center"
              >
                Club Partnership
                <span className="block text-sm md:text-base opacity-80 mt-1">Setup email if approved</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              {[
                { stat: '200+', label: 'Students already testing', delay: '0s' },
                { stat: 'OCT 2027', label: 'Full public launch', delay: '0.2s' },
                { stat: 'STATEWIDE', label: 'Washington coverage', delay: '0.4s' },
              ].map(({ stat, label, delay }) => (
                <div key={stat} className="bounce-in" style={{ animationDelay: delay }}>
                  <div className="text-3xl md:text-4xl font-black brand-text mb-2 md:mb-4">{stat}</div>
                  <p className="text-gray-300 text-base md:text-lg">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-16 md:py-20 relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black brand-text mb-4 md:mb-6">STUIMPACT</h3>
            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Revolutionizing student leadership and connection across Washington state through secure, innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <a href="/login" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Open Beta Access</a>
              <span className="hidden sm:block text-gray-600">•</span>
              <a href="mailto:mrithunjay@stuimpact.org" className="text-gray-300 hover:text-white transition-all duration-300 font-medium">Contact Us</a>
            </div>
            <div className="text-gray-500 text-sm md:text-base">
              <p>&copy; 2025 StuImpact. All rights reserved. | FERPA Compliant | Washington State</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Club Signup Modal ── */}
      <div
        className={`modal${modalOpen ? ' show' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
      >
        <div className="modal-content">
          <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">&times;</button>
          <h2 className="text-2xl md:text-3xl font-bold brand-text mb-4 md:mb-5 text-center px-6">Club Partnership Application</h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 text-center">
            Join the ClubSync network and connect your club with students across Washington state. If approved, you&apos;ll receive a setup email with next steps.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="club-name" className="block text-sm font-medium text-gray-300 mb-2">Club Name *</label>
                <input type="text" id="club-name" name="club-name" required placeholder="Environmental Action Club" />
              </div>
              <div>
                <label htmlFor="school-name" className="block text-sm font-medium text-gray-300 mb-2">School Name *</label>
                <input type="text" id="school-name" name="school-name" required placeholder="Washington High School" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                <input type="text" id="contact-name" name="contact-name" required placeholder="Jane Smith" />
              </div>
              <div>
                <label htmlFor="contact-role" className="block text-sm font-medium text-gray-300 mb-2">Your Role *</label>
                <select id="contact-role" name="contact-role" required defaultValue="">
                  <option value="" disabled>Select your role</option>
                  <option value="club-president">Club President</option>
                  <option value="club-officer">Club Officer</option>
                  <option value="club-advisor">Club Advisor</option>
                  <option value="asb-member">ASB Member</option>
                  <option value="administrator">Administrator</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
              <input type="email" id="contact-email" name="contact-email" required placeholder="jane.smith@school.edu" />
            </div>
            <div>
              <label htmlFor="club-description" className="block text-sm font-medium text-gray-300 mb-2">Club Description *</label>
              <textarea id="club-description" name="club-description" rows={4} required placeholder="Tell us about your club, its mission, and current activities..." />
            </div>
            <div>
              <label htmlFor="collaboration-interest" className="block text-sm font-medium text-gray-300 mb-2">Collaboration Interests</label>
              <textarea id="collaboration-interest" name="collaboration-interest" rows={3} placeholder="What types of cross-school collaborations or events would you be interested in?" />
            </div>
            <div className="flex items-center space-x-3">
              <input type="checkbox" id="terms-agreement" name="terms-agreement" required className="h-4 w-4" />
              <label htmlFor="terms-agreement" className="text-sm text-gray-300">
                I agree to the ClubSync terms of service and privacy policy *
              </label>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full glow-button bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

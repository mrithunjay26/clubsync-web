'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function checkPasswordStrength(password: string): { strength: number; label: string; color: string; barColor: string } {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) return { strength, label: 'Weak', color: 'text-red-400', barColor: 'linear-gradient(to right, #ef4444, #f87171)' };
  if (strength === 3) return { strength, label: 'Fair', color: 'text-yellow-400', barColor: 'linear-gradient(to right, #f59e0b, #fbbf24)' };
  if (strength === 4) return { strength, label: 'Good', color: 'text-blue-400', barColor: 'linear-gradient(to right, #3b82f6, #60a5fa)' };
  return { strength, label: 'Excellent!', color: 'text-emerald-400', barColor: 'linear-gradient(to right, #10b981, #34d399)' };
}

export default function SignupPage() {
  const router = useRouter();

  const [tab, setTab] = useState<'email' | 'google'>('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [flashMsg, setFlashMsg] = useState('');
  const [flashType, setFlashType] = useState<'error' | 'success'>('error');

  const pwStrength = password ? checkPasswordStrength(password) : null;
  const pwMatch = confirmPassword === '' ? null : password === confirmPassword;

  function flash(msg: string, type: 'error' | 'success' = 'error') {
    setFlashMsg(msg);
    setFlashType(type);
  }

  // Auth isn't wired up yet — route to the in-progress page.
  function handleEmailSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !school || !password || !confirmPassword) {
      flash('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      flash('Passwords do not match.');
      return;
    }
    setSubmitting(true);
    setFlashMsg('');
    router.push('/in-progress?from=signup');
  }

  function handleGoogleSignup() {
    setSubmitting(true);
    setFlashMsg('');
    router.push('/in-progress?from=signup');
  }

  return (
    <div className="gradient-bg text-gray-100 min-h-screen overflow-y-auto">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/25 to-purple-600/25 rounded-full blur-3xl" />
        <div className="floating-orb absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/25 to-blue-600/25 rounded-full blur-3xl" style={{ animationDelay: '-3s' }} />
        <div className="floating-orb absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl" style={{ animationDelay: '-6s' }} />
        <div className="floating-orb absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full blur-2xl" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[17%] left-[20%] w-3 h-3 bg-indigo-400 rounded-full opacity-70 floating-orb" />
        <div className="absolute top-2/3 right-[17%] w-2 h-2 bg-cyan-400 rounded-full opacity-50 floating-orb" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/3 left-[80%] w-4 h-4 bg-purple-400 rounded-full opacity-60 floating-orb" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-1/3 left-[17%] w-2 h-2 bg-emerald-400 rounded-full opacity-40 floating-orb" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Getting Started Side Card ── */}
          <div className="glass-card-dark rounded-3xl p-8 lg:p-10 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 shimmer-text">
                  Join the Revolution
                </h2>
                <p className="text-lg text-gray-300 font-medium">
                  Become part of Washington&apos;s most connected student leadership network and amplify your club&apos;s impact across the state.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Your Journey Starts Here</h3>
                <div className="space-y-4">
                  {[
                    { num: '1', gradient: 'from-indigo-500 to-purple-600', title: 'Create Your Profile', desc: 'Set up your account and connect with your school' },
                    { num: '2', gradient: 'from-cyan-500 to-blue-600', title: 'Join Your Clubs', desc: 'Connect with existing clubs or create new ones' },
                    { num: '3', gradient: 'from-purple-500 to-pink-600', title: 'Start Collaborating', desc: 'Connect with clubs across Washington state' },
                    { num: '4', gradient: 'from-emerald-500 to-teal-600', title: 'Make Impact', desc: 'Track your achievements and inspire others' },
                  ].map((step) => (
                    <div key={step.num} className="feature-card glass-card rounded-2xl p-5">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center text-white font-bold text-sm`}>{step.num}</div>
                        <div>
                          <h4 className="font-bold text-white">{step.title}</h4>
                          <p className="text-sm text-gray-300">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { gradient: 'from-indigo-500 to-purple-600', title: 'Instant Access', desc: 'Get immediate access to statewide club network', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
                  { gradient: 'from-cyan-500 to-blue-600', title: 'Free Forever', desc: 'No hidden fees, completely free for all students', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /> },
                  { gradient: 'from-purple-500 to-pink-600', title: 'Verified Impact', desc: 'Track and verify volunteer hours automatically', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
                  { gradient: 'from-emerald-500 to-teal-600', title: 'Easy Setup', desc: 'Get started in under 2 minutes', icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> },
                ].map((b) => (
                  <div key={b.title} className="feature-card glass-card rounded-2xl p-5">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${b.gradient} rounded-lg flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{b.icon}</svg>
                      </div>
                      <h4 className="font-bold text-white text-sm">{b.title}</h4>
                    </div>
                    <p className="text-xs text-gray-300">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">&quot;</div>
                  <div>
                    <p className="text-gray-300 text-sm italic mb-2">
                      &quot;ClubSync helped our Environmental Club coordinate with 5 other schools for our Earth Day cleanup. We had 200+ students participate!&quot;
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
                      <span className="text-xs text-gray-400 font-medium">Sarah M., Lincoln High School</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="glass-card rounded-2xl p-4 text-center">
                <p className="text-sm text-gray-300 mb-2">Trusted by students, powered by</p>
                <div className="flex items-center justify-center space-x-4">
                  <span className="font-black text-lg brand-text">WaForge</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full" />
                  <span className="text-gray-400 text-sm">Washington&apos;s Tech Innovation Hub</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Signup Form ── */}
          <div className="w-full max-w-md mx-auto order-1 lg:order-2">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="mb-8">
                <h1 className="text-6xl lg:text-7xl font-black brand-text mb-3 tracking-tight">ClubSync</h1>
                <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
              </div>
              <p className="text-2xl font-light text-gray-200 mb-3">Join the Network</p>
              <p className="text-sm text-gray-400 font-medium">Create your leadership account</p>
            </div>

            {/* Card */}
            <div className="glass-card rounded-3xl p-8 relative">

              {/* Flash */}
              {flashMsg && (
                <div className={`mb-6 p-4 border rounded-2xl backdrop-blur-sm ${flashType === 'error' ? 'bg-red-500/20 border-red-400/30 text-red-200' : 'bg-emerald-500/20 border-emerald-400/30 text-emerald-200'}`} role="alert">
                  <p className="text-sm font-medium">{flashMsg}</p>
                </div>
              )}

              {/* Tab toggle */}
              <div className="flex bg-gray-800/50 rounded-2xl p-1 mb-8 backdrop-blur-sm">
                <button
                  onClick={() => setTab('email')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 glow-button ${tab === 'email' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Email Signup
                </button>
                <button
                  onClick={() => setTab('google')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 glow-button ${tab === 'google' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  Google SSO
                </button>
              </div>

              {/* Email Form */}
              {tab === 'email' && (
                <div className="space-y-6">
                  <form onSubmit={handleEmailSignup} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                        <input type="text" id="name" required
                          value={name} onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                          placeholder="Your full name" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                        <input type="email" id="email" required
                          value={email} onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                          placeholder="student@school.edu" />
                      </div>

                      <div>
                        <label htmlFor="school" className="block text-sm font-semibold text-gray-300 mb-2">School</label>
                        <input type="text" id="school" required
                          value={school} onChange={(e) => setSchool(e.target.value)}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                          placeholder="Your high school name" />
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                        <input type="password" id="password" required
                          value={password} onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                          placeholder="Create a strong password" />
                        {/* Strength bar */}
                        <div className="h-1 bg-gray-700 rounded-full overflow-hidden mt-2">
                          <div
                            className="h-full rounded-full transition-all duration-300"
                            style={{
                              width: pwStrength ? `${(pwStrength.strength / 5) * 100}%` : '0%',
                              background: pwStrength?.barColor ?? 'transparent',
                            }}
                          />
                        </div>
                        {pwStrength && (
                          <p className={`text-xs mt-1 ${pwStrength.color}`}>{pwStrength.label} password strength</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="confirm_password" className="block text-sm font-semibold text-gray-300 mb-2">Confirm Password</label>
                        <input type="password" id="confirm_password" required
                          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                          className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                          placeholder="Confirm your password" />
                        {pwMatch === true && <p className="text-xs text-emerald-400 mt-1">&#10003; Passwords match</p>}
                        {pwMatch === false && <p className="text-xs text-red-400 mt-1">&#10007; Passwords do not match</p>}
                      </div>
                    </div>

                    <button type="submit" disabled={submitting}
                      className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-300 glow-button hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Creating Account...
                        </span>
                      ) : 'Create Your Account'}
                    </button>
                  </form>

                  <div className="text-center">
                    <p className="text-gray-400 text-sm">
                      Already have an account?{' '}
                      <a href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">Sign In</a>
                    </p>
                  </div>
                </div>
              )}

              {/* Google Form */}
              {tab === 'google' && (
                <div className="space-y-6">
                  <div className="text-center space-y-6">
                    <p className="text-gray-300 font-medium">Sign up with your institutional Google account</p>
                    <button
                      onClick={handleGoogleSignup} disabled={submitting}
                      className="w-full inline-flex items-center justify-center py-4 px-6 bg-white text-gray-900 font-bold rounded-2xl transition-all duration-300 glow-button hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 disabled:opacity-60">
                      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                      </svg>
                      {submitting ? 'Connecting...' : 'Continue with Google'}
                    </button>
                    <p className="text-gray-400 text-sm">
                      Already have an account?{' '}
                      <a href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">Sign In</a>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="mt-6 text-center">
              <div className="glass-card rounded-2xl p-4">
                <p className="text-xs text-gray-400">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a> and{' '}
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

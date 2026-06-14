'use client';

import { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

export default function InProgressPage() {
  return (
    <Suspense
      fallback={
        <div className="gradient-bg min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <InProgressContent />
    </Suspense>
  );
}

function InProgressContent() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get('from'); // 'login' | 'signup' | null

  // Light keyboard affordance: Esc returns home.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.push('/');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [router]);

  const heading =
    from === 'signup'
      ? 'Account creation is on the way'
      : from === 'login'
      ? 'Your dashboard is almost ready'
      : 'This experience is in progress';

  return (
    <div className="gradient-bg text-gray-100 min-h-screen overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/25 to-purple-600/25 rounded-full blur-3xl" />
        <div className="floating-orb absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/25 to-blue-600/25 rounded-full blur-3xl" style={{ animationDelay: '-3s' }} />
        <div className="floating-orb absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl" style={{ animationDelay: '-6s' }} />
      </div>

      {/* RGB Line */}
      <div className="fixed top-0 left-0 right-0 h-1 rgb-line z-50" />

      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="glass-card rounded-3xl p-8 md:p-14 max-w-2xl w-full text-center">
          {/* Animated build icon */}
          <div className="mx-auto mb-8 w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center floating-orb">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
          </div>

          <div className="glass-card-dark inline-block rounded-2xl px-4 py-2 mb-6">
            <span className="text-sm font-bold success-highlight">🚧 Feature In Progress</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
            <span className="brand-text shimmer-text">{heading}</span>
          </h1>

          <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-4">
            We&apos;re still building the full ClubSync experience. This part of the platform
            isn&apos;t live yet — but it&apos;s coming soon as part of our{' '}
            <span className="success-highlight font-bold">October 2027 launch</span>.
          </p>
          <p className="text-gray-400 text-sm md:text-base mb-10">
            Thanks for your patience while we connect Washington&apos;s student leaders.
          </p>

          {/* Progress bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex justify-between text-xs text-gray-400 mb-2 font-semibold uppercase tracking-wide">
              <span>Build progress</span>
              <span>Beta</span>
            </div>
            <div className="h-2 rounded-full bg-gray-500/20 overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="glow-button bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white px-8 py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300"
            >
              Back to Home
            </Link>
            <Link
              href={from === 'signup' ? '/login' : '/signup'}
              className="glow-button glass-card text-white px-8 py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300"
            >
              {from === 'signup' ? 'Go to Login' : 'Create an Account'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

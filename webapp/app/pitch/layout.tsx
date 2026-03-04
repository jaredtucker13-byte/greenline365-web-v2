import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Story | GreenLine365',
    description: 'The story behind GreenLine365 — built from the real world, not Silicon Valley.',
    robots: {
          index: false,
          follow: false,
    },
};

export default function PitchLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>>;
}</>

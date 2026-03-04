import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About GreenLine365 — Your Curated Local Business Directory',
    description:
          'GreenLine365 is a curated community directory connecting you with verified local businesses, mobile services, destinations, and hidden gems across Florida. Built in Tampa.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>>;
}</>

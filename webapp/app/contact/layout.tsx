import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us — GreenLine365',
    description:
          'Suggest a business, report outdated info, or get in touch with the GreenLine365 team. Help us build a better local directory for Florida.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>>;
}</>

// app/properties/page.tsx
import { Metadata } from 'next';
import PropertySearchClient from './PropertySearchClient';

export const metadata: Metadata = {
  title: 'The Dark Collection | Exclusive Listings | Jennifer Elite',
  description: 'Experience luxury in the shadows. Explore our private collection of Dallas estates.',
};

export default function PropertiesPage() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <PropertySearchClient />
    </main>
  );
}
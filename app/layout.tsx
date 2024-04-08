// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/css/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Pizza King',
  description: 'Pizza King Store',
  icons: {
    icon: [
      {
        url: '/pizza.png',
        href: '/pizza.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="max-w-4xl mx-auto p-4">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

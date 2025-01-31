import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Title from './components/Title';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Andrea Mosher | PlateStrength',
  description: 'PlateStrength',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Title />
        <Nav />
        {children}
      </body>
    </html>
  );
}

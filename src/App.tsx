/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Highlight from './components/Highlight';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-black)] text-white selection:bg-[var(--color-brand-yellow)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Highlight />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

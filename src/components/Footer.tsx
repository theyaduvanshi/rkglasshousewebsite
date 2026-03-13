import { motion } from 'motion/react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--color-brand-black)] border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-3xl font-bold text-white tracking-tight flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded bg-[var(--color-brand-yellow)] flex items-center justify-center text-black font-black">
                RK
              </div>
              <span>Glass House</span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Professional glass and aluminium work services in Jaipur. Delivering high-quality workmanship and reliable solutions for over 11 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-[var(--color-brand-yellow)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block text-white font-medium mb-1">Address:</span>
                <a href="https://www.google.com/maps/place/R.K.GLASS+HOUSE/@26.7985455,75.7334563,17z/data=!3m1!4b1!4m6!3m5!1s0x396dcabf12b4f135:0x74a91518bb529004!8m2!3d26.7985455!4d75.7334563!16s%2Fg%2F11vk0jdjk5?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[var(--color-brand-yellow)] transition-colors">Shop no. 2, Plot no. 7, Mandi Rd, Near SMS Colony, Muhana, Rajasthan 302029</a>
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Phone:</span>
                <a href="tel:+918209727468" className="hover:text-[var(--color-brand-yellow)] transition-colors">+91 8209727468</a>
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Email:</span>
                <a href="mailto:rkglasshousemuhana@gmail.com" className="hover:text-[var(--color-brand-yellow)] transition-colors break-all">rkglasshousemuhana@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RK Glass House. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--color-brand-black)] border-t border-white/10 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-3xl font-bold text-white tracking-tight flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-10 rounded bg-[var(--color-brand-yellow)] flex items-center justify-center text-black font-black">
                RK
              </div>
              <span>Glass House</span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Professional glass and aluminium work services in Jaipur. Delivering high-quality workmanship and reliable solutions for over 11 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-[var(--color-brand-yellow)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block text-white font-medium mb-1">Address:</span>
                <a href="https://www.google.com/maps/place/R.K.GLASS+HOUSE/@26.7985455,75.7334563,17z/data=!3m1!4b1!4m6!3m5!1s0x396dcabf12b4f135:0x74a91518bb529004!8m2!3d26.7985455!4d75.7334563!16s%2Fg%2F11vk0jdjk5?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[var(--color-brand-yellow)] transition-colors">Shop no. 2, Plot no. 7, Mandi Rd, Near SMS Colony, Muhana, Rajasthan 302029</a>
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Phone:</span>
                <a href="tel:+918209727468" className="hover:text-[var(--color-brand-yellow)] transition-colors">+91 8209727468</a>
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Email:</span>
                <a href="mailto:rkglass073@gmail.com" className="hover:text-[var(--color-brand-yellow)] transition-colors break-all">rkglass073@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} RK Glass House. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

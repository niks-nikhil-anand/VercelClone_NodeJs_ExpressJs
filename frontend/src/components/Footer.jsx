
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Help", href: "/help" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-6">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center mr-2">
                <div className="h-3 w-3 bg-black rounded-full"></div>
              </div>
              <span className="font-bold text-white">Vercel Clone </span>
            </a>
            <span className="text-sm ml-4">© {currentYear} Made By Nikhil</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
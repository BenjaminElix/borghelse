import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "figma:asset/f564f9b4700d1c77547058eb568fd0e8baaffeae.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Hjem", id: "hero", type: "scroll" },
    { label: "Om oss", id: "om-oss", type: "scroll" },
    { label: "Tjenester", id: "tjenester", type: "scroll" },
    {
      label: "Bedriftshelse",
      id: "bedriftshelse",
      type: "link",
    },
    { label: "Kontakt", id: "kontakt", type: "scroll" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
              <img
                src={logo}
                alt="Borg Helse"
                className="h-45 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className="text-slate-700 hover:text-[#127ccb] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-700 hover:text-[#127ccb] transition-colors"
                >
                  {item.label}
                </button>
              ),
            )}
            <button
              onClick={() => scrollToSection("bestill")}
              className="bg-[#127ccb] hover:bg-[#0e66a8] text-white px-6 py-2.5 rounded-lg transition-colors"
            >
              Bestill time
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-slate-700"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) =>
              item.type === "link" ? (
                <Link
                  key={item.id}
                  to={`/${item.id}`}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-[#127ccb] rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-[#127ccb] rounded transition-colors"
                >
                  {item.label}
                </button>
              ),
            )}
            <button
              onClick={() => scrollToSection("bestill")}
              className="block w-full bg-[#127ccb] hover:bg-[#0e66a8] text-white px-4 py-2.5 rounded-lg transition-colors mt-2"
            >
              Bestill time
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
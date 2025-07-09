"use client";

import PropTypes from 'prop-types';
import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavigationItem {
  name: string;
  href: string;
  isThemeToggle?: boolean;
}

interface HeaderProps {
  brandName: string;
  logoSrc: string;
  navigation: NavigationItem[];
}

export const Header: FC<HeaderProps> = ({ brandName, logoSrc, navigation = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={logoSrc}
                  alt={`${brandName} Logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {brandName}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) =>
              item.isThemeToggle ? (
                <button
                  key="theme-toggle"
                  className="text-sm font-medium text-muted-foreground hover:text-primary relative transition-colors duration-300 group"
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                  }}
                >
                  {theme === 'light' ? (
                    <Moon size={20} className="text-primary" />
                  ) : (
                    <Sun size={20} className="text-primary" />
                  )}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary relative transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
              <span className="sr-only">Abrir menu</span>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 right-0 w-[280px] sm:w-[320px] bg-white shadow-lg z-50">
                <div className="flex justify-between items-center p-4">
                  <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={logoSrc}
                        alt={`${brandName} Logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {brandName}
                    </span>
                  </Link>
                  <button
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X size={24} />
                    <span className="sr-only">Fechar menu</span>
                  </button>
                </div>
                <nav className="flex flex-col space-y-3 p-4">
                  {navigation.map((item) =>
                    item.isThemeToggle ? (
                      <button
                        key="theme-toggle-mobile"
                        className="text-base text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  brandName: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
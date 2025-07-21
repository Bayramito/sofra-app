"use client";

import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
// import { LanguageSwitcher } from "./language-switcher";

export function ResponsiveHeader() {
  const navigationItems = [
    { href: "#", label: "Ana Sayfa", isActive: true },
    { href: "#", label: "Menü", isActive: false },
    { href: "#", label: "Hakkımızda", isActive: false },
    { href: "#", label: "İletişim", isActive: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-foreground">Sofra</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <LanguageSwitcher /> */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

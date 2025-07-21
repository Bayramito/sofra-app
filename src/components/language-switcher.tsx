"use client";

import * as React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const languages = [
  { value: "tr", label: "🇹🇷 Türkçe" },
  { value: "en", label: "🇺🇸 English" },
  { value: "bg", label: "🇧🇬 Български" },
];

export function LanguageSwitcher() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("tr");
  const [isOpen, setIsOpen] = React.useState(false);

  const selectedLang = languages.find(
    (lang) => lang.value === selectedLanguage
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-w-[120px] transition-colors"
      >
        <span>{selectedLang?.label}</span>
        <ChevronDownIcon
          className={`h-4 w-4 opacity-50 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
          {languages.map((language) => (
            <button
              key={language.value}
              onClick={() => {
                setSelectedLanguage(language.value);
                setIsOpen(false);
              }}
              className={`relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground transition-colors ${
                selectedLanguage === language.value
                  ? "bg-accent text-accent-foreground"
                  : ""
              }`}
            >
              <span>{language.label}</span>
              {selectedLanguage === language.value && (
                <div className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

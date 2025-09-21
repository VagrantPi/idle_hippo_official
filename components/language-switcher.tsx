"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
  mounted?: boolean
}

const languageNames = {
  en: "English",
  zh: "繁體中文",
  jp: "日本語",
  ko: "한국어",
}

const languageFlags = {
  en: "🇺🇸",
  zh: "🇹🇼",
  jp: "🇯🇵",
  ko: "🇰🇷",
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange, mounted = true }: LanguageSwitcherProps) {
  const handleLanguageChange = (lang: Language) => {
    console.log("[v0] Language switcher clicked:", lang) // Debug log
    onLanguageChange(lang)
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="gap-2 bg-transparent" disabled>
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">Loading...</span>
        <span className="sm:hidden">🌐</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languageNames[currentLanguage]}</span>
          <span className="sm:hidden">{languageFlags[currentLanguage]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => handleLanguageChange(code as Language)}
            className="gap-2 cursor-pointer"
          >
            <span>{languageFlags[code as Language]}</span>
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

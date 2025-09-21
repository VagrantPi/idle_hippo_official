"use client"

import Link from "next/link"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { useEffect, useState } from "react"

export function Navigation() {
  const { language, changeLanguage, mounted } = useLanguage()
  const [currentLang, setCurrentLang] = useState(language)
  const t = getTranslation(currentLang)

  useEffect(() => {
    setCurrentLang(language)

    const handleLanguageChange = (event: CustomEvent) => {
      console.log("[v0] Navigation received language change:", event.detail) // Debug log
      setCurrentLang(event.detail)
    }

    window.addEventListener("languageChanged", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChanged", handleLanguageChange as EventListener)
  }, [language])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl gradient-text">
          MEME HIPPO
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
              {t.nav.privacy}
            </Link>
          </div>

          <LanguageSwitcher currentLanguage={currentLang} onLanguageChange={changeLanguage} mounted={mounted} />
        </div>
      </div>
    </nav>
  )
}

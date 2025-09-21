"use client"

import { useState, useEffect } from "react"
import { type Language, detectLanguage } from "@/lib/i18n"

export function useLanguage() {
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Get saved language from localStorage or detect from browser
    const savedLang = localStorage.getItem("language") as Language | null
    const detectedLang = detectLanguage()
    const initialLang = (savedLang || detectedLang) as Language

    setLanguage(initialLang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = initialLang
    }
    setMounted(true)
  }, [])

  const changeLanguage = (newLang: Language) => {
    console.log("[v0] Changing language to:", newLang) // Debug log
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLang
    }
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: newLang }))
  }

  return { language, changeLanguage, mounted }
}

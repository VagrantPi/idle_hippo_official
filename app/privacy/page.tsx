"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { useEffect, useState } from "react"

export default function PrivacyPage() {
  const { language, mounted } = useLanguage()
  const [currentLang, setCurrentLang] = useState(language)
  const t = getTranslation(currentLang)

  useEffect(() => {
    setCurrentLang(language)

    const handleLanguageChange = (event: CustomEvent) => {
      console.log("[v0] Privacy page received language change:", event.detail) // Debug log
      setCurrentLang(event.detail)
    }

    window.addEventListener("languageChanged", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChanged", handleLanguageChange as EventListener)
  }, [language])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t.privacy.title}</h1>
          <p className="text-muted-foreground">{t.privacy.lastUpdated}</p>
        </div>

        <Card className="border-2">
          <CardContent className="p-8">
            <div className="text-muted-foreground leading-relaxed text-pretty space-y-6">
              <div
                className="privacy-content text-sm md:text-base"
                // Translations are local/static; safe to render as HTML
                dangerouslySetInnerHTML={{ __html: t.privacy.content.replace(/\n/g, '<br />') }}
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </div>
  )
}

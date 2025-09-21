"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { Download, Gamepad2, Heart, Music, Target, Zap, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { language, mounted } = useLanguage()
  const [currentLang, setCurrentLang] = useState(language)
  const t = getTranslation(currentLang)

  useEffect(() => {
    setCurrentLang(language)

    const handleLanguageChange = (event: CustomEvent) => {
      console.log("[v0] Homepage received language change:", event.detail) // Debug log
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

  const features = [
    {
      icon: Zap,
      title: t.features.idle.title,
      description: t.features.idle.description,
    },
    {
      icon: Target,
      title: t.features.click.title,
      description: t.features.click.description,
    },
    {
      icon: Heart,
      title: t.features.pets.title,
      description: t.features.pets.description,
    },
    {
      icon: Music,
      title: t.features.karaoke.title,
      description: t.features.karaoke.description,
    },
    {
      icon: Gamepad2,
      title: t.features.daily.title,
      description: t.features.daily.description,
    },
    {
      icon: Star,
      title: t.features.evolution.title,
      description: t.features.evolution.description,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-gaming-pattern.png')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text text-balance">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-primary mb-4">{t.hero.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl">{t.hero.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6 animate-pulse-glow">
                  <Download className="mr-2 h-5 w-5" />
                  {t.hero.comingSoon}
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <Image
                  src="/images/hippo-character.png"
                  alt="Meme Hippo Character"
                  width={400}
                  height={400}
                  className="relative z-10 animate-float drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">{t.features.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-balance">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text text-balance">{t.hero.subtitle}</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">{t.hero.description}</p>
          <Button size="lg" className="text-lg px-8 py-6 animate-pulse-glow">
            <Download className="mr-2 h-5 w-5" />
            {t.hero.comingSoon}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t.footer.privacy}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

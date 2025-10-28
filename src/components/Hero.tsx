"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Main heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Перестаньте покупать AI.<br />
              Начните на нем зарабатывать
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Внедряем AI-инструменты, привязанные к P&L вашей компании,<br className="hidden md:block" /> а не к модным трендам.
          </p>

          {/* Метрики с градиентом */}
          <div
            className={`pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  3-14 дней
                </div>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  на внедрение AI-агента под ключ
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  25+ кейсов
                </div>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  успешных внедрений AI
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 sm:col-span-2 md:col-span-1">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  P&L
                </div>
                <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Прозрачен для каждого проекта
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`pt-6 sm:pt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-primary to-primary/90"
            >
              <a href="#cta" className="flex items-center justify-center gap-2">
                Получить бесплатный AI-аудит
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 w-full sm:w-auto bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#keisy">Посмотреть кейсы</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export function CTA() {

  useEffect(() => {
    // Загружаем скрипт Planerka
    const script = document.createElement("script");
    script.src = "https://planerka.app/meet/assets/external/embed.js?v=0.1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Очистка при размонтировании
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="cta" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Выберите удобный способ связи или запишитесь на бесплатную
            консультацию.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Calendar/Booking Card */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">
              Выберите время встречи
            </h3>
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg mb-4">
                <p className="text-sm font-semibold text-accent">
                  Бесплатная диагностика
                </p>
              </div>
              <h4 className="text-lg font-semibold mb-2">Встреча на час</h4>
              <p className="text-muted-foreground mb-4">
                Бесплатная первичная консультация: погрузимся в ваши задачи и
                покажем, где ИИ уже сегодня может сэкономить вам время, деньги
                и внимание.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                <span>⏱ 60 мин</span>
                <span>💻 Google Meet</span>
              </div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-lg overflow-hidden min-h-[500px]">
              <div
                className="app-planerka-embed"
                data-planerka-embed="default"
                data-planerka-url="https://planerka.app/meet"
                data-planerka-user="nikita-yakovlev-uziqcb"
                data-planerka-event="meeting"
              ></div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Или свяжитесь с нами</h3>
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg mb-4">
                <p className="text-sm font-semibold">
                  Бесплатная консультация
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                Запишитесь на консультацию с нашими экспертами
              </p>
            </div>

            <form className="space-y-4 mb-6">
              <Input placeholder="Ваше имя" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Телефон" />
              <Button type="submit" size="lg" className="w-full">
                Оставьте контакт - мы свяжемся
              </Button>
            </form>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Или свяжитесь с нами напрямую:
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://t.me/yakovsuits" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">📱</span> Telegram
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="tel:+79000000000">
                    <span className="mr-2">📞</span> Телефон
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:info@yakovsuits.com">
                    <span className="mr-2">✉️</span> Email
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Среднее время ответа: в течение 17 минут
              </p>
            </div>
          </Card>
        </div>
      </div>

      <footer className="container-custom mt-24 pt-16 border-t border-border">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Yakov Suits</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Премиальный AI-консалтинг и внедрение. Превращаем AI из модного слова
              в работающий инструмент, который приносит деньги.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/yakov_suits"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.223-.054-.347-.346-.124l-6.4 4.02-2.76-.918c-.6-.187-.612-.6.126-.89l10.782-4.156c.5-.18.943.12.773.89z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+79139873058" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <span>📞</span>
                <span>+7 913 987-30-58</span>
              </a>
              <a href="mailto:n.yakovlev@yakov-suits.pro" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <span>✉️</span>
                <span>n.yakovlev@yakov-suits.pro</span>
              </a>
              <a href="https://t.me/yakov_suits" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <span>💬</span>
                <span>Telegram</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>📍</span>
                <span>Новосибирск, Россия</span>
              </div>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="font-semibold mb-4">Юридическая информация</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>ИП Яковлев Никита Вадимович</p>
              <p>ИНН: 540863824601</p>
              <p>ОГРНИП: 324547600123251</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Yakov Suits. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Политика обработки персональных данных
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

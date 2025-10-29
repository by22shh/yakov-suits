"use client";

import { Card } from "@/components/ui/card";

export function Approach() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl hidden sm:block"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl hidden sm:block"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Наш подход: <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Бизнес → Технологии</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Мы отличаемся тем, что смотрим на задачи глазами бизнеса, а не
            инженеров. Наш приоритет — не технология ради технологии, а решение
            конкретных проблем для достижения измеримого ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Standard Approach - Left Card with Soft Red Gradient */}
          <Card className="group relative overflow-hidden p-4 sm:p-6 border-2 border-red-200/40 bg-gradient-to-br from-red-50/80 via-red-50/40 to-background hover:shadow-xl hover:shadow-red-100/20 transition-all duration-500 hover:scale-[1.01]">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <div className="mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Стандартный подход: «Автоматизация ради автоматизации»
                </h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-red-200/30 hover:border-red-300/50 transition-all duration-300 hover:translate-x-1">
                  <div className="font-semibold mb-1 text-foreground text-sm">1. Внедрить ИИ</div>
                  <p className="text-xs text-muted-foreground">
                    Продать коробочное решение, потому что это модно
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-red-300/40 to-transparent"></div>
                </div>

                <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-red-200/30 hover:border-red-300/50 transition-all duration-300 hover:translate-x-1">
                  <div className="font-semibold mb-1 text-foreground text-sm">2. Надежда на результат</div>
                  <p className="text-xs text-muted-foreground">
                    Агент работает «в стол», не встраивается в процессы
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-red-300/40 to-transparent"></div>
                </div>

                <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-red-200/30 hover:border-red-300/50 transition-all duration-300 hover:translate-x-1">
                  <div className="font-semibold mb-1 text-foreground text-sm">3. Система встала</div>
                  <p className="text-xs text-muted-foreground">
                    Интегратор ушел, поддержка закончилась, MVP не «поехал»
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Our Approach - Right Card with Soft Green Gradient */}
          <Card className="group relative overflow-hidden p-4 sm:p-6 border-2 border-emerald-200/40 bg-gradient-to-br from-emerald-50/80 via-emerald-50/40 to-background hover:shadow-xl hover:shadow-emerald-100/20 transition-all duration-500 hover:scale-[1.01]">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <div className="mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-400">
                  Наш подход: От аудита к результату за 3 шага
                </h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-300 hover:translate-x-1">
                  <div className="font-semibold mb-1 text-foreground text-sm">
                    Шаг 1. AI-Консалтинг и Аудит
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Проводим анализ бизнес-процессов, находим точки, где AI
                    принесет максимум денег
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-emerald-300/40 to-transparent"></div>
                </div>

                <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-300 hover:translate-x-1">
                  <div className="font-semibold mb-1 text-foreground text-sm">
                    Шаг 2. Подбор и внедрение AI-агентов
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Подбираем лучший инструмент, внедряем готового или создаем
                    кастомного за 3-14 дней
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-emerald-300/40 to-transparent"></div>
                </div>

                <div className="p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-300 hover:translate-x-1">
                  <div className="font-semibold mb-1 text-foreground text-sm">
                    Шаг 3. Разработка и интеграция
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Разрабатываем уникальную архитектуру и гарантируем, что она
                    работает
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-emerald-300/30 to-transparent"></div>
                </div>

                <div className="p-4 sm:p-5 bg-gradient-to-br from-emerald-100/40 to-emerald-50/20 rounded-lg border-2 border-emerald-200/40 shadow-lg hover:shadow-emerald-200/30 transition-all duration-300">
                  <div className="font-bold text-sm sm:text-base mb-1 bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                    Результат: Измеримый ROI
                  </div>
                  <p className="text-xs text-foreground font-medium">
                    Вы получаете рабочий бизнес-процесс, который экономит время
                    и деньги
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

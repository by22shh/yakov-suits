"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = {
    step1: [
      {
        title: "Подписание NDA",
        description:
          "Гарантируем 100% конфиденциальность ваших данных еще до начала работы",
      },
      {
        title: "Аудит Процессов",
        description:
          "Проводим интервью с C-lvl, руководителями и сотрудниками, чтобы найти «узкие места»",
      },
      {
        title: "Анализ документов и данных",
        description:
          "Изучаем регламенты, скрипты, шаблоны и анализируем данные из IT-систем",
      },
      {
        title: "Карта Бизнес-процессов",
        description:
          "Фиксируем, как бизнес работает на самом деле, а не «на бумаге». Ищем процессы, где внедрение ИИ имеет максимальный ROI",
      },
      {
        title: "Карта AI-решений",
        description:
          "Готовим документ с 3-5 точками, где AI «ближе всего к деньгам»",
      },
      {
        title: "План Внедрения",
        description:
          "Пошаговый план: что интегрировать, что разработать, какие метрики отслеживать",
      },
    ],
    step2: [
      {
        title: "Интеграция Готовых AI-решений",
        description:
          "Непредвзято подбираем оптимальное AI-решение на рынке (цена/качество) и безболезненно встраиваем его в ваши текущие процессы",
      },
      {
        title: "Готовые AI-агенты (25+)",
        description:
          "Каталог готовых сценариев для маркетинга, продаж и HR с запуском за 3-5 дней",
        hasLink: true,
      },
      {
        title: "Кастомные AI-агенты",
        description:
          "Создаём кастомного ИИ-агента под вашу задачу за 2-3 недели",
      },
      {
        title: "AI-ассистенты для Экспертов",
        description:
          "Дообучаем AI на ваших документах и данных для помощи специалистам",
      },
      {
        title: "AI для Смет и КП",
        description:
          "Агенты, обрабатывающие входящие сметы и помогающие быстро готовить КП",
      },
      {
        title: "AI-Контроль Качества (звонки/чаты)",
        description:
          "AI-супервайзер анализирует 100% коммуникаций по чек-листу",
      },
    ],
    step3: [
      {
        title: "Кастомная Enterprise-Разработка",
        description:
          "Проектируем и пишем с нуля сложные AI-системы, когда простых агентов недостаточно",
      },
      {
        title: "Прототипирование AI-продуктов (MVP)",
        description:
          "Берем вашу идею и создаем «пилот» для проверки гипотез и запуска на рынок",
      },
      {
        title: "Глубокая Интеграция с CRM",
        description:
          "Связываем AI-агентов с ядром вашего бизнеса (Bitrix24, amoCRM)",
      },
      {
        title: "Платформенные AI-решения",
        description:
          "Создаем платформу с админ-панелью, где вы сами управляете AI",
      },
      {
        title: "Безопасность (On-Premise)",
        description:
          "Разворачиваем AI-решения на ваших серверах для полного контроля данных",
      },
      {
        title: "Соблюдение 152-ФЗ",
        description:
          "Разработка с учетом требований 152-ФЗ (экспертиза SberTech, Kaspersky)",
      },
    ],
  };

  return (
    <section id="uslugi" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight px-2">
            От консалтинга к внедрению: прозрачная система в 3 шага
          </h2>
        </div>

        <Tabs defaultValue="step1" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 h-auto mb-8 sm:mb-12 bg-background border border-border">
            <TabsTrigger value="step1" className="py-3 sm:py-4 md:py-6 px-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-primary/10">
              <div className="text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">1</span>
                </div>
                <div className="font-semibold mb-1 text-[10px] sm:text-xs md:text-sm">AI-Консалтинг и Стратегия</div>
                <div className="text-[9px] sm:text-xs text-muted-foreground hidden sm:block">
                  Находим точки роста и считаем ROI
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="step2" className="py-3 sm:py-4 md:py-6 px-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-primary/10">
              <div className="text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">2</span>
                </div>
                <div className="font-semibold mb-1 text-[10px] sm:text-xs md:text-sm">Быстрые AI-Решения</div>
                <div className="text-[9px] sm:text-xs text-muted-foreground hidden sm:block">
                  Внедряем решения с быстрым ROI
                </div>
              </div>
            </TabsTrigger>
            <TabsTrigger value="step3" className="py-3 sm:py-4 md:py-6 px-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-primary/10">
              <div className="text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">3</span>
                </div>
                <div className="font-semibold mb-1 text-[10px] sm:text-xs md:text-sm">Enterprise и Безопасность</div>
                <div className="text-[9px] sm:text-xs text-muted-foreground hidden sm:block">
                  Масштабируем и интегрируем
                </div>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="step1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {services.step1.map((service, idx) => (
                <Card key={idx} className={`group p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-primary/30 bg-gradient-to-br from-background to-background/50 animate-fade-in-up delay-${idx * 100}`}>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="step2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {services.step2.map((service, idx) => (
                <Card key={idx} className={`group p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-accent/50 bg-gradient-to-br from-background to-background/50 animate-fade-in-up delay-${idx * 100}`}>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.hasLink && (
                    <Button variant="outline" size="sm" className="hover:bg-accent/10 text-xs sm:text-sm">
                      Перейти в каталог
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="step3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {services.step3.map((service, idx) => (
                <Card key={idx} className={`group p-4 sm:p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-primary/50 bg-gradient-to-br from-background to-background/50 animate-fade-in-up delay-${idx * 100}`}>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

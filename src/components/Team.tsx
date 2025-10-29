import { Card } from "@/components/ui/card";
import Image from "next/image";

export function Team() {
  const team = [
    {
      name: "Никита Яковлев",
      role: "Фаундер, архитектор решений и консалтер",
      experience:
        "8+ лет в IT, AI-проектах и консалтинге. Ex-ведущий бизнес-аналитик в Норникеле, MindFlow, Siberian Wellness.",
      note: "Мост между стратегией, бизнесом и технологиями.",
      image: "/team/nikita.png",
    },
    {
      name: "Кирилл Криволапов",
      role: "Коммерческий директор",
      experience: "6+ лет опыта. Работал с Kodland, Eduson. Консультировал АЛРОСА, Газпром, Лукойл, X5 и др.",
      note: "Эксперт по быстрой автоматизации и повышению конверсии из «лида в клиента».",
      image: "/team/kirill.png",
    },
    {
      name: "Владимир Ким",
      role: "Эксперт по CRM и бизнес-процессам",
      experience:
        "10+ лет в системной интеграции. Ex-руководитель CRM-департамента в Softline. Золотой интегратор по Bitrix24.",
      note: "Специалист по превращению хаоса в управляемые, автоматизированные воронки.",
      image: "/team/vladimir.png",
    },
    {
      name: "Ниджат Байрамов",
      role: "Техлид",
      experience:
        "8 лет в Kaspersky и SberTech. Отвечает за архитектуру, масштабируемость и отказоустойчивость решений.",
      note: "Гарант технологической надёжности наших продуктов.",
      image: "/team/nidjat.png",
    },
  ];

  return (
    <section id="komanda" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Команда</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Наша сила — в синергии экспертизы. Мы объединяем стратегический
            консалтинг, продуктовую разработку, CRM-интеграции и сложный
            AI-инжиниринг.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {team.map((member, idx) => (
            <Card key={idx} className={`group overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 animate-scale-in delay-${idx * 100} flex flex-col`}>
              <div className="aspect-[3/4] relative overflow-hidden bg-secondary/30">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-3 leading-relaxed">{member.experience}</p>
                <div className="pt-3 border-t border-border mt-auto">
                  <p className="text-xs italic line-clamp-2 text-muted-foreground/80">{member.note}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

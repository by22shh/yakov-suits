"use client";

import Image from "next/image";

export function LogosMarquee() {
  const logos = [
    { src: "/logos/BG_logistic.png", alt: "BG Logistic", height: 36, mobileHeight: 24 },
    { src: "/logos/Eduson.png", alt: "Eduson", height: 30, mobileHeight: 20 },
    { src: "/logos/Sber_tech.png", alt: "Sber Tech", height: 42, mobileHeight: 28 },
    { src: "/logos/kaspersky.png", alt: "Kaspersky", height: 96, mobileHeight: 64 },
    { src: "/logos/kodland_цвет.png", alt: "Kodland", height: 45, mobileHeight: 30 },
    { src: "/logos/mindflow.png", alt: "Mindflow", height: 84, mobileHeight: 56 },
    { src: "/logos/softline.png", alt: "Softline", height: 36, mobileHeight: 24 },
    { src: "/logos/АЛУФ.png", alt: "АЛУФ", height: 30, mobileHeight: 20 },
    { src: "/logos/nornickel.png", alt: "Норникель", height: 37, mobileHeight: 25 },
  ];

  return (
    <section className="relative py-8 sm:py-12 overflow-hidden pointer-events-none">
      <div className="relative flex">
        <div className="flex animate-marquee">
          {/* Первый набор логотипов */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="mx-4 sm:mx-6 flex items-center justify-center flex-shrink-0"
              style={{ width: "160px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={logo.height}
                className="object-contain w-auto transition-all duration-300 hidden sm:block drop-shadow-sm"
                style={{ height: `${logo.height}px` }}
              />
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={logo.mobileHeight}
                className="object-contain w-auto transition-all duration-300 block sm:hidden drop-shadow-sm"
                style={{ height: `${logo.mobileHeight}px` }}
              />
            </div>
          ))}
          {/* Дубликат для бесшовной анимации */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="mx-4 sm:mx-6 flex items-center justify-center flex-shrink-0"
              style={{ width: "160px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={logo.height}
                className="object-contain w-auto transition-all duration-300 hidden sm:block drop-shadow-sm"
                style={{ height: `${logo.height}px` }}
              />
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={logo.mobileHeight}
                className="object-contain w-auto transition-all duration-300 block sm:hidden drop-shadow-sm"
                style={{ height: `${logo.mobileHeight}px` }}
              />
            </div>
          ))}
          {/* Третий набор для плавности */}
          {logos.map((logo, index) => (
            <div
              key={`logo-3-${index}`}
              className="mx-4 sm:mx-6 flex items-center justify-center flex-shrink-0"
              style={{ width: "160px" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={logo.height}
                className="object-contain w-auto transition-all duration-300 hidden sm:block drop-shadow-sm"
                style={{ height: `${logo.height}px` }}
              />
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={logo.mobileHeight}
                className="object-contain w-auto transition-all duration-300 block sm:hidden drop-shadow-sm"
                style={{ height: `${logo.mobileHeight}px` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Едва заметный текст справа снизу */}
      <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-6 text-xs text-gray-300 opacity-30">
        Опыт членов нашей команды
      </div>
    </section>
  );
}

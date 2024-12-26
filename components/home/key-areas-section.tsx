'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/section-header'
import { GradientCard } from '@/components/ui/gradient-card'

export function KeyAreasSection() {
  const areas = [
    {
      title: "Livelihood Empowerment",
      description: "Empowering Lives, One Skill at a Time. Our livelihood empowerment program equips individuals with essential skills to secure sustainable employment and improve their quality of life.",
      image: "/images/skill-dev/skill-dev.webp",
      stats: "1000+ Livelihoods Empowered",
      gradient: "from-primary-dark via-primary to-accent",
      href: "/programs?section=0" // Updated to match programs page
    },
    {
      title: "Mental Wellness and Counseling",
      description: "Vikasalya's Brain Whisper program is dedicated to providing comprehensive mental health support to individuals in need.",
      image: "/images/nagpur2.jpg",
      stats: "2000+ Lives Impacted",
      gradient: "from-primary via-primary-light to-accent-light",
      href: "/programs?section=1" // Updated to match programs page
    },
    {
      title: "Child Development", 
      description: "Supporting the Next Generation's Journey. Our holistic child development initiatives nurture children from their primary years all the way to their career paths.",
      image: "/images/child_development.webp",
      stats: "1500+ Children Supported",
      gradient: "from-accent via-accent-light to-primary-light",
      href: "/programs?section=2" // Updated to match programs page
    },
    {
      title: "Women Empowerment",
      description: "Enabling Women to Lead and Thrive. We provide essential training and resources that empower women economically and socially.",
      image: "/images/menstrual-hygiene/Menstrual Hygiene training Kerala.webp", 
      stats: "1000+ Women Empowered",
      gradient: "from-primary-dark via-primary to-accent",
      href: "/programs?section=3" // Updated to match programs page
    },
    {
      title: "Disaster Response",
      description: "Compassionate Care in Critical Times. Our dedicated disaster response team provides immediate humanitarian relief, rehabilitation support, and helps rebuild communities affected by natural and man-made disasters.",
      image: "/images/wayanad landslide relief.webp",
      stats: "1000+ Disasters Responded",
      gradient: "from-primary-dark via-primary to-accent",
      href: "/programs?section=4" // Updated to match programs page
    }
  ]

  return (
    <section className="py-24 bg-gradient-natural">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Key Focus Areas"
          description="Empowering communities through targeted initiatives that create lasting impact."
          gradient="bg-gradient-earth"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {areas.map((area, index) => (
            <Link key={area.title} href={area.href}>
              <GradientCard
                gradient={area.gradient}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text mb-4">{area.title}</h3>
                  <p className="text-text-muted mb-4 leading-relaxed">{area.description}</p>
                  <div className="text-sm font-semibold text-primary">
                    {area.stats}
                  </div>
                </div>
              </GradientCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
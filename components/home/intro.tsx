import { motion } from 'framer-motion'

export function IntroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent z-0" />
      
      <div className="relative z-10 py-24 bg-gradient-natural">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-text/90 leading-relaxed">
              Vikasalaya Foundation is dedicated to holistic development with a strong focus on mental health, 
              child welfare, and women's empowerment. Our initiatives aim to break down societal barriers, 
              empower individuals, and inspire positive change, building a brighter future for communities across India.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

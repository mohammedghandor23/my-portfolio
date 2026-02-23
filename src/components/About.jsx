import { motion } from 'framer-motion'
import { Code2, Trophy, Smartphone, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    icon: Trophy,
    label: 'ICPC Top 10',
    desc: 'Latakia University',
  },
  {
    icon: Code2,
    label: '400+',
    desc: 'Problems Solved',
  },
  {
    icon: Smartphone,
    label: 'Flutter',
    desc: 'Mobile Developer',
  },
  {
    icon: Users,
    label: 'Team Player',
    desc: 'Backend Collaboration',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building impactful mobile experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10">
              <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light">
                Fourth-year{' '}
                <span className="text-white font-medium">
                  Software Engineering (Informatics Engineering)
                </span>{' '}
                student at Latakia University (formerly Tishreen University).
              </p>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light mt-4">
                Ranked{' '}
                <span className="gradient-text font-semibold">Top 10</span> in
                the ICPC programming contest at Latakia University. Solved{' '}
                <span className="text-white font-medium">400+</span>{' '}
                competitive programming problems across various difficulty
                levels.
              </p>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light mt-4">
                Experienced in building{' '}
                <span className="text-white font-medium">
                  scalable mobile applications
                </span>{' '}
                using Flutter with RESTful APIs in collaboration with backend
                teams.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-hover p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-accent flex items-center justify-center">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.label}
                </h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Trophy, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const achievements = [
  {
    icon: Trophy,
    title: 'ICPC Programming Contest',
    description: 'Ranked Top 10 at Latakia University',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    icon: Code2,
    title: '400+ Problems Solved',
    description: 'Algorithm and data structure problems across various difficulty levels',
    color: 'from-purple-500 to-blue-400',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones in competitive programming and problem solving"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card glass-card-hover p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />

              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm md:text-base font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

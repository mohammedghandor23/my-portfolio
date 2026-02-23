import { motion } from 'framer-motion'
import {
  Smartphone,
  Layers,
  Globe,
  Bell,
  Layout,
  GitBranch,
  Brain,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['Flutter', 'Dart'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'State Management',
    icon: Layers,
    skills: ['BLoC', 'GetX'],
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Backend Integration',
    icon: Globe,
    skills: ['RESTful APIs', 'Team Collaboration'],
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Notifications',
    icon: Bell,
    skills: ['Firebase Cloud Messaging (FCM)'],
    color: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'Architecture & UI',
    icon: Layout,
    skills: ['Responsive UI', 'Clean Architecture'],
    color: 'from-indigo-500 to-blue-400',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
    color: 'from-red-500 to-orange-400',
  },
  {
    title: 'Problem Solving',
    icon: Brain,
    skills: ['Algorithms', 'Data Structures', 'Competitive Programming'],
    color: 'from-violet-500 to-purple-400',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card glass-card-hover p-6 group"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <cat.icon size={20} className="text-white" />
              </div>

              <h3 className="text-white font-semibold text-base mb-3">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-white/5 rounded-lg border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

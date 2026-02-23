import { motion } from 'framer-motion'
import { GraduationCap, Globe } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Education & Languages"
          subtitle="Academic background and language proficiency"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass-card glass-card-hover p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                <GraduationCap size={26} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Bachelor of Informatics Engineering
              </h3>
              <p className="text-accent-purple font-medium text-sm mb-4">
                Software Engineering Specialization
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-text-secondary text-sm">
                      Latakia University{' '}
                      <span className="text-text-muted">(formerly Tishreen University)</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                  <p className="text-text-secondary text-sm">4th Year Student</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card glass-card-hover p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6">
                <Globe size={26} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-6">Languages</h3>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">Arabic</span>
                    <span className="text-text-muted text-xs">Native</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-accent rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">English</span>
                    <span className="text-text-muted text-xs">Very Good (Technical)</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '82%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-gradient-accent rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

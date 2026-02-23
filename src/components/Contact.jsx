import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohammed.ghandor23@gmail.com',
    href: 'mailto:mohammed.ghandor23@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+963 980 895 955',
    href: 'tel:+963980895955',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Latakia, Syria',
    href: null,
  },
]

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent-purple/5 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-blue/5 rounded-full blur-[80px]" />

            <div className="relative">
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-accent-purple/30 group-hover:bg-accent-purple/10 transition-all duration-300">
                      <item.icon size={20} className="text-text-secondary group-hover:text-accent-purple transition-colors" />
                    </div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-accent-purple transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/5 pt-8">
                <p className="text-center text-text-muted text-sm mb-5">
                  Connect with me
                </p>
                <div className="flex items-center justify-center gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:border-accent-purple/30 hover:bg-accent-purple/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}

                  <motion.a
                    href="mailto:mohammed.ghandor23@gmail.com"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-accent rounded-xl text-white text-sm font-medium hover:shadow-lg hover:shadow-accent-purple/25 transition-all duration-300"
                  >
                    <Send size={16} />
                    Send Email
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

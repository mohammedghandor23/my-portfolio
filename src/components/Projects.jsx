import { motion } from 'framer-motion'
import { ExternalLink, Smartphone, Monitor } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ImageSlider from './ImageSlider'

const mainProjects = [
  {
    title: 'YASSEN',
    subtitle: 'Mosque Management System',
    badge: 'Completed',
    description:
      'Built using Flutter with GetX state management and integrated with RESTful APIs. Multi-role system (Admin & Supervisors) with permission control. Features include student management, group assignment, attendance tracking, grading system, and a fully isolated seasonal system. Fully responsive UI.',
    tech: ['Flutter', 'Dart', 'GetX', 'RESTful APIs', 'Responsive UI'],
    images: [
      '/assets/yassen1.png',
      '/assets/yassen2.png',
      '/assets/yassen3.png',
      '/assets/yassen4.png',
    ],
  },
  {
    title: 'FODZ',
    subtitle: 'Food Delivery System',
    badge: 'Published on Google Play',
    description:
      'Developed using Flutter with BLoC state management and RESTful APIs in collaboration with a backend team. Includes Admin dashboard, Restaurant dashboard, Driver app, and Customer app. Features: restaurant browsing, ordering, real-time tracking, favorites, map location selection, and Firebase push notifications. Fully responsive UI.',
    tech: ['Flutter', 'Dart', 'BLoC', 'RESTful APIs', 'Firebase FCM', 'Google Maps'],
    images: [
      '/assets/FODZ1.png',
      '/assets/FODZ2.png',
      '/assets/FODZ3.png',
      '/assets/FODZ4.png',
    ],
  },
  {
    title: 'FORTY',
    subtitle: 'Supermarket Delivery System',
    badge: 'Completed',
    description:
      'Developed using Flutter with BLoC state management and RESTful APIs in collaboration with backend team. Consists of two main systems: Customer App and System App (Admin, Cashier, Driver accounts).',
    features: {
      'Customer App': ['Ordering', 'Discounts', 'Categories', 'Offers', 'Loyalty Points'],
      'Admin': ['Manage Products', 'Manage Offers', 'Manage Orders', 'Cash Register', 'Manage Drivers & Cashiers'],
      'Cashier': ['Approve Orders', 'Assign Drivers', 'Driver Settlements'],
      'Driver': ['Manage Deliveries', 'Request Withdrawals', 'Return Payments'],
    },
    tech: ['Flutter', 'Dart', 'BLoC', 'RESTful APIs', 'Firebase FCM'],
    customerImages: [
      '/assets/forty1.png',
      '/assets/forty2.png',
      '/assets/forty3.png',
      '/assets/forty4.png',
    ],
    dashboardImages: [
      '/assets/fortyDash1.png',
      '/assets/fortyDash2.png',
      '/assets/fortyDash3.png',
      '/assets/fortyDash4.png',
    ],
  },
]

const smallProjects = [
  {
    title: 'WhereWhen',
    subtitle: 'Chat App',
    features: ['Email authentication', 'Real-time chat'],
    icon: '💬',
  },
  {
    title: 'FireNots',
    subtitle: 'Notes App',
    features: ['Category-based notes', 'User-specific storage'],
    icon: '📝',
  },
  {
    title: 'Weatherya',
    subtitle: 'Weather App',
    features: ['Automatic city detection', 'Rain probability display'],
    icon: '🌤',
  },
]

function ProjectCard({ project, index, reversed }) {
  const isForty = project.title === 'FORTY'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 lg:p-10"
    >
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
              {project.title}
            </h3>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/20">
              {project.badge}
            </span>
          </div>

          <p className="text-text-secondary text-sm md:text-base mb-2 font-medium">
            {project.subtitle}
          </p>

          <p className="text-text-muted text-sm md:text-base leading-relaxed mb-5">
            {project.description}
          </p>

          {project.features && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {Object.entries(project.features).map(([role, feats]) => (
                <div key={role} className="bg-white/[0.02] rounded-lg p-3 border border-white/5">
                  <h4 className="text-xs font-semibold text-white mb-2 uppercase tracking-wider">
                    {role}
                  </h4>
                  <ul className="space-y-1">
                    {feats.map((f) => (
                      <li key={f} className="text-text-muted text-xs flex items-start gap-1.5">
                        <span className="text-accent-purple mt-0.5">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-white/5 rounded-lg border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          {isForty ? (
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3 justify-center">
                  <Smartphone size={14} className="text-accent-purple" />
                  <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Customer App</span>
                </div>
                <ImageSlider images={project.customerImages} alt={`${project.title} Customer`} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 justify-center">
                  <Monitor size={14} className="text-accent-blue" />
                  <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">System App</span>
                </div>
                <ImageSlider images={project.dashboardImages} alt={`${project.title} Dashboard`} />
              </div>
            </div>
          ) : (
            <ImageSlider images={project.images} alt={project.title} />
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications built with Flutter"
        />

        <div className="space-y-8">
          {mainProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
            Other Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {smallProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card glass-card-hover p-6"
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {project.title}
                </h4>
                <p className="text-text-muted text-sm mb-4">
                  {project.subtitle}
                </p>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="text-text-secondary text-sm flex items-start gap-2"
                    >
                      <span className="text-accent-purple mt-1 text-xs">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

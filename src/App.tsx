import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Award, 
  BookOpen, 
  Camera, 
  Briefcase, 
  Code2, 
  Database, 
  ChevronRight,
  Github,
  Trophy,
  GraduationCap,
  Globe
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tight text-white mb-2"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-12 bg-emerald-500 mt-4 rounded-full" />
  </div>
);

const ExperienceItem = ({ 
  company, 
  role, 
  period, 
  location, 
  description, 
  highlights 
}: { 
  company: string; 
  role: string; 
  period: string; 
  location: string; 
  description: string; 
  highlights: string[] 
}) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l border-zinc-800 last:pb-0"
  >
    <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
      <div>
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <p className="text-emerald-400 font-medium">{company}</p>
      </div>
      <div className="text-right">
        <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
          {period}
        </span>
        <p className="text-xs text-zinc-500 mt-1">{location}</p>
      </div>
    </div>
    <p className="text-zinc-400 mb-4 text-sm leading-relaxed italic">
      {description}
    </p>
    <ul className="space-y-2">
      {highlights.map((highlight, idx) => (
        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
          <ChevronRight className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillCard = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-2xl"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="text-xs font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-white">
            PM<span className="text-emerald-500">.</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="mailto:archanabinni@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Peggie Mishra
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gradient mb-8">
                Strategic Data Product Leader
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
                11+ years of experience building and scaling enterprise data platforms across Banking, Healthcare, and Consumer Tech. 
                Specializing in <span className="text-white">AI/Data platforms</span>, financial systems, and 0→1 product development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                href="mailto:archanabinni@gmail.com"
                className="px-6 py-3 bg-emerald-500 text-black font-bold rounded-full transition-all flex items-center gap-2"
                >
                  Get in Touch <Mail className="w-4 h-4" />
                </a>
                <a 
                href="https://www.linkedin.com/in/peggiemishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full border border-zinc-800 transition-all flex items-center gap-2"
                >
                 View LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-zinc-800 aspect-[4/5] group">
                <img 
                  src="/peggie-portfolio/PeggieProfilePic.jpeg" 
                  alt="Peggie Mishra" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32" id="experience">
          <SectionHeader 
            title="Professional Journey" 
            subtitle="A track record of driving measurable business impact across Fortune 500 organizations and early-stage startups."
          />
          <div className="max-w-4xl">
            <ExperienceItem 
              company="Kozva.ai"
              role="Founding Product Manager"
              period="Mar 2026 – Present"
              location="Bengaluru"
              description="Early-stage AI startup building high-conversion artifacts from ideas for creators and businesses."
              highlights={[
                "Driving end-to-end product development lifecycle from problem discovery to feature delivery.",
                "Leading product strategy, roadmap planning, and prioritisation in a 0→1 environment.",
                "Writing PRDs and defining product requirements, translating ideas into actionable features.",
                "Collaborating on UI/UX design and leveraging data analytics to monitor performance."
              ]}
            />
            <ExperienceItem 
              company="TCS (Apple Inc – iTunes Financial Data Platform)"
              role="Data Engineering Lead"
              period="Jun 2021 – Mar 2026"
              location="Bengaluru"
              description="Supporting financial reporting and partner payments across Apple's digital services universe."
              highlights={[
                "Owned the data product roadmap for Apple’s AI Data Platform (AIDP).",
                "Built and scaled data workflows handling royalty payments, tax processing, and remittances.",
                "Developed automated pipelines using Snowflake, Python, and AWS, reducing manual effort by 99%.",
                "Mentored 25+ engineers, boosting team productivity by 90% (Gold Mentorship Award)."
              ]}
            />
            <ExperienceItem 
              company="Quest Global (Apple Inc – iTunes Financial Data Platform)"
              role="Lead Data Engineer"
              period="Mar 2021 – Jun 2021"
              location="Bengaluru"
              description="Leading data solutions for global royalty reporting systems."
              highlights={[
                "Led Teradata based data solutions for royalty reporting systems.",
                "Automated data mart processes to improve reporting speed and accessibility."
              ]}
            />
            <ExperienceItem 
              company="Wipro (Capital One – Cloud Migration)"
              role="Senior Project Engineer"
              period="Feb 2019 – Mar 2020"
              location="Bengaluru"
              description="Cloud data platform transformation through migration of legacy systems to AWS and Snowflake."
              highlights={[
                "Led migration of 50+ ETL pipelines to AWS and Snowflake.",
                "Facilitated Agile ceremonies and managed delivery for an 8-member team.",
                "Conducted interviews and hiring for project roles."
              ]}
            />
            <ExperienceItem 
              company="NTT Data (Blue Cross Blue Shield NC – Healthcare Data Systems)"
              role="Business Intelligence Analyst"
              period="Apr 2018 – Feb 2019"
              location="Bengaluru"
              description="Data platform supporting claims processing, reporting, and healthcare analytics."
              highlights={[
                "Enhanced ETL workflows enabling faster reporting cycles.",
                "Trained 15+ engineers and improved team capability.",
                "Delivered permanent fixes to production pipelines, reducing recurring issues."
              ]}
            />
            <ExperienceItem 
              company="Infosys (Citibank – Regulatory Data Platforms)"
              role="Senior Systems Engineer"
              period="Jul 2017 – Apr 2018"
              location="Bengaluru"
              description="Regulatory platforms enabling compliance reporting across global markets."
              highlights={[
                "Translated regulatory requirements (MiFID, KYC) into data systems.",
                "Built ETL pipelines and data quality frameworks for compliance.",
                "Managed production pipelines and performed failure analysis for system stability."
              ]}
            />
            <ExperienceItem 
              company="Accenture (Travelers Insurance – Loss Data Warehouse)"
              role="Application Development Analyst"
              period="Oct 2014 – Jun 2017"
              location="Mumbai"
              description="Loss Data Warehouse supporting claims analytics and risk assessment for personal insurance."
              highlights={[
                "Developed ETL pipelines for Loss Data Warehouse supporting claims analytics.",
                "Automated & Optimized workflows and reduced QA effort by 40%.",
                "Drove end-to-end delivery, including design, development, testing, and support."
              ]}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <SectionHeader 
            title="Core Expertise" 
            subtitle="A blend of strategic product thinking and deep technical execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              title="Product & Strategy"
              icon={Briefcase}
              skills={["Product Management", "Roadmaps", "Prioritisation", "Agile/Scrum", "MVP Prototyping"]}
            />
            <SkillCard 
              title="Execution & Analytics"
              icon={Code2}
              skills={["PRD Writing", "User Research", "Data Analytics", "UI/UX Collaboration", "Bug Tracking"]}
            />
            <SkillCard 
              title="Technical Stack"
              icon={Database}
              skills={["SQL", "Python", "Snowflake", "AWS", "ETL", "Apache Airflow"]}
            />
            <SkillCard 
              title="AI & Leadership"
              icon={Trophy}
              skills={["Generative AI", "Prompt Engineering", "Team Leadership", "Mentoring", "Stakeholder Comm"]}
            />
          </div>
        </section>

        {/* Education & Awards */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Education" />
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl flex gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-emerald-400 h-fit">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">IIM Kozhikode</h3>
                  <p className="text-zinc-400">Business Management Certification</p>
                  <p className="text-sm text-zinc-500 font-mono mt-1">2025</p>
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl flex gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-emerald-400 h-fit">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Birla Institute of Technology, Mesra</h3>
                  <p className="text-zinc-400">B.E. (Bachelor of Engineering)</p>
                  <p className="text-sm text-zinc-500 font-mono mt-1">2014</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader title="Certifications & Awards" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Gold Mentorship Award (TCS)",
                "TCS Arjuna Award",
                "AWS Cloud Practitioner",
                "SnowPro Core (Snowflake)",
                "TCS AI Idea Igniter",
                "TCS Star Performer",
                "Product School (PM)",
                "Y Combinator Startup School",
                "Everyday Champion (Accenture)"
              ].map((award, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/50 text-sm text-zinc-300">
                  <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                  {award}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic & Extra-Curricular Achievements */}
        <section className="mb-32">
          <SectionHeader 
            title="Academic & Extra-Curricular" 
            subtitle="Recognition for excellence in academics and sports."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border-emerald-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Academic Excellence</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "CBSE Board Scholarship Recipient",
                  "AIEEE State Ranker",
                  "Science & Cyber Olympiad State Ranker"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300">
                    <ChevronRight className="w-4 h-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl border-cyan-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Sports & Athletics</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "State-level Basketball Champion",
                  "Track & Field Medalist",
                  "Cross Country Run Winner"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-zinc-300">
                    <ChevronRight className="w-4 h-4 text-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Thought Leadership & Photography */}
<section className="mb-32">
  <SectionHeader 
    title="Beyond the Office" 
    subtitle="Passionate about sharing knowledge and visual storytelling."
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* Thought Leadership */}
    <a 
      href="https://medium.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative group overflow-hidden rounded-3xl min-h-[220px] md:min-h-[260px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-6 md:p-8 flex flex-col justify-between border border-emerald-500/20"
      >
        <div>
          <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 mb-4 md:mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Thought Leadership
          </h3>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            Published <span className="text-white font-bold">100+ articles</span> on data, AI, and product thinking, reaching <span className="text-white font-bold">100K+ global readers</span>.
          </p>
        </div>
      </motion.div>
    </a>

    {/* Photography */}
    <a 
      href="https://unsplash.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="relative group overflow-hidden rounded-3xl min-h-[220px] md:min-h-[260px] bg-zinc-900 p-6 md:p-8 flex flex-col justify-between border border-zinc-800"
      >

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&q=80&w=1000" 
            alt="Photography" 
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        <div className="relative z-10">
          <Camera className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-4 md:mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Photography
          </h3>
          <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
            Portfolio on Unsplash with <span className="text-white font-bold">2M+ views</span> and <span className="text-white font-bold">15K+ downloads</span>. Featured in Hindustan Times, India Today, IISD etc.
          </p>
        </div>

      </motion.div>
    </a>

  </div>
</section>

        {/* Footer */}
        <footer className="pt-24 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-zinc-500 text-sm font-mono">
                © 2026 Peggie Mishra. Built with precision and data.
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Medium</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Unsplash</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

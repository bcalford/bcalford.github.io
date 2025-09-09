import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

// Tailwind utility: container widths
const Section: React.FC<React.PropsWithChildren<{ id: string; title: string; subtitle?: string }>> = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const Pill: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-sm text-muted-foreground">{children}</span>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-2xl border p-6 text-center shadow-sm">
    <div className="text-3xl font-bold">{value}</div>
    <div className="mt-2 text-sm text-muted-foreground">{label}</div>
  </div>
);

const SkillBar: React.FC<{ name: string; level: number }> = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm"><span>{name}</span><span className="text-muted-foreground">{level}%</span></div>
    <div className="h-2 w-full rounded-full bg-muted">
      <div className="h-2 rounded-full bg-foreground/80" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const TimelineItem: React.FC<{ org: string; role: string; time: string; bullets: string[]; href?: string }> = ({ org, role, time, bullets, href }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-foreground/80" />
    <div className="rounded-2xl border p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h4 className="text-lg font-semibold">{role}</h4>
        <span className="text-sm text-muted-foreground">• {time}</span>
      </div>
      <div className="mt-1 text-muted-foreground">
        {href ? (
          <a href={href} className="underline decoration-dotted underline-offset-4" target="_blank" rel="noreferrer">{org}</a>
        ) : (
          <span>{org}</span>
        )}
      </div>
      <ul className="mt-3 list-inside space-y-2 text-sm text-muted-foreground">
        {bullets.map((b, i) => (
          <li key={i} className="list-disc">{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectCard: React.FC<{ title: string; tags: string[]; blurb: string; link?: string; imageUrl?: string }> = ({ title, tags, blurb, link, imageUrl }) => (
  <div className="group overflow-hidden rounded-2xl border shadow-sm">
    <div className="aspect-[16/9] w-full bg-muted">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center text-muted-foreground">image</div>
      )}
    </div>
    <div className="p-5">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      <h4 className="mt-3 text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline decoration-dotted underline-offset-4">
          View details <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  </div>
);

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky nav */}
      <div className="sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="font-semibold">Bradley Alford</a>
          <div className="hidden gap-6 sm:flex">
            {[
              ["About", "about"],
              ["Resume", "resume"],
              ["Projects", "projects"],
              ["Activities", "activities"],
              ["Statistics", "stats"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm text-muted-foreground hover:text-foreground">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="mailto:bradley@example.com" className="rounded-full border p-2" aria-label="Email"><Mail className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border p-2" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border p-2" aria-label="GitHub"><Github className="h-4 w-4" /></a>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <header id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_70%_10%,theme(colors.primary/20),transparent)]" />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-24 sm:py-32 lg:flex-row lg:items-center">
          <div className="flex-1">
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold tracking-tight sm:text-5xl">
              Data Analyst • Software Engineer • Builder
            </motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              I build practical data products and delightful web apps. I’m currently studying CIS & Philosophy at USC and leading professional development for Theta Tau.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-foreground px-5 py-2 text-background">See projects</a>
              <a href="#contact" className="rounded-full border px-5 py-2">Get in touch</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <Pill>Python</Pill>
              <Pill>TypeScript</Pill>
              <Pill>React</Pill>
              <Pill>LightGBM</Pill>
              <Pill>Android/Kotlin</Pill>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl border shadow-sm">
              <img src="https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1200&auto=format&fit=crop" alt="Himalayas placeholder" className="h-full w-full object-cover" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs shadow">
                <MapPin className="h-3 w-3" /> Himalayas (placeholder)
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <Section id="about" title="Let me introduce myself" subtitle="A quick snapshot of who I am and what I do.">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p>
              I’m an engineer focused on health tech, data, and zero-to-one projects. I love turning messy datasets into clear decisions and shipping polished interfaces that people actually want to use.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border p-4">
                <div className="text-sm text-muted-foreground">Full name</div>
                <div className="font-medium">Bradley C. Alford</div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:bradley@example.com" className="font-medium underline decoration-dotted underline-offset-4">bradley@example.com</a>
              </div>
            </div>
            <div className="grid gap-4">
              <SkillBar name="Python" level={90} />
              <SkillBar name="JS/TS/React" level={80} />
              <SkillBar name="Kotlin/Android" level={70} />
              <SkillBar name="SQL" level={75} />
              <SkillBar name="ML (LightGBM)" level={70} />
            </div>
            <div className="flex gap-3">
              <a href="#contact" className="rounded-full bg-foreground px-5 py-2 text-background">Hire Me</a>
              <a href="/resume.pdf" className="rounded-full border px-5 py-2">Download CV</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-2xl font-bold">USC</div>
              <div className="mt-1 text-sm text-muted-foreground">Molinaroli College of Engineering & Computing</div>
            </div>
            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-2xl font-bold">Theta Tau</div>
              <div className="mt-1 text-sm text-muted-foreground">PD & Academic Chair</div>
            </div>
            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-2xl font-bold">11M+</div>
              <div className="mt-1 text-sm text-muted-foreground">rows modeled in ART project</div>
            </div>
            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-2xl font-bold">A1 → B1</div>
              <div className="mt-1 text-sm text-muted-foreground">French learning goal, 2025</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Resume */}
      <Section id="resume" title="More of my credentials" subtitle="Experience and education.">
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-8">
            <TimelineItem
              role="Undergraduate Research Assistant"
              org="Laboratory for Integrative Neuroscience Analysis (LINA)"
              href="#"
              time="2024 – Present"
              bullets={[
                "Developed predictive pipelines for neuroimaging and large tabular datasets.",
                "Built interactive analysis tools with Python and Plotly.",
              ]}
            />
            <TimelineItem
              role="Teaching Assistant (TA)"
              org="USC MCEC"
              time="2023 – Present"
              bullets={[
                "Led labs, held office hours, and created study resources for 100‑level CS courses.",
                "Mentored students on resumes, LinkedIn, and interview prep.",
              ]}
            />
            <TimelineItem
              role="Founder"
              org="Theta Tau Class Info Bank"
              time="2024 – Present"
              bullets={["Built JSON‑driven course & professor review portal with search UI."]}
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <a className="rounded-2xl border p-5 shadow-sm" href="/resume.pdf">
            <div className="text-sm text-muted-foreground">Resume</div>
            <div className="mt-1 font-semibold">Download PDF</div>
          </a>
          <a className="rounded-2xl border p-5 shadow-sm" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <div className="text-sm text-muted-foreground">LinkedIn</div>
            <div className="mt-1 font-semibold">View profile</div>
          </a>
          <a className="rounded-2xl border p-5 shadow-sm" href="https://github.com/" target="_blank" rel="noreferrer">
            <div className="text-sm text-muted-foreground">GitHub</div>
            <div className="mt-1 font-semibold">Pinned projects</div>
          </a>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Check out my creations" subtitle="Selected work and experiments.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="HIV ART Regimen Modeling"
            tags={["Python", "LightGBM", "EDA"]}
            blurb="Predict short‑term viral suppression and summarize regimen effectiveness across 11M+ monthly records."
            link="#"
          />
          <ProjectCard
            title="Mood Journal (Android)"
            tags={["Kotlin", "CameraX", "Room"]}
            blurb="Daily selfies + journaling with on‑device storage and charted trends."
            link="#"
          />
          <ProjectCard
            title="Theta Tau Class Info Bank"
            tags={["HTML", "JS", "JSON"]}
            blurb="Fast search over course notes, syllabi, and professor reviews."
            link="#"
          />
          <ProjectCard
            title="Fitness Tracker"
            tags={["Android", "Compose", "SQLite"]}
            blurb="Strength + cardio logging with goals and streaks."
            link="#"
          />
          <ProjectCard
            title="Niivue Tools"
            tags={["Python", "Neuroimaging"]}
            blurb="Utilities for ipyniivue meshes and font handling."
            link="#"
          />
          <ProjectCard
            title="Personal Site"
            tags={["Next.js", "Tailwind"]}
            blurb="This site—clean, fast, and easy to extend."
            link="#"
          />
        </div>
      </Section>

      {/* Activities */}
      <Section id="activities" title="Activities" subtitle="Leadership & extracurriculars.">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="font-semibold">Professional Development Chair</div>
            <div className="text-sm text-muted-foreground">Theta Tau • 2025</div>
            <ul className="mt-2 list-inside space-y-2 text-sm text-muted-foreground">
              <li className="list-disc">Hosted alumni panels, company dinners, and workshops.</li>
              <li className="list-disc">Reviewed 50+ resumes & LinkedIns; improved placement outcomes.</li>
              <li className="list-disc">Coordinated site visits (e.g., Boeing) and career‑fair prep.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 shadow-sm">
            <div className="font-semibold">Academic Chair</div>
            <div className="text-sm text-muted-foreground">Theta Tau • 2025</div>
            <ul className="mt-2 list-inside space-y-2 text-sm text-muted-foreground">
              <li className="list-disc">Maintained resource bank; hosted weekly study sessions.</li>
              <li className="list-disc">Built a notes/syllabi hub to centralize materials.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section id="stats" title="Statistics" subtitle="A few fun numbers.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Stat value="200+" label="GitHub commits in 2025" />
          <Stat value="6" label="Apps shipped" />
          <Stat value="20k" label="Steps/day goal by Dec" />
          <Stat value="180g" label="Protein/day target" />
          <Stat value="154" label="Planned days in 2025 H2" />
          <Stat value="10+" label="Workshops hosted" />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="I'd love to connect with you" subtitle="Reach out for opportunities, collaborations, or just to say hi.">
        <div className="grid gap-8 md:grid-cols-2">
          <form className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm">Name</label>
              <input id="name" className="rounded-xl border bg-background px-3 py-2" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm">Email</label>
              <input id="email" className="rounded-xl border bg-background px-3 py-2" placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="msg" className="text-sm">Message</label>
              <textarea id="msg" rows={5} className="rounded-xl border bg-background px-3 py-2" placeholder="Tell me about your project…" />
            </div>
            <button type="button" className="rounded-full bg-foreground px-5 py-2 text-background">Send</button>
            <p className="text-xs text-muted-foreground">This is a demo form. Hook it to Formspree or your API.</p>
          </form>
          <div className="space-y-4">
            <div className="rounded-2xl border p-5 shadow-sm">
              <div className="font-semibold">Where to find me</div>
              <div className="mt-1 text-sm text-muted-foreground">Columbia, SC • United States</div>
            </div>
            <div className="rounded-2xl border p-5 shadow-sm">
              <div className="font-semibold">Email me at</div>
              <a href="mailto:bradley@example.com" className="mt-1 block text-sm underline decoration-dotted underline-offset-4">bradley@example.com</a>
            </div>
            <div className="rounded-2xl border p-5 shadow-sm">
              <div className="font-semibold">Let's connect</div>
              <div className="mt-2 flex gap-3">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border p-2"><Linkedin className="h-4 w-4" /></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border p-2"><Github className="h-4 w-4" /></a>
                <a href="mailto:bradley@example.com" className="rounded-full border p-2"><Mail className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Bradley Alford. Designed with ❤️ and Tailwind.</div>
          <div className="mt-1">Inspired by open‑source templates and fellow builders.</div>
        </div>
      </footer>
    </div>
  );
}

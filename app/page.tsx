import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { TrustBar } from "@/components/trust-bar";
import { ContactForm } from "@/components/contact-form";
import { ProfileCard } from "@/components/profile-card";
import { ProjectPreview } from "@/components/project-preview";
import { SkillsSection } from "@/components/skills-section";
import { CareerSections } from "@/components/career-sections";
import { WhyWorkWithMe } from "@/components/why-work-with-me";
import { ScrollEffects } from "@/components/scroll-effects";

const processSteps = [
  { number: "01", title: "Understand", description: "We define the goal, users, features, and project scope." },
  { number: "02", title: "Plan", description: "I structure the content, functionality, architecture, and user experience." },
  { number: "03", title: "Build", description: "The website or system is developed responsively with maintainable code." },
  { number: "04", title: "Test", description: "I verify layouts, interaction, validation, mobile behavior, and core functionality." },
  { number: "05", title: "Launch", description: "The project is prepared for deployment, domain connection, and production use." },
  { number: "06", title: "Support", description: "Updates and improvements can continue as the business grows." },
];

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="portfolio-effects">
      <ScrollEffects />
      <section className="portfolio-hero mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Full-Stack Web Developer · Baguio, Philippines</p>
            <h1 className="max-w-3xl text-[2.65rem] font-semibold text-slate-900 sm:text-5xl lg:text-[3.5rem]">I build practical websites and web systems <span className="text-blue-700">for real business needs.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="#work" className="btn-primary">View My Work <ArrowRight size={16} aria-hidden="true" /></Link><Link href="#contact" className="btn-secondary">Start a Project</Link></div>
            <TrustBar />
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-slate-600"><SocialLinks compact /><span className="inline-flex items-center gap-2"><MapPin size={15} className="text-blue-700" aria-hidden="true" />{profile.location}</span></div>
          </div>
          <ProfileCard />
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected websites. Thoughtfully built."
          description="Three independent business website concepts, exploring clear information, responsive interfaces, and practical inquiry flows."
        />

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => (
            <article key={project.slug} className="effect-card effect-reveal overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <div className="grid gap-6 p-5 md:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <ProjectPreview src={project.image} title={project.title} />
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-slate-600">{project.highlight}</p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-full bg-blue-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-800">
                      Live Website
                    </a>
                    <Link href={`/projects/${project.slug}`} className="rounded-full border border-slate-200 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:border-blue-500 hover:text-blue-700">
                      View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-slate-50">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><SectionHeading eyebrow="About Joe David" title="A developer who sees the bigger picture." /><div className="mt-7 flex items-baseline gap-3"><span className="text-5xl font-semibold tracking-tight text-blue-700">5+</span><span className="text-sm leading-6 text-slate-600">years of experience<br />building web applications</span></div><p className="mt-6 text-sm text-slate-600"><span className="font-semibold text-slate-900">{profile.fullName}</span><br />{profile.title} · {profile.location}</p><p className="mt-3 text-sm font-semibold text-blue-700">{profile.rate}</p></div>
          <div className="space-y-5">{profile.about.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-slate-600">{paragraph}</p>)}<div className="flex flex-wrap gap-3 pt-2">{["Maintainable code", "Usable interfaces", "Secure applications", "Scalable architecture"].map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">{item}</span>)}</div></div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Build"
          title="Websites and systems designed around actual business needs."
          description="I build solutions that are clear, maintainable, and practical for everyday operations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="effect-card effect-reveal rounded-[1.75rem] border border-slate-200 bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Starting from</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{service.price}</p>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-700" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
          Final pricing depends on project scope, functionality, integrations, and timeline.
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="#contact" className="rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
            Request a Quote
          </Link>
        </div>
      </section>

      <SkillsSection />
      <CareerSections />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How I Work" title="A simple process designed for practical delivery." />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.number} className="effect-card effect-reveal rounded-[1.5rem] border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{step.number}</p>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyWorkWithMe />

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Have a project in mind?" description="Tell me what you're trying to build, improve, or automate. I'll help you determine a practical approach." />

            <div className="mt-8 space-y-4 text-slate-600">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-base hover:text-blue-700">
                <Mail size={18} className="text-blue-700" />
                {profile.email}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base hover:text-blue-700">
                <GitHubIcon size={18} className="text-blue-700" />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base hover:text-blue-700">
                <LinkedInIcon size={18} className="text-blue-700" />
                LinkedIn
              </a>
              <a href={profile.upwork} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base hover:text-blue-700">
                <UpworkIcon size={18} className="text-blue-700" />
                Upwork
              </a>
            </div>

            <div className="mt-8">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 transition hover:border-blue-500 hover:text-blue-700">
                Email Me Directly
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">Start a Project</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Have an idea? Let&apos;s turn it into something useful.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="rounded-full bg-blue-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800">
              Start a Project
            </Link>
            <Link href="#work" className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-blue-500 hover:text-blue-700">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

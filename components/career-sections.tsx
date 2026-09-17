import { Award, BriefcaseBusiness, ChevronDown, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experience, contributions } from "@/data/experience";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

export function CareerSections() {
  return (
    <>
      <section id="experience" className="section-shell">
        <SectionHeading eyebrow="Work experience" title="Hands-on work. Practical responsibility." description="From client websites to internal systems and day-to-day IT support." />
        <div className="experience-timeline mt-12">
          {experience.map((job) => (
            <article key={job.company} className="experience-item">
              <div className="experience-marker"><BriefcaseBusiness size={17} aria-hidden="true" /></div>
              <div><p className="text-xs font-semibold uppercase tracking-wider text-blue-700">{job.role}</p><h3 className="mt-2 text-xl font-semibold text-slate-900">{job.company}</h3>{job.period && <p className="mt-2 text-sm text-slate-500">{job.period}</p>}</div>
              <div><p className="text-sm leading-7 text-slate-600">{job.summary}</p>
                {job.responsibilities.length > 0 && <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-600">{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contributions" className="border-y border-slate-200 bg-slate-50">
        <div className="section-shell">
          <SectionHeading eyebrow="Professional experience highlights" title="The projects behind the experience." description="Specific contributions from my work with teams and organizations. Expand a group to see the details." />
          <div className="mt-10 space-y-3">
            {contributions.map((group) => (
              <details key={group.company} className="contribution-group rounded-2xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6">
                  <span><span className="block text-base font-semibold text-slate-900">{group.company}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{group.summary}</span></span>
                  <ChevronDown size={19} className="shrink-0 text-blue-700 transition-transform" aria-hidden="true" />
                </summary>
                <div className="grid gap-5 border-t border-slate-100 p-5 sm:p-6 md:grid-cols-2">
                  {group.projects.map((project) => <article key={project.name}><h3 className="font-semibold text-slate-900">{project.name}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{project.detail}</p></article>)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Education & training" title="A foundation I keep building on." />
            <div className="mt-9 space-y-7">{education.map((item) => <article key={item.institution} className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><GraduationCap size={21} aria-hidden="true" /></span><div><p className="text-xs text-slate-500">{item.period}</p><h3 className="mt-1 text-lg font-semibold text-slate-900">{item.institution}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{item.qualification}</p>{item.status === "In progress" && <span className="mt-2 inline-block rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">In progress</span>}</div></article>)}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="eyebrow">Continuing development</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Certifications & additional training</h2>
            <ul className="mt-8 divide-y divide-slate-200">{certifications.map((item) => <li key={item.title} className="flex gap-3 py-5 first:pt-0 last:pb-0"><Award size={19} className="mt-1 shrink-0 text-blue-700" aria-hidden="true" /><div><h3 className="text-sm font-semibold leading-6 text-slate-900">{item.title}</h3><p className="mt-1 text-sm text-slate-500">{item.provider}</p></div></li>)}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

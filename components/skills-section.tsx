import { Code2, Database, LayoutTemplate, Wrench, Workflow } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
const icons = [Database, Code2, LayoutTemplate, Wrench, Workflow];

export function SkillsSection() {
  return <section id="stack" className="border-y border-slate-200 bg-slate-50"><div className="section-shell">
    <SectionHeading eyebrow="Skills & tools" title="A versatile stack. A practical approach." description="Technologies I work with across interfaces, application logic, content, and everyday development." />
    <div className="skills-grid mt-10">{skillGroups.map((group, index) => {
      const Icon = icons[index];
      return <article key={group.title} className="skill-card"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon size={20} aria-hidden="true" /></span><h3 className="text-lg font-semibold text-slate-900">{group.title}</h3></div><p className="mt-3 text-sm leading-6 text-slate-600">{group.description}</p><ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>;
    })}</div>
  </div></section>;
}

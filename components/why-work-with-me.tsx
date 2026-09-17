import { Code2, FolderCheck, ScanLine, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
const reasons = [
  { icon: Code2, title: "Versatile across the stack", description: "PHP frameworks such as Laravel and CodeIgniter, alongside the JavaScript-based MERN stack. The tools fit the project." },
  { icon: FolderCheck, title: "Experience that translates", description: "Hands-on development and deployment across client work and personal projects, from websites to custom systems." },
  { icon: ScanLine, title: "Care in the details", description: "A focus on performance, security, and usability, with careful problem-solving and maintainable code." },
  { icon: BookOpen, title: "Always building on my skills", description: "Continuing education and practical training to keep improving how I design, build, and maintain applications." },
];
export function WhyWorkWithMe() {
  return <section className="border-y border-slate-200 bg-blue-50/50"><div className="section-shell"><SectionHeading eyebrow="Why work with me" title="Thoughtful development, from start to finish." /><div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">{reasons.map(({icon: Icon, title, description}) => <article key={title}><Icon size={24} className="text-blue-700" aria-hidden="true" /><h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article>)}</div></div></section>;
}

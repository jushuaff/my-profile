import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projectCaseStudies, projects } from "@/data/projects";
import { ProjectPreview } from "@/components/project-preview";

const project = projects.find((item) => item.slug === "highland-brew")!;

export default function ProjectPage() {
  const data = projectCaseStudies["highland-brew"];

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800">
        <ArrowLeft size={16} /> Back to portfolio
      </Link>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">{project.category}</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{project.title}</h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2.5 text-sm font-medium text-white">
            <ExternalLink size={15} /> Live Site
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{item}</span>
          ))}
        </div>
      </div>

      <div className="mt-10"><ProjectPreview src={project.image} title={project.title} sizes="(max-width: 1024px) 100vw, 960px" /></div>

      <div className="mt-12 grid gap-10">
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Overview</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{data.overview}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">The Challenge</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{data.challenge}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Approach</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{data.approach}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Key Features</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-slate-600">
            {data.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Technical Implementation</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{data.implementation}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Result</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">{data.result}</p>
        </section>
      </div>
    </main>
  );
}

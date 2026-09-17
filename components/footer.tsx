import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, UpworkIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "Upwork", href: profile.upwork, icon: UpworkIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xl font-semibold text-slate-900">Joe David</p>
            <p className="mt-1 text-sm text-slate-500">{profile.fullName} · {profile.title}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 transition hover:border-blue-500 hover:text-blue-700">
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-slate-200 pt-5 text-sm text-slate-500 md:flex-row">
          <p>© {year} Joe David. All rights reserved.</p>
          <p>Built with Next.js &amp; TypeScript.</p>
        </div>
      </div>
    </footer>
  );
}

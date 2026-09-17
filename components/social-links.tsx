import { GitHubIcon, LinkedInIcon, UpworkIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "Upwork", href: profile.upwork, icon: UpworkIcon },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? "text-sm" : "text-base"}`}>
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
        >
          <Icon size={compact ? 18 : 20} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

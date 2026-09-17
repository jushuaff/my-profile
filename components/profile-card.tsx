import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { UpworkIcon } from "@/components/brand-icons";
import { profile } from "@/data/profile";

export function ProfileCard() {
  return (
    <aside className="profile-card" aria-label="Meet Joe David">
      <div className="profile-portrait">
        <Image
          src={profile.photo.src}
          alt={profile.photo.alt}
          width={profile.photo.width}
          height={profile.photo.height}
          sizes="(max-width: 460px) calc(100vw - 62px), (max-width: 1023px) 388px, (max-width: 1279px) 33vw, 388px"
          loading="eager"
          fetchPriority="high"
          className="profile-portrait-image"
        />
      </div>
      <div className="profile-card-details">
        <p className="text-2xl font-semibold tracking-tight text-slate-900">{profile.name}</p>
        <p className="mt-1 text-xs text-slate-500">{profile.fullName}</p>
        <p className="mt-3 text-sm font-medium text-blue-700">{profile.title}</p>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={15} aria-hidden="true" />{profile.location}
        </p>
        <a href={profile.upwork} target="_blank" rel="noopener noreferrer" className="profile-card-link">
          <span className="inline-flex items-center gap-2"><UpworkIcon size={18} />View my Upwork profile <span className="sr-only">(opens in a new tab)</span></span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}

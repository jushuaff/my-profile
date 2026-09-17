import { BadgeCheck, TrendingUp } from "lucide-react";
import { profile } from "@/data/profile";
export function TrustBar() {
  return <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 pt-6 text-xs font-medium text-slate-600" aria-label="Professional credentials">
    <span className="inline-flex items-center gap-2"><BadgeCheck size={17} className="text-blue-700" aria-hidden="true" />{profile.upworkCreds[0]}</span>
    <span className="inline-flex items-center gap-2"><TrendingUp size={17} className="text-blue-700" aria-hidden="true" />{profile.upworkCreds[1]}</span>
    <span className="rounded-md bg-blue-50 px-3 py-1.5 font-semibold text-blue-700">{profile.rateShort}</span>
  </div>;
}

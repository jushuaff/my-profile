"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";

type ProjectPreviewProps = { src: string; title: string; sizes?: string };

export function ProjectPreview({ src, title, sizes = "(max-width: 1024px) 100vw, 50vw" }: ProjectPreviewProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const failed = failedSource === src;
  return (
    <div className="project-preview" data-preview={title}>
      {failed ? (
        <div className="project-preview-fallback" role="img" aria-label={title + " — screenshot needed"}>
          <ImageIcon size={32} aria-hidden="true" />
          <p className="text-lg font-semibold text-slate-900">{title}</p>
          <p className="text-sm text-slate-600">Project screenshot needed</p>
          <p className="text-xs text-slate-500">Preview unavailable. Explore the live site or case study below.</p>
        </div>
      ) : (
        <Image src={src} alt={title + " website preview"} fill sizes={sizes}
          className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          onError={() => setFailedSource(src)} />
      )}
    </div>
  );
}

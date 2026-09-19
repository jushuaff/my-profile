"use client";

import { useEffect, useRef } from "react";

const options = [
  { key: "largeText", label: "Larger text", attribute: "data-large-text" },
  { key: "contrast", label: "Stronger contrast", attribute: "data-high-contrast" },
  { key: "links", label: "Underline links", attribute: "data-underline-links" },
  { key: "motion", label: "Reduce motion", attribute: "data-reduce-motion" },
  { key: "spacing", label: "More reading space", attribute: "data-reading-space" },
] as const;
const storageKey = "portfolio-accessibility";
const colorModes = ["default", "blue-amber", "grayscale"] as const;

function applyColorMode(value: unknown) {
  const mode = colorModes.find((mode) => mode === value) ?? "default";
  if (mode === "default") document.documentElement.removeAttribute("data-color-mode");
  else document.documentElement.setAttribute("data-color-mode", mode);
  return mode;
}

export function AccessibilitySettings() {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const colorInput = form.current?.elements.namedItem("colorMode");
      const mode = applyColorMode(saved?.colorMode);
      if (colorInput instanceof HTMLSelectElement) colorInput.value = mode;
      for (const option of options) {
        const enabled = saved?.[option.key] === true;
        const input = form.current?.elements.namedItem(option.key);
        if (input instanceof HTMLInputElement) input.checked = enabled;
        document.documentElement.toggleAttribute(option.attribute, enabled);
      }
    } catch {
      // Settings still work when browser storage is unavailable.
    }
  }, []);

  function savePreferences(reset = false) {
    const preferences: Record<string, boolean | string> = {};
    const colorInput = form.current?.elements.namedItem("colorMode");
    const mode = applyColorMode(!reset && colorInput instanceof HTMLSelectElement ? colorInput.value : "default");
    if (colorInput instanceof HTMLSelectElement) colorInput.value = mode;
    preferences.colorMode = mode;
    for (const option of options) {
      const input = form.current?.elements.namedItem(option.key);
      const enabled = !reset && input instanceof HTMLInputElement && input.checked;
      if (input instanceof HTMLInputElement) input.checked = enabled;
      preferences[option.key] = enabled;
      document.documentElement.toggleAttribute(option.attribute, enabled);
    }
    try { localStorage.setItem(storageKey, JSON.stringify(preferences)); } catch { /* Optional persistence. */ }
  }

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <details className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <summary className="w-fit py-3 text-sm font-semibold text-blue-700">Accessibility settings</summary>
        <form ref={form} onChange={() => savePreferences()} onSubmit={(event) => event.preventDefault()} className="pb-5">
          <fieldset>
            <legend className="mb-3 text-sm text-slate-700">Adjust how this website looks and moves.</legend>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {options.map(({ key, label }) => (
                <label key={key} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-slate-900">
                  <input type="checkbox" name={key} className="h-5 w-5 accent-blue-700" />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="mt-4 block max-w-md text-sm font-semibold text-slate-900">
            Color display
            <select name="colorMode" defaultValue="default" aria-describedby="color-display-help" className="mt-2 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900">
              <option value="default">Original colors</option>
              <option value="blue-amber">Blue and amber palette</option>
              <option value="grayscale">Grayscale</option>
            </select>
          </label>
          <p id="color-display-help" className="mt-2 max-w-2xl text-sm text-slate-600">Choose the colors that are easiest for you to distinguish. Blue and amber replaces red and green feedback colors; grayscale removes color. Messages also describe their status in words.</p>
          <p className="mt-2 text-sm text-slate-600">Preferences are saved in this browser when storage is available. Your device’s reduced-motion setting always applies.</p>
          <button type="button" onClick={() => savePreferences(true)} className="btn-secondary mt-3">Reset preferences</button>
        </form>
      </details>
    </div>
  );
}

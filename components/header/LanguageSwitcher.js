"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";

// icons/images.
import FlagBD from "/public/flag-bd.png";
import FlagUS from "/public/flag-usa.png";

const LanguageSwitcher = ({ lang }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const getRedirectUrl = (language) => {
    const segments = pathname?.split("/");
    segments[1] = language;
    return segments.join("/");
  };

  const selectLanguage = (locale) => {
    const redirectUrl = getRedirectUrl(locale);

    if (pathname !== redirectUrl) {
      window.location.replace(redirectUrl);
    }

    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="absolute right-0 w-40 p-1 border rounded-md shadow-md shadow-black/10 dark:shadow-white/10 top-10 dark:bg-slate-700 bg-slate-200 border-black/10 dark:border-white/10">
          <div
            onClick={() => selectLanguage("bn")}
            className="flex items-center justify-between p-1 px-2 py-1 mb-2 transition-all rounded cursor-pointer hover:bg-slate-400/60 dark:hover:bg-slate-800/60"
          >
            <Image src={FlagBD} width={24} height={24} alt="flag bd" />
            বাংলা
          </div>

          <div
            onClick={() => selectLanguage("en")}
            className="flex items-center justify-between p-1 px-2 py-1 transition-all rounded cursor-pointer dark:hover:bg-slate-800/60 hover:bg-slate-400/60"
          >
            <Image width={24} height={24} src={FlagUS} alt="flag us" />
            English
          </div>
        </div>
      )}

      <Image
        width={24}
        height={24}
        onClick={() => setOpen(!open)}
        src={lang === "bn" ? FlagBD : FlagUS}
        alt={lang === "bn" ? "flag bd" : "flag us"}
      />
    </>
  );
};

export default LanguageSwitcher;

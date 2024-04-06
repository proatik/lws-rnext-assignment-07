// utility functions.
import { getDictionary } from "@/app/[lang]/dictionaries";

const Footer = async ({ lang }) => {
  const { copyright } = await getDictionary(lang);

  return (
    <footer className="py-6 mt-8 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-sm text-black/60 dark:text-[#EEEEEE]/60">
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

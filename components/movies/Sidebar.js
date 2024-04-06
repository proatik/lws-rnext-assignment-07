import Link from "next/link";
import Image from "next/image";

// icons/images.
import Trending from "/public/icons/trending.svg";
import NewRelease from "/public/icons/new-release.svg";
import ComingSoon from "/public/icons/coming-soon.svg";
import Favourite from "/public/icons/favourite.svg";
import WatchLater from "/public/icons/watch-later.svg";

// utility functions.
import { getDictionary } from "@/app/[lang]/dictionaries";

const Sidebar = async ({ lang }) => {
  const {
    home: { sidebar },
  } = await getDictionary(lang);

  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
          >
            <Image src={Trending} width={24} height={24} alt="trending" />
            <span>{sidebar?.trending}</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image src={NewRelease} width={24} height={24} alt="new release" />
            <span>{sidebar?.newRelease}</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image src={ComingSoon} width={24} height={24} alt="coming soon" />
            <span>{sidebar?.comingSoon}</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image src={Favourite} width={24} height={24} alt="favourite" />
            <span>{sidebar?.favourites}</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
          >
            <Image src={WatchLater} width={24} height={24} alt="watch later" />
            <span>{sidebar?.watchLater}</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

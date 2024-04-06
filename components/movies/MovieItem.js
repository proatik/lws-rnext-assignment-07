import Image from "next/image";
import CustomLink from "../shared/CustomLink";

// icons/images.
import Star from "/public/star.svg";
import Tag from "/public/tag.svg";

// utility functions.
import { getDictionary } from "@/app/[lang]/dictionaries";

const MovieItem = async ({ movie, lang }) => {
  const {
    home: { detailsButton },
  } = await getDictionary(lang);

  return (
    <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
      <Image
        width={300}
        height={350}
        alt="thumbnail"
        src={movie?.poster_path}
        className="object-cover w-full"
      />
      <figcaption className="pt-4">
        <h3 className="mb-1 text-xl">{movie?.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>

        <div className="flex items-center mb-5 space-x-1">
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
          <Image src={Star} alt="star" />
        </div>
        <CustomLink
          href={`/movies/${movie?.id}`}
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        >
          <Image src={Tag} alt="tag" />
          <span className="">{detailsButton}</span>
        </CustomLink>
      </figcaption>
    </figure>
  );
};

export default MovieItem;

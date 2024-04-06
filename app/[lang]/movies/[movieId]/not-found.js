"use client";

import { useParams } from "next/navigation";

// react components.
import CustomLink from "@/components/shared/CustomLink";

const NotFound = () => {
  const { movieId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-md dark:bg-slate-800/20 bg-slate-200/20 border-black/10 dark:border-white/10">
      <p className="text-lg text-red-500">
        This movie with
        {<b> {movieId} </b>}
        id was not found!
      </p>
      <p className="mt-8 text-gray-600">
        Let's get you back{" "}
        <CustomLink href="/" className="text-blue-500">
          home
        </CustomLink>
        .
      </p>
    </div>
  );
};

export default NotFound;

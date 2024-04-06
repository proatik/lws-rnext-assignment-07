"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const CustomLink = ({ children, href, ...rest }) => {
  const { lang } = useParams();

  let url = lang ? `/${lang}/${href}` : href;

  return (
    <Link href={url} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAppData } from "../hooks/useAppData";
import { Tag } from "../types";

export const Header = () => {
  const router = useRouter();
  const { tag: path } = router.query;
  const { languages, tags } = useAppData();
  const tag = [...languages, ...tags].find((tag: Tag) => tag.id === path);

  return (
    <header className="container mx-auto my-5 flex max-w-6xl flex-col items-center bg-dark-400 p-6 md:my-10 md:flex-row md:justify-between">
      <nav className="flex flex-wrap items-center md:justify-center">
        <Link href="/">
          <Image src="/firstissue.png" alt="First Issue" loading="lazy" width={290} height={51} />
        </Link>
        {path && tag ? (
          <span className="cursor-pointer pt-3 text-2xl">
            <span className="mx-3 font-normal text-secondary">/</span>
            <span className="font-semibold text-primary">{tag?.display}</span>
          </span>
        ) : null}
      </nav>
    </header>
  );
};

import { Console } from "console";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  href: string;
  title: string;
}

const NavItem = ({ href, title }: Props) => {
  const { asPath } = useRouter();
  const [active, setActive] = useState(false);
  const isActive = (field: string, state: string) => {
    return field === state;
  };
  useEffect(() => {
    setActive(isActive(href, asPath));
  }, [href, asPath]);

  return (
    <Link href={href} className={`nav-item nav-link ${active && "active"}`}>
      {title}
    </Link>
  );
};

export default NavItem;

import Link from 'next/link';

import { Logo } from '../templates/Logo';
import { NavbarTwoColumns } from './NavbarTwoColumns';

const NavBar = () => {
  return (
    <div className="fixed left-1/2 z-50 mx-auto w-full max-w-screen-lg -translate-x-1/2 bg-sky-100 bg-opacity-90 px-5 py-3">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </div>
  );
};

export { NavBar };

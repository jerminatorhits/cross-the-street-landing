import Link from 'next/link';

import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';
import { NavbarTwoColumns } from './NavbarTwoColumns';

const NavBar = () => {
  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  );
};

export { NavBar };

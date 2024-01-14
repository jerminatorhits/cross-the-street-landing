import Link from 'next/link';

import HeroHeader from '../hero/HeroHeader';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  return (
    <div>
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

      <HeroHeader />
    </div>
  );
};

export { Hero };

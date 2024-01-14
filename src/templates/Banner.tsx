import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={`Join the revolution in child safety. 🌐👫`}
      subtitle="Let's create a safer world, one virtual step at a time."
      button={
        <Link href="https://www.meta.com/s/9gX9GJJxM">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };

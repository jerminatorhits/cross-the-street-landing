import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const VerticalFeatures = () => (
  <Section
    title={`${AppConfig.title}`}
    description={`Step into a safer world with our cutting-edge Virtual Reality app! 🚦 Introducing ${AppConfig.title}, where learning meets excitement. Empower your kids with essential street-crossing skills in a fun and immersive way.`}
  >
    <VerticalFeatureRow
      title={`🌟 Why ${AppConfig.title}?`}
      description="Immerse your child in a realistic virtual environment that replicates real-world street scenarios. Our interactive lessons make learning the art of crossing the street an adventure they'll love."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="🚸 Safe, Engaging, and Educational"
      description="Watch as your child develops crucial safety habits through hands-on experiences. Our app transforms street-crossing into an enjoyable journey, teaching valuable lessons that last a lifetime."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="👩‍👧‍👦 Parental Peace of Mind"
      description={`Rest easy knowing your child is equipped with the knowledge to navigate streets safely. ${AppConfig.title} is designed with parental control features, allowing you to track progress and customize lessons.`}
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

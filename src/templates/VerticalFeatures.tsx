import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="our platform, your journey"
    description="by joining our league you gain access to everything an e-athlete needs"
  >
    <VerticalFeatureRow
      title="a competitive community"
      description="grow with other e-athletes in the league and from our content posted on our socials"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="exclusive tournaments"
      description="your standing in the league, among other factors, will allow you to compete at an appropriate level in our tournaments"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="performance metrics"
      description="our desktop app, with your feedback, analyses recorded gameplay down to meaningful numbers about your e-athlete journey"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

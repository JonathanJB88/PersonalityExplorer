import { features } from '../data';
import { FeatureCard } from './';

export const FeaturesSection: React.FC = () => (
  <section aria-label='Features' className='py-8 bg-transparent'>
    <div className='container px-4 mx-auto'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {features.map(({ id, title, description }) => (
          <FeatureCard key={id} title={title} description={description} />
        ))}
      </div>
    </div>
  </section>
);

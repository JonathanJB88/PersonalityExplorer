export interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className='flex flex-col items-center p-4 rounded-md shadow-md bg-background' data-testid='feature-card-wrapper'>
    <h3 className='mb-2 text-xl font-semibold font-header'>{title}</h3>
    <p className='text-center font-body'>{description}</p>
  </div>
);

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { NavItem, Result, TestQ, Social, Features, Testimonals } from '../interfaces';

export const testQuestions: TestQ[] = [
  {
    id: 1,
    question: 'When attending a social gathering, how do you usually feel?',
    options: [
      {
        id: 1,
        points: 1,
        label: 'A. Energized and excited, as I enjoy meeting new people and engaging in conversations.',
      },
      {
        id: 2,
        points: 0,
        label: 'B. Slightly anxious or uncomfortable, as I prefer to spend time alone or with a few close friends.',
      },
    ],
  },
  {
    id: 2,
    question: 'How do you recharge after a long day?',
    options: [
      {
        id: 1,
        points: 1,
        label: 'A. By spending time with friends or family, engaging in social activities.',
      },
      {
        id: 2,
        points: 0,
        label:
          'B. By spending time alone, engaging in solitary activities like reading, watching a movie, or going for a walk.',
      },
    ],
  },
  {
    id: 3,
    question: 'In a group project or team activity, what role do you typically take on?',
    options: [
      {
        id: 1,
        points: 1,
        label: 'A. I often take on a leadership role, making decisions and coordinating group efforts.',
      },
      {
        id: 2,
        points: 0,
        label: 'B. I usually contribute by working on specific tasks or supporting others from behind the scenes.',
      },
    ],
  },
  {
    id: 4,
    question: 'How do you prefer to communicate with others?',
    options: [
      {
        id: 1,
        points: 1,
        label:
          'A. I prefer face-to-face conversations, as it allows me to express myself better and feel more connected to others.',
      },
      {
        id: 2,
        points: 0,
        label:
          'B. I prefer written communication, like emails or text messages, as it gives me time to think and formulate my responses.',
      },
    ],
  },
  {
    id: 5,
    question: 'How do you typically spend your weekends?',
    options: [
      {
        id: 1,
        points: 1,
        label: 'A. Attending social events, going out with friends, or engaging in group activities.',
      },
      {
        id: 2,
        points: 0,
        label: 'B. Spending time at home, pursuing hobbies, or catching up on personal projects.',
      },
    ],
  },
];

export const results: Result[] = [
  {
    id: 1,
    label: 'Introverted',
    description:
      'As an introvert, you tend to feel more comfortable in smaller social settings or alone, preferring to engage in solitary activities. You often recharge by spending time alone, and you may find large social gatherings or interacting with many people draining. Introverts tend to be more reserved and reflective, enjoying deep conversations with a few close friends rather than engaging with many acquaintances.',
    minScore: 0,
    maxScore: 1,
  },
  {
    id: 2,
    label: 'Ambivert',
    description:
      'As an ambivert, you display a mix of introverted and extroverted traits. You can feel comfortable in both social and solitary situations, depending on the context and your energy levels. You may enjoy socializing with others but also appreciate alone time to recharge. Ambiverts can adapt their behavior to suit different environments and often have a balanced approach to communication and social interactions.',
    minScore: 2,
    maxScore: 3,
  },
  {
    id: 3,
    label: 'Extroverted',
    description:
      'As an extrovert, you thrive in social situations and enjoy engaging with others. You often feel energized by interacting with people and participating in group activities. Extroverts tend to be outgoing, expressive, and comfortable in leadership roles. They usually prefer face-to-face communication and might seek out social experiences to recharge after a long day or week.',
    minScore: 4,
    maxScore: 5,
  },
];

export const intro =
  'Introversion and extroversion are two of the most common personality traits. Introverts tend to be more reserved and reflective, while extroverts are more outgoing and social. Introversion and extroversion are not opposites, but rather two ends of a spectrum. Most people fall somewhere in the middle, with a mix of introverted and extroverted traits. This quiz will help you determine whether you are an introvert, extrovert, or somewhere in between.';

export const outro =
  'This quiz is intended for entertainment purposes only. It is not a substitute for professional psychological or medical advice.';

export const heading = 'Discover Your Personality Type';

export const subheading =
  'Uncover your strengths, weaknesses, and unique traits with our free, engaging personality test.';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Test',
    path: '/test',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const social: Social[] = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    Icon: FaFacebookF,
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    Icon: FaTwitter,
  },
  {
    id: 3,
    href: 'https://www.instagram.com',
    Icon: FaInstagram,
  },
  {
    id: 4,
    href: 'https://www.linkedin.com',
    Icon: FaLinkedinIn,
  },
];

export const features: Features[] = [
  {
    id: 1,
    title: 'Customized Results',
    description: 'Get a detailed report on your personality type, tailored to your unique traits.',
  },
  {
    id: 2,
    title: 'Personal Growth',
    description: 'Learn more about yourself, improve your relationships, and unlock your potential.',
  },
  {
    id: 3,
    title: 'Data Privacy',
    description: 'We value your privacy. Your test results are kept confidential and never shared with third parties.',
  },
];

export const testimonialsData: Testimonals[] = [
  {
    id: 1,
    name: 'Marta Smith',
    picture: 'https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg',
    quote: 'The personality test changed my life...',
  },
  {
    id: 2,
    name: 'John Doe',
    picture:
      'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg',
    quote: 'The personality test changed my life...',
  },
  {
    id: 3,
    name: 'Jane Doe',
    picture:
      'https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351964-stock-illustration-default-placeholder-woman.jpg',
    quote: 'The personality test changed my life...',
  },
];

export { FaFacebookF };

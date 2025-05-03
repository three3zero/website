import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Home Page', () => {
  it('renders the welcome heading and service cards', () => {
    render(<Home />);
    
    // Check if the main heading is rendered
    expect(screen.getByText('Welcome to three3zero')).toBeInTheDocument();
    
    // Check if the service cards are rendered
    expect(screen.getByText('Expert Consulting')).toBeInTheDocument();
    expect(screen.getByText('Tailored Solutions')).toBeInTheDocument();
    expect(screen.getByText('Proven Results')).toBeInTheDocument();
    
    // Check if the CTA buttons are rendered
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });
});
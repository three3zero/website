import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/layout/navbar';

// Mock the usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />);
    
    // Check if the logo is rendered
    expect(screen.getByText('three3zero')).toBeInTheDocument();
    
    // Check if all navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
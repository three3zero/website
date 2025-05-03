import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/layout/navbar';

// Mock for usePathname
const mockUsePathname = jest.fn();

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navbar />);
    
    // Check if the logo is rendered
    expect(screen.getByText('three3zero')).toBeInTheDocument();
    
    // Check if all navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('sets the active state for the current page', () => {
    // Test home page active state
    mockUsePathname.mockReturnValue('/');
    const { rerender } = render(<Navbar />);
    
    // Get all navigation links
    const homeLink = screen.getByText('Home').closest('[data-slot="navigation-menu-link"]');
    const servicesLink = screen.getByText('Services').closest('[data-slot="navigation-menu-link"]');
    const aboutLink = screen.getByText('About').closest('[data-slot="navigation-menu-link"]');
    const contactLink = screen.getByText('Contact').closest('[data-slot="navigation-menu-link"]');
    
    // Check that only Home link has data-active=true
    expect(homeLink).toHaveAttribute('data-active', 'true');
    expect(servicesLink).toHaveAttribute('data-active', 'false');
    expect(aboutLink).toHaveAttribute('data-active', 'false');
    expect(contactLink).toHaveAttribute('data-active', 'false');
    
    // Test services page active state
    mockUsePathname.mockReturnValue('/services');
    rerender(<Navbar />);
    
    // Check that only Services link has data-active=true
    expect(homeLink).toHaveAttribute('data-active', 'false');
    expect(servicesLink).toHaveAttribute('data-active', 'true');
    expect(aboutLink).toHaveAttribute('data-active', 'false');
    expect(contactLink).toHaveAttribute('data-active', 'false');
  });
});
import { render, screen } from '@testing-library/react';
import FButton, { FButtonSizes, FButtonTypes } from 'src/components/form/buttons/FButton';

describe('FButton', () => {
  it('should exist button', () => {
    render(<FButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('check type', () => {
    const { container } = render(<FButton type={FButtonTypes.PRIMARY} />);
    const child = container.firstChild as HTMLDivElement | null;
    expect(child?.classList?.contains(FButtonTypes.PRIMARY)).toBeTruthy();
  });
  it('check size', () => {
    const { container } = render(<FButton size={FButtonSizes.SMALL} />);
    const child = container.firstChild as HTMLDivElement | null;
    expect(child?.classList?.contains(FButtonSizes.SMALL)).toBeTruthy();
  });
});

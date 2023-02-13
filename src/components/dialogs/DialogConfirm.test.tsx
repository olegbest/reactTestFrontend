import { render, screen } from '@testing-library/react';

import DialogConfirm from './DialogConfirm';

describe('DialogConfirm', () => {
  it("shouldn't show dialog", () => {
    render(<DialogConfirm />);
    const element = screen.getByTestId('close-dialog');
    expect(element).toBeInTheDocument();
  });
  it('should show dialog with 2 buttons', () => {
    render(<DialogConfirm active={true} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});

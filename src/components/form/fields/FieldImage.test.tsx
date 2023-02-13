import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import httpClient from 'src/api/httpClient';
import { renderWithStore } from 'src/tests/helpers/renderWithStore';

import FieldImage from './FieldImage';

describe('FieldImage', () => {
  const blob = new Blob(['test']);
  const imageFile = new File([blob], 'test.png', {
    type: 'image/png'
  });

  beforeEach(() => {
    const response = { data: { url: 'test', uuid: 'test' } };
    jest.spyOn(httpClient, 'post').mockResolvedValue(response);
  });

  it('should exist input', async () => {
    renderWithStore(<FieldImage />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    expect(input).toBeInTheDocument();
    expect(input?.type === 'file');
  });

  it('should upload image', async () => {
    renderWithStore(<FieldImage />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    await userEvent.upload(input, imageFile);
    expect(input.files).toHaveLength(1);
  });

  it("shouldn't upload file no image type", async () => {
    renderWithStore(<FieldImage />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    const file = new File([blob], 'test.js');
    await userEvent.upload(input, file);
    expect(input.files).toHaveLength(0);
  });

  it('should exist image', async () => {
    renderWithStore(<FieldImage />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    await userEvent.upload(input, imageFile);
    const imageEls = await waitFor(() => screen.getAllByRole('img'));
    expect(imageEls).toHaveLength(1);
  });
});

import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import httpClient from 'src/api/httpClient';
import { renderWithStore } from 'src/tests/helpers/renderWithStore';

import FieldFile from './FieldFile';

describe('FieldFile', () => {
  const blob = new Blob(['test']);
  const file = new File([blob], 'test.json', {
    type: 'application/JSON'
  });

  beforeEach(() => {
    const response = { data: { url: 'test', uuid: 'test' } };
    jest.spyOn(httpClient, 'post').mockResolvedValue(response);
  });

  it('should exist input', async () => {
    renderWithStore(<FieldFile />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    expect(input).toBeInTheDocument();
    expect(input?.type === 'file');
  });
  it('should upload file', async () => {
    renderWithStore(<FieldFile />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    await userEvent.upload(input, file);
    expect(input.files).toHaveLength(1);
  });

  it('should return list files', async () => {
    renderWithStore(<FieldFile />);
    const input = screen.getByTestId<HTMLInputElement>('input-file');
    await userEvent.upload(input, file);
    const filesEl = await waitFor(() => screen.getAllByTestId('file'));
    expect(filesEl).toHaveLength(1);
  });
});

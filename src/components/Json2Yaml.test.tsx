import React from 'react';
import { render, screen } from '@testing-library/react';
import Json2Yaml from './Json2Yaml';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('renders json to yaml', () => {
  const route = '/json2Yaml';
  render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/json2Yaml" element={<Json2Yaml />} />
      </Routes>
    </MemoryRouter>,
  );
  const jsonTextArea = screen.getByTestId('jsonTextArea');
  expect(jsonTextArea).toBeInTheDocument();
  const yamlTextArea = screen.getByTestId('yamlTextArea');
  expect(yamlTextArea).toBeInTheDocument();
});

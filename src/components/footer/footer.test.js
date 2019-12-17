import React from 'react';
import { render } from '@testing-library/react';
import Footer from './footer';

test('renders Stackline text in footer ', () => {
/*
  const { getByText } = render(<Footer />);
  const companyLine = getByText(/Stackline/);
  expect(companyLine).toBeInTheDocument();

 */
  const currentDate = new Date();
  const { getByText } = render(<Footer />);
  expect(getByText(`©2019 Stackline`)).toBeInTheDocument();
});


import React from 'react';
import Header from '.';
import { render, screen } from '../../utils/test-utils';

describe('Given Header component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<Header />);
    });

    test('Then "Glofox Beers" title is in the document', () => {
      expect(screen.getByText(/Glofox Beers/i)).toBeInTheDocument();
    });

    test('Then header subtitle is in the document', () => {
      expect(screen.getByTestId(/header-subtitle/i)).toBeInTheDocument();
    });

    test('Then Glofox link is in the document', () => {
      expect(screen.getByTestId(/glofox-link/i)).toBeInTheDocument();
    });
  });
});

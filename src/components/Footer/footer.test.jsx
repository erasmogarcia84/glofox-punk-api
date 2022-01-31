import React from 'react';
import Footer from '.';
import { render, screen } from '../../utils/test-utils';

describe('Given Footer component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<Footer />);
    });

    test('Then footer has 2 links', () => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBe(2);
    });

    [
      {
        description: 'erasmogarcia84 Github profile link',
        hrefValue: 'https://github.com/erasmogarcia84/',
        altText: 'Github logo',
      },
      {
        description: 'erasmogarciaglez Linkedin profile link',
        hrefValue: 'https://www.linkedin.com/in/erasmogarciaglez/',
        altText: 'Linkedin logo',
      },
    ].forEach((scenario) => {
      let image;
      beforeEach(() => {
        image = screen.getByAltText(scenario.altText);
      });

      test(`Then ${scenario.altText} is in the document`, () => {
        expect(image).toBeInTheDocument();
      });

      test(`Then ${scenario.description} is in the document`, () => {
        expect(image.closest('a')).toHaveAttribute('href', scenario.hrefValue);
      });
    });
  });
});

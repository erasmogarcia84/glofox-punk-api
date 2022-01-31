import React from 'react';
import SearchBox from '.';
import { render, screen, fireEvent } from '../../utils/test-utils';

describe('Given SearchBox component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<SearchBox />);
    });

    test('Then a text input with placeholder "write something" is in the document', () => {
      const textInput = screen.getByRole('textbox');
      expect(textInput).toHaveAttribute('placeholder', 'write something...');
    });

    test('Then a radio button "by name" is in the document', () => {
      const radioByName = screen.getByRole('radio', { name: 'By Name' });
      expect(radioByName).toBeInTheDocument();
    });

    test('Then a radio button "by brewed before" is in the document', () => {
      const radioByBrewedBefore = screen.getByRole('radio', {
        name: 'By Brewed Before',
      });
      expect(radioByBrewedBefore).toBeInTheDocument();
    });

    test('Then Search button is disabled', () => {
      const searchButton = screen.getByRole('button', {
        name: 'Search',
      });
      expect(searchButton).toBeDisabled();
    });
  });

  describe('When By Name radio button is clicked', () => {
    beforeAll(() => {
      Object.defineProperty(window, 'matchMedia', {
        value: jest.fn(() => ({
          matches: true,
          addListener: jest.fn(),
          removeListener: jest.fn(),
        })),
      });
    });

    let textInput;
    beforeEach(() => {
      render(<SearchBox />);

      const radioByName = screen.getByRole('radio', { name: 'By Name' });
      fireEvent.click(radioByName);

      textInput = screen.getByRole('textbox');
    });

    describe('And valid text is introduced', () => {
      test('Then button is enabled', () => {
        fireEvent.change(textInput, { target: { value: 'ipa-20 22' } });

        const searchButton = screen.getByRole('button', {
          name: 'Search',
        });
        expect(searchButton).toBeEnabled();
      });
    });

    describe('And invalid text is introduced', () => {
      test('Then button is disabled', () => {
        fireEvent.change(textInput, { target: { value: 'ipa,&43*+' } });

        const searchButton = screen.getByRole('button', {
          name: 'Search',
        });
        expect(searchButton).toBeDisabled();
      });
    });
  });

  describe('When By Brewed Before radio button is clicked', () => {
    beforeEach(() => {
      render(<SearchBox />);
    });

    test('Then input has type "date"', () => {
      const radioByBrewedBefore = screen.getByRole('radio', {
        name: 'By Brewed Before',
      });
      fireEvent.click(radioByBrewedBefore);

      const textInput = screen.getByTestId('input-date');
      expect(textInput).toHaveAttribute('type', 'date');
    });
  });
});

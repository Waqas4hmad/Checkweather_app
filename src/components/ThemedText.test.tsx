import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemedText } from '../ThemedText'; // adjust the import path as needed

describe('ThemedText component', () => {
  it('renders default text with default style', () => {
    const { getByText } = render(<ThemedText>Hello World</ThemedText>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 16, lineHeight: 24 }),
      ])
    );
  });

  it('applies the title style correctly', () => {
    const { getByText } = render(<ThemedText type="title">Title Text</ThemedText>);
    const textElement = getByText('Title Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 32, fontWeight: 'bold', lineHeight: 32 }),
      ])
    );
  });

  it('applies the defaultSemiBold style correctly', () => {
    const { getByText } = render(<ThemedText type="defaultSemiBold">Bold Text</ThemedText>);
    const textElement = getByText('Bold Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontWeight: '600' }),
      ])
    );
  });

  it('applies custom color', () => {
    const { getByText } = render(<ThemedText color="#FF0000">Colored Text</ThemedText>);
    const textElement = getByText('Colored Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: '#FF0000' }),
      ])
    );
  });

  it('applies the link style including color override', () => {
    const { getByText } = render(<ThemedText type="link">Link Text</ThemedText>);
    const textElement = getByText('Link Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ fontSize: 16, lineHeight: 30, color: '#0a7ea4' }),
      ])
    );
  });
});
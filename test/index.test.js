import React from 'react';
import { render } from '@testing-library/react';
import { H, SemanticSection } from '../src/index';
import '@testing-library/jest-dom/extend-expect';

describe('should render', () => {
  it('h1', () => {
    const { container } = render(<H>Hello World</H>);
    expect(container).toMatchSnapshot();
  });
  it('h2', () => {
    const { container } = render(<SemanticSection><H>Hello World</H></SemanticSection>);
    expect(container).toMatchSnapshot();
  });
  it('h2 wrapped in a <section>', () => {
    const { container } = render(<SemanticSection element="section"><H>Hello World</H></SemanticSection>);
    expect(container).toMatchSnapshot();
  });
  it('h1 through h3', () => {
    const { container } = render(
      <>
        <H>Hello World</H>
        <SemanticSection>
          <H>Hello World</H>
          <SemanticSection>
            <H>Hello World</H>
          </SemanticSection>
          <H>Hello World</H>
          <SemanticSection>
            <H>Hello World</H>
          </SemanticSection>
        </SemanticSection>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  it('h1 through h6 without going over', () => {
    const { container } = render(
      <>
        <H>Hello World</H>
        <SemanticSection>
          <H>Hello World</H>
          <SemanticSection>
            <H>Hello World</H>
            <SemanticSection>
              <H>Hello World</H>
              <SemanticSection>
                <H>Hello World</H>
                <SemanticSection>
                  <H>Hello World</H>
                  <SemanticSection>
                    <H>Hello World</H>
                    <SemanticSection>
                      <H>Hello World</H>
                    </SemanticSection>
                  </SemanticSection>
                </SemanticSection>
              </SemanticSection>
            </SemanticSection>
          </SemanticSection>
        </SemanticSection>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
  it('h1 through h3 with override to h4', () => {
    const { container } = render(
      <>
        <H>Hello World</H>
        <SemanticSection>
          <H>Hello World</H>
          <SemanticSection>
            <H>Hello World</H>
          </SemanticSection>
          <H>Hello World</H>
          <SemanticSection>
            <H level={4}>Hello World</H>
          </SemanticSection>
        </SemanticSection>
      </>,
    );
    expect(container).toMatchSnapshot();
  });
});

/*
 * Media queries utility
 */
/*
 * Inspired by https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
};

// Iterate through the sizes and create min-width media queries
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, size) => {
    acc[size] = () => `@media (min-width:${sizes[size]}px)`;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: () => string },
);

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium} {
    display: block
  }
`;
*/

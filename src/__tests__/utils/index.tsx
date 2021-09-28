import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React from 'react';
// import theme from 'src/theme';

const AlltheProviders = ({ children }: { children: JSX.Element }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: AlltheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

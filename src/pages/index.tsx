import type { NextPage } from 'next';
import Image from 'next/image';

import { Box, chakra } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <chakra.h1 color="tomato">Hello World!</chakra.h1>
    </Box>
  );
};

export default Home;

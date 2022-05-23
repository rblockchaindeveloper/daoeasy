/* eslint-disable import/no-unresolved */
import { Flex, Heading, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useState } from 'react';

import { ConnectWallet } from '@/components/ConnectWallet';
import { PrimaryButton } from '@/components/PrimaryButton';
import { useWallet } from '@/web3';

const Home: React.FC = () => {
  const [isEntered, setIsEntered] = useState(false);

  const { isConnected } = useWallet();

  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading color="main" fontSize={87} pb={10} fontWeight="normal">
        DAOEasy
      </Heading>
      <Head>
        <title>DAOEasy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex>
        {!isConnected && <ConnectWallet />}

        {!isEntered && isConnected && (
          <PrimaryButton onClick={() => setIsEntered(true)}>
            enter
          </PrimaryButton>
        )}
      </Flex>

      {isEntered && (
        <VStack spacing={6}>
          <NextLink href="/search" passHref>
            <PrimaryButton>search for Quest Chain</PrimaryButton>
          </NextLink>
          <NextLink href="/create" passHref>
            <PrimaryButton>create Quest Chain</PrimaryButton>
          </NextLink>
          <NextLink href="/overview" passHref>
            <PrimaryButton>quests overview</PrimaryButton>
          </NextLink>
        </VStack>
      )}
    </Flex>
  );
};

export default Home;

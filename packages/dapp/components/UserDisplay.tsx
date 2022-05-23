import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Link, Text } from '@chakra-ui/react';
import Davatar from '@davatar/react';
import { utils } from 'ethers';

import { SubmitButton } from '@/components/SubmitButton';
import { formatAddress, getAddressUrl, useENS } from '@/web3';

export const UserDisplay: React.FC<{ address: string }> = ({ address }) => {
  const { ens } = useENS(address);
  return (
    <Link isExternal href={getAddressUrl(address)} _hover={{}}>
      <SubmitButton size="md" px={4} letterSpacing={4} fontSize={12} height={8}>
        <HStack spacing={2} position="relative">
          <Davatar address={address} size={20} generatedAvatarType="jazzicon" />
          <Text transition="opacity 0.25s" minW="6rem" textAlign="left">
            {formatAddress(utils.getAddress(address), ens)}
          </Text>
          <ExternalLinkIcon />
        </HStack>
      </SubmitButton>
    </Link>
  );
};

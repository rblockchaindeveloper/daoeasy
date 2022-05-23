import { useMemo } from 'react';
import { CombinedError } from 'urql';

import {
  QuestChainInfoFragment,
  useQuestChainInfoQuery,
} from '@/graphql/types';

export const useLatestQuestChainData = (
  inputQuestChain: QuestChainInfoFragment | null,
): {
  questChain: QuestChainInfoFragment | null;
  refresh: () => void;
  fetching: boolean;
  error: CombinedError | undefined;
} => {
  const [{ data, fetching, error }, execute] = useQuestChainInfoQuery({
    variables: { address: (inputQuestChain?.address ?? '').toLowerCase() },
    requestPolicy: 'network-only',
    pause: !inputQuestChain?.address,
  });
  const questChain = useMemo(
    () => (data?.questChain ? data.questChain : inputQuestChain),
    [data, inputQuestChain],
  );

  return {
    questChain,
    fetching,
    refresh: execute,
    error,
  };
};

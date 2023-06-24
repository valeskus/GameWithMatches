import React from 'react';

import { InputPad, ThreeButtonsPad } from './components';

interface Props {
  onPlayerMove: (count: number) => void;
  allMatchesCount: number;
  availableMatchesPerMove: number;
}

export function GamePad({
  onPlayerMove,
  allMatchesCount,
  availableMatchesPerMove,
}: Props): JSX.Element {
  return (
    <>
      {availableMatchesPerMove <= 3 && (
        <ThreeButtonsPad
          onPlayerMove={onPlayerMove}
          availableMatchesPerMove={availableMatchesPerMove}
        />
      )}
      {availableMatchesPerMove > 3 && (
        <InputPad
          onPlayerMove={onPlayerMove}
          availableMatchesPerMove={availableMatchesPerMove}
          allMatchesCount={allMatchesCount}
        />
      )}
    </>
  );
}

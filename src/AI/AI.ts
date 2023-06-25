interface PickParams {
  matchesLeft: number;
  aiNumberOfMatches: number;
  pickLimit: number;
  allMatches: number;
}

export class AI {
  public pick = ({
    matchesLeft,
    aiNumberOfMatches,
    pickLimit,
    allMatches,
  }: PickParams) => {

    return new Promise<number>((resolve) => {

      setTimeout(() => {
        const maxTurnedMatches = Math.min(pickLimit, matchesLeft);
        const playerMatches = (allMatches - matchesLeft) - aiNumberOfMatches;
        if (playerMatches % 2 === 0) {
          const aiMove = (matchesLeft - 1) % (pickLimit + 1);

          if (aiMove === 0 || aiMove > maxTurnedMatches) {

            resolve(maxTurnedMatches);
          }

          resolve(aiMove);
        } else {
          const aiMove = (matchesLeft + 1) % (pickLimit + 1);
          if (aiMove === 0 || aiMove > maxTurnedMatches) {

            resolve(maxTurnedMatches);
          }

          resolve(aiMove);
        }
      }, 2000);
    });
  };
}

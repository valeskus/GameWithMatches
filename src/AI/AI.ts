interface PickParams {
  matchesLeft: number;
  aiNumberOfMatches: number;
  pickLimit: number;
}

export class AI {
  public pick = ({
    // matchesLeft,
    // aiNumberOfMatches,
    // pickLimit,
  }: PickParams) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
  };
}

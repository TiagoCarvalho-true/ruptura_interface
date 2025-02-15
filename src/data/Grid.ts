import { Value } from "./Value";

export default class Grid {
  constructor(readonly values: Value[]) {}

  static createRandom(length: number) {
    return new Grid(
      Array.from({ length }).map((_, index: number) => {
        return {
          id: index + 1,
          number: Math.floor(Math.random() * 10),
          moveEffect: Math.floor(Math.random() * 4) as any,
        };
      })
    );
  }
}

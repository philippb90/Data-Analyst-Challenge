export class DataNormalization {
  static normalizeTimestamp(timestamp: number): Date {
    return new Date(timestamp * 1000);
  }

  static normalizeAmount(amount: number, decimals: number): number {
    return amount / Math.pow(10, decimals);
  }
}
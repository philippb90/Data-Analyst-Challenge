import { BlockchainTransaction } from '../types/BlockchainData';
import { logger } from '../utils/logger';

export class BlockchainDataParser {
  async parseTransactions(rawData: any[]): Promise<BlockchainTransaction[]> {
    try {
      return rawData.map(tx => ({
        txId: tx.hash,
        timestamp: tx.timestamp,
        from: tx.from,
        to: tx.to,
        amount: tx.value,
        asset: tx.asset,
        status: tx.status
      }));
    } catch (error) {
      logger.error('Error parsing blockchain data:', error);
      throw new Error('Failed to parse blockchain data');
    }
  }

  async extractUserBehavior(transactions: BlockchainTransaction[]) {
    try {
      // Group transactions by user
      const userBehavior = transactions.reduce((acc, tx) => {
        if (!acc[tx.from]) {
          acc[tx.from] = [];
        }
        acc[tx.from].push(tx);
        return acc;
      }, {} as Record<string, BlockchainTransaction[]>);

      return userBehavior;
    } catch (error) {
      logger.error('Error extracting user behavior:', error);
      throw new Error('Failed to extract user behavior');
    }
  }
}
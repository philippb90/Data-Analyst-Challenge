export interface BlockchainTransaction {
  txId: string;
  timestamp: number;
  from: string;
  to: string;
  amount: number;
  asset: string;
  status: string;
}
export type WalletType = 'freighter' | 'albedo' | 'custodial';

export type NetworkType = 'testnet' | 'mainnet';

export interface WalletBalance {
  xlm: string;
  usdc: string;
}

export interface WalletConnection {
  type: WalletType;
  publicKey: string;
  network: NetworkType;
  isConnected: boolean;
  balance: WalletBalance;
}

export interface WalletContextValue {
  wallet: WalletConnection | null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connect: (_: WalletType, __?: NetworkType) => Promise<void>;
  disconnect: () => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  switchNetwork: (_: NetworkType) => Promise<void>;
  refreshBalance: () => Promise<void>;
  isLoading: boolean;
  error: string | null;
  loadPersistedConnection: () => void;
}

export interface WalletConnectionProps {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onConnectionChange?: (_: WalletConnection | null) => void;
}

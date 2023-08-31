import { Wallet } from '@rainbow-me/rainbowkit'
import {
  argentWallet,
  braveWallet,
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  tahoWallet,
  trustWallet,
  walletConnectWallet,
  xdefiWallet,
  zerionWallet
} from '@rainbow-me/rainbowkit/wallets'
import { NETWORK } from '@shared/utilities'
import { SupportedNetwork } from 'src/types'
import { Address, parseUnits } from 'viem'
import { arbitrum, Chain, mainnet, optimism, optimismGoerli, polygon } from 'wagmi/chains'

/**
 * Supported networks
 */
export const SUPPORTED_NETWORKS = [NETWORK.optimism, NETWORK['optimism-goerli']] as const

/**
 * Wagmi networks
 */
export const WAGMI_CHAINS = {
  [NETWORK.mainnet]: mainnet,
  [NETWORK.polygon]: polygon,
  [NETWORK.optimism]: optimism,
  [NETWORK.arbitrum]: arbitrum,
  [NETWORK['optimism-goerli']]: optimismGoerli
} as const

/**
 * Wallets
 */
export const WALLETS: {
  [wallet: string]: (data: { appName: string; chains: Chain[]; projectId: string }) => Wallet
} = {
  metamask: metaMaskWallet,
  walletconnect: walletConnectWallet,
  rainbow: rainbowWallet,
  injected: injectedWallet,
  argent: argentWallet,
  coinbase: coinbaseWallet,
  ledger: ledgerWallet,
  taho: tahoWallet,
  trust: trustWallet,
  zerion: zerionWallet,
  brave: braveWallet,
  safe: safeWallet,
  xdefi: xdefiWallet
} as const

/**
 * RPCs
 */
export const RPC_URLS = {
  [NETWORK.mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
  [NETWORK.polygon]: process.env.NEXT_PUBLIC_POLYGON_RPC_URL,
  [NETWORK.optimism]: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL,
  [NETWORK.arbitrum]: process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL,
  [NETWORK['optimism-goerli']]: process.env.NEXT_PUBLIC_OPTIMISM_GOERLI_RPC_URL
} as const

/**
 * Contract addresses
 */
export const CONTRACTS: Record<
  SupportedNetwork,
  {
    prizePool: Address
    twabController: Address
    claimer: Address
  }
> = {
  [NETWORK.optimism]: {
    prizePool: '0x8CFFFfFa42407DB9DCB974C2C744425c3e58d832',
    twabController: '0x0D51a33975024E8aFc55fde9F6b070c10AA71Dd9',
    claimer: '0x47b55748243314Be6a341668ECDa2066c0625f70'
  },
  [NETWORK['optimism-goerli']]: {
    prizePool: '0xC64bb8Fe4f023B650940D05E79c35454e12A111F',
    twabController: '0xc86175315BBd4519622200bF14b2fa4a974FE78C',
    claimer: '0x121aeCa0e662D6F89b5Da401894451Bfa76E134D'
  }
} as const

/**
 * Local storage keys
 */
export const LOCAL_STORAGE_KEYS = {
  vaultIds: 'vaultIds'
}

/**
 * Default liquidation pair config
 */
export const LP_CONFIG = {
  targetFirstSaleTimeFraction: 0.5,
  decayConstant: parseUnits('0.000030092592592592', 18),
  liquidationGasAmount: 300_000n
}

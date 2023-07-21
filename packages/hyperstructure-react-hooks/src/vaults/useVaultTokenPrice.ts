import { TokenWithPrice, Vault } from '@pooltogether/hyperstructure-client-js'
import { useMemo } from 'react'
import { Address } from 'viem'
import { useTokenPrices, useVaultTokenData } from '..'

/**
 * Returns a vault's underlying token price
 * @param vault instance of the `Vault` class
 * @returns
 */
export const useVaultTokenPrice = (vault: Vault) => {
  const { data: tokenData, isFetched: isFetchedTokenData } = useVaultTokenData(vault)

  const {
    data: tokenPrices,
    isFetched: isFetchedTokenPrices,
    refetch
  } = useTokenPrices(vault.chainId, !!tokenData ? [tokenData.address] : [])

  const tokenPrice = useMemo(() => {
    return !!tokenData && !!tokenPrices
      ? tokenPrices[tokenData.address.toLowerCase() as Address]
      : undefined
  }, [tokenData, tokenPrices])

  const isFetched = isFetchedTokenData && isFetchedTokenPrices

  const data: TokenWithPrice | undefined =
    !!tokenData && tokenPrice !== undefined ? { ...tokenData, price: tokenPrice } : undefined

  return { data, isFetched, refetch }
}

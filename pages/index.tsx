import Image from 'next/image'
import { Inter } from 'next/font/google'
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { ZeroDevSmartWalletConnectors } from "@dynamic-labs/ethereum-aa";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="flex flex-col max-w-5xl w-full h-full items-center justify-center">
        <DynamicContextProvider
          settings={{
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || '',
            walletConnectors: [
              EthereumWalletConnectors,
              ZeroDevSmartWalletConnectors
            ],
          }}
        >
          <DynamicWidget />
        </DynamicContextProvider>
      </div>
    </main>
  )
}

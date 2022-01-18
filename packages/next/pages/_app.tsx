import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Config, Hardhat, DAppProvider } from "@usedapp/core";
import { MulticallContract } from "../../hardhat/artifacts/contracts/contractAddress";

const config: Config = {
  multicallAddresses: {
    [Hardhat.chainId]: MulticallContract,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;

import { useEthers } from "@usedapp/core";
import Balance from "./Balance";

export default function ConnectWallet(): JSX.Element {
  const { account, activateBrowserWallet } = useEthers();
  return (
    <div className="md:inline-flex">
      {!account ? (
        <a
          href="#"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => {
            activateBrowserWallet();
          }}
        >
          Connect Wallet
        </a>
      ) : (
        <Balance />
      )}
    </div>
  );
}

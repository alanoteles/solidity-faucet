import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null
  })

  const [account, setAccount] = useState(null)

  useEffect(() => {
    const loadProvider = async () => {
      let provider = null;
      // if we have Metamask browser extension installed, it will use it.
      if (window.ethereum) {
        provider = window.ethereum;

        try {
          await provider.enable();
        } catch {
          console.error("User denied accounts access!")
        }
      }
      // web3 provider, in case there is no Metamask installation or for legacy systems compatibility
      else if (window.web3) {
        provider = window.web3.currentProvider
      }
      // Ganache local development environment
      else if (!process.env.production) {
        provider = new Web3.providers.HttpProvider("http://localhost:7545")

      }

      setWeb3Api({
        web3: new Web3(provider),
        provider
      })
    }

    loadProvider();
  }, [])

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])
    }
    web3Api.web3 && getAccount()
  }, [web3Api.web3])
  // console.log(web3Api.web3);
  

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <span>
            <strong>Account: </strong>
          </span>
          <h1>
            { account ? account : "not connected"}
          </h1>
          <div className="balance-view is-size-2">
            Current balance: <strong>10</strong>
          </div>
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;

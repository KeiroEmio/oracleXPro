import "./App.css";

import { Web3AuthInnerContext, Web3AuthProvider } from "@web3auth/modal-react-hooks";
import { WalletServicesProvider } from "@web3auth/wallet-services-plugin-react-hooks";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contract from "./pages/Contract";
import HomePage from "./pages/HomePage";
// import NFT from "./pages/NFT";
import ServerSideVerification from "./pages/ServerSideVerification";
import Transaction from "./pages/Transaction";
import { Playground } from "./services/playground";
import web3AuthContextConfig from "./services/web3authContext";
import PloyMarketHome from "./pages/PolyMarket/home";
import Politics from "./pages/PolyMarket/Politics"
import Crypto from "./pages/PolyMarket/Crypto"
import Sports from "./pages/PolyMarket/Sports"

function App() {
  return (
    <div>
      <Web3AuthProvider config={web3AuthContextConfig}>
        <WalletServicesProvider context={Web3AuthInnerContext}>
          <Playground>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<HomePage />} />
                  <Route path="contract" element={<Contract />} />
                  <Route path="transaction" element={<Transaction />} />
                  <Route path="server-side-verification" element={<ServerSideVerification />} />
                  {/* PloyMarketHome */}
                  <Route path="polyMarket-home" element={<PloyMarketHome />}>
                    <Route path="politics" element={<Politics />} />
                    <Route path="sports" element={<Sports />} />
                    <Route path="crypto" element={<Crypto />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </Playground>
        </WalletServicesProvider>
      </Web3AuthProvider>
    </div>
  );
}

export default App;

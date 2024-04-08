// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import twaLogo from './assets/tapps.png'
import viteLogo from '/vite.svg'
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { ConnectedWalletInfo } from './assets/lib/ConnectedWalletInfo';

import './App.css'

// import WebApp from '@twa-dev/sdk'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    
      <TonConnectUIProvider manifestUrl="https://www.architecton.site/tonconnect-manifest.json"
        actionsConfiguration={{
        twaReturnUrl: 'https://t.me/architec_ton_bot/wallet/'
    }}>
    <>
    
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ArchiTec Ton Wallet</h1>
      <header>
            <span>Connect to wallet</span>
            <TonConnectButton />
            <ConnectedWalletInfo />
        </header>
        <div>

        
          </div>
    </>
    </TonConnectUIProvider>
  )
}

export default App
/*  <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*  }
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div> */
<h1 align="center" id="title">Uniswap Clone </h1>

## Table of Contents

[🚀 Tutorial](#tutorial) <br />
[🛠️ Getting Started](#getting-started) <br />

## 🚀 Tutorial
[![DeFi Exchange | Build Your Own Uniswap Exchange Clone | Crypto Exchange Platform Project 2023](https://img.youtube.com/vi/ZNDZuT9hmNo/maxresdefault.jpg)](https://www.youtube.com/watch?v=ZNDZuT9hmNo&t=15076s)


## 🛠️ Getting Started

### 1. Prerequisite

- **MetaMask**: Install Metamask, the digital wallet on your dekstop browser.

- **Alchemy**: Go to [Alchemy](https://www.alchemy.com/) to create a new account if you've never registered yet.

- **Testnet Token**: Go to [Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia), choose the network and get some tokens.

### 2. Clone the Repository

Clone this repository to your local machine using:

```bash
git clone https://github.com/henghuisan/uniswap-clone.git
```

### 3. Define Environment Variables
- Create a .env file by coping and paste the .env.example file from root directory and define the necessary environment variables.
- Copy and paste your Metamask private key to ```ETHEREUM_SEPOLIA_PRIVATE_KEY``` in .env

### 4. Create New App on Alchemy
Create a new app on Alchemy, copy and paste the API key to ```ALCHEMY_ETHEREUM_SEPOLIA_API_KEY``` in .env

### 5. Run the Development

To run the development locally, follow these steps:

```bash
npm install
npm run dev
```

Open your browser and visit http://localhost:3000

### 6. Deploy smart contract
To deploy smart contract on the network, run the following command:

``` bash
npx hardhat --network yournetwork run scripts/deploy.js
```

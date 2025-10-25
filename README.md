# CredentialsZk Protocol

## 🔒 Instant, Privacy-Preserving Credential Verification with ZKP & Blockchain

---

## Overview

**The Trustless Credential Hub** is a decentralized platform for verifying credentials—such as age, degrees, or professional qualifications—without exposing any sensitive data. By leveraging blockchain for immutability and Zero-Knowledge Proofs (ZKPs) for privacy, users can instantly prove eligibility (e.g., “is over 18”, “has a Bachelor’s degree”) while keeping all personal details hidden. Issuers (like universities) provide credentials, holders store them in their wallet, and verifiers check proofs in seconds—no manual document checks, no risk of data leakage. The platform also features AI-powered skill tagging and a Web3-first UX.

---

## Demo

**Try it live:** [Add your deployment/demo link here]  
**Connect MetaMask, issue, and verify credentials in seconds.**

---

## Features

- **Decentralized Identity (DID):** Credentials are issued to users’ Web3 wallets, compatible with standards (Polygon ID, W3C DID).
- **Zero-Knowledge Proofs (ZKP):** Verifiers can check eligibility with cryptographic proofs, exposing *no* underlying data.
- **Smart Contracts:** Credential issuance, revocation, and audit actions are on-chain and transparent.
- **AI/NLP Skill Tagging:** Credentials are automatically parsed for key skills, enabling semantic candidate search.
- **Web3 UI:** Modern, animated, dark-gradient dashboard with wallet connection via thirdweb.

---

## How It Works

1. **Issuer** (e.g., university or certifier):
    - Connects wallet, issues credential on-chain to a user’s address.
    - Can revoke credentials or update eligibility as needed.

2. **Holder** (user):
    - Connects MetaMask, receives credentials as verifiable attestations.
    - When asked for verification, generates a ZK proof on their device.

3. **Verifier** (employer, fintech, etc.):
    - Requests proof for a specific claim (“has valid degree”).
    - Submits proof to smart contract, gets instant binary response.

4. **Skill Search:**
    - All credentials are AI-tagged for related skills, allowing natural language queries (“Find candidates with ZKP experience”).

---

## Tech Stack

- **Frontend:** Next.js 14, React, TailwindCSS, Framer Motion
- **Wallets:** MetaMask, WalletConnect (via thirdweb ConnectButton)
- **Smart Contracts:** Solidity, deployed with thirdweb SDK, tested with Hardhat
- **Blockchain:** Polygon PoS (low fees, fast settlement)
- **Identity & ZKP:** Polygon ID SDK, Circom circuits, SnarkJS, Groth16 verifier
- **AI/NLP:** ContextGNN (PyTorch Geometric), Sentence Transformers (Hugging Face)
- **APIs:** Alchemy node provider, OpenAI (for queries)
- **Storage:** IPFS with Lit Protocol for encrypted off-chain credential metadata

---

## Notable Integrations & Hacks

- Used **thirdweb SDK** for simplified wallet & contract management, enabling gasless deployment and a smoother UX.
- ZK proofs are generated *client-side*—no sensitive information ever leaves the user device.
- AI skill graphs (ContextGNN) allow relational skill inference, elevating search beyond keyword matching.
- Lit Protocol manages decentralized key-based access for credential storage.

---

## Getting Started

1. **Clone this repo:**  
   `git clone <repo-url>`
2. **Install dependencies:**  
   `npm install`
3. **Create .env.local**  
   - Add your Polygon, Alchemy, and OpenAI credentials as needed.
4. **Run locally:**  
   `npm run dev`
5. **Deploy smart contracts:**  
   See `/contracts` and follow deploy instructions with thirdweb.
6. **Connect MetaMask or WalletConnect**  
   - Try issuing or verifying a credential!

---

## Contributing

We welcome PRs for:
- More credential templates (work, health, finance, etc.)
- Optimizing ZK circuits (faster proof generation)
- More AI skill matching & search features
- UI design improvements

Open an issue or PR for feedback!

---

## License

MIT License

---

## Authors
- [Bhavya Pratap Singh Tomar] (AI Full-Stack Developer)


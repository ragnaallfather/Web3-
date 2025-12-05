Web3- Trading Scaffold

This repository contains an initial scaffold for a trading web + mobile app (demo/testnet + live) supporting multiple exchanges (Bybit, Binance, OKX) via an adapter layer.

Branches:
- feature/trading-scaffold: initial scaffold pushed by Copilot

What's included (minimal MVP):
- frontend/: Next.js + TypeScript + Tailwind (market list, basic trading panel)
- backend/: Node.js + Express + TypeScript (exchange adapter skeleton, auth skeleton)
- mobile/: Expo React Native scaffold (placeholder, shares types)
- docker-compose.yml: dev services (postgres)

Run locally (dev):
- See frontend/README.md and backend/README.md for detailed instructions.

Notes:
- This is a minimal scaffold intended to be extended. It wires testnet/demo flows and provides an adapter pattern to add exchanges.
- Do NOT use the live trading features until API-key encryption and security measures are implemented.
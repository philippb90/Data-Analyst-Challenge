# BOB Gateway User Retention Analysis

## Overview

This web application analyzes user retention within the BOB Gateway cross-chain swap protocol. The system examines user behavior patterns, identifies friction points in the user journey, and provides actionable recommendations to improve retention rates.

## Features

### User Journey Analysis

- Tracks the full user path from BTC deposit to asset reception
- Identifies key friction points in the swap process
- Visualizes drop-off rates at each step of the journey

### Behavior & Retention Metrics

- Measures time-to-second interaction
- Analyzes swap frequency per user
- Tracks engagement across different assets and strategies

### Actionable Recommendations

- Provides data-driven UX/UI enhancement suggestions
- Recommends incentive mechanisms to boost retention
- Suggests strategic improvements based on user behavior patterns

### Measurement & KPIs

- Defines and tracks key performance indicators for user retention
- Provides tools to measure the impact of implemented changes

## Project Structure

This project is organized as a monorepo with separate frontend and backend packages:

```
bob-gateway-retention-analysis/
├── frontend/         # React-based analytics dashboard
├── backend/          # Node.js API for data processing and analysis
├── package.json      # Root workspace configuration
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Access to BOB Gateway blockchain data (RPC endpoint or API key)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/philippb90/Data-Analyst-Challenge.git
cd Data-Analyst-Challenge
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the backend directory
   - Add required API keys and endpoints (see `.env.example` for reference)

### Development

Start both frontend and backend in development mode:

```bash
npm run dev
```

Or run them separately:

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

### Building for Production

```bash
npm run build
```

## Data Sources

The application analyzes on-chain transaction data from the BOB Gateway protocol, focusing on:

- BTC deposits
- Asset issuance transactions
- User interaction patterns
- Transaction completion rates

## Target Audience

- BOB Gateway Team: For protocol improvement insights
- Liquidity Providers: To understand flow dynamics
- Partners (Wallets, Aggregators): To enhance user experience
- End Users: Benefiting from improved UX based on analysis

## License

ISC
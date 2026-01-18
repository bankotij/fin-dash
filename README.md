# Fin-Dash 💰

A modern, full-featured financial dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides an intuitive interface for managing finances, viewing credit cards, tracking transactions, analyzing expenses, and much more.

## Features

### 📊 Dashboard Overview
- Comprehensive view of financial data at a glance
- Credit card carousel with gradient styling
- Recent transactions list
- Weekly activity bar chart (withdrawals vs deposits)
- Expense statistics pie chart
- Balance history line chart with gradient fill
- Quick transfer widget

### 💳 Transactions
- Full transaction history with search
- Filter by All/Income/Expense
- Summary cards: Total Balance, Income, Expenses
- Color-coded transaction types

### 🏦 Accounts
- Net Worth, Total Assets, Total Liabilities overview
- Multiple account types: Checking, Savings, Credit
- Account trends with performance indicators
- Add new accounts functionality

### 📈 Investments
- Portfolio value with daily P&L tracking
- Holdings list with stock/ETF/crypto/bond types
- Asset allocation pie chart
- Best performer highlights

### 💳 Cards
- Credit/debit card management
- Show/hide card number toggle
- Card actions: Lock, Unlock, Freeze, Cancel
- Card settings: Online Payments, ATM Withdrawals, International Transactions

### 🏠 Loans
- Total debt overview with monthly payments
- Active loans with progress tracking (Mortgage, Auto, Student)
- Quick actions: Make Payment, Calculator, Schedule
- Upcoming payments calendar

### 🛠️ Services
- Active financial services management
- Available services to activate
- Coming soon services preview
- Categories: Card Services, Bank Transfers, Quick Pay, Bill Pay, and more

### 👑 Privileges
- Membership tier system (Silver, Gold, Platinum)
- Points balance and redemption
- Category filters: Travel, Dining, Shopping, Entertainment
- Locked/unlocked privileges based on tier

### ⚙️ Settings
- **Edit Profile**: Personal information, avatar upload
- **Preferences**: Currency, Time Zone, Notifications
- **Security**: Two-Factor Authentication, Password change, Session management

### 🎨 UI/UX
- Responsive design with mobile-friendly collapsible sidebar
- Skeleton loading states for all data-fetching components
- Smooth transitions and hover effects
- Consistent card-based design system

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| TypeScript | Type Safety |
| Vite 6 | Build Tool & Dev Server |
| Tailwind CSS 4 | Styling |
| React Router DOM 7 | Client-side Routing |
| Chart.js + react-chartjs-2 | Data Visualization |
| Axios | HTTP Client |
| Lucide React | Icon Library |
| Radix UI | Accessible Tab Components |
| vite-plugin-mock-server | Mock API Server |

## Project Structure

```
fin-dash/
├── src/
│   ├── components/
│   │   ├── Card/
│   │   │   └── CardCarousel.tsx        # Credit card display carousel
│   │   ├── Charts/
│   │   │   ├── ExpenseStatistics.tsx   # Pie chart for expense breakdown
│   │   │   ├── RecentTransactions.tsx  # Transaction list component
│   │   │   └── WeeklyExpenseChart.tsx  # Weekly activity bar chart
│   │   ├── common/
│   │   │   ├── Alert.tsx               # Success/Error alert component
│   │   │   ├── Form/
│   │   │   │   ├── AvatarUpload.tsx    # Profile image uploader
│   │   │   │   └── FormField.tsx       # Reusable form field wrapper
│   │   │   ├── Loaders/
│   │   │   │   └── Loader.tsx          # Various loading state components
│   │   │   └── Logos/
│   │   │       └── SoarTask.tsx        # App logo component
│   │   ├── Containers/
│   │   │   ├── BaseLayoutCard.tsx      # Card wrapper with consistent styling
│   │   │   └── Layout.tsx              # Main dashboard grid layout
│   │   ├── navigation/
│   │   │   ├── Header.tsx              # Top header with search & actions
│   │   │   ├── LinkWithIcon.tsx        # Sidebar navigation link
│   │   │   ├── SearchInput.tsx         # Search input component
│   │   │   └── Sidebar.tsx             # Main navigation sidebar
│   │   ├── pages/
│   │   │   ├── Transactions.tsx        # Transactions history page
│   │   │   ├── Accounts.tsx            # Bank accounts management
│   │   │   ├── Investments.tsx         # Investment portfolio
│   │   │   ├── Cards.tsx               # Card management
│   │   │   ├── Loans.tsx               # Loan management
│   │   │   ├── Services.tsx            # Financial services
│   │   │   └── Privileges.tsx          # User privileges & rewards
│   │   ├── BalanceHistory.tsx          # Balance line chart component
│   │   ├── Content.tsx                 # Page content wrapper
│   │   ├── QuickTransfer.tsx           # Money transfer widget
│   │   └── Settings.tsx                # User settings page
│   ├── utils/
│   │   ├── context/
│   │   │   └── AppProvider.tsx         # Global app state context
│   │   └── mock/
│   │       └── mockData.ts             # Sample data & API base URL
│   ├── App.tsx                         # Main app with routing
│   ├── main.tsx                        # React entry point
│   └── index.css                       # Global styles & Tailwind imports
├── vite-plugin-mock-server/
│   └── example/
│       └── mock/
│           ├── es.mock.ts              # API endpoint definitions
│           └── files/
│               └── response.data.ts    # Mock response data
├── public/
│   └── what.jpg                        # Default avatar image
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm 9+

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fin-dash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Mock API Server** (Terminal 1)
   ```bash
   npm run mocks
   ```
   This starts the mock server on `http://localhost:3000`

4. **Start the Development Server** (Terminal 2)
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run mocks` | Start mock API server |

## API Endpoints

The mock server provides the following endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/getCards` | GET | Returns list of credit cards |
| `/api/getTransactions` | GET | Returns recent transactions |
| `/api/getWeeklyExpense` | GET | Returns weekly withdraw/deposit data |

### Sample Response: `/api/getCards`
```json
{
  "body": {
    "cards": [
      {
        "balance": "$5,756",
        "cardHolder": "Eddy Cusuma",
        "validThru": "12/22",
        "cardNumber": "3778 **** **** 1234",
        "gradientFrom": "from-gray-500",
        "gradientTo": "to-black"
      }
    ]
  }
}
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Layout` | Main dashboard overview |
| `/transactions` | `Transactions` | Transaction history with filters |
| `/accounts` | `Accounts` | Bank accounts management |
| `/investments` | `Investments` | Investment portfolio & holdings |
| `/cards` | `Cards` | Credit/debit card management |
| `/loans` | `Loans` | Loan tracking & payments |
| `/services` | `Services` | Financial services catalog |
| `/privileges` | `Privileges` | Membership rewards & perks |
| `/settings` | `Settings` | User profile & preferences |

## Component Highlights

### Loading States
The app features custom skeleton loaders for:
- **FinanceCardLoader** - Credit card placeholder with shimmer
- **CardLoader** - Generic card loading state
- **ChartLoader** - Bar/Pie chart loading placeholder

### Context API
Global state is managed via React Context:
- `isSidebarOpen` - Controls sidebar visibility on mobile
- `activeRoute` - Tracks current navigation route
- `toggleSidebar` - Function to toggle sidebar state

### Charts
Built with Chart.js and react-chartjs-2:
- **Bar Chart** - Weekly activity (withdrawals vs deposits)
- **Pie Chart** - Expense breakdown by category / Asset allocation
- **Line Chart** - Balance history with gradient fill

## Styling

- **Tailwind CSS 4** with custom utilities
- **Custom scrollbar** styling for overflow areas
- **Color scheme**: Light gray background (`#e6eff5`) with navy text (`#343c6a`)
- **Card design**: White backgrounds with subtle shadows and rounded corners
- **Gradient cards**: Multi-color gradients for credit cards and feature highlights

## License

This project is for demonstration purposes.

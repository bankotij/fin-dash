# Fin Dash

## 1. Project Overview
Fin Dash is a client-only financial dashboard UI built with React and Vite. It
demonstrates dashboard layouts, charts, and navigation using mock data and does
not connect to a real backend.

Intentionally out of scope:
- Data ingestion, authentication, or persistence.
- Real-time updates or multi-user collaboration.

## 2. Architecture & Data Flow
Components:
- `src/App.tsx`: route definitions and top-level layout.
- `src/components`: pages, charts, and shared UI components.
- `src/utils/context/AppProvider.tsx`: sidebar and navigation state.
- `src/utils/mock/mockData.ts`: local mock data.

ASCII diagram:
```
Browser
  |
  v
React Router -> Page Components -> Charts/Widgets
  |
  v
Mock data + local UI state
```

Primary execution path:
1. React Router selects a page component.
2. `Content` renders the layout and active page.
3. Page components read mock data and render charts/cards.
4. Sidebar state is stored in a small React context provider.

## 3. Design Principles
1. **UI-first composition** → pages are built from reusable components.
2. **Local state only** → no backend, no persistence, no network IO.
3. **Fail-soft UI** → error boundary prevents a single component from crashing the app.

## 4. Critical Workflows
**Navigating between dashboard sections**
1. User selects a route in the sidebar.
2. Router swaps the page component.
3. The page renders using in-memory mock data.

State and recovery:
- State is in-memory only. Refreshing the page resets the UI.
- No retries or persistence are implemented.

## 5. Failure Modes & Guarantees
- **Component render error** → error boundary renders a fallback screen.
- **Data mismatch** → UI renders whatever is in mock data; no validation.

Guarantees:
- Best-effort UI rendering; no persistence guarantees.

## 6. Testing Strategy
Tested:
- No automated tests are included.

Not tested:
- Component rendering, routing, or data formatting.

Rationale: this repo is a UI mock with static data and no backend contracts.

## 7. Tradeoffs & Alternatives
- **Mock data vs API integration**: keeps the UI fast to iterate but limits realism.
- **Global state vs context**: a minimal provider keeps navigation state explicit.

## 8. Operational Considerations
- Logging: console logging only (client-side).
- Metrics: none.
- Debugging: use browser dev tools; state resets on refresh.

## 9. Running Locally
```
npm install
npm run dev
```

## 10. Scope & Limitations
- No backend or persistence layer.
- No auth, roles, or data integrity checks.
- UI behavior is driven by local mock data only.

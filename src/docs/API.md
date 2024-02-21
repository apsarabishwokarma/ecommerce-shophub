# API & Data Flow Guide — ShopHub

This document summarizes how data is fetched, posted, and persisted in this project, and points to the main files to inspect when you need to modify or extend data flows.

## Overview

- The app uses Next.js (app router). Most data fetching for pages is done in server components using the `fetch` API.
- There is no dedicated backend in this repo; external public APIs are used (Fake Store API). Client-side state and persistence are implemented with React Context and `localStorage`.

## External APIs used

- Fake Store API (used for product data):
  - GET all products: `https://fakestoreapi.com/products`
  - GET single product: `https://fakestoreapi.com/products/:id`
  - Categories and category-filter endpoints are also available from the same host.

Examples of where this is used in the code:

- Product details (server-side fetch): [src/app/(pages)/product/[id]/page.tsx](<src/app/(pages)/product/[id]/page.tsx#L1>)

## Server-side fetch (current pattern)

- Pages that need product data perform server-side fetches directly inside async server components. Example flow:
  1. Component page is an async server component.
  2. It calls `await fetch(url)`.
  3. JSON is parsed and passed to child components as props.

Minimal example (GET) — follow the pattern in the project:

```js
// server component
const res = await fetch("https://fakestoreapi.com/products/123");
const product = await res.json();
return <ProductDetails product={product} />;
```

Notes:

- Because these fetches happen in server components, they run on the server at request time (unless cached). You can add `{ next: { revalidate: 60 } }` as a fetch option to enable ISR.

## Client-side state & persistence

- Cart state is implemented with a React Context provider and persisted to `localStorage`.
  - Context provider: [src/components/cart/cart-context.tsx](src/components/cart/cart-context.tsx#L1)
  - Local storage helpers: [src/components/cart/localstorage.ts](src/components/cart/localstorage.ts#L1)

Key points:

- `CartProvider` manages `cartItems` and writes them to `localStorage` on change.
- Use the exported `useCart()` hook to access cart operations (`addCartItem`, `removeItemFromCart`, etc.).

## UI state (search, etc.)

- The search query is stored in a small client context: [src/components/header/search-context.tsx](src/components/header/search-context.tsx#L1)
- Other UI-only state tends to use client components + React state.

## Forms and POSTs

- At present, signup/login pages use client-side form handlers but do not POST to a backend (they redirect locally). See example: [src/app/(auth)/signup/page.tsx](<src/app/(auth)/signup/page.tsx#L1>)

If you need to add POST endpoints, two common approaches:

1. Next.js App Router API route (server route) — create `src/app/api/.../route.ts` and export POST handler.
   - Example minimal handler:

```ts
// src/app/api/orders/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // validate + save order to DB or forward to external service
  return NextResponse.json({ ok: true }, { status: 201 });
}
```

2. Call external APIs directly from server components (useful for third-party services) or from client components with `fetch` (send JSON, include credentials or tokens as needed).

Client-side POST example (from a client component):

```js
await fetch("/api/orders", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ items: cartItems, total }),
});
```

## Authentication & tokens

- There is no authentication implementation in this repo yet. If you add auth, prefer storing tokens in httpOnly cookies (handled on server routes) and calling server-side fetches from server components to access protected APIs.

## Where to look / grep hints

- Search the codebase for `fetch(` to find where network calls are made.
- Inspect `CartProvider` for cart logic and `localStorage` usage.

Useful file references

- `src/app/(pages)/product/[id]/page.tsx` — product GET fetch
- `src/components/product/product-details.tsx` — product UI (props from fetch)
- `src/components/cart/cart-context.tsx` — cart context and APIs
- `src/components/cart/localstorage.ts` — localStorage helpers
- `src/components/header/search-context.tsx` — search context
- `src/lib/providers.tsx` — top-level providers wiring (CartProvider)
- `src/app/(auth)/signup/page.tsx` — example client-side form (no POST)

## Suggested next steps (if you want endpoints)

- Add an API route at `src/app/api/orders/route.ts` to accept order POSTs.
- Add server-side validation and a persistence layer (DB) or forward orders to a service.
- Implement auth if you need protected endpoints; use server-side cookies and server fetches.

If you want, I can:

- Create a sample `src/app/api/orders/route.ts` POST route and wire a client call from the checkout page.
- Or run a quick repo search and insert direct links to every `fetch(` usage.

---

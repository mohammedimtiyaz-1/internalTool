# E-Commerce Admin Dashboard

A simple Next.js dashboard for e-commerce admins, featuring authentication, revenue overview, product list, and a 7-day sales chart.

## Features

- **Login authentication** with short-lived token (2 minutes)
- **Protected dashboard** route using Next.js middleware
- **Revenue overview** (mocked)
- **Product list** (mocked)
- **Sales chart** (last 7 days, mocked, using Chart.js)
- **Logout** button
- **Tailwind CSS** styling

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Usage

- Go to `/login` and enter your name to log in.
- After login, you’ll be redirected to `/dashboard`.
- The dashboard is protected; if your token expires (after 2 minutes), you’ll be redirected to `/login`.
- Use the Logout button to end your session.

## Tech Stack

- Next.js (App Router)
- React (Server & Client Components)
- Tailwind CSS
- Chart.js (via react-chartjs-2)

---

**This project uses only mocked data and is for demonstration
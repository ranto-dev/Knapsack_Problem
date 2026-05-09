<div align="center">

  <img src="banner.png" alt="Knapsack Banner" width="100%" />

  <h2>🎒 Knapsack Problem Solver : Interactive Learning Project for the 0/1 Knapsack Algorithm</h2>

  <p>
    An interactive and educational implementation of the <b>0/1 Knapsack Problem</b>  
    built with <b>React</b> and <b>TypeScript</b>.
  </p>

</div>

<div flex justify-center gap-2>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br />

## 💡 The Vision

In a world of finite resources, **optimization isn't just a choice—it's a necessity.**

**Knapsack Lab** is an immersive environment designed to bridge the gap between abstract mathematical theory and tangible digital experience. By leveraging **Dynamic Programming**, we transform a classic NP-complete challenge into a fluid, visual journey. Whether you are an engineer fine-tuning your logic or a student discovering the power of DP, this tool is built to provide clarity at scale.

## ✨ Key Features

- **Mathematical Precision** – Implements the 0/1 Knapsack algorithm with a focus on time complexity optimization $O(nW)$.
- **Reactive Architecture** – Real-time recalculation as you toggle weights and values. Experience zero-latency optimization.
- **Premium UX/UI** – A dark-mode, high-fidelity interface built with **Framer Motion** for butter-smooth transitions.
- **Visual Intelligence** – (Roadmap) Future integration of real-time DP table heatmaps to visualize how the "Bellman Equation" solves subproblems.

## 🛠 Tech Stack

Our stack is chosen for type-safety, performance, and maintainability:

- **Runtime:** [React 18](https://reactjs.org/) with Functional Components & Hooks.
- **Logic:** [TypeScript](https://www.typescriptlang.org/) for robust, self-documenting algorithmic code.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, scalable design system.
- **Motion:** [Framer Motion](https://www.framer.com/motion/) for declarative, high-performance animations.

## 🚀 Quick Start

Clone the repository and enter the local environment:

```bash
git clone git@github.com:ranto-dev/Knapsack_Problem.git
cd Knapsack_Problem
```

Spin up the local development server:

```bash
# Install dependencies with precision
npm install

# Ignite the dev environment
npm run dev

```

## 📚 Engineering Deep Dive

The core solver utilizes a bottom-up Dynamic Programming approach.

> **The Goal:** Maximize $\sum_{i=1}^{n} v_i x_i$ subject to $\sum_{i=1}^{n} w_i x_i \leq W$, where $x_i \in \{0, 1\}$.

Explore our internal documentation for a breakdown of the recursive formula and state space optimization:
👉 [Read the Technical Docs](https://www.google.com/search?q=/docs/docs.md)

## 🗺 Roadmap

- [x] **Core Engine:** 0/1 Knapsack DP Implementation.
- [x] **Modern UI:** Responsive Dashboard & Dark Mode.
- [ ] **Visual Matrix:** Real-time step-by-step DP table visualization.
- [ ] **Analytics:** Compare DP vs. Greedy approach performance.
- [ ] **Export:** Download datasets as JSON/CSV for external analysis.
- [ ] **Live Demo:** Deploying to Vercel Edge Network.

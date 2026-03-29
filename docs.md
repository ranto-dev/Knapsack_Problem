# 🎒 The Knapsack Problem

## What’s the Knapsack Problem?

Imagine you’re going on an adventure and you have a **bag (knapsack)** that can only carry a limited weight.
You have several **items** (like food, tools, etc.) — each with a certain **weight** and **value**.

**Your goal?**
👉 Choose the items that give you the most total value without making your bag too heavy.

## Example

Let’s say you have:

| Item       | Weight | Value |
| ---------- | ------ | ----- |
| 🍎 Apple   | 1 kg   | 2     |
| 🧀 Cheese  | 3 kg   | 4     |
| 💎 Diamond | 4 kg   | 10    |
| 🪓 Axe     | 2 kg   | 6     |

And your bag can carry **5 kg** in total.

So what should you take?
You want the _highest total value_, but you can’t go over 5 kg.

✅ **Best choice:**

- Take the **Axe (2 kg)** and **Diamond (4 kg)** - wait, that’s 6 kg too heavy.
- So maybe take **Apple (1 kg)** + **Diamond (4 kg)** = **5 kg**, total value **12**.

Boom 💥 - that’s the **optimal solution**.

## How It Works

The **0/1 Knapsack problem** is solved with **Dynamic Programming**.
That means we build a table to remember previous results instead of recalculating everything.

### Step-by-Step:

1. We create a table `dp[i][w]` where:
   - `i` = number of items considered
   - `w` = current weight limit
   - `dp[i][w]` = max value possible with `i` items and weight `w`

2. We fill this table like this:

   ```
   if weight[i-1] <= w:
       dp[i][w] = max(
         dp[i-1][w],                     // skip item
         dp[i-1][w - weight[i-1]] + value[i-1]  // take item
       )
   else:
       dp[i][w] = dp[i-1][w]             // can’t take it
   ```

3. After the table is filled, `dp[n][capacity]` contains the **maximum total value** possible.

## Why This Problem Matters

The knapsack problem is **a foundation of optimization** and **computer algorithms**.
You’ll find it in:

- 🎮 Game inventory systems
- 💵 Financial portfolio optimization
- 🚚 Resource allocation and logistics
- 🧬 Machine learning (feature selection, etc.)

It’s simple to learn, but powerful in the real world 🌍.

## Official & Useful References

Here are some cool, official, and helpful resources to dig deeper:

- 🔗 **GeeksforGeeks:**
  [https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/)

- 🔗 **Wikipedia (Knapsack Problem):**
  [https://en.wikipedia.org/wiki/Knapsack_problem](https://en.wikipedia.org/wiki/Knapsack_problem)

- 🔗 **Khan Academy (Dynamic Programming intro):**
  [https://www.khanacademy.org/computing/computer-science/algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)

- 🔗 **MIT OpenCourseWare — Algorithms:**
  [https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)

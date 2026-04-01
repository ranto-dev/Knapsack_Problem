import React, { useState, useEffect } from "react";
import Card from "../Card";

interface Item {
  weight: number;
  value: number;
}

const Knapsack: React.FC = () => {
  const [itemCount, setItemCount] = useState<number>(2);
  const [capacity, setCapacity] = useState<number>(1);
  const [items, setItems] = useState<Item[]>([]);
  const [result, setResult] = useState<{
    maxValue: number;
    selected: number[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    generateItems(2);
  }, []);

  const generateItems = (count: number) => {
    const newItems = Array.from({ length: count }, () => ({
      weight: 1,
      value: 1,
    }));
    setItems(newItems);
  };

  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: number,
  ) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const solveKnapsack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const n = items.length;
      const dp = Array.from({ length: n + 1 }, () =>
        Array(capacity + 1).fill(0),
      );

      for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
          if (items[i - 1].weight <= w) {
            dp[i][w] = Math.max(
              dp[i - 1][w],
              dp[i - 1][w - items[i - 1].weight] + items[i - 1].value,
            );
          } else {
            dp[i][w] = dp[i - 1][w];
          }
        }
      }

      let w = capacity;
      const selected: number[] = [];
      for (let i = n; i > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
          selected.push(i);
          w -= items[i - 1].weight;
        }
      }

      setResult({
        maxValue: dp[n][capacity],
        selected: selected.reverse(),
      });

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="p-4">
      <Card title={"Knapsack Problem Solver"}>
        <form onSubmit={solveKnapsack} className="mt-6 space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">
              Bag Capacity :
            </label>
            <input
              type="number"
              min={1}
              required
              value={capacity}
              onChange={(e) => setCapacity(parseInt(e.target.value) || 0)}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">
              Number of Items :
            </label>
            <input
              type="number"
              min={1}
              required
              value={itemCount}
              onChange={(e) => {
                const count = parseInt(e.target.value) || 0;
                setItemCount(count);
                generateItems(count);
              }}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
          </div>

          {items.map((item, i) => (
            <div key={i} className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label
                  htmlFor={`weight-${i}`}
                  className="block font-semibold text-gray-700"
                >
                  Object {i + 1} – Weight :
                </label>
                <input
                  id={`weight-${i}`}
                  type="number"
                  min={1}
                  required
                  value={item.weight}
                  onChange={(e) =>
                    handleItemChange(i, "weight", parseInt(e.target.value) || 0)
                  }
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
              </div>

              <div>
                <label
                  htmlFor={`value-${i}`}
                  className="block font-semibold text-gray-700"
                >
                  Value :
                </label>
                <input
                  id={`value-${i}`}
                  type="number"
                  min={1}
                  required
                  value={item.value}
                  onChange={(e) =>
                    handleItemChange(i, "value", parseInt(e.target.value) || 0)
                  }
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
              </div>
            </div>
          ))}

          {items.length > 0 && (
            <button
              type="submit"
              className="mt-6 inline-block px-6 py-2 bg-blue-700 text-white rounded-lg hover:scale-110 ease-in transition"
            >
              Solve
            </button>
          )}
        </form>
      </Card>

      <div className="mt-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-blue-700 font-medium">Calculating...</p>
          </div>
        ) : (
          result && (
            <Card title={"Result"}>
              <p className="mt-4">
                Max Value :{" "}
                <strong className="text-green-600 font-semibold">
                  {result.maxValue}
                </strong>
              </p>
              <p className="mt-2">
                Selected Items :{" "}
                <span className="text-blue-700 font-semibold">
                  {result.selected.length > 0
                    ? result.selected.map((i) => `Object ${i}`).join(", ")
                    : "None"}
                </span>
              </p>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default Knapsack;

import React, { useState } from "react";

interface Item {
  weight: number;
  value: number;
}

const Knapsack: React.FC = () => {
  const [itemCount, setItemCount] = useState<number>(0);
  const [capacity, setCapacity] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([]);
  const [result, setResult] = useState<{
    maxValue: number;
    selected: number[];
  } | null>(null);

  // Génère les champs en fonction du nombre d'objets
  const generateItems = (count: number) => {
    const newItems = Array.from({ length: count }, () => ({
      weight: 1,
      value: 1,
    }));
    setItems(newItems);
  };

  // Met à jour le poids ou la valeur d’un objet
  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: number
  ) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  // Résolution du problème du sac à dos (programmation dynamique)
  const solveKnapsack = (e: React.FormEvent) => {
    e.preventDefault();

    const n = items.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (items[i - 1].weight <= w) {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            dp[i - 1][w - items[i - 1].weight] + items[i - 1].value
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    // Extraction des objets sélectionnés
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
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-950">
        Get started
      </h1>

      <form onSubmit={solveKnapsack} className="mt-6 space-y-4">
        {/* Capacité */}
        <div>
          <label className="block font-semibold text-blue-950">
            Capacité du sac :
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

        {/* Nombre d’objets */}
        <div>
          <label className="block font-semibold text-blue-950">
            Nombre d'objets :
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

        {/* Liste dynamique des objets */}
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <label
                htmlFor={`weight-${i}`}
                className="block font-semibold text-blue-950"
              >
                Objet {i + 1} - Poids :
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
                className="block font-semibold text-blue-950"
              >
                Valeur :
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
            className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Résoudre
          </button>
        )}
      </form>

      {/* Résultat */}
      {result && (
        <div className="mt-8 p-4 border-t border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900">Résultat</h2>
          <p className="mt-4">
            Valeur maximale :{" "}
            <strong className="text-green-600">{result.maxValue}</strong>
          </p>
          <p className="mt-2">
            Objets sélectionnés :{" "}
            {result.selected.length > 0
              ? result.selected.map((i) => `Objet ${i}`).join(", ")
              : "Aucun"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Knapsack;

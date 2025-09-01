function generateItems() {
  const count = parseInt(document.getElementById("item-count").value, 10);
  const container = document.getElementById("items-input");
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    container.innerHTML += `
                    <div class="grid grid-cols-2 gap-6 mt-4">
                        <div>
                            <label for="weight-${i}" class="block font-semibold text-gray-700">Objet ${
      i + 1
    } - Poids :</label>
                            <input type="number" min="1" required id="weight-${i}"
                                class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <label for="value-${i}" class="block font-semibold text-gray-700">Valeur :</label>
                            <input type="number" min="1" required id="value-${i}"
                                class="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                    </div>
                `;
  }
  document.getElementById("solve-btn").style.display = "inline-block";
}

document
  .getElementById("knapsack-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const capacity = parseInt(document.getElementById("capacity").value, 10);
    const count = parseInt(document.getElementById("item-count").value, 10);
    let weights = [],
      values = [];
    for (let i = 0; i < count; i++) {
      weights.push(parseInt(document.getElementById(`weight-${i}`).value, 10));
      values.push(parseInt(document.getElementById(`value-${i}`).value, 10));
    }

    // Knapsack problem resolution (dynamic programming)
    let dp = Array(count + 1)
      .fill()
      .map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= count; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] <= w) {
          dp[i][w] = Math.max(
            dp[i - 1][w],
            dp[i - 1][w - weights[i - 1]] + values[i - 1]
          );
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    // Extracting selected items
    let w = capacity,
      selected = [];
    for (let i = count; i > 0; i--) {
      if (dp[i][w] !== dp[i - 1][w]) {
        selected.push(i);
        w -= weights[i - 1];
      }
    }
    selected.reverse();

    // Displaying result
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
                <h2 class="text-2xl font-semibold text-gray-900">Résultat</h2>
                <p class="mt-4">Valeur maximale : <strong class="text-green-600">${
                  dp[count][capacity]
                }</strong></p>
                <p class="mt-2">Objets sélectionnés : ${
                  selected.length > 0
                    ? selected.map((i) => `Objet ${i}`).join(", ")
                    : "Aucun"
                }</p>
            `;
  });

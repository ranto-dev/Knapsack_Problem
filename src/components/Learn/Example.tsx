import Card from "../Card";
import departingImage from "../../assets/departing.png";

const Example = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row-reverse justify-center items-center sm:items-start md:items-start lg:items-start xl:items-start gap-2 my-4 p-4 container mx-auto">
      <div className="w-full">
        <Card title={"Example 📊"}>
          <p className="text-gray-700 mb-4">
            Let’s say your bag can carry <strong>5 kg</strong> and you have:
          </p>
          <table className="w-full text-left border-collapse border border-gray-200 mb-4">
            <thead>
              <tr className="bg-indigo-100">
                <th className="border p-2">Item</th>
                <th className="border p-2">Weight</th>
                <th className="border p-2">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">🍎 Apple</td>
                <td className="border p-2">1 kg</td>
                <td className="border p-2">2</td>
              </tr>
              <tr>
                <td className="border p-2">🧀 Cheese</td>
                <td className="border p-2">3 kg</td>
                <td className="border p-2">4</td>
              </tr>
              <tr>
                <td className="border p-2">💎 Diamond</td>
                <td className="border p-2">4 kg</td>
                <td className="border p-2">10</td>
              </tr>
              <tr>
                <td className="border p-2">🪓 Axe</td>
                <td className="border p-2">2 kg</td>
                <td className="border p-2">6</td>
              </tr>
            </tbody>
          </table>

          <p className="text-gray-700">
            ✅ Best choice: <strong>Apple (1 kg)</strong> +{" "}
            <strong>Diamond (4 kg)</strong> → Total 5 kg, total value{" "}
            <strong>12</strong> 💰
          </p>
        </Card>
      </div>
      <div className="w-full bg-amber-200 flex justify-center items-center">
        <img
          className="w-full h-full"
          src={departingImage}
          alt="the best example image of knapsack problem"
        />
      </div>
    </div>
  );
};

export default Example;

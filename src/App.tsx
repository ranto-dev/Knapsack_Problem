import Footer from "./components/footer";
import Header from "./components/header";
import Knapsack from "./components/Knapsack";
import LearnKnapsack from "./components/Learn";

const App = () => {
  return (
    <>
      <Header />
      <LearnKnapsack />
      <div
        id="try-it"
        className="flex justify-center items-center container m-auto"
      >
        <Knapsack />
      </div>
      <Footer />
    </>
  );
};

export default App;

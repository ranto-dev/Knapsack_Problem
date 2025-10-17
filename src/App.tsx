import AboutKnapsack from "./components/About";
import Header from "./components/header";
import Knapsack from "./components/Knapsack";
import HowItWorks from "./components/Knapsack/HowItWorks";
import SomeLinks from "./components/Knapsack/SomeLinks";

const App = () => {
  return (
    <>
      <Header />
      <AboutKnapsack />
      <div id="try-it" className="grid row lg:grid-cols-2 gap-4 p-8">
        <div>
          <HowItWorks />
          <SomeLinks />
        </div>
        <Knapsack />
      </div>
    </>
  );
};

export default App;

import AboutKnapsack from "./components/About";
import Footer from "./components/footer";
import Header from "./components/header";
import Knapsack from "./components/Knapsack";
import HowItWorks from "./components/Knapsack/HowItWorks";

const App = () => {
  return (
    <>
      <Header />
      <AboutKnapsack />
      <div id="try-it" className="grid row lg:grid-cols-2 gap-4 p-8">
        <div>
          <HowItWorks />
        </div>
        <Knapsack />
      </div>
      <Footer />
    </>
  );
};

export default App;

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
      <div
        id="try-it"
        className="grid lg:grid-cols-2 gap-8 lg:gap-0 p-10 container m-auto"
      >
        <HowItWorks />
        <Knapsack />
      </div>
      <Footer />
    </>
  );
};

export default App;

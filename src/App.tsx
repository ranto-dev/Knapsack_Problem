import Header from "./components/header";
import Knapsack from "./components/Knapsack";

const App = () => {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-2 gap-4 p-8">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          corrupti molestias vel voluptas assumenda labore a ex ratione dicta
          sapiente fugit minima eligendi deserunt veniam facere, mollitia
          provident cupiditate ea.
        </div>
        <Knapsack />
      </div>
    </>
  );
};

export default App;

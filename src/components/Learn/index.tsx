import React from "react";
import Example from "./Example";
import AboutComponent from "./About";

const LearnKnapsack: React.FC = () => {
  return (
    <section className="w-full">
      <AboutComponent />
      <Example />
    </section>
  );
};

export default LearnKnapsack;

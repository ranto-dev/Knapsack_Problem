import { motion } from "framer-motion";
import Card from "../Card";
import Links from "./Links";
import TravelersImage from "../../assets/travelers.png";

const AboutComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start md:items-start lg:items-start xl:items-start gap-2 my-4 container mx-auto">
      <div className="w-full">
        <div>
          <motion.h1
            className="text-xl sm:text-lg md:text-xl text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Knapsack Problem Algorithm
          </motion.h1>
          <motion.p
            className="text-center text-xs m-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            A friendly guide for beginners who want to understand one of the
            most famous optimization problems in computer science
          </motion.p>
        </div>

        <Card title="What’s the Knapsack Problem?">
          Imagine you're packing a backpack for an adventure. Your bag can only
          hold a limited weight. You have several items — each with a
          <strong> weight </strong> and a <strong> value</strong>. Your goal is
          simple:
          <span className="text-blue-600">
            {" "}
            pick the items that give you the highest total value without
            exceeding your bag’s limit!
          </span>{" "}
        </Card>

        <Card title={"Official Resources 🔗"}>
          <Links />
        </Card>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={TravelersImage} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AboutComponent;

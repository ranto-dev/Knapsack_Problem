const Links = () => {
  return (
    <ul className="list-disc ml-6 space-y-2 text-blue-700">
      <li>
        <a
          href="https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GeeksforGeeks – 0/1 Knapsack Problem
        </a>
      </li>
      <li>
        <a
          href="https://en.wikipedia.org/wiki/Knapsack_problem"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Wikipedia – Knapsack Problem
        </a>
      </li>
      <li>
        <a
          href="https://www.khanacademy.org/computing/computer-science/algorithms"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Khan Academy – Algorithms Intro
        </a>
      </li>
      <li>
        <a
          href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          MIT OpenCourseWare – Introduction to Algorithms
        </a>
      </li>
    </ul>
  );
};

export default Links;

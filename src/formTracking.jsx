import { useState } from "react";
import "./App.css";

export const formTracking = () => {
  const [data, setData] = useState({
    type: "Education Profile",
    data: [
      { question: "Who are you?", answer: "Student" },
      { question: "What is your area of interest?", answer: "Undergraduate" },
    ],
  });

  console.log(data);

  return data;
};

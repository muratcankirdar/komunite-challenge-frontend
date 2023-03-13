import React from "react";

interface ITitleProps {
  label: string;
}

const Title: React.FC<ITitleProps> = ({ label }) => {
  return (
    <h1 className="text-3xl font-bold text-gray-700 dark:text-blue-300">
      {label}
    </h1>
  );
}

export default Title;

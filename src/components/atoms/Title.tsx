import React from "react";

interface ITitleProps {
  label: string;
}
// 5px 9px 0px rgba(0, 0, 0, 0.15)

const Title: React.FC<ITitleProps> = ({ label }) => {
  return (
    <h1 className="text-3xl font-bold text-gray-700 dark:text-blue-300" style={{
      textShadow: '5px 9px 0px rgba(0, 0, 0, 0.15)'
    }}>
      {label}
    </h1>
  );
}

export default Title;

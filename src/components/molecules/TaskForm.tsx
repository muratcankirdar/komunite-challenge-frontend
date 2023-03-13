import React from "react";

interface ITaskFormProps {
  text: string;
  setText: (text: string) => void;
  addItem: () => void;
}

const TaskForm: React.FC<ITaskFormProps> = ({ text, setText, addItem  }) => {
  return (
    <div className="mb-10 flex items-center justify-center">
      <input
        id="item" type="text" placeholder="Buy Milk"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="shadow appearance-none border w-96 rounded py-2 px-3 text-gray-700 leading-tight
          focus:outline-none focus:shadow-outline"
      />

      <button onClick={addItem} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </div>
  )
}

export default TaskForm;

import React from "react";

interface ITaskItemProps {
  item: {
    id: number;
    text: string;
    completed: boolean;
  }
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
  editItem: (id: number, editText: string) => void;
}

const TaskItem: React.FC<ITaskItemProps> = ({item, removeItem, toggleItem, editItem}) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [editText, setEditText] = React.useState<string>(item.text);

  return (
    <div key={item.id} className="flex items-center justify-center mb-4">

        {edit ? (
          <input
            id="item" type="text" placeholder=""
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="shadow appearance-none border w-96 rounded py-2 px-3 text-gray-700 leading-tight
          focus:outline-none focus:shadow-outline"
          />
        ) : (
      <div
        className={`
        border-2 bg-white shadow-md rounded p-2 flex flex-col w-96 bg-gray-300 hover:cursor-pointer hover:border-blue-500
        ${item.completed ? 'bg-green-400 border-green-400' : 'bg-gray-300'}`
        }
        onClick={() => toggleItem(item.id)}
      >
        <p className="text-gray-700 text-base">
          {item.text}
        </p>
      </div>
        )}

      <button onClick={(e) => {
        e.stopPropagation();
        setEdit(!edit);
        if (edit) {
          editItem(item.id, editText);
        }
      }}
              className="ml-2 bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded border-2 border-blue-400 hover:border-blue-600"
      >
        Edit
      </button>

      {!edit && (
        <button onClick={(e) => {
          e.stopPropagation();
          removeItem(item.id);
        }}
                className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border-2 border-red-500 hover:border-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
          </svg>
        </button>
      )}
  </div>
  )
}
export default TaskItem;

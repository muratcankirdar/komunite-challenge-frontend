import { useState, useEffect } from "react";

// Components
import Title from "@/components/atoms/Title";
import TaskForm from "@/components/molecules/TaskForm";

import TaskItem from '@/components/molecules/TaskItem';

export interface IListItem {
  id: number;
  text: string;
  completed: boolean;
}

const HomeTemplate = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<IListItem[]>([]);

  const addItem = () => {
    if (!text) return;
    const updatedList = [...list, { text, id: generateId(), completed: false }];
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
    setText('');
  };

  const editItem = (id: number, editText: string) => {
    // set list with edited item id
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          text: editText
        }
      }
      return item;
    });

    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  const removeItem = (id: number) => {
    const updatedList = list.filter((item) => item.id !== id);
    localStorage.setItem('list', JSON.stringify(updatedList));
    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    // set List item with id toggle completed
    setList(list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }));
  };

  const generateId = () => {
    return Math.floor(Math.random() * 1000000);
  }

  // load list from local storage
  useEffect(() => {
    const list = localStorage.getItem('list');

    if (list) {
      setList(JSON.parse(list));
    }
  }, []);

  return (
    <div>
      <div className="bg-blue-400 mb-20">
        <div className="p-10 flex justify-center w-full">
          <Title label="Todo List" />
        </div>

        {/* Create TodoList organism */}
        <TaskForm text={text} setText={setText} addItem={addItem} />
      </div>
      {list.map((item: IListItem) => (
        <TaskItem key={item.id} item={item} removeItem={removeItem} toggleItem={toggleItem} editItem={editItem} />
      ))}
    </div>
  )
}

export default  HomeTemplate;

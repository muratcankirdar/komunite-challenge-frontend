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

    setList([...list, { text, id: generateId(), completed: false }]);
    setText('');
  };

  const removeItem = (id: number) => {
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

  useEffect(() => {
    // save list to local storage
    // check if list is not empty while saving
    if (list.length > 0) {
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list]);

  // load list from local storage
  useEffect(() => {
    const list = localStorage.getItem('list');

    if (list) {
      setList(JSON.parse(list));
    }
  }, []);

  return (
    <div>
      <div className="p-10 flex justify-center w-full">
        <Title label="Todo List" />
      </div>

      {/* Create TodoList organism */}
      <TaskForm text={text} setText={setText} addItem={addItem} />

      {list.map((item: IListItem) => (
        <TaskItem item={item} removeItem={removeItem} toggleItem={toggleItem} />
      ))}
    </div>
  )
}

export default  HomeTemplate;

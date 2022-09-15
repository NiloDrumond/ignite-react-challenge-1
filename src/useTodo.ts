import { useCallback, useState } from "react";
import { Task } from "./types";

export function useTodo() {
  const [tasks, setTasks] = useState<Task[]>([{
    done: false, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  }, {
    done: true, text: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  }])

  const addTask = useCallback((text: string) => {
    setTasks((prev) => [{ done: false, text }, ...prev])
  }, [])

  const toggleTask = useCallback((done: boolean, index: number) => {
    setTasks((prev) => prev.map((task, idx) => index === idx ? { ...task, done } : task))
  }, [])

  const deleteTask = useCallback((index: number) => {
    setTasks((prev) => prev.filter((_, idx) => idx !== index));
  }, [])

  return { tasks, addTask, toggleTask, deleteTask }
}

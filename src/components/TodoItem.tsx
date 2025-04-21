type TodoItemProps = {
    title: string;
    completed: boolean;
  };
  
  const TodoItem = ({ title, completed }: TodoItemProps) => (
    <li>
      {title} {completed ? '✅' : '❌'}
    </li>
  );
  
  export default TodoItem;
  
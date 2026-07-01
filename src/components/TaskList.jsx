import TaskItem from './TaskItem'

export default function TaskList({tasks, onDelete, onToggle, onEdit}) {

  const listItems = tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
         />
      ))
    return(
        <ul> {listItems} </ul>
    )
}
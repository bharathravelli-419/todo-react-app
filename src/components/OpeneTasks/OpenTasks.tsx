import OpenTask from "./OpenTask";

const OpenTasks: React.FC = ({ openTasks, modifyAfterEdit, onDeleteTask , onTaskComplete}) => {

    console.log('Open TaskS compoment SS');
    return (
        <div className="open-tasks-container">
            <h4>Open Taks List : </h4>
            <ul>
                {openTasks.map((task: string) => {
                    return (
                        <li key={task}>
                            <OpenTask task={task} onTaskComplete={onTaskComplete} modifyAfterEdit={modifyAfterEdit} onDeleteTask={onDeleteTask}  />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default OpenTasks;
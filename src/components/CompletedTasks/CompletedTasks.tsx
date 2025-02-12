import { memo } from "react";

interface CompletedTasksProps{
    completedTasks: string[];
    onUndo: (task: string) => void;
}

const CompletedTasks: React.FC<CompletedTasksProps> = memo(({completedTasks, onUndo}) => {
    console.log('Completed Tasks Component');
    return (
        <div className="completed-tasks-container">
            <h4>Completed Tasks List :</h4>
            <ul>
                {completedTasks.map((task: string) => {
                    return (
                        <li key={task}>
                            <button onClick={()=>onUndo(task)}>Undo</button>
                            <input type="text" value={task} disabled={true} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
});

export default CompletedTasks;
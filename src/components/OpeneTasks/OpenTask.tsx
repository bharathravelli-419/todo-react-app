import { memo, useState } from "react";

interface OpenTaskProps{
    task: string;
    modifyAfterEdit: (prevValue: string, newValue: string) => void;
    onDeleteTask: (task: string) => void;
    onTaskComplete: (task: string) => void;
}

const OpenTask: React.FC<OpenTaskProps> = memo(({ task, modifyAfterEdit, onDeleteTask, onTaskComplete }) => {
    const [isEdting, setIsEditing] = useState<boolean>(false);
    const [editInput, setEditInput] = useState<string>(task);

    console.log('OpenTask component', task);

    return (
        <>
            <input type="checkbox" onChange={(e) => {
                if (e.target.checked) {
                    onTaskComplete(task);
                }
            }} />
            <button onClick={() => {
                if (isEdting) {
                    if (editInput.trim() !== '')
                        modifyAfterEdit(task, editInput)
                    setIsEditing(false);
                    return;
                }
                setIsEditing(true);
            }}>{isEdting ? 'Save' : 'Edit'}</button>
            <input type="text" disabled={!isEdting} value={isEdting ? editInput : task} onChange={(e) => setEditInput(e.target.value)} />
            <button onClick={() => onDeleteTask(task)}  >Delete</button>
        </>
    )
});

export default OpenTask;
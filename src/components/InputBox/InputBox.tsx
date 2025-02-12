import { memo, useState } from "react";

interface InputBoxProps{
    addNewTask: (task: string) => void;
}

const InputBox: React.FC<InputBoxProps> = memo(({ addNewTask }) => {

    const [inputText, setInputText] = useState<string>('');
    console.log('Input box component');
    const onAddNewTask = () => {
        if (inputText.trim() !== '') {
            addNewTask(inputText);
            setInputText('')
            return;
        }
    };

    return (
        <div className="input-box-container">
            <input type="text" onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => {
                e.key === 'Enter' && onAddNewTask()
         }} value={inputText} />
            <button onClick={onAddNewTask}>Add Task</button>
        </div>
    )
});

export default InputBox;
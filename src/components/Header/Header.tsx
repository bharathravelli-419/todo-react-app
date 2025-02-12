import { memo } from "react";

const Header:React.FC= memo(()=>{
    console.log('Header Component');
    return(
        <h1>Todo List</h1>
    );
});
export default Header;
import { useState } from "react";

export const AddCategory = ({onNewCategory}: PropsType) => {

const [inputValue, setInputValue] = useState('');

const addText = (text : string) => {
    setInputValue(text);
}

const onSubmit = (event : React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const val = inputValue.trim();
    if(val =="") return;

    onNewCategory(val)
    setInputValue("");
}
  return (
    <form onSubmit={onSubmit}>
    <input 
    type="text" 
    placeholder="Buscar gifs"
    value = { inputValue }
    onChange={ (event) => addText(event.target.value)} />    
    </form>
    
  )
}

type PropsType = {
  onNewCategory : (newCateogry : string) => void
}

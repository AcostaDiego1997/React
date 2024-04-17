import { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Default Category', 'Second value']);


    const onAddCategory = (newCat: string)=>{
      if(!categories.includes(newCat)) 
        setCategories([newCat, ...categories ]);
    }

  return (
  <> 
    <h1> Gif Expert app </h1>
    <AddCategory 
        onNewCategory={onAddCategory}
    />
    {categories.map(category => (
      <GifGrid 
        key={category} 
        category={category} 
      /> 
      )
    )}
  </>
  )
}

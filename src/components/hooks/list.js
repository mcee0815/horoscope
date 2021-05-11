import React from 'react'

const List = () => {
    
    const [list, setList] = React.useState([])
    
    const addItem = () => {
       setList(prevList => {
           console.log('FOO!!!!!!')
        //    prevList.push('item ') No!!!!
        //    return prevList;
            return  [...prevList,'list item']
       })
    }
    
         return ( 
             <div className="App"> 
                <p>Stock</p> 
                    {
                        list.map((s, i) => 
                        ( <p key={i}>{s}</p> )
                        )
                    }
                <button onClick={addItem}>Add New Item</button>
            </div> );




    

    
}

export default List;
import React from 'react'

export const BoxList = () => {
    //const items = ["Box 01", "Box 02", "Box 03"]
    const [items, setItems] = React.useState(["Box 01", "Box 02", "Box 03"])

    const addBox = () => {
         console.log(items)
         setItems([...items, "new Box"])
         //items.push("new Box")
    }
    return (
        <div>
            <h1>BoxList</h1>
            <button onClick={addBox}>Add new Box</button>
            {items.map(i =>
                <div>
                    <h3>
                        {i}
                    </h3>
                </div>
            )
            }
        </div>
    )
}

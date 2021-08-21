import React from 'react'

export const BoxList = () => {
    const [items, setItems] = React.useState(["Box 01", "Box 02", "Box 03"])

    const addBox = () => {
        setItems([...items, "new Box"])
    }
    return (
        <div>
            <h1>BoxList</h1>
            <button onClick={addBox}>Add new Box</button>
            {
                items.map(i =>
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

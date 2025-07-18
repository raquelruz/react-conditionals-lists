import { useState } from "react";
import "./RemoveItemList.css";

const INITIAL_ITEMS = ["Mesa", "Silla", "Lámpara", "Sofá"];

export const RemoveItemList = () => {
	const [items, setItems] = useState(INITIAL_ITEMS);

	const remove = (indexToRemove) => {
		setItems(items.filter((item, index) => index !== indexToRemove));
	};

    return (
        <div className="removeitem-container">
            <h2>Elementos</h2>
            
            <ul>
                {items.map((item, index) => {
                    return <div key={`${item}-${index}`}>
                        <h3>{item}</h3>
                        <button onClick={() => remove(index)}>Eliminar</button>
                    </div>
                })}
            </ul>
        </div>
    )
};

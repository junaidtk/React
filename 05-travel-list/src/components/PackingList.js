import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sorytBy, setSorytBy] = useState('input');

    let sortedItems;

    if (sorytBy === 'input') sortedItems = items;

    if (sorytBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sorytBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return <div className="list">
        <ul>
            {sortedItems.map(item => <Item item={item} onDeleteItem={() => onDeleteItem(item.id)} onToggleItem={() => onToggleItem(item.id)} />)}
        </ul>

        <div className="actions">
            <select value={sorytBy} onChange={(e) => setSorytBy(e.target.value)}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description order</option>
                <option value="packed">Sort by status</option>
            </select>
            <button onClick={onClearList}>Clear List</button>
        </div>

    </div>;
}

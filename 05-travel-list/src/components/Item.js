
export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li key={item.id}>
            <input type="checkbox" value={item.packed} onChange={onToggleItem} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={onDeleteItem}>❌</button>
        </li>
    );
}

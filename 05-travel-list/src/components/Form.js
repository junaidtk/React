import { useState } from "react";

export default function Form({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };
        console.log(newItem);

        onAddItem(newItem);

        setDescription('');
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>What do you need for your trip</h2>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(
                    (num) => (
                        <option value={num} key={num}>{num}</option>
                    )
                )}
            </select>
            <input type="text" value={description} placeholder="Item...." onChange={(e) => setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    );
}

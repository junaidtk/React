
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Watch", quantity: 12, packed: true },
];

export default function App(){
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item){
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items)=> items.filter((item)=>item.id !== id));
  }

  function handleToggleItem(id){
    setItems((items)=>items.map((item)=>item.id === id ? {...item, packed:!item.packed} : item));
  }

  return <div className="app">
    <Logo />
    <Form onAddItem={handleAddItems}/>
    <PackingList  items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
    <Status items={items} />
  </div>
}

function Logo(){
  return(
    <h1>Far Away</h1>
  );
}

function Form({onAddItem}){
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    if(!description) return;

    const newItem = {description, quantity, packed:false, id:Date.now()};
    console.log(newItem);

    onAddItem(newItem);

    setDescription('');
    setQuantity(1);
  }

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>What do you need for your trip</h2>
      <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
        {Array.from({length:20}, (_, i) => i+1).map(
          (num) => (
            <option value={num} key={num}>{num}</option>
          )
        )}
      </select>
      <input type="text" value={description} placeholder="Item...." onChange={(e)=> setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
  );
}

function PackingList({items, onDeleteItem, onToggleItem}){
    const [sorytBy, setSorytBy] = useState('input');

    let sortedItems;

    if(sorytBy === 'input') sortedItems = items;

    if(sorytBy === 'description') sortedItems = items.slice().sort((a, b)=>a.description.localeCompare(b.description));

    if(sorytBy === 'packed') sortedItems = items.slice().sort((a, b)=> Number(a.packed) - Number(b.packed));

  return <div className="list">
    <ul>
      {sortedItems.map(item=> <Item item={item} onDeleteItem={()=>onDeleteItem(item.id)} onToggleItem={()=>onToggleItem(item.id)} />)}
    </ul>

    <div className="actions">
        <select value={sorytBy} onChange={(e) => setSorytBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description order</option>
            <option value="packed">Sort by status</option>
        </select>
    </div>
  </div>
}

function Item({item, onDeleteItem, onToggleItem}){
  return (
    <li key={item.id}>
      <input type="checkbox" value={item.packed} onChange={onToggleItem} />
      <span style={item.packed ? { textDecoration: "line-through"} :{} }>
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
}

function Status({items}){

  if(!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  
  const numItems = items.length;
  const numPacked = items.filter((item)=>item.packed).length;
  const percentage = Math.round(numPacked/numItems*100);

  return(
    <footer className="stats">
      <em>
        {percentage === 100  ? "You got everything! Ready to go ✈️" : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked}` }
        
      </em>
    </footer>
  );
}
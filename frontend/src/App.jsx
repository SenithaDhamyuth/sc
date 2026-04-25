import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  
  // 1. State එකට default category එක 'Electronics' විදියට දැම්මා
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '', 
    category: 'Electronics', 
  });

  // 2. GET Request - අලුත් Render URL එක + /api/items
  const fetchItems = async () => {
    try {
      const res = await axios.get('https://my-backend-service-mjua.onrender.com/api/items');
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. POST Request - අලුත් Render URL එක + Form clear වෙන කෑල්ල හැදුවා
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://my-backend-service-mjua.onrender.com/api/items', formData);
      fetchItems(); // Refresh the list
      
      // Form එක හිස් කරනවා
      setFormData({
        name: '',
        price: '',
        description: '', 
        category: 'Electronics' 
      });
    } catch (err) {
      console.error('Error creating item:', err);
    }
  };

  // 4. DELETE Request - අලුත් Render URL එක + Auto refresh කෑල්ල (fetchItems) දැම්මා
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://my-backend-service-mjua.onrender.com/api/items/${id}`);
      fetchItems(); // මැකුවට පස්සේ අලුත් ලිස්ට් එක ගේනවා
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  return (
    <div className="container">
      <h1>Item Manager</h1>

      <div className="form-section">
        <h2>Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description:</label>
            {/* Description එකට Textarea එකක් දැම්මා ලස්සන වෙන්න */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>Category:</label>
            {/* 400 Error එකෙන් බේරෙන්න Select Box එක දැම්මා */}
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Food">Food</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary">Add Items</button>
        </form>
      </div>

      <div className="list-section">
        <h2>Items List</h2>
        {items.length === 0 ? (
          <p>No items found. Add some!</p>
        ) : (
          <ul className="item-list">
            {items.map((item) => (
              <li key={item._id} className="item-card">
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: Rs.{item.price}</p>
                  <p>Description: {item.description}</p>
                  <p>Category: <strong>{item.category}</strong></p>
                </div>
                <div className="item-actions">
                  <button
                    className="btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
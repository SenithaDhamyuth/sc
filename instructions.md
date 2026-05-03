
SLT24102735v#$

mongodb+srv://admin:admin123@cluster0.zvemayj.mongodb.net/?appName=Cluster0

 .env update

PORT=5000
mongodb://admin:admin123@ac-rk5wdzs-shard-00-00.zvemayj.mongodb.net:27017,ac-rk5wdzs-shard-00-01.zvemayj.mongodb.net:27017,ac-rk5wdzs-shard-00-02.zvemayj.mongodb.net:27017/wmtdb?ssl=true&replicaSet=atlas-4b1tcc-shard-0&authSource=admin&appName=Cluster0

export default router;
export default mongoose.model('Item', itemSchema);


.gitignore
backend/node_modules/
frontend/node_modules/
frontend/dist/
.env

server.js
app.use(cors({
  origin: "https://your-frontend-link.vercel.app" }));




const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),


. Build Command npm install
Start Command node server.js
MONGO_URI
PORT:5000
NODE_ENV : production



FRONT END Vite .env File ---> VITE_API_URL=http://localhost:5000/api/items --> const PORT = process.env.PORT || 5000; + app.use('/api/items', itemsRouter);
 npm install axios(nothibboth)
 npx vite (to run)

 net
 2. Build Settings (Vite සඳහා)
Root directory 

Framework Preset: Vite

Build Command: npm run build

Output Directory: dist




git init (first)
 git add .
 git commit -m "My First MERN Project"
 git branch -M main 
git remote add origin https://github.com/YourName/MERN-Lab-Test.git 
git push -u origin main




git add .
git commit -m "Update: added brand and quantity fields"
git push
git push -f origin IT24102735-MarketPlace












Render Root Directory: backend
 Runtime: Node Build Command: npm install Start Command: node server.js MONGO_URI App.jsx replace with url





Vercel Add New -> Project and import
 Framework Preset: Vite 
Root Directory: frontend
 Environment Variables VITE_API_URL https://my-new-backend.onrender.com/api/items 
Add deploy








































import Item from "../models/Item.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch item" });
  }
};

export const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create item",
      error: error.message,
    });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update item",
      error: error.message,
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item" });
  }
};
















































































Backend and frontend -- npm install
.env update
PORT=5000
MONGO_URI=mongodb+srv://admin:admin123@cluster0.zvemayj.mongodb.net/db?appName=Cluster0
Error - mongoose.connect(process.env.MONGO_URI)
Srv off
npm start or node server.js
Update modle = module.exports = mongoose.model('Item', itemSchema);
Update route= module.exports = router;





FRONT END
Vite .env File ---> VITE_API_URL=http://localhost:5000/api/items --> const PORT = process.env.PORT || 5000; + app.use('/api/items', itemsRouter);
npm install axios(nothibboth)
npx vite (to run)


type="number"
type=”text”
App.jsx


const handleDelete = async (id) => {
 await axios.delete(`http://localhost:5000/api/items/${id}`);


 
Git hub
Readme tick off
Git ignorenode_modules/
.env


git init
git add .
git commit -m "My First MERN Project"
git branch -M main
git remote add origin https://github.com/YourName/MERN-Lab-Test.git
git push -u origin main


(git rm -r --cached node_modules(kelauynoth)) /git add .


git commit -m "Remove accidentally added node_modules"
git push origin main or git push or git push -f origin main



Render
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: node server.js
MONGO_URI
App.jsx replace with url



Vercel
Add New -> Project and import
Framework Preset: Vite
Root Directory: frontend
Environment Variables VITE_API_URL https://my-new-backend.onrender.com/api/items
Add deploy










router.delete('/:id', async (req, res) => { try { const item = await Item.findByIdAndDelete(req.params.id); if (!item) { return
res.status(404).json({ message: "Item not found" }); } res.json({ message: "Item deleted successfully" }); } catch (err)
{ res.status(500).json({ message: err.message }); } });
router.get('/', async (req, res) => {
 try {
 const items = await Item.find();
 res.json(items);
 } catch (err) {
 res.status(500).json({ message: err.message });
 }
})




router.post('/', async (req, res) => {
 const { name, price, description, category } = req.body; // TODO (Student): Read the new fields here
 const item = new Item({
 name,
 price,
 description,
 category
 });
 try {
 const savedItem = await item.save();
 res.status(201).json(savedItem);
 } catch (err) {
 res.status(400).json({ message: err.message });
 }
});

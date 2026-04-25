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

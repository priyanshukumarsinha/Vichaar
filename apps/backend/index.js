// app/backend/src/index.js

import app from "./src/app.js";

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Backend server is running on port ${PORT}\n`);
    console.log(`http://localhost:${PORT}`);
})
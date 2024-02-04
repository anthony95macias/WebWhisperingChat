import app from './app';
import { connectToDatabase } from './db/connection.js';

// connections and listeners
const PORT = process.env.PORT || 5001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
      console.log(`Server is running on port ${PORT} & connected to Database`)
    );
  })
  .catch((error) => {
    console.error(error);
    // Optionally, you might want to handle the error more robustly here
    // For example, you could exit the process if the database connection is critical
  });

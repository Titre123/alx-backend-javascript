import router from "./routes/index";
import express from 'express';

const database = process.argv[4] ? process.argv.length > 5 : '';

const app = express()

router(app);

app.listen(1245, 'localhost', () => {
    console.log('Server is listening to port 1245');
})

export default database;
const express = require('express');
const exphbs = require('express-handlebars');
const connect = require('./src/models/db.js');
const router = require('./src/routes/routes.js');
const handlebars = require('handlebars');

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/static", express.static("./public"));
app.engine("hbs", exphbs.engine({
    extname: 'hbs'
}));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(router);

app.listen(PORT, async function() {
    console.log(`Server is running on port ${PORT}`);
    console.log("Express app is now listening...");
    
    try {
        await connect();
        console.log("Database Connection successful.");
    } catch (err) {
        console.log("Database Connection failed: ", err);
    }
});
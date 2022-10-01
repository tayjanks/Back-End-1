const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Camerson", "Riely"];
    res.status(200).send(friends);
});



app.get ("/weather/:tempature", (req, res) => {
    const { tempature }= req.params;
    const phrase = `<h3>It was ${tempature} today</h3>`;
    res.status(200).send(phrase);
});




app.listen(4000, () => console.log("Server running on port 4000"));

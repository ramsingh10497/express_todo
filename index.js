const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let tasks = ["Sample task"]

app.get("/", (req, res) => {
    let tasklists = tasks.map(task => `<li>${task}</li>`).join('\n')
  res.send(`<html>
        <body>
            <h1>Express Todo</h1>
            <form action="/" method="post">
                <input name="newTask" />
                <button type="submit">Add</button>
            </form>
            <div>
                <ul>
                    ${tasklists}
                </ul>
            </div>
        </body>
    </html>`);
});

app.post('/', (req, res) => {
    tasks.push(req.body.newTask);
    res.redirect('/')
})

app.listen("8080", () => console.log("Server Started"));

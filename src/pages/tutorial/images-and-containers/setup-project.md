# Setup project

Bu bo'limda biz nodejsda yozilgan proyektni docker orqali ishga tushirishni o'rganishdan boshlaymiz.

Avval proyektni yaratib olishimiz kerak. Proyekt uchun `nodejs-app-for-docker` nomli papka yaratib olamiz. Shu papkani
istalgan editorda ochib olamiz. (WebStorm, Visual Studio Code, SublimeText)

Proyekt ichida 3ta fayl yaratamiz.

::: code-group

```css [public/styles.css]
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

section,
form {
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
}

.form-control {
  margin: 0.5rem 0;
}

input {
  font: inherit;
}

input,
label {
  display: block;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

button {
  background-color: #2f005a;
  border: 1px solid #2f005a;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #50005a;
  border-color: #50005a;
}
```

```json [package.json]
{
  "name": "nodejs-app-for-docker",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "author": "Maxmudov Asliddin",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "body-parser": "1.19.0"
  }
}
```

```js [server.js]
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h2>My Course Goal</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
  const enteredGoal = req.body.goal;
  console.log(enteredGoal);
  userGoal = enteredGoal;
  res.redirect('/');
});

app.listen(80);
```

:::

::: warning E'tibor bering
`styles.css` faylimiz `public` papkasining ichida yaratiladi.
:::

import TodoAppImage from "../img/TodoApp.png";
import NatoursImage from "../img/Natours.png";
import CryptoImage from "../img/Crypto.png";
const projects = [
  {
    id: 1,
    title: "Todo App",
    description:
      "Technologies used: Html, Sass, React, Bem. This is a custom Todo Application with some fancy looking style and draggable objects",
    image: TodoAppImage,
    reverse: false,
    ghlink: "https://github.com/musikhood/todo-app",
    demolink: "https://musikhood.github.io/todo-app",
  },
  {
    id: 2,
    title: "Natours",
    description:
      "Technologies used: Html, Sass, Bem. This is a fully responsive landing page for made up company called Natours",
    image: NatoursImage,
    reverse: true,
    ghlink: "https://github.com/musikhood/Natours",
    demolink: "https://musikhood.github.io/Natours/",
  },
  {
    id: 3,
    title: "Cryptocurrency tracker",
    description:
      "Technologies used: Html, Sass, React, API. This is a cryptocurrency tracker with coingecko API using axios",
    image: CryptoImage,
    reverse: false,
    ghlink: "https://github.com/musikhood/Cryptocurrency-tracker",
    demolink: "https://musikhood.github.io/Cryptocurrency-tracker/",
  },
];

export default projects;

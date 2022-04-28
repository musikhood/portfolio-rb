import TodoAppImage from "../img/TodoApp.png";
import NatoursImage from "../img/Natours.png";
import CryptoImage from "../img/Crypto.png";
import TeslaImage from "../img/Tesla-clone.png";
import EcommerceImage from "../img/ecommerce.png";
const projects = [
  {
    id: 1,
    title: "E-commerce site",
    description:
      "Technologies used: Html, Sass, React,Redux, Bem. This is a fully functioning e-commerce website",
    image: EcommerceImage,
    reverse: false,
    ghlink: "https://github.com/musikhood/ecommerce",
    demolink: "https://musikhood.github.io/ecommerce/#/",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "Technologies used: Html, Sass, React, Bem. This is a custom Todo Application with some fancy looking style and draggable objects",
    image: TodoAppImage,
    reverse: true,
    ghlink: "https://github.com/musikhood/todo-app",
    demolink: "https://musikhood.github.io/todo-app",
  },
  {
    id: 3,
    title: "Natours",
    description:
      "Technologies used: Html, Sass, Bem. This is a fully responsive landing page for made up company called Natours",
    image: NatoursImage,
    reverse: false,
    ghlink: "https://github.com/musikhood/Natours",
    demolink: "https://musikhood.github.io/Natours/",
  },
  {
    id: 4,
    title: "Cryptocurrency tracker",
    description:
      "Technologies used: Html, Sass, React, API. This is a cryptocurrency tracker with coingecko API using axios",
    image: CryptoImage,
    reverse: true,
    ghlink: "https://github.com/musikhood/Cryptocurrency-tracker",
    demolink: "https://musikhood.github.io/Cryptocurrency-tracker/",
  },
  {
    id: 5,
    title: "Tesla Clone",
    description:
      "Technologies used: Html, React, Styled Components, Redux. This is a copy of Tesla website with some react reveal animations",
    image: TeslaImage,
    reverse: false,
    ghlink: "https://github.com/musikhood/Tesla-clone",
    demolink: "https://musikhood.github.io/Tesla-clone/",
  },
];

export default projects;

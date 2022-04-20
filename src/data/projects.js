import Image from "../img/graybg.png";
import TodoAppImage from "../img/TodoApp.png";
import NatoursImage from "../img/Natours.png";
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
    title: "Title3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident obcaecati placeat eum consectetur, quasdasdasfasfafasf sa fasf  asd fads fasdf as df asd fdas f  fa  afasfasf  sdf dafs ds fda fs dasfctetur adipisicing elit. Nisi provident obcaecati quuntur.",
    image: Image,
    reverse: false,
    ghlink: "https://www.youtube.com/",
    demolink: "https://www.google.com/",
  },
];

export default projects;

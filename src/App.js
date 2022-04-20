import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import { Route, Switch } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export default function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="App">
      <Sidebar navToggle={navToggle} setNavToggle={setNavToggle} />
      <div className="ham-burger-menu">
        <MenuIcon
          onClick={() => {
            setNavToggle((prevValue) => !prevValue);
          }}
        />
      </div>
      <MainContentStyled>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

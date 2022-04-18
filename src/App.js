import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import { Route, Switch } from "react-router-dom";

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default function App() {
  return (
    <div className="App">
      <Sidebar />
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

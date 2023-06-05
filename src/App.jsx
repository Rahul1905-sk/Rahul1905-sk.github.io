import { MantineProvider, Text } from "@mantine/core";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Sklills from "./components/Sklills";
import GitStats from "./components/GitStats";
import Projects from "./components/Projects";
import { ContactPage } from "./components/ContactPage";
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar />
      <HomePage />
      <About />
      <Sklills />

      <Projects />
      <GitStats />
      <ContactPage />
    </MantineProvider>
  );
}

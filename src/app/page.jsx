import About from "./components/About";
import Footer from "./components/Footer";
import CursorHover from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <CursorHover />
      <About/>
      <Skills/>
      <Projects/>
      <SocialLinks/>
      {/* <Footer/> */}
    </>
  )
}

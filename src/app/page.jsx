

import About from "./components/About";
import Footer from "./components/Footer";
import CursorHover from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import ProgressBar from "./components/ProgressBar";
import PullCord from "./components/PullCord";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <PullCord />
      <ProgressBar />
      <CursorHover />
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <SocialLinks/>
      {/* <Footer/> */}
    </>
  )
}

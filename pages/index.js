// import ItemIsotope from "../src/components/ItemIsotope";
import dynamic from "next/dynamic";
import About from "../src/components/About";
import ContactSection from "../src/components/ContactSection";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});
const IndexCreative = () => {
  return (
    <Layout>
      {/* Section Started */}
      <div className="section started layout-creative" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, {`I’m`} <strong>Sean Tolbert</strong>, Automater and Front-end
                Developer Based in Washington, DC.
              </h1>
              <div className="h-subtitles" style={{ opacity: "1" }}>
                <TypingAnimation extraClassName={"h-subtitle"} />
                <span className="typed-subtitle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* About */}
      {/*  */}
      <div className="section works" id="about">
        <div className="content">
          <About />
          <div className="clear" />
        </div>
      </div>
      {/*  */}
      {/* Contact */}
      {/*  */}
      <div className="section works" id="contact">
        <div className="content">
          <ContactSection />
          {/* <div className="clear" /> */}
        </div>
      </div>
    </Layout>
  );
};
export default IndexCreative;

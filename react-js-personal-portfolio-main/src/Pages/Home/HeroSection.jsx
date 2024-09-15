export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Varshini </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Student</span>{" "}
            
          </h1>
          <p className="hero--section-description">
          MCA student eager to apply skills and contribute
          <br/> to a dynamic workplace.
            <br /> 
          </p>
        </div>
          <link to = "contact"></link>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
      <div className="hero--section--img">
        <img src="./img/varshini.jpg" alt="Hero Section" className="hero--image--size"/>
      </div>
    </section>
  );
}

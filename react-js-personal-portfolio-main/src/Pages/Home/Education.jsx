import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="testimonial--section" id="Education">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Education</p>
          <h2 className="sections--heading">Education Background</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <div className="testimonial--section--card--review">
            <p className="text-md testimonial--author--name">
              {item.title}
            </p>
            </div>
            <p className="text-md testimonial--author--name">
              College: {item.college}
            </p>
            <p className="text-md">{item.description}</p>
            <div className="testimonial--section--card--author--detail">
            
              <div>
                <p className="text-md testimonial--author--name">
                  Year: {item.year}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.cgpa}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

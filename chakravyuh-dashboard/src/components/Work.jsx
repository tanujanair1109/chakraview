import john from "../Landing Page Assets/john-doe-image.png"
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Work = () => {

  const teamMembers = [
    { 
      name: "Arindam Chakraborty", 
      imgSrc: john,
      email: "arindamchakraborty6.10@gmail.com",
      linkedin: "https://www.linkedin.com/in/arindm007/",
    },
    {
      name: "Nalamati Mohan",
      imgSrc: john,
      email:"nmvsscharan@gmail.com",
      linkedin:"https://www.linkedin.com/in/sri-charan-nalamati-82386b208/",
    },
    {
      name:"Mousami Sharma",
      imgSrc: john,
      email:"mousami3366@gmail.com",
      linkedin:"https://www.linkedin.com/in/mousami-sharma-75370421a/",
    },
    {
      name:"Tanuja Nair",
      imgSrc: john,
      email:"tanujanair11@gmail.com",
      linkedin:"https://www.linkedin.com/in/tanuja-nair-150634201/",
    }, 
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Meet our Team</p>
        <h1 className="primary-heading">Get to Know Us</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {teamMembers.map((data) => (
        <div className="work-section-info" key={data.name}>
        <div className="info-boxes-img-container">
          <img src={data.imgSrc} alt={data.name} />
        </div>
        <h2>{data.name}</h2>
        <div className="icons-container">
          <a href={`mailto:${data.email}`}><FaEnvelope style={{ color: 'orange' }}/></a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ color: 'orange' }} /></a>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
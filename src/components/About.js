import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Endy",
  lastName: "Arfian F. P.",
  bithday: "01 January 1994",
  address: "Sleman, Yogyakarta",
  phn: "+62 857... ( req. by email )",
  email: "endyarfian94@gmail.com",
  serviceLists: [
    "Website Development",
    "Creative Design",
    "2D/3D Animation",
    "Geographic Information System",
    "Forestry Data Analyst",
  ],
  skills: {
    programming: [
      { name: "PHP", value: "70" },
      { name: "Java Script", value: "60" },
      { name: "SQL", value: "80" },
    ],
    other: [
      { name: "GIS", value: "80" },
      { name: "Animation", value: "70" },
      { name: "Design", value: "85" },
    ],
    language: [
      { name: "English", value: "70" },
      { name: "Indonesian", value: "100" },
    ],
  },
  education: [
    { year: "2014 - 2021", unv: "Universitas Gadjah Mada", degree: "Bachelor's Degree of Forestry" },
    { year: "2009 - 2013", unv: "STM Pembangunan Yogyakarta", degree: "Associate Degree of electronics major" },
  ],
  working: [
    {
      year: "2021 - Running",
      company: "Geo Circle Indonesia",
      deg: "Spatial Data Analyst",
    },
    {
      year: "2014 - Running",
      company: "Freelance",
      deg: "Creative Designer, 2D/3D Animator, Web Developer",
    },
    { year: "2019 - 2020", company: "Agri Muda Swasembada Foundation", deg: "Social Media Content" },
  ],
  project: [
    {
      year: "2023",
      company: "BRGM & UGM",
      as: "Web Developer & Database Engineer",
      deg: "Penyusunan dan Pembuatan Sistem Informasi Gambut dan Mangrove",
    },
    {
      year: "2022",
      company: "Bukit Asam & UGM",
      as: "Data Analyst",
      deg: "Penaksiran Biomassa dan Cadangan Karbon Tegakan Hasil Reklamasi",
    },
    { year: "2022", company: "Fakultas Kehutanan UGM", as: "Web Developer & Database Engineer", deg: "Penyusunan RPJP KHDTK Fak. Kehutanan UGM" },
    { year: "2021", company: "Blitar Gov. & UGM", as: "Enumerator", deg: "Penyelesaian Penguasan Tanah dan Penataan Kawasan Hutan" },
    { year: "2021", company: "Fakultas Kehutanan UGM", as: "Field Coordinator", deg: "Riset Pemandatan Kawasan Hutan Dengan Tujuan Khusus" },
    { year: "2021", company: "DLHK Sleman & UGM", as: "Surveyor & Data Analyst", deg: "Kajian Analisis Spasial Pesisir Pantai Selatan DIY" },
    { year: "2019", company: "BPDASHL SUMUT & UGM", as: "Surveyor & Data Analyst", deg: "Penyusunan Rencana Teknis Rehabilitasi DAS Wampu Sei Ular" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Endy Arfian.</span> I do a lot of work in the forestry sector, 
                  web-developing, and designing. {`I'm`} very passionate and dedicated to my work. With 5+
                  years experience in those sector, I have
                  acquired the skills and knowledge.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;

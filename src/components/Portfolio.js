import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";
import PortfolioModal2 from "./popup/PortfolioModal2";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  return (
    <Fragment>
      <PortfolioModal open={modal} close={() => setModal(false)} />
      <PortfolioModal2 open={modal2} close={() => setModal2(false)} />
      <div className="_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="_tm_portfolio swiper-section">
            <div className="_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/sigamma.jpg"
                        />
                      </div>
                      <div className="details">
                        <h3>SIGAMMA</h3>
                        <span style={{ fontSize: "10px" }}>Sistem Informasi Gambut dan Mangrove</span>
                      </div>
                      <a
                        className="_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal(true)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="img/portfolio/simpata.png"
                        />
                      </div>
                      <div className="details">
                        <h3>SIMPATA</h3>
                        <span style={{ fontSize: "10px" }}>Sistem Informasi Pemantauan Hutan</span>
                      </div>
                      <a
                        className="_tm_full_link portfolio_popup"
                        href="#"
                        onClick={() => setModal2(true)}
                      />
                    </div>
                  </SwiperSlide>
                </div>
                <div className="_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;

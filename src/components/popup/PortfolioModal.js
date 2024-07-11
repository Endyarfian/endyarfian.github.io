import Modal from "./Modal";

const PortfolioModal = ({ close, open }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div className="main" data-img-url="img/portfolio/sigamma.jpg" />
        </div>
        <div className="portfolio_main_title">
          <h3>Sistem Informasi Gambut dan Mangrove</h3>
          <span>
            <a href="#">Badan Restorasi Gambut dan Mangrove</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>
            Sistem informasi Gambut dan Mangrove (SIGAMMA) is a system designed to store and process Peat and Mangrove data, which can be used as a system that can help in the decision-making process and as a tool that can help in the process of managing peat and mangrove areas throughout Indonesia.
            The main function of this system is the implementation of BRGM's business model, namely planning, implementation, monitoring and evaluation of activities carried out by BRGM in managing peat and mangrove areas. 
          </p>
          <p>
          
            For the frontend in this system, HTML, CSS, and JavaScript are used, while the backend uses PHP with the CI4 framework and postgresql for the database.
            In the process, there are several obstacles because the system will be used as the backbone and data processor of the pre-existing data retrieval system.
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/sigamma-landing.png" />
                  <a
                    className="_tm_full_link "
                    href="img/portfolio/sigamma-landing.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/sigamma-dashboard.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/sigamma-dashboard.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/sigamma-data1.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/sigamma-data1.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/sigamma-map.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/sigamma-map.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/sigamma-mapdetail.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/sigamma-mapdetail.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/sigamma-data2.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/sigamma-data2.png"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioModal;

import Modal from "./Modal";

const PortfolioModal2 = ({ close, open }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div className="main" data-img-url="img/portfolio/simpata.png" />
        </div>
        <div className="portfolio_main_title">
          <h3>SIMPATA</h3>
          <span>
            <a href="#">Dinas Kehutanan Provinsi Jawa Timur</a>
          </span>
          <div />
        </div>

        <div className="text">
          <p>
          In the development of the Forest Monitoring Information System (SIMPATA), there is one of the activities of registration and inventory of community forests, in this development integrating the existing system and then adding a system that is able to accommodate the registration and inventory of community forests in East Java in particular. the main features in this system are community forest data collection, inventory, and calculation of potential stands using the Case Base Reasoning (CBR) method.  
          </p>
          <p>
          The frontend technology used is HTML, CSS, and JavaScript. while the backend uses PHP with the Laravel framework and MySQL as the database. As for the obstacles, it is to combine the existing system with the system created, besides that it also combines data in the form of spatial data and terrestrial data.
          </p>
        </div>
        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/simpata1.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/simpata1.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/simpata2.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/simpata2.png"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/portfolio/simpata3.png" />
                  <a
                    className="_tm_full_link zoom"
                    href="img/portfolio/simpata3.png"
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
export default PortfolioModal2;

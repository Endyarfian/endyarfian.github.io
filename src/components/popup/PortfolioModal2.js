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
            Dalam pengembangan Sistem Informasi Pemantauan Hutan (SIMPATA), terdapat salah satunya kegiatan registrasi dan inventarisasi hutan rakyat, dalam pengembangan ini mengintegrasikan 
            sistem yang sudah ada kemudian ditambahkan sistem yang mampu mengakomodir regitrasi dan inventarisasi hutan rakyat di Jawa Timur khususnya. fitur utama dalam sistem ini adalah
            pendataan hutan rakyat, inventarisasi, hingga perhitungan potensi tegakan menggunakan metode Case Base Reasoning (CBR).  
          </p>
          <p>
            teknologi frontend yang digunakan adalah HTML, CSS, dan JavaScript. sedangkan backendnya menggunakan PHP dengan framework Laravel dan MySQL sebagai databasenya. 
            adapun kendalanya adalah memadukan sistem yang sudah ada dengan sistem yang dibuat, selain itu juga memadukan data berupa data spasial dan data terestrial.
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

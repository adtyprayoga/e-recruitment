import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerTwo Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/bg/8.png")',  bannerArea: '-80px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h5
                  className="subtitle fw-bold border"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  Pencari Kerja
                </h5>
                <h2
                  className="title "
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  {" "}
                  Biarkan <span>Pekerjaan</span> Menemukan Anda
                </h2>
                <p
                  className="content pe-xl-5 "
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500"
                >
                  Buat profil/resume secara gratis untuk mendapatkan undangan
                  wawancara dan pekerjaan yang cocok untuk anda.
                </p>
                <div
                  className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                  id="accordionExample"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button">
                        Resume Online
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        Profil anda adalah aplikasi anda, lamar pekerjaan secara
                        instan.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button" type="button">
                        Lowongan Rekomendasi
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        Pekerjaan anda bersifat pribadi, ceritakan lebih banyak
                        tentang tujuan anda dan kami akan mencocokkan dengan
                        pekerjaan yang tepat untuk membantu anda mencapainya.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button" type="button">
                        Job Invitation
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        Dapatkan undangan untuk melamar pekerjaan, sistem akan
                        mencocokkan dan menampilkan profil anda kepada pemberi
                        kerja untuk pekerjaan yang akan anda sukai.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <img
                  className="banner-animate-img banner-animate-img-4"
                  src="assets/img/banner-2/3.png"
                  alt="img"
                />
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-2/4.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-2/5.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="assets/img/banner-2/2.png"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner-2/1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerTwo End ==================*/}
    </>
  );
};

export default Banner;

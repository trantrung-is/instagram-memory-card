import React from "react";

function FramePage() {
  return (
    <div className="flatform-design flatform-success">
      <div className="flatform-design__inner">
        <div className="flatform-design__inner-child">
          <div className="flatform-design__thumbnail-bg"></div>
          <div className="flatform-design__thumbnail-wrapper">
            <div className="flatform-design__thumbnail">
              <div
                className="flatform-design__thumbnail-inner-bg"
                // style="background-image:''"
              >
                <div className="d-wrap">
                  <div className="d-wrap-inner">
                    <div className="flatform-design__avarta">
                      <div className="avarta">
                        <img src="" alt="" className="images" />
                      </div>
                      <span className="name">...</span>
                      <p className="username">...</p>
                      <p className="username des">...</p>
                    </div>
                    <ul className="flatform-design__link">
                      <li className="item posts">
                        <span className="number">0</span>
                        <span className="text">BÃ i viáº¿t</span>
                      </li>
                      <li className="item followed-by">
                        <span className="number">0</span>
                        <span className="text">NgÆ°á»�i theo dÃµi</span>
                      </li>
                      <li className="item follow">
                        <span className="number">0</span>
                        <span className="text">Ä�ang theo dÃµi</span>
                      </li>
                    </ul>

                    <ul className="flatform-design__list-image"></ul>
                    <div className="flatform-design__button">
                      <div className="btn">Theo DÃµi TÃ´i</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FramePage;

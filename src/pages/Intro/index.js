/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "./style.css";

/**
 * Intro page component
 */
function IntroPage() {
  return (
    <div className="get-link-parent">
      <div className="get-link-parent__inner">
        <div className="get-link-instagram">
          <div className="logo-instagram">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
              alt="Instagram"
              className="images"
            />
          </div>
          <form className="form" type="get" id="form">
            <div className="form-group">
              <label for="exampleInputEmail1">
                <span className="lnr lnr-user"></span> Username
              </label>
              <input
                type="text"
                className="form-control"
                id="link-instagram-username"
                name="username"
                placeholder="VD: hiiambooo"
              />
              <div className="error">
                KhÃ´ng bá»� trá»‘ng username nha máº¥y mÃ¡ ðŸ˜�
              </div>
              <div className="note">
                <p>
                  - DÃ¹ng username instagram ðŸ˜Ž,
                  <a href="https://prnt.sc/rp8yhw" target="_blank">
                    cÃ²n Ä‘á»£i gÃ¬ mÃ  khÃ´ng click xem minh hoáº¡ ðŸ˜¤
                  </a>
                </p>

                <p>
                  - Nhá»› lÃ  sá»­ dá»¥ng Ä‘Ãºng tÃªn username nhÃ©, náº¿u tÃªn
                  khÃ¡c sáº½ toai Ä‘áº¥y :v ðŸ˜Ž
                </p>
                <p>
                  - VD: Link Ä‘áº§y Ä‘á»§ sáº½ nhÆ° tháº¿ náº§y -
                  <strong>https://www.instagram.com/hiiambooo/</strong>
                </p>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                <span className="lnr lnr-code"></span>MÃ£ code hÃ¬nh
              </label>
              <input
                type="text"
                className="form-control"
                id="link-instagram-image"
                name="image"
                placeholder="VD: B-TXo_GpoRx"
              />
              <div className="error">
                KhÃ´ng bá»� trá»‘ng mÃ£ code hÃ¬nh nha máº¥y mÃ¡ ðŸ˜�
              </div>
              <div className="note">
                <p>
                  - Ä�á»ƒ láº¥y Ä‘Ãºng mÃ£ code nÃ y thÃ¬ nÃªn switch sang
                  'public' má»™t táº¹o hen âœŒ, bÆ°á»›c nÃ y cá»±c kÃ¬ quan
                  trá»�ng, náº¿u khÃ´ng bá»� thÃ¬ mÃ£ code báº£o máº­t tá»«
                  Instagram sáº½ cháº·n khÃ´ng láº¥y Ä‘c :)),
                  <a href="https://prnt.sc/rp9mb5" target="_blank">
                    MÃ£ code nhÆ° nÃ y nÃ y âœŠ
                  </a>
                </p>
                <p>
                  - Ä�a sá»‘ mÃ£ code chung sáº½ Ä‘Æ°á»£c generate cÃ³ dáº¡ng
                  nhÆ° nÃ y: <br />
                  <strong>B9_399xD0Gn, B9wsg-5nLWa, B9byUCZnXWm ...</strong>
                </p>
                <p>
                  - VD: Link Ä‘áº§y Ä‘á»§ sáº½ nhÆ° tháº¿ náº§y -
                  <strong>https://www.instagram.com/p/B-TXo_GpoRx/</strong>
                </p>
              </div>
            </div>

            <div className="form-submit">
              <div className="submit-event btn btn-primary">
                <span className="lnr lnr-rocket"></span>
                Bingoooooo !!!
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;

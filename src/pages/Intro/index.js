/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";

import "./style.css";

/**
 * Intro page component
 */
function IntroPage(props) {
  const [username, setUsername] = useState("");
  const [imageId, setImageId] = useState("");
  const [error, setError] = useState({});

  function checkValidation() {
    let errorList = {};
    if (username === "") {
      errorList.username = `Không bờ trống username nha mấy má 😝`;
      setError(errorList);
      return false;
    }
    if (imageId === "") {
      errorList.imageId = `Không bờ trống imageId nha mấy má 😝`;
      setError(errorList);
      return false;
    }

    return true;
  }

  async function submit() {
    console.log(props);
    const check = checkValidation();
    if (check) {
      props.history.push("/frame", {
        username,
        imageId,
      });
    }
  }

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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              {error.username !== "" && (
                <div
                  className="error"
                  style={{
                    visibility: "visible",
                    opacity: 1,
                    marginTop: "10px",
                  }}
                >
                  {error.username}
                </div>
              )}

              <div className="note">
                <p>
                  - Dùng username instagram 😎,
                  <a href="https://prnt.sc/rp8yhw" target="_blank">
                    còn đợi gì mà không click xem minh hoạ 😤
                  </a>
                </p>

                <p>
                  - Nhớ là sử dụng đúng tên username nhé, nếu tên khác sẽ toai
                  đấy :v 😎
                </p>
                <p>
                  - VD: Link đầy đủ sẽ như thế nầy -
                  <strong>https://www.instagram.com/hiiambooo/</strong>
                </p>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">
                <span className="lnr lnr-code"></span>Mã code hình
              </label>
              <input
                type="text"
                className="form-control"
                id="link-instagram-image"
                name="image"
                placeholder="VD: B-TXo_GpoRx"
                onChange={(e) => {
                  setImageId(e.target.value);
                }}
              />
              {error.imageId !== "" && (
                <div
                  className="error"
                  style={{
                    visibility: "visible",
                    opacity: 1,
                    marginTop: "10px",
                  }}
                >
                  {error.imageId}
                </div>
              )}
              <div className="note">
                <p>
                  - ĝể lấy đúng mã code này thì nên switch sang 'public' một tẹo
                  hen ✌, bước này cực kì quan trờng, nếu không bờ thì mã code
                  bảo mật từ Instagram sẽ chặn không lấy đc :)),
                  <a href="https://prnt.sc/rp9mb5" target="_blank">
                    Mã code như này này ✊
                  </a>
                </p>
                <p>
                  - ĝa số mã code chung sẽ được generate có dạng như này: <br />
                  ><strong>B9_399xD0Gn, B9wsg-5nLWa, B9byUCZnXWm...</strong>
                </p>
                <p>
                  - VD: Link đầy đủ sẽ như thế nầy -
                  <strong>https://www.instagram.com/p/B-TXo_GpoRx/</strong>
                </p>
              </div>
            </div>

            <div className="form-submit">
              <div
                className="submit-event btn btn-primary"
                onClick={() => {
                  console.log("1");
                  submit();
                }}
              >
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

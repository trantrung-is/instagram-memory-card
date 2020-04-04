/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

function formaterNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  return num;
}

function FramePage(props) {
  const [profile, setProfile] = useState({});
  //   const [loading, setLoading] = useState(true);
  const [imageOfPost, setImage] = useState({});

  /**
   *
   */
  async function loadProfile(username = "hiiambooo") {
    const res = await fetch(`https://www.instagram.com/${username}/?__a=1`);
    res.json().then((data) => {
      setProfile(data.graphql);
    });
  }
  /**
   *
   */
  async function loadSingleImage(idImage = "B9wsg-5nLWa") {
    const res = await fetch(`https://www.instagram.com/p/${idImage}/?__a=1`);
    res.json().then((data) => {
      setImage(data.graphql);
    });
  }

  useEffect(() => {
    const { username, imageId } = props.location.state;
    loadProfile(username);
    loadSingleImage(imageId);
  }, []);

  //   console.log("loading", loading);
  // console.log("loadProfile", profile);
  // console.log("imageOfPost ==>", imageOfPost);

  const postImage =
    imageOfPost.shortcode_media && imageOfPost.shortcode_media.display_url;
  const mediaList =
    (profile.user &&
      profile.user.edge_owner_to_timeline_media &&
      profile.user.edge_owner_to_timeline_media.edges) ||
    [];

  return (
    <div className="flatform-design flatform-success">
      <div className="flatform-design__inner">
        <div className="flatform-design__inner-child">
          <div
            className="flatform-design__thumbnail-bg"
            style={{
              backgroundImage: `url(${postImage})`,
            }}
          ></div>
          <div className="flatform-design__thumbnail-wrapper">
            <div className="flatform-design__thumbnail">
              <div
                className="flatform-design__thumbnail-inner-bg"
                style={{
                  backgroundImage: `url(${postImage})`,
                }}
              >
                <div className="d-wrap">
                  <div className="d-wrap-inner">
                    <div className="flatform-design__avarta">
                      <div className="avarta">
                        <img
                          src={profile.user && profile.user.profile_pic_url_hd}
                          alt=""
                          className="images"
                        />
                      </div>
                      <span className="name">
                        {(profile.user && profile.user.full_name) || "..."}
                      </span>
                      <p className="username">
                        {(profile.user && profile.user.username) || "..."}
                      </p>
                      <p className="username des">
                        {(profile.user && profile.user.biography) || "..."}
                      </p>
                    </div>
                    <ul className="flatform-design__link">
                      <li className="item posts">
                        <span className="number">
                          {(profile.user &&
                            profile.user.edge_owner_to_timeline_media &&
                            formaterNumber(
                              profile.user.edge_owner_to_timeline_media.count
                            )) ||
                            0}
                        </span>
                        <span class="text">Bài viết</span>
                      </li>
                      <li className="item followed-by">
                        <span className="number">
                          {(profile.user &&
                            profile.user.edge_follow &&
                            formaterNumber(profile.user.edge_follow.count)) ||
                            0}
                        </span>
                        <span class="text">Người theo dõi</span>
                      </li>
                      <li className="item follow">
                        <span className="number">
                          {(profile.user &&
                            profile.user.edge_followed_by &&
                            formaterNumber(
                              profile.user.edge_followed_by.count
                            )) ||
                            0}
                        </span>
                        <span class="text">Đang theo dõi</span>
                      </li>
                    </ul>

                    <ul className="flatform-design__list-image">
                      {mediaList.map((item, index) => (
                        <li keys={index} className="item">
                          <img
                            src={(item.node && item.node.display_url) || ""}
                            className="images"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="flatform-design__button">
                      <div class="btn">Theo Dõi Tôi</div>
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

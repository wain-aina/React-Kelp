import React, { useState } from "react";

const ReviewCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="col-lg-4 col-md-4 pb-4 activity-card">
      <div className="review-card p-2 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              <i className="fa-regular fa-user fa-xs"></i>
            </div>
            <div className="ms-4 c-details">
              <p className="mb-0 recent-post">
                <strong>Jessie did something</strong>
              </p>
              <p className="">1 year ago</p>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className="mt-3 px-2">
          <h4 className="px-1">
            <strong>Jenelle Eats & Sweets</strong>
          </h4>
          <div className="star-rating">
            <div className="px-1">
              <i className="fa-solid fa-star fa-lg"></i>
            </div>
            <div className="px-1">
              <i className="fa-solid fa-star fa-lg"></i>
            </div>
            <div className="px-1">
              <i className="fa-solid fa-star fa-lg"></i>
            </div>
            <div className="px-1">
              <i className="fa-solid fa-star fa-lg"></i>
            </div>
            <div className="px-1">
              <i className="fa-solid fa-star fa-lg"></i>
            </div>
            <div className="px-1 rating-count">20</div>
          </div>
          <div className="place_img mx-auto p-0 mb-3">
            <img
              src="https://www.capitalfm.co.ke/lifestyle/files/2023/08/Snapinsta.app_304939814_618202066419288_2812869633674957596_n_1080-1024x640.jpg"
              alt="Something"
            />
          </div>
        </div>
        <div className={`review px-4 ${isExpanded ? "scrollable-div" : ""}`}>
          <p className="fs-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <span className={`review-content ${isExpanded ? "" : "hide-extra"}`}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
            <a className="read-more" onClick={toggleContent}>
            {isExpanded ? "Show Less" : "Read More"}
          </a>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

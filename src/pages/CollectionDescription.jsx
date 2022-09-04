import React from "react";
import mainImage from "../assets/images/NFT_img.png";

import "../assets/css/collectiondescription.css";
const CollectionDescription = () => {
  return (
    <div className="collection d-flex col justify-content-center  ">
      <div className="collection__container d-flex align-items-start  ">
        <div className="collection__image d-flex justify-content-center m-5 ">
          <img src={mainImage} alt="fireSpot" />
        </div>
        <div className="collection__info m-5">
          <div className="info__gdsc d-flex justify-content-between ">
            <h4 className="info__gdscHeading d-flex px-3">
              Google Developer Students Club
            </h4>
            <div className="info__gdscIcons ">
              <div className="row ">
                <div className="col col1 px-3 p-1 ">col</div>
                <div className="col px-3 p-1">col</div>
                <div className="col col3 px-3 p-1 ">col</div>
              </div>
            </div>
          </div>
          <div className="info__title">
            <h1 className="info__heading px-3">Himalyan Tiger NFT</h1>
          </div>
          <div className="info__ownerViews d-flex p-3 ">
            <p>Owned by </p>
            <span className="info__ownerGdsc">GDSC'GTBIT</span>
            <div className="info__ownerIcons px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>{" "}
              <span>XX views</span>
            </div>
          </div>
          <div className="info__priceBox ">
            <div className=" ">
              <div className="col priceCol px-4 d-flex justify-content-start align-items-center">
                <span className="d-flex">
                <i class="bi bi-clock ">
                  
                </i>
                <p className="px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></span>
              </div>

              <div className="col currentPriceCol  justify-content-start align-items-start px-4 py-2">
                <h1>Current price</h1>
                <div className="d-flex">
                <h2>XXXX</h2>
                
                <span className=" priceDollar text-muted d-flex align-items-center px-3">($XXXX)</span>
                </div>
                <div class="buttons">
                  <button class="btn-hover color-1">Buy Now</button>
                  <button class="color-2">Make Offer</button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CollectionDescription;
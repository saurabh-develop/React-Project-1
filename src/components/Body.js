import React from "react";
import { Link } from "react-router-dom";

function body() {
  return (
    <>
      <div className="body-container">
        <div className="left-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <span className="content">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BESTs AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </span>
          <div className="button">
            <button className="shop-button btn">Shop Now</button>
            <button className="category-button btn">Category</button>
          </div>
          <div className="shop-link">
            Also Available On
            <br />
            <Link to="https://www.flipkart.com/search?q=nike+shoes+men&sid=osp%2Ccil%2C1cu&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&as-pos=1&as-type=RECENT&suggestionId=nike+shoes+men%7CMen%E2%80%99s+Sports+Shoes&requestId=5506cd6a-a960-436e-a401-9a58d3ecbc85&as-backfill=on">
              <img className="amazaon-link" src="flipkart.png" alt="img"></img>
            </Link>
            <Link to="https://www.amazon.in/s?k=nike+shoes&crid=3M1NRZYJ7YE6A&sprefix=nike+shoes%2Caps%2C256&ref=nb_sb_noss_1">
              <img className="amazaon-link" src="amazon.png" alt="img"></img>
            </Link>
          </div>
        </div>
        <div className="right-content">
          <img className="shoes-img" src="shoes.png" alt="img"></img>
        </div>
      </div>
    </>
  );
}

export default body;

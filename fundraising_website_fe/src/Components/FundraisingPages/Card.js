import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const FundraisingCard = ({ event }) => {
  const { id, title, description, image_url: imageURL } = event;

  return (
    <div className="col-md-4">
      <div
        className="card mb-4 shadow-sm d-flex flex-column"
        style={{ height: 400 }}
      >
        <img src={imageURL} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description.length > 50 ? (
              <>
                {description.substring(0, 100)}...
                <Link to={`/fundraising-page/${id}`} className="stretched-link">
                  Read More
                </Link>
              </>
            ) : (
              description
            )}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <button
              type="button"
              className="btn btn-sm"
              style={{ backgroundColor: "rgb(61, 82, 160)", color: "white" }}
            >
              View More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundraisingCard;

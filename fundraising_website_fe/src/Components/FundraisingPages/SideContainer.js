import React from "react";
import { Link } from "react-router-dom";
import "./sideContainer.css";

const SideContainer = (props) => {
  const { donations, id } = props;

  return (
    <div className="card fixed-right mb-3" style={{ width: "100%" }}>
      <div className="card-body">
        <Link
          to={`/fundraising-page/${id}/donation-form`}
          className="btn mb-5"
          style={{
            backgroundColor: "rgb(61, 82, 160)",
            color: "white",
            width: "100%",
          }}
        >
          Donate Now
        </Link>
        <div className="mb-2">
          <h4>Recent Donations</h4>
        </div>

        <ul className="list-group list-group-flush mt-3">
          {donations &&
            donations
              .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sort by date in descending order
              .slice(0, 5) // Take only the first 5 donations
              .map((donation) => {
                const { amount, id, user_id: userId } = donation;
                return (
                  <div className="row" key={id}>
                    <div className="col-md-6">
                      <h6>{userId}</h6>
                    </div>
                    <div className="col-md-6">
                      <h6>{amount} points</h6>
                    </div>
                    <hr />
                  </div>
                );
              })}
        </ul>
      </div>
    </div>
  );
};

export default SideContainer;

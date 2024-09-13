import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SideContainer from "./SideContainer";
import { fetchFundraisingPageByID } from "../../actions/fundraisingPageActions";
import { getComments } from "../../actions/commentsAction";

const FundraisingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, page, error } = useSelector(
    (state) => state.fundraisingPage
  );

  const { comments_loading, comments, comments_error } = useSelector(
    (state) => state.comments
  );

  useEffect(() => {
    dispatch(fetchFundraisingPageByID(id));
    dispatch(getComments(id));
  }, [dispatch, id]);

  const {
    title,
    description,
    Donations: donations,
    image_url: imageURL,
    version,
  } = page || {};

  if (loading || comments_loading) return <p>Loading...</p>;
  if (error || comments_error) return <p>Error: {error}</p>;
  if (!page || !comments) return <p>No page found</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mb-3">
          <h2>{title}</h2>
        </div>
        <div
          className="col-md-7"
          style={{
            marginRight: "63px",
          }}
        >
          <img
            src={imageURL}
            className="card-img-top rounded mb-3"
            alt={title}
            style={{ height: "300px" }}
          />
          <h4>Story</h4>
          <p className="mb-5">{description}</p>
        </div>

        <div className="col-md-4">
          <SideContainer comments={comments} donations={donations} id={id} />
        </div>

        <div className="col-md-8">
          {version === "motivation" && <h4 className="mb-5">Messages</h4>}

          {version === "motivation" &&
            comments.map((comment) => {
              const { amount, user_id: userId } = donations.find(
                (d) => d.id === comment.donation_id
              );

              return (
                <div className="row">
                  <div className="col-md-1">
                    <div>
                      <i
                        className="bi bi-person-circle"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h6>{userId}</h6>
                    <p>{comment.comment}</p>
                  </div>
                  <div className="col-md-3">
                    <h6>{amount} points</h6>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FundraisingPage;

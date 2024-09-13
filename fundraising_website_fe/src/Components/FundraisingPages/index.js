import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFundraisingPages } from "../../actions/fundraisingPageActions";
import Card from "./Card";

const FundraisingPages = () => {
  const dispatch = useDispatch();
  const { loading, pages, error } = useSelector(
    (state) => state.fundraisingPages
  );

  useEffect(() => {
    dispatch(fetchFundraisingPages());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pages && (
        <div className="container mt-5 mb-5">
          <div className="row">
            {pages.map((page, index) => (
              <Card key={index} event={page} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FundraisingPages;

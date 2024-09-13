import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { createComment } from "../../actions/commentsAction";
import { createDonation } from "../../actions/donationAction";
import { updateUserInfo, fetchUser } from "../../actions/userActions";
import { fetchFundraisingPageByID } from "../../actions/fundraisingPageActions";
import { getComments } from "../../actions/commentsAction";
import "./DonationForm.css";

const DonationForm = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { version } = useSelector((state) => state.fundraisingPage.page);

  const validationSchema = Yup.object({
    amount: Yup.number()
      .required("Required")
      .positive("Must be a positive number")
      .max(
        user?.points_remaining,
        `You have ${user?.points_remaining} points remaining`
      ),
    comment: Yup.string(),
  });

  const initialValues = {
    amount: "",
    comment: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      // Create the donation
      const donation = await dispatch(
        createDonation({
          amount: `${values.amount}`,
          page_id: `${id}`,
          user_id: `${user.id}`,
        })
      );

      if (donation && donation.id) {
        const userInfo = {
          ...user,
          points_remaining: user.points_remaining - values.amount,
        };

        // update the user information with remaining points
        await dispatch(updateUserInfo(userInfo));
        await dispatch(fetchUser(user.id));
        await dispatch(fetchFundraisingPageByID(id));

        // Create the comment if motivational messages page
        if (version === "motivation" && values.comment) {
          await dispatch(getComments(id));
          await dispatch(
            createComment({
              comment: `${values.comment}`,
              page_id: `${id}`,
              donation_id: `${donation.id}`,
            })
          );
        }
        toast.success("Donation Successfull!");
        navigate(`/fundraising-page/${id}`);
      } else {
        throw new Error("Failed to create donation");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border rounded p-4">
            <h4 className="text-center mb-4">Donation Form</h4>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, handleChange }) => (
                <Form>
                  <div className="form-group mb-4">
                    <label htmlFor="amount">
                      points<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="input-group">
                      <Field
                        type="number"
                        name="amount"
                        onChange={handleChange}
                        className={`form-control ${
                          errors.amount ? "error" : ""
                        }`}
                      />
                    </div>
                    <ErrorMessage
                      name="amount"
                      component="div"
                      className="error-message"
                    />
                  </div>

                  {version === "motivation" && (
                    <div className="form-group mb-4">
                      <label htmlFor="comment">
                        What motivated you to donate for our cause?
                      </label>
                      <Field
                        as="textarea"
                        name="comment"
                        className="form-control"
                      />
                      <Alert variant="danger" className="mt-3">
                        Please do not enter any personally identifiable
                        information in this section.
                      </Alert>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn btn-block mt-4"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: "rgb(61, 82, 160)",
                      color: "white",
                    }}
                  >
                    Donate
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;

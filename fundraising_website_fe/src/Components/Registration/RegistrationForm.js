import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Field } from "formik";
import { Alert } from "react-bootstrap";

const RegistrationForm = (props) => {
  const { isSubmitting, values, handleChange, setFieldValue } =
    props.formikProps;
  const users = useSelector((state) => state.fetchAllUsers.users);

  useEffect(() => {
    const getValues = () => {
      let id = Math.floor(Math.random() * 1000000);
      let user = users.find((user) => user.id === id);
      if (user) {
        getValues();
      } else {
        setFieldValue("id", id);
      }
    };

    getValues();
  }, [setFieldValue, users]);

  return (
    <div className="form-group">
      <label required htmlFor="id">
        Participant ID <span className="required"></span>
      </label>
      <Field
        className="form-control"
        required
        type="number"
        name="id"
        disabled
        value={values.id}
        onChange={handleChange}
      />

      <Alert variant="info" className="mt-3">
        Please remember this Participant ID and enter this number in the survey.
      </Alert>

      <button
        variant="primary"
        disabled={isSubmitting}
        type="submit"
        className="btn mt-3 d-grid gap-2 col-6 mx-auto"
        style={{
          backgroundColor: "rgb(61, 82, 160)",
          color: "white",
          width: "50%",
        }}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default RegistrationForm;

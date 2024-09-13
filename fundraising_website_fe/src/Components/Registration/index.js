import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../actions/userActions";
import "./registration.css";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.auth);
  const { isAuthenticated } = userRegister;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/fundraising-pages");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="register-container border rounded p-4">
            <h4 className="text-center mb-4">Register</h4>
            <Formik
              initialValues={{ id: "" }}
              enableReinitialize={true}
              validationSchema={Yup.object({
                id: Yup.number().required("Required"),
              })}
              onSubmit={(values, actions) => {
                dispatch(
                  registerUser({
                    id: values.id,
                    points_remaining: 500,
                  })
                );

                actions.setSubmitting(false);
              }}
            >
              {(formikProps) => {
                return (
                  <Form>
                    <RegistrationForm formikProps={formikProps} />
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

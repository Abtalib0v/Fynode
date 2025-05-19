import React, { } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from "../../../lib/firebase";
import {toast, ToastContainer} from "react-toastify"


const Register = () => {
  const validationSchema = Yup.object().shape({
    email:Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
  const initialValue = {
    email:"",
    password: "",
    confirmPassword: "",
  };
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialValue,
    onSubmit: (value) => {
const payload ={
    email:value.email,
    password:value.password
}
createUserWithEmailAndPassword(auth, payload.email,payload.password).then((res)=>{
sessionStorage.setItem("token", res._tokenResponse.idToken)
}).catch((err) => {
    console.log(err)
    toast.error(err.message)
})
},
  });

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for an account
          </h2>

          <form
            type="submit"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className="space-y-6"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                  name="email"
                  type="email"
                  autoComplete="email"
                  id="email"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className=" text-red-500">{formik.errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className=" text-red-500">{formik.errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="confirmPassword"
                  type="password"
                  autoComplete="confirm-password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-red-500">
                      {formik.errors.confirmPassword}
                    </p>
                  )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              >
                Register Account
              </button>
            </div>
          </form>
        </div>
      </div> 
      <ToastContainer/>
    </div>
   
  );
};

export default Register;

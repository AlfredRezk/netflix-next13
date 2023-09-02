"use client";

import { Field, Form, Formik } from "formik";
import GoogleIcon from "@/public/icons/GoogleIcon";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { registerFormFields } from "@/config/constants";



const Register = () => {
  const initalValues = { firstName:'', lastName:'', email: "", password: "" };
  const {createUser, signupProvider}= useAuth()

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    const displayName = `${value.firstName} ${values.lastName}`;
    createUser(values.email, values.password, displayName);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initalValues}>
      <Form>
        <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
          Sign Up
        </h2>

        {registerFormFields.map(field=>(
            <div className="relative z-0 mb-6" key={field.name}>
            <Field type={field.type} name={field.name} id={field.name} placeholder="" className="peer"/>
            <label htmlFor={field.name}>{field.label}</label>
            </div>
        ))}

        <div className="flex justify-center">
          <Link
            className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-red-500"
            href="/login"
          >
            Sign In
          </Link>
        </div>
        <button className="btn-danger" type="submit">
        Register
        </button>
        <button
          className="flex items-center justify-between btn-danger"
          type="button"
          onClick={signupProvider}
        >
          Continue with Google
          <GoogleIcon />
        </button>
      </Form>
    </Formik>
  );
};

export default Register;

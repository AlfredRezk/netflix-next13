"use client";

import { Field, Form, Formik } from "formik";
import GoogleIcon from "@/public/icons/GoogleIcon";
import Link from "next/link";
import React from "react";
import { loginFormFiels } from "@/config/constants";

const formFields = [
    { type: "text", name: "email", label:'Email'},
    { type: "password", name: "password", label:'Email'},
  ];

const Login = () => {

  const initalValues = { email: "", password: "" };
  const handleSubmit = (values) => {};

  return (
    <Formik onSubmit={handleSubmit} initialValues={initalValues}>
      <Form>
        <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
          Sign In
        </h2>

        {loginFormFiels.map(field=>(
            <div className="relative z-0 mb-6" key={field.name}>
            <Field type={field.type} name={field.name} id={field.name} placeholder="" className="peer"/>
            <label htmlFor={field.name}>{field.label}</label>
            </div>
        ))}
        <div className="flex justify-between">
          <span
            className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-red-500"
            onClick={() => forgotPassword(email)}
          >
            Forgot Password
          </span>
          <Link
            className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-red-500"
            href="/register"
          >
            Sign Up
          </Link>
        </div>
        <button className="btn-danger" type="submit">
          Sign In
        </button>
        <button
          className="flex items-center justify-between btn-danger"
          type="button"
        >
          Continue with Google
          <GoogleIcon />
        </button>
      </Form>
    </Formik>
  );
};

export default Login;

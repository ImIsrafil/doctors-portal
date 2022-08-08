import React from 'react'
import auth from "../../Firebase/firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailCreateLoading,
    emailCreateError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName: data.name})
    console.log("Updated Profile done");
    navigate('/appointment');
  };

  if(emailCreateLoading || updating || googleSignInLoading) {
    return <Loading></Loading>
  }

  if(googleSignInError || emailCreateError || updateError) {
    signInError = <p className="text-red text-center font-bold">{googleSignInError.message || emailCreateError.message || updateError.message}</p>
  }

  if(googleUser || emailUser) {
    console.log(googleUser?googleUser:emailUser);
  }
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">What is your name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  }
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-sm"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt">{errors.name.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Please Provide a Valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-sm"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt">{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt">{errors.email.message}</span>
                )}
              </label>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 character",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-sm"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt">{errors.password.message}</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt">{errors.password.message}</span>
                )}
              </label>
            </div>
            {
              signInError
            }
            <input type="submit" className="btn w-full" value="Sign Up" />
          </form>
          <p className="text-center">New to doctors portal? <Link className="text-primary" to='/signup'>Create New Account</Link> </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp

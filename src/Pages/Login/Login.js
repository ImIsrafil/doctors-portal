import React, { useEffect } from "react";
import auth from "../../Firebase/firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, googleUser, googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, emailUser, emailSignInLoading, emailSignInError] = useSignInWithEmailAndPassword(auth);
  let signInError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if(googleUser || emailUser) {
      console.log(googleUser?googleUser:emailUser);
      navigate(from, {replace: true});
    }
  }, [googleUser, emailUser, from, navigate]);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  if(emailSignInLoading || googleSignInLoading) {
    return <Loading></Loading>
  }

  if(googleSignInError || emailSignInError) {
    signInError = <p className="text-red text-center font-bold">{googleSignInError?googleSignInError.message:emailSignInError.message}</p>
  }

  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type="submit" className="btn w-full" value="Login" />
          </form>
          <p className="text-center">New to doctors portal? <Link className="text-primary" to='/signup'>Create New Account</Link> </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

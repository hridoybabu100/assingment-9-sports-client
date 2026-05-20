"use client";

import { authClient } from "@/lib/auth-client";
import { Lock, ArrowRight } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { motion } from "framer-motion";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const newdata = Object.fromEntries(formdata.entries());

    const { data, error } = await authClient.signIn.email({
      email: newdata.email,
      password: newdata.password,
    });

    // console.log(data, error);

    if (data) {
      toast.success("Login successfull complete");
      redirect("/");
    }
    if (error) {
      toast.error("Login faild! please again try.");
      redirect("/");
    }
  };

  const handleGoogle = async () => {
     await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050b18] px-4 py-10">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Floating Animation */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-20 top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl sm:p-10"
      >
        {/* Card Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

        {/* Header */}
        <div className="relative z-10 mb-10 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
            <Lock className="text-white" />
          </div>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Welcome Back
          </h1>

          <p className="mt-4 text-gray-400">
            Login to access your sports dashboard 🚀
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={onSubmit}
          className="relative z-10 flex flex-col gap-7"
          
        >
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="mb-2 text-sm font-semibold text-gray-300">
              Email Address
            </Label>

            <Input
              placeholder="john@example.com"
              className="rounded-2xl"
              classNames={{
                inputWrapper:
                  "h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500 focus-within:border-cyan-500",
                input: "text-white placeholder:text-gray-500",
              }}
            />

            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              return null;
            }}
          >
            <Label className="mb-2 text-sm font-semibold text-gray-300">
              Password
            </Label>

            <Input
              placeholder="Enter your password"
              className="rounded-2xl"
              classNames={{
                inputWrapper:
                  "h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500 focus-within:border-cyan-500",
                input: "text-white placeholder:text-gray-500",
              }}
            />

            <Description className="mt-2 text-xs text-gray-500">
              Enter your secure password
            </Description>

            <FieldError />
          </TextField>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-white/10"
              />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex flex-col gap-4">
            {/* Login Button */}
            <Button
              type="submit"
              className="group h-14 w-full rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Login Account
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            {/* Google Login */}
            <Button onClick={handleGoogle}
              variant="secondary"
              className="group h-14 w-full rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
            >
              {/* Google Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                />

                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8C14.7 15 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                />

                <path
                  fill="#4CAF50"
                  d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.1-8l-6.5 5C9.7 39.5 16.3 44 24 44z"
                />

                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6 7.1l6.3 5.3C39.5 36.7 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
                />
              </svg>
              Continue With Google
            </Button>
          </div>

          {/* Bottom Text */}
          <p className="mt-4 text-center text-sm text-gray-400">
            Don&apos;t have an account?
            <Link href={"/register"}>
              <span className="ml-2 cursor-pointer font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300">
                Register
              </span>
            </Link>
          </p>
        </Form>
      </motion.div>
    </div>
  );
};

export default LoginPage;

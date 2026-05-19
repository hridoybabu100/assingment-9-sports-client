"use client";


import { authClient } from "@/lib/auth-client";
import { Check, Sparkles } from "@gravity-ui/icons";
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


const RegisterPage = () => {

    const onSubMit = async (e) => {
      e.preventDefault();
  
      const formdata = new FormData(e.currentTarget);
      const newdata = Object.fromEntries(formdata.entries());

      // console.log('new data', newdata);


      const {data, error} = await authClient.signUp.email({
        name : newdata.name,
        Email : newdata.email,
        Password : newdata.password,
      })

      console.log(data, error);
      


    
    
    };
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050b18] px-4 py-10">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Animated Circle */}
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
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl sm:p-10"
      >

        {/* Card Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

        {/* Header */}
        <div className="relative z-10 mb-10 text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
            <Sparkles className="text-white" />
          </div>

          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Create Account
          </h1>

          <p className="mt-4 text-gray-400">
            Join our modern sports platform today 🚀
          </p>
        </div>

        {/* Form */}
        <Form
          onSubmit={onSubMit}
          className="relative z-10 flex flex-col gap-7"
        >

          {/* Name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="mb-2 text-sm font-semibold text-gray-300">
              Full Name
            </Label>

            <Input
              placeholder="John Doe"
              className="rounded-2xl"
              classNames={{
                inputWrapper:
                  "h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500 focus-within:border-cyan-500",
                input:
                  "text-white placeholder:text-gray-500",
              }}
            />

            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
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
                input:
                  "text-white placeholder:text-gray-500",
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

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
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
                input:
                  "text-white placeholder:text-gray-500",
              }}
            />

            <Description className="mt-2 text-xs text-gray-500">
              Must contain 8+ characters, 1 uppercase & 1 number
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">

            {/* Submit */}
            <Button
              type="submit"
              className="group h-14 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              <Check className="transition-transform duration-300 group-hover:rotate-12" />
              Create Account
            </Button>

            {/* Reset */}
            <Button
              type="reset"
              variant="secondary"
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/10"
            >
              Reset
            </Button>
          </div>

          {/* Bottom Text */}
          <p className="mt-4 text-center text-sm text-gray-400">
            Already have an account?
           <Link href={'/login'}>
            <span className="ml-2 cursor-pointer font-semibold text-cyan-400 transition-colors duration-300 hover:text-cyan-300">
              Login
            </span>
           </Link>
          </p>
        </Form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
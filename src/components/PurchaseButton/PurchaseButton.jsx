"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { ShoppingCart, Sparkles } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const PurchaseButton = ({data, token}) => {

     const { data: session } = authClient.useSession();
      const users = session;
      const user = users?.user;
      // console.log(user);

      
      

    const purchaseHandle = async() => {
        const newData = {
            username : user.name,
            userId : user.id,
            email : user.email,
            userimage : user.image,
            playerId : data._id,
            country : data.country,
            team : data.team,
            salary : data.salary,
            description : data.description,
            imageUrl : data.image,
            sports : data.sports,
            category : data.category,
            playername : data.name
             
        }
       

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/purchase`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                authorization : `Bearer ${token}`
            },
            body : JSON.stringify(newData)
        })
        const purchaseData = await res.json();
        // console.log("New Data", purchaseData);
        
        if(purchaseData){
            toast.success(`${data.name} is added. check the purchase list.`);
            redirect('/purchase')
        }
        // console.log('New data', newData);
        
    }
  return (
    <div className="pt-5">
      <motion.button
        whileHover={{
          scale: 1.03,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-4 font-bold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300"
      >
        {/* Animated Glow */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-white/20 to-cyan-400/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

        {/* Shine Animation */}
        <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]"></span>

        {/* Pulse Background */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        {/* Icon */}
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative z-10"
        >
          <ShoppingCart className="h-5 w-5" />
        </motion.div>

        {/* Text */}
        <span onClick={purchaseHandle} className="relative z-10 text-base tracking-wide">
          Purchase Player
        </span>

        {/* Sparkle */}
        <Sparkles className="relative z-10 h-5 w-5 text-cyan-100 transition-transform duration-300 group-hover:rotate-180" />
      </motion.button>
    </div>
  );
};

export default PurchaseButton;

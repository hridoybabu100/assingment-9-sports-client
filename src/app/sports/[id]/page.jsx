
import { DeleteButton } from "@/components/DeleteButton/DeleteButton";
import { EditModal } from "@/components/EditModal/EditModal";
import PurchaseButton from "@/components/PurchaseButton/PurchaseButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const SportsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers : await headers()
  });

  


  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports/${id}`,{
    headers :{
      authorization : `Bearer ${token}`
    }
  });

  const data = await res.json();

  // console.log('New data', data);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] px-4 py-8 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-6xl">
        <h1 className="text-center text-3xl font-bold text-cyan-600 sm:text-4xl lg:text-5xl">
          Player Details
        </h1>
      </div>

      {/* Card */}
      <div className="group mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-white/20 bg-white/70 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-cyan-500/20">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side Image */}
          <div className="relative flex items-center justify-center bg-linear-to-br from-cyan-500/10 to-blue-500/10 p-6 sm:p-10">
            <div className="relative">
              <Image
                src={data.image}
                width={400}
                height={400}
                alt={data.name}
                className="h-52 w-52 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />

              {/* Floating Blur */}
              <div className="absolute -bottom-5 left-1/2 h-10 w-40 -translate-x-1/2 rounded-full bg-cyan-400/30 blur-2xl"></div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            {/* Top */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {data.name}
              </h2>

              <span className="w-fit rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
                {data.sports}
              </span>
            </div>

            {/* Description */}
            <p className="mb-8 text-base leading-8 text-gray-600 sm:text-lg">
              {data.description}
            </p>

            {/* Info Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-slate-100 px-5 py-4">
                <span className="text-gray-500">Country</span>
                <span className="font-semibold text-gray-900">
                  {data.country}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-100 px-5 py-4">
                <span className="text-gray-500">Team</span>
                <span className="font-semibold text-gray-900">{data.team}</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-100 px-5 py-4">
                <span className="text-gray-500">Salary</span>
                <span className="font-bold text-black">{data.salary}</span>
              </div>
            </div>

              <PurchaseButton data={data} token={token}></PurchaseButton>

            {/* Buttons */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Go Back */}
           <Link href={'/'}>
              <button className="rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30 w-full h-full">
                Go Back 
              </button>
           </Link>

              {/* View Profile */}
             <Link href={'/profile'}>
              <button className="rounded-2xl w-full h-full border border-cyan-500 bg-white px-6 py-4 font-semibold text-cyan-600 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-lg">
              View Profile
              </button>
              </Link>

              {/* Edit Button */}
              <EditModal data={data}></EditModal>

              {/* Delete Button */}
              <DeleteButton data={data}></DeleteButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsDetailsPage;

import SportsCard from "@/components/SportCard/SportCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export const dynamic = 'force-dynamic';

const SportsPage = async() => {

  

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`
  
    );
    const sports = await res.json();
    
    
    return (
      <div className="bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33]">
          <div className="max-w-[80%] mx-auto">
           <h1 className="text-4xl font-bold py-8 text-white">All- Palyers </h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                 {
            sports.map((spot) => <SportsCard key={spot._id} spot={spot}></SportsCard>)
           }
           </div>
          
        </div>
      </div>
    );
};

export default SportsPage;
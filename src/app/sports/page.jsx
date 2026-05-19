import SportsCard from "@/components/SportCard/SportCard";


const SportsPage = async() => {

    const res = await fetch("http://localhost:5000/sports");
    const sports = await res.json();
    // console.log("all Sports", sport);
    
    return (
      <div className=" bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33]">
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
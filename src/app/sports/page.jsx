import SportsClient from "@/components/SportsClient/SportsClient";


export const dynamic = "force-dynamic";

const SportsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports`, {
    cache: "no-store",
  });

  const sports = await res.json();

  return <SportsClient sports={sports} />;
};

export default SportsPage;
import ExtraData from "@/components/ExtraData/ExtraData";
import ExtraSportsSection from "@/components/ExtraSection/ExtraSection";
import Hero from "@/components/Hero/Hero";
import SportsProjectsSection from "@/components/ProjectSection/SportProjectSection";
import RatingSection from "@/components/Rating/rating";
import SportsFeatureSection from "@/components/SportFeature/SportsFeature";
import StarSection from "@/components/StarSection/StarSection";


export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <ExtraData></ExtraData>
     <StarSection></StarSection>
     <RatingSection></RatingSection>
     <SportsFeatureSection></SportsFeatureSection>
     <SportsProjectsSection></SportsProjectsSection>
     <ExtraSportsSection></ExtraSportsSection>
    </div>
  );
}

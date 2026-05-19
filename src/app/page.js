import ExtraSportsSection from "@/components/ExtraSection/ExtraSection";
import Hero from "@/components/Hero/Hero";
import SportsProjectsSection from "@/components/ProjectSection/SportProjectSection";
import RatingSection from "@/components/Rating/rating";
import SportsFeatureSection from "@/components/SportFeature/SportsFeature";


export default function Home() {
  return (
    <div>
     <Hero></Hero>
     <RatingSection></RatingSection>
     <SportsFeatureSection></SportsFeatureSection>
     <SportsProjectsSection></SportsProjectsSection>
     <ExtraSportsSection></ExtraSportsSection>
    </div>
  );
}

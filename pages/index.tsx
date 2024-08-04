import PreviewPanel from "@/components/PreviewPanel";
import { Footer, Tool } from "@/components/sections/Footer";
import { NextPage } from "next";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import { EditorSection } from "../components/sections/EditorSection";
import FaqSection from "@/components/sections/FaqSection";
import PromoBanner from "@/components/sections/THPromoBanner";

interface HomeProps {
  tools: Tool[];
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <EditorSection />

      <HowItWorksSection />

      <PromoBanner />

      <FaqSection />

      <Footer tools={props.tools} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const request = await fetch("https://tweethunter.io/api/tools");
  const response = await request.json();
  const { tools } = response;

  return {
    props: { tools },
  };
};

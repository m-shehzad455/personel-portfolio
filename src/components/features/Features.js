import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe , FaBars} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className=" w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" desc="What i do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
           icon={<FaBars />}
          title="Business Stratagy"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
          
        />

        <Card
          icon={<AiFillAppstore />}
          title="App Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
         <Card
          icon={<SiProgress />}
          title="SEO Optimisation"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
         <Card
          icon={<FaMobile  />}
          title="Mobile Development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
         <Card
          icon={<SiAntdesign  />}
          title="UX Design"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
         <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        
      </div>
    </section>
  );
};

export default Features;

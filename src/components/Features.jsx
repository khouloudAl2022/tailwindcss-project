import { useState } from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
  ]);

  return (
    <section>
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[850px]  mx-auto max-w-full">
          {items.map((item) => (
            <FeatureBox
            
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

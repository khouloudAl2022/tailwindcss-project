import { useState } from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items, setItems] = useState([
    {
      icon: "icon_access-anywhere",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
    {
      icon: "icon_access-anywhere",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
    {
      icon: "icon_access-anywhere",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
    {
      icon: "icon_access-anywhere",
      title: "Access your file anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicin",
    },
  ]);

  return (
    <section>
      <div className="container">
        {items.map((item) => (
          <FeatureBox key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default Features;

import React from "react";
import { useParams } from "react-router-dom";

const Zones = (props) => {
  const allowed = useParams();

  console.log(props);

  const zonesFromProps = Object.entries(props).filter(
    (item) => item["zone"] == "Bagmati"
  );

  console.log(zonesFromProps);

  // const filterZones = props.map((item) => {
  //   console.log(item);
  // });

  // const filterZone = raw.filter((zone) => {
  //   console.log(zone);
  // });

  // objProp.map((myZone) => {
  //   console.log(myZone);
  //   return <></>;
  // });

  return <div>I am {}</div>;
};

export default Zones;

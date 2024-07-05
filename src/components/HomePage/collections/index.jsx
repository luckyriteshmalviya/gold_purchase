import React, {useContext, useState} from "react";
import AppContext from "../../../context/context";
import SimpleSlider from "../../Slider";
import CollectionCard from "./collection.card";
import GrowthChart from "../growthChart";
import Dialog from "../../Dialog";

const Collections = (props) => {
  const ctx = useContext(AppContext);
  const [dialogInfo, setDialogInfo] = useState(null)

  return (
    <div className={"flex space-x-0 mb-6 items-center relative flex-col"}>
      <div className="w-full">
        <SimpleSlider autoPlay={false} slides={ctx.investments.map((invest, index) => {
            return <CollectionCard
                key={index}
                data={invest}
                viewDialog={() => setDialogInfo(invest)}
            />;
        })} interval={3000}/>
      </div>


        {dialogInfo && <Dialog onClose={() => setDialogInfo(null)}>
            <div className={"w-full mt-0"}>
                <GrowthChart quickView/>
            </div>
        </Dialog>}

    </div>
  );
};

export default Collections;

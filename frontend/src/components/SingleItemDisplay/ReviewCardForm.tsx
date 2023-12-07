import { FunctionComponent } from "react";
import ContainerCard from "./ContainerCard";

const ReviewCardForm: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1350.33px] h-[441.59px] text-left text-sm text-light-text-color-body-1 font-heading-h5-bold">
      <ContainerCard sectionTitle="/group-172.svg" />
      <ContainerCard
        sectionTitle="/group-1721.svg"
        rectangleDivTop="117.77px"
        rectangleDivLeft="731.67px"
      />
      <h1 className="m-0 absolute top-[0px] left-[0px] text-20xl tracking-[0.01em] leading-[120%] font-bold font-inherit text-light-text-color-title inline-block w-[289.33px] h-[64.86px]">
        Reviews (2)
      </h1>
    </div>
  );
};

export default ReviewCardForm;

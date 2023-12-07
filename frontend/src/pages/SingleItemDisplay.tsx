import { FunctionComponent } from "react";
import ReviewCardForm from "../components/SingleItemDisplay/ReviewCardForm";
import WishlistCard from "../components/SingleItemDisplay/WishlistCard";
import { NavBar } from "../components/NavBar/NavBar";

const SingleItemDescription: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[1908px] overflow-hidden">
      <main className="absolute top-[91px] left-[0px] w-[1920px] h-[1817px] text-left text-5xl text-light-text-color-title font-heading-h5-bold">
        <section className="absolute top-[0px] left-[0px] bg-light-theme-background w-[1920px] h-[1817px]" />
        <section className="absolute top-[1289px] left-[285px] w-[1350.33px] h-[441.59px]">
          <ReviewCardForm />
        </section>
        <div className="absolute top-[35px] left-[970px] w-[909px] h-[1170px] overflow-hidden">
          <WishlistCard />
        </div>
        <div className="absolute top-[35px] left-[41px] w-[929px] h-[1170px] overflow-hidden">
          <div className="absolute top-[166.48px] left-[69px] w-[810.67px] h-[956.32px]">
            <div className="absolute top-[735.03px] left-[0px] rounded-lg bg-light-fills-color-image-placeholder w-64 h-[221.29px]" />
            <div className="absolute top-[735.03px] left-[277.33px] rounded-lg bg-light-fills-color-image-placeholder w-64 h-[221.29px]" />
            <div className="absolute top-[735.03px] left-[554.67px] rounded-lg bg-light-fills-color-image-placeholder w-64 h-[221.29px]" />
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-light-fills-color-image-placeholder w-[810.67px] h-[714.33px]" />
            <div className="absolute top-[0px] left-[128px] w-[541.33px] h-[713.44px] overflow-hidden">
              <img
                className="absolute h-[calc(100%_-_0.83px)] w-[calc(100%_-_0.33px)] top-[0px] right-[0.33px] bottom-[0.83px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/49-ecfb9d65a39240b1b9fbf62e5a84f812jpg@2x.png"
              />
            </div>
          </div>
          <h3 className="m-0 absolute top-[60.22px] left-[69px] text-inherit tracking-[0.01em] leading-[120%] font-bold font-inherit inline-block w-[516px] h-[40.02px]">{`Grocery > Fruits > Japan Oranges`}</h3>
        </div>
      </main>
      <NavBar />
    </div>
  );
};

export default SingleItemDescription;

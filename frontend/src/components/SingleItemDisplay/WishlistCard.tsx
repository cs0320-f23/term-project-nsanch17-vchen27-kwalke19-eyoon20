import { FunctionComponent } from "react";

const WishlistCard: FunctionComponent = () => {
  return (
    <div className="absolute top-[185px] left-[33px] w-[842px] h-[1014px] text-left text-base text-secondary-green font-heading-h5-bold">
      <img
        className="absolute top-[914.58px] left-[78px] w-[23.33px] h-[21.89px]"
        alt=""
        src="/16schedulernotooltip.svg"
      />
      <div className="absolute top-[267.62px] left-[19.68px] w-[822.32px] h-[746.38px] overflow-hidden">
        <div className="absolute top-[405.38px] left-[18.32px] flex flex-row items-start justify-start gap-[29px]">
          <div className="rounded-lg box-border w-[182px] h-[62px] flex flex-row items-center justify-center py-4 px-6 border-[2px] border-solid border-secondary-green">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <b className="relative tracking-[0.01em] leading-[120%]">
                Wishlist
              </b>
              <div className="relative w-6 h-6">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded" />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/heart.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-secondary-green w-[180px] h-[60px] flex flex-row items-center justify-center py-4 px-6 box-border text-light-theme-background">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <b className="relative tracking-[0.01em] leading-[120%]">
                Message
              </b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/communication--chat-dots.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[81.41px] left-[18.67px] tracking-[0.01em] leading-[125%] text-text-body-text inline-block w-[672px] h-[303.59px]">
          <p className="m-0">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company.
          </p>
        </div>
        <h3 className="m-0 absolute top-[20.69px] left-[18.67px] text-5xl tracking-[0.01em] leading-[120%] font-bold font-inherit text-light-text-color-title inline-block w-[241.33px] h-[40.02px]">
          Description
        </h3>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[842px] h-[237.89px] overflow-hidden text-35xl text-text-title-text">
        <div className="absolute top-[29px] left-[37px] h-[231px] flex flex-col items-start justify-start gap-[83px]">
          <h1 className="m-0 relative text-inherit leading-[120%] font-bold font-inherit inline-block w-[691px] h-[66px] shrink-0">
            Urbano Jacket – Price is negotiable!
          </h1>
          <b className="relative text-17xl leading-[120%] inline-block text-secondary-green w-[121px] h-[62px] shrink-0">
            $99
          </b>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;

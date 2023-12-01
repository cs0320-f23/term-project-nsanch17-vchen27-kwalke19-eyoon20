import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ContainerCardType = {
  sectionTitle?: string;

  /** Style props */
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivLeft?: CSSProperties["left"];
};

const ContainerCard: FunctionComponent<ContainerCardType> = ({
  sectionTitle,
  rectangleDivTop,
  rectangleDivLeft,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [rectangleDivTop, rectangleDivLeft]);

  return (
    <div
      className="absolute top-[135.24px] left-[0px] w-[618.67px] h-[306.35px] text-left text-sm text-light-text-color-body-1 font-heading-h5-bold"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[618.67px] h-[306.35px]">
        <div className="absolute top-[256.67px] left-[117.33px] tracking-[0.01em] leading-[130%] inline-block w-[501.33px] h-[49.68px]">
          Thank you for the article that was made, it really provides insight
          and knowledge that I didn't know before.
        </div>
        <div className="absolute top-[113.16px] left-[117.33px] rounded bg-light-fills-color-image-placeholder w-[117.33px] h-[121.44px]" />
        <div className="absolute top-[113.16px] left-[245.33px] rounded bg-light-fills-color-image-placeholder w-[117.33px] h-[121.44px]" />
        <div className="absolute top-[113.16px] left-[373.33px] rounded bg-light-fills-color-image-placeholder w-[117.33px] h-[121.44px]" />
        <div className="absolute top-[113.16px] left-[501.33px] rounded bg-light-fills-color-image-placeholder w-[117.33px] h-[121.44px]" />
        <div className="absolute top-[63.48px] left-[117.33px] text-base tracking-[0.01em] leading-[125%] text-light-text-color-body-2 inline-block w-[261.33px] h-[27.6px]">
          2 March 2021 at 06.30 pm
        </div>
        <img
          className="absolute top-[5.52px] left-[316px] w-[189.33px] h-[33.12px]"
          alt=""
          src={sectionTitle}
        />
        <h3 className="m-0 absolute top-[1.38px] left-[117.33px] text-5xl tracking-[0.01em] leading-[120%] font-bold font-inherit text-light-text-color-title inline-block w-[189.33px] h-[40.02px]">
          Alex Iwobi
        </h3>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-light-fills-color-image-placeholder w-[85.33px] h-[88.32px]" />
      </div>
    </div>
  );
};

export default ContainerCard;

import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

// Define a TypeScript interface for the component's props
interface StarsProps {
  className?: string;
  mode?: string; // Assuming mode is a string, adjust as needed
  rating: string; // or number if rating is a number
  starDivClassName?: string;
  starDivClassNameOverride?: string; // Added prop
  starHalfNoNoneNoClassName?: string;
  starHalfNoNoneNoClassName1?: string; // Added prop
  starHalfNoNoneNoClassNameOverride?: string; // Added prop
}

const Stars: React.FC<StarsProps> = ({
  className,
  mode,
  rating,
  starDivClassName,
  starHalfNoNoneNoClassName,
}) => {
  const totalStars = 5;
  const filledStars = parseInt(rating, 10);

  return (
    <div className={className}>
      {[...Array(totalStars)].map((star, index) => {
        return index < filledStars ? (
          <FaStar key={index} className={starDivClassName} />
        ) : (
          <FaRegStar key={index} className={starHalfNoNoneNoClassName} />
        );
      })}
    </div>
  );
};

export default Stars;

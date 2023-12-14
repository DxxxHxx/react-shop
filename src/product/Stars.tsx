import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";

interface IStarsProps {
  rate: number;
}
export default function Stars({ rate }: IStarsProps) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(rate);
  }, [rate]);

  return (
    <StarRatings
      rating={rating}
      starDimension="20px"
      starSpacing="2px"
      numberOfStars={5}
      starEmptyColor="#544F34"
      starRatedColor="#FACC15"
    />
  );
}

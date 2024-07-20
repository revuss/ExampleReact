import React from "react";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface CardFootProps {
  service: string;
  description: string;
  link_text: string;
  link: string;
}

const CardFoot: React.FC<CardFootProps> = ({
  service,
  description,
  link_text,
  link,
}) => {
  return (
    <>
      <CardFooter className="flex flex-col justify-center">
        <Button className="w-full mx-10">{service}</Button>
        <p className="mt-2">
          {description}
          <Link to={`/${link}`} className="font-medium">
            {link_text}
          </Link>
        </p>
      </CardFooter>
    </>
  );
};

export default CardFoot;

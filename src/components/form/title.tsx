import React from "react";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CardHeaderProps {
  title: string;
  description: string;
}

const CardHead: React.FC<CardHeaderProps> = ({ title, description }) => {
  return (
    <>
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </>
  );
};

export default CardHead;

import React from "react";

interface DateFormatProps {
  startDate: string;
  endDate: string;
}

const DateFormat = ({ startDate, endDate }: DateFormatProps) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
 

  const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (formattedStartDate === formattedEndDate) {
    return <>{formattedStartDate}</>;
  }

  const [startMonth, startDay, startYear] = (formattedStartDate.replace(',', '')).split(" ");
  const [endMonth, endDay, endYear] = (formattedEndDate.replace(',', '')).split(" ");

  const formattedDate = `${startMonth} ${startDay} - ${endDay}, ${startYear}`;

  return <>{formattedDate}</>;
};

export default DateFormat;

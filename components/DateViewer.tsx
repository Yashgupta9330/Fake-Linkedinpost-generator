import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import ReactTimeago from 'react-timeago';
import { FaGlobe } from 'react-icons/fa'; // Import the earth icon

interface TimeAgoWithIconProps {
  date: string;
  subtextColor: string; // Add subtextColor as a prop
}

const TimeAgoWithIcon: React.FC<TimeAgoWithIconProps> = ({ date, subtextColor }) => {
  // Custom formatter for ReactTimeago to show "51m" instead of "51 minutes ago"
  const formatter = (value: any, unit: any, suffix: any) => {
    if (unit === 'second') return `${value}s`;
    if (unit === 'minute') return `${value}m`;
    if (unit === 'hour') return `${value}h`;
    if (unit === 'day') return `${value}d`;
    if (unit === 'week') return `${value}w`;
    if (unit === 'month') return `${value}mo`;
    if (unit === 'year') return `${value}y`;
    return `${value} ${unit}${suffix}`;
  };

  return (
    <Text
      color={subtextColor}
      fontSize={"xs"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      py={0}
      my={0}
    >
      <ReactTimeago date={new Date(date)} formatter={formatter} />
      <Box
        bg={subtextColor}
        borderRadius="full"
        width="1"
        height="1"
        mx="2" // Add horizontal margin
      />
      <FaGlobe color={subtextColor} />
    </Text>
  );
};

export default TimeAgoWithIcon;

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Variants = ({ title, values, selectedValue, onSelect }) => {
  return (
    <Box marginTop={2}>
      <Text fontSize="md">{title}</Text>
      {values.map((value) => (
        <Button
          marginRight={4}
          marginTop={2}
          key={value}
          onClick={() => onSelect(value)}
          variant={value === selectedValue ? "solid" : "ghost"}
        >
          {value}
        </Button>
      ))}
    </Box>
  );
};

export default Variants;

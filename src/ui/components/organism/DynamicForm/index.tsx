import { Button, Flex } from "@chakra-ui/react";
import { Input } from "../../molecules";
import { DynamicFormProps } from "./types";

const pickComponent = (type: "input") => {
  switch (type) {
    case "input":
      return Input;
    default:
      return Input;
  }
};

const Items = ({ components }: DynamicFormProps) =>
  components.map(({ type, label }) => {
    const Component = pickComponent(type);
    return <Component label={label} />;
  });

export const DynamicForm = ({ components }: DynamicFormProps) => {
  return (
    <Flex width="100vw" justifyContent="center" mt="8">
      <Flex
        as="form"
        flexDir="column"
        gap={4}
        w="400px"
      >
        <Items components={components} />
        <Button type="submit" colorScheme="blue">Submit</Button>
      </Flex>
    </Flex>
  );
};

import { Html, Text } from "@react-email/components";

interface HelloEmailProps {
  name: string;
}

export const HelloEmail = ({ name }: HelloEmailProps) => {
  return (
    <Html>
      <Text>Hello {name}</Text>
    </Html>
  );
};

HelloEmail.PreviewProps = {
  name: "World!",
} satisfies HelloEmailProps;

export default HelloEmail;

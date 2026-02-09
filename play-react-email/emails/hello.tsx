import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface HelloEmailProps {
  name: string;
  message: string;
  buttonText: string;
  buttonUrl: string;
}

export const HelloEmail = ({
  name,
  message,
  buttonText,
  buttonUrl,
}: HelloEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Hello, {name}!</Heading>
          <Text style={styles.text}>{message}</Text>
          <Button style={styles.button} href={buttonUrl}>
            {buttonText}
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: "#f4f4f5",
    fontFamily: "sans-serif",
    padding: "40px 0",
  },
  container: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    margin: "0 auto",
    maxWidth: "480px",
    padding: "32px",
  },
  heading: {
    color: "#18181b",
    fontSize: "24px",
    margin: "0 0 16px",
  },
  text: {
    color: "#52525b",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 24px",
  },
  button: {
    backgroundColor: "#3b82f6",
    borderRadius: "6px",
    color: "#ffffff",
    display: "block",
    fontSize: "14px",
    fontWeight: 600,
    padding: "12px 24px",
    textAlign: "center" as const,
    textDecoration: "none",
  },
} as const;

HelloEmail.PreviewProps = {
  name: "田中太郎",
  message: "アカウントが作成されました。下のボタンからログインしてください。",
  buttonText: "ログイン",
  buttonUrl: "https://example.com/login",
} satisfies HelloEmailProps;

export default HelloEmail;

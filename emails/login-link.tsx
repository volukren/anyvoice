import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Link,
} from "@react-email/components";

export default function LoginLink({
  email,
  url,
}: {
  email: string;
  url: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Your AnyVoice Login link</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded-md border border-solid border-gray-200 px-10 py-5">
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              Your Login Link
            </Heading>
            <Text className="text-sm leading-6 text-black">
              Welcome to AnyVoice
            </Text>
            <Text className="text-sm leading-6 text-black">
              Please click the magic link below to sign in to your account
            </Text>
            <Section className="my-8 text-center">
              <Link
                href={url}
                className="rounded-md bg-[#db255c] text-[#fffafb] px-6 py-3 text-center text-[12px] font-semibold no-underline"
              >
                Sign in
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

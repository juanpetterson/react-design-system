import { FormEvent, useState } from "react";
import axios from "axios";

import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";

export function SignIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post("sessions", {
      email: "",
      password: "",
    });

    setIsSignedIn(true);
  };

  return (
    <div className=" w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Design Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-2">
          Log in and start using it!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isSignedIn && <Text>Logged in successfully!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">E-mail address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              name="email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              placeholder="******"
              type="password"
              name="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm">Remember me for 30 days.</Text>
        </label>

        <Button type="submit" className="mt-4">
          Sign in
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 hover:text-gray-200 underline">
            Forgot your password?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 hover:text-gray-200 underline">
            Don't have an account yet? Sign up now!
          </a>
        </Text>
      </footer>
    </div>
  );
}

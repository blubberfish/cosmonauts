import { GoogleCircle } from "iconoir-react";
import { Button } from "./button";

export function GoogleButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button {...props}>
      <Button.Icon>
        <GoogleCircle />
      </Button.Icon>
      <center>Google</center>
    </Button>
  );
}

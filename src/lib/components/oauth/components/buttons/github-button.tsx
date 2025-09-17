import { GithubCircle } from "iconoir-react";
import { Button } from "./button";

export function GitHubButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button {...props}>
      <Button.Icon>
        <GithubCircle />
      </Button.Icon>
      <center>GitHub</center>
    </Button>
  );
}

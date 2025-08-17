declare namespace BlubberFish {
  interface Profile {
    name: string;
    email: string;
    alias: {
      github?: string;
      google?: string;
    };
  }
}

import { SignIn } from "@/lib/components/oauth/sign-in";

export default async function Page() {
  return (
    <main className="max-w-full w-md mx-auto pt-16 px-8">
      <header className="mb-8">
        <h1 className="text-gray-100 text-2xl font-bold mb-2">Sign in</h1>
        <p className="text-gray-300">
          Access or create your account by signing in with one of the providers below.
        </p>
      </header>
      <nav className="grid grid-cols-1 auto-rows-min gap-4">
        <SignIn redirectUrl="/dashboard" newUserUrl="/dashboard?welcome=true" />
      </nav>
    </main>
  );
}

import Link from "next/link";
import { redirect } from "next/navigation";

const Page = async () => {

  return (
    <div className="w-full max-w-sm mx-auto space-y-6 border-[1px] border-black rounded-md p-5 shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>
      </div>

      {/* Email/Password Sign Up */}
      <form
        className="space-y-4">
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="new-password"
        />
        <button className="w-full" type="submit">
          Sign Up
        </button>
      </form>

      <div className="text-center">
        <button>
          <Link href="/sign-in">Already have an account? Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default Page;

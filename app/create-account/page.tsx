import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Create Account</h1>
        <h2 className="text-xl">Fill in the forme below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div>
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            type="text"
            placeholder="Username"
            required
          />
          <span>Input error</span>
        </div>
        <button>Create account</button>
        <div></div>
      </form>
      <div />
      <div>
        <Link href="/sms">
          <span>icon</span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}

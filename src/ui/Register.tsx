import { SignUp } from "@clerk/clerk-react";

function Register() {
  return (
    <div className="w-full min-h-screen inline-flex items-center">
      <span className="text-center mx-auto">
        <SignUp afterSignUpUrl="/" />
      </span>
      )
    </div>
  );
}
export default Register;

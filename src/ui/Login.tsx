import { SignIn } from '@clerk/clerk-react';

function Login() {
  return (
    <div className='w-full min-h-screen inline-flex items-center'>
      <span className='text-center mx-auto'>
        <SignIn path='/sign-in' routing='path' afterSignInUrl='/' redirectUrl='/' />
      </span>
    </div>
  );
}
export default Login;

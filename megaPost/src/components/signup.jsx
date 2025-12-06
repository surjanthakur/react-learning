import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import Button from './button';
import Input from './input';
import { useDispatcht } from 'react-redux';
import authservice from '../appwrite/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

export default function Signup() {
  const dispatch = useDispatcht();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const createAccount = async (data) => {
    setError('');
    try {
      const session = await authservice.createAccount(data);
      if (session) {
        const user = await authservice.getCurrentUser();
        if (user) dispatch(authLogin(user));
        toast.success('sinup successfully 🚀');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <h1>logo</h1>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          create your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          have any account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign in
          </Link>
        </p>
        {/* display error */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(createAccount)}>
          <div className="space-y-5">
            {/* name */}
            <Input
              label="Full Name: "
              type="text"
              placeholder="Enter your full name"
              {...register('name', {
                required: true,
              })}
            />
            {/* email */}
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^(?![.])[a-zA-Z0-9._%+-]+(?<![.])@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || 'email address must be a valid address',
                },
              })}
            />
            {/* password */}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

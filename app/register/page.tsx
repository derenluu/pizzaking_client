'use client';

import { registerAccount } from '@/apis';
import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tel, setTel] = useState('');
  const [address, setAddress] = useState('');

  const handleFormSubmit = async (ev: any) => {
    ev.preventDefault();
    try {
      const response = await registerAccount({ email, password, tel, address });
      console.log('Registration successful:', response.data);
      // Handle successful registration (e.g., redirect to another page)
    } catch (error) {
      console.error('Registration error:', error);
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl">Register</h1>
        <form
          action=""
          className="block max-w-sm mx-auto"
          onSubmit={handleFormSubmit}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <input
            type="tel"
            placeholder="Tel"
            value={tel}
            onChange={(ev) => setTel(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
          />
          <button type="submit">Register</button>
          {/* <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button className="flex gap-4 justify-center">
            <Image
              src={"/google.png"}
              alt={"Google"}
              width={24}
              height={24}
            />
            Login with Google
          </button> */}
        </form>
      </section>
    </>
  );
};

export default RegisterPage;

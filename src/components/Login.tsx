import React from "react";

const Login: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form>
        <label className="block mb-2">Username / Mobile / Email / ID No</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" />

        <label className="block mb-2">Password</label>
        <input type="password" className="w-full mb-4 p-2 border rounded" />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


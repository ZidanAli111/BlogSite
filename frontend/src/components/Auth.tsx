import React, { useState } from "react"

export const Auth = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ username, email, password });
    };

    return <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
        <h2 className="text-4xl font-bold mb-3 text-center">Create an account</h2>
        <p className="mb-6 text-center font-semibold text-lg">
            Already have an account?{' '}
            <a href="/login" className="text-slate-500 underline font-medium">Login</a>
        </p>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="username">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700" htmlFor="password">
                    Password
                </label>
                <div className="relative">
                    <input
                        type={isPasswordVisible ? 'text' : 'password'}
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                    {/* Toggle button */}
                    <button
                        type="button"
                        className="absolute right-3 top-3 text-sm text-gray-600 mt-1"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800">
                Sign Up
            </button>
        </form>
    </div>


}
import axios from "axios";
import { SignupInput } from "blogsite-commom";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate=useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        password: "",
        name: ""
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

 
      async function sendRequest(){
        console.log("Inside sendRequest");
        try{

            console.log(`{BACKEND_URL}${type==='signup'?"signup":"signin"}`);
            const response= await  axios.post(`${BACKEND_URL}/api/v1/user/${type==='signup'?"signup":"signin"}`,postInputs); 
            console.log(response);
            const jwt=response.data.jwt;
            console.log(jwt);
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        }catch(e){
            alert("Something went wrong while signing.")
        }
        
    }



    return (
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold mb-3 text-center">
                Create an account
            </h2>
            <div className="mb-6 text-center font-semibold text-lg">
                {type === 'signin' ? "Don't have an account?" : "Already have an account?"}
                <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                    {type === 'signin' ? "Sign up" : "Sign in"}
                </Link>
            </div>
            <div className="mb-6">

                {type === "signup" && (
                    <LabelledInput
                        label="Name"
                        placeholder="Your name"
                        value={postInputs.name || ""}
                        onChange={(e) =>
                            setPostInputs({ ...postInputs, name: e.target.value })
                        }
                    />
                )}

                <LabelledInput
                    label="Username"
                    placeholder="Your username"
                    value={postInputs.username}
                    onChange={(e) =>
                        setPostInputs({ ...postInputs, username: e.target.value })
                    }
                />

                <LabelledInput
                    label="Password"
                    placeholder="Your password"
                    type={isPasswordVisible ? "text" : "password"}
                    value={postInputs.password}
                    onChange={(e) =>
                        setPostInputs({ ...postInputs, password: e.target.value })
                    }
                    togglePasswordVisibility={() => setIsPasswordVisible(!isPasswordVisible)}
                    isPasswordVisible={isPasswordVisible}
                />

                <button
                    type="button"
                    onClick={sendRequest}
                    className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 mt-4">
                    {type === 'signup' ? "Sign Up" : "Sign In"}
                </button>
            </div>
        </div>
    );
};

interface LabelledInputProps {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    type?: string;
    togglePasswordVisibility?: () => void;
    isPasswordVisible?: boolean;
}

function LabelledInput({
    label,
    placeholder,
    onChange,
    value,
    type,
    togglePasswordVisibility,
    isPasswordVisible
}: LabelledInputProps) {
    return (
        <div>
            <label className="block text-gray-700">{label}</label>
            <div className="relative">
                <input
                    type={type || 'text'}
                    className="w-full p-2 border border-gray-300 rounded mt-2 pr-10"
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    required
                />
                {togglePasswordVisibility && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm mt-2 text-gray-500 font-medium"
                    >
                        {isPasswordVisible ? "Hide" : "Show"}
                    </button>
                )}
            </div>
        </div>
    );
}

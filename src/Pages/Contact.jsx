import { useState } from "react"
import HomeLayout from "../Layouts/HomeLayout"
import toast from "react-hot-toast"
import { isEmail } from "../Helpers/regexMatcher"
import axiosInstance from "../Helpers/axiosInstance"

function Contact() {

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    })
    function handleInputChange(e) {
        const { name, value } = e.target
        console.log(name, value)
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    async function onformSubmit(e) {
        e.preventDefault();
        if (!userInput.email || !userInput.name || !userInput.message) {
            toast.error("Please fill all the details, All fields are mandatory")
            return;
        }
        //Email Validation Error Message Display On the Screen
        if (!isEmail(userInput.email)) {
            toast.error("Invalid Email")
            return;
        }
        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting your message...",
                success: "Message sent successfully",
                error: "Failed to send message"
            })
            const contactresponse = await response;
            if(contactresponse?.data?.success){
                setUserInput({
                    name: "",
                    email: "",
                    message: "",
                })
            }
        } catch (err){
            toast.error("Operation was failed 😢😢")
        }

    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    novalidate
                    onSubmit={onformSubmit}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">

                    <h1 className="text-3xl font-semibold">Contact Form</h1>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name:-
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm "
                            id="name"
                            name="name"
                            placeholder="Enter your Name "
                            type="text"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">
                            Email:-
                        </label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm "
                            id="email"
                            name="email"
                            placeholder="Enter your Email "
                            type="text"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">
                            Message
                        </label>
                        <textarea
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your Message "
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                        Submit
                    </button>
                </form>
            </div>

        </HomeLayout>
    )
}

export default Contact

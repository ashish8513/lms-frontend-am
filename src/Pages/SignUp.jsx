import { useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { createAccount } from '../Redux/Slices/AuthSlice';
import { isEmail, isValidPassword } from '../Helpers/regexMatcher';


function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");

    const [SignupData, setSignupData] = useState({
        fullname: "",
        email: "",
        password: "",
        avatar: "",
    });
    function handleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...SignupData,
            [name]: value
        })
    }
    function getImage(event) {
        event.preventDefault();
        // gettiing the image
        const uploadedImage = event.target.files[0];
        if (uploadedImage) {
            setSignupData({
                ...SignupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                console.log(this.result)
                setPreviewImage(this.result);
            })
        }
    }
    async function createNewAccount(event) {
        event.preventDefault();
        if (!SignupData.email || !SignupData.password || !SignupDatafullName || !SignupData.avatar) {
            toast.error("Please fill all the details")
            return;
        }
        // checking name field length
        if (SignupData.fullname.length < 5) {
            toast.error("Name should be at least 5 characters")
            return;
        }
        // Checking email field length
        if (!isEmail(!SignupData.email)) {
            toast.error("Please enter a valid email")
            return;
        }
        // checking password field length
        if (!isValidPassword(!SignupData.password)) {
            toast.error("passwords should be 6-16 character long and a number and a special character")
            return
        }

        const formData = new FormData();
        formData.append("fullName", SignupData.fullname);
        formData.append("email", SignupData.email);
        formData.append("password", SignupData.password);
        formData.append("avatar", SignupData.avatar);

        // dispatch create account action
        const response = await
            dispatch(createAccount(formData));
        console.log(response)

        if (response?.payload?.success)
            navigate("/");

        setSignupData({
            fullname: "",
            email: "",
            password: "",
            avatar: "",
        });
        setPreviewImage("")
    }
    return (

        <HomeLayout>
            <div className='flex items-center justify-center h-[90vh] ' >
                <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
                    <h1 className='text-center text-2xl font-bold '>Registration Page </h1>
                    <label htmlFor="image_uploads" className='cusrsor-pointer'>
                        {previewImage ? (
                            <img className='w-24 h-23 rounded-full m-auto' src={previewImage} />
                        ) : (
                            <BsPersonCircle className='w-24 h-24 rounded-full m-auto' />
                        )}
                    </label>
                    <input
                        onChange={getImage}
                        type='file'
                        className='hidden'
                        name='image_uploads'
                        id="image_upload"
                        accept='.jpg,.jpeg,.png,.svg'
                    />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="fullname" className='font-semibold'>Name:-</label>
                        <input
                            type="name"
                            required
                            name='fullname'
                            id='fullname'
                            placeholder='Enter Your Full Name'
                            className='bg-transparent px-2 py-1 border'

                            onChange={handleUserInput}
                            value={SignupData.fullname}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'>Email:-</label>
                        <input
                            type="email"
                            required
                            name='email'
                            id='email'
                            placeholder='Enter Your Email'
                            className='bg-transparent px-2 py-1 border'

                            onChange={handleUserInput}
                            value={SignupData.email}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'>Password:-</label>
                        <input
                            type="password"
                            required
                            name='password'
                            id='password'
                            placeholder='Enter Your Password'
                            className='bg-transparent px-2 py-1 border'

                            onChange={handleUserInput}
                            value={SignupData.password}
                        />
                    </div>
                    <button type='submit' className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>Create Account</button>
                    <p className='text-center'>Already have an account ?<Link to="/login" className='link text-accent cursor-pointer'>Login</Link></p>
                </form>
            </div>
        </HomeLayout>

    )
}

export default SignUp

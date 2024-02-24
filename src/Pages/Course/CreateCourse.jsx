import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { createNewCourse } from '../../Redux/Slices/CourseSlice';
import HomeLayout from '../../Layouts/HomeLayout';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdby: "",
        description: "",
        thumbnail: null,
        previewImage: "",

    })
    function handleImageUpload(e) {
        e.preventDefault();
        const uploadImage = e.target.files[0];
        if (uploadImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadImage
                })
            })
        }
    }
    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdby) {
            toast.error("Please fill all the details, All fields are mandatory")
            return;
        }
        const response = dispatch(createNewCourse(userInput))
        if (response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                createdby: "",
                description: "",
                thumbnail: null,
                previewImage: "",
            })
            // navigate("/courses")
        }
    }
    return (
        <HomeLayout>
            <div className='flex items-center justify-center h-[100vh]'>
                <form
                    onSubmit={onFormSubmit}
                    className='flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative'
                >
                    <Link className='absoluye top-0 text-2xl link text-accent cursor-pointer '>
                        <AiOutlineArrowLeft />
                    </Link>
                    <h1 className='text-center text-2xl font-bold'>Create new Course By <span className='text-yellow-500 font-bold'>Ashish Admin</span> </h1>
                    <main className='grid grid-cols-2 gap-x-10'>
                        <div className='gap-y-6'>
                            <div>
                                <label htmlFor="image_uploads" className='cursor-pointer'>
                                    {userInput.previewImage ? (
                                        <img
                                            className='w-full h-44 m-auto border '
                                            src={userInput.previewImage} alt="" />
                                    ) : (
                                        <div className='w-full h-44 m-auto flex items-center justify-center border'>
                                            <h1 className='font-bold text-lg '>upload Your Course thumbnail</h1></div>
                                    )}
                                </label>
                                <input
                                    className='hidden'
                                    type='file'
                                    id='image_uploads'
                                    accept='.jpg,.jpeg,.png,.gif'
                                    name='image_uploads'

                                    onChange={handleImageUpload}
                                />

                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-lg font-semibold' htmlFor='title'>Course Title</label>
                                <input
                                    required
                                    type="text"
                                    name='title'
                                    id='title'
                                    placeholder='enter course title'
                                    className='bg-transparent px-2 py-1 border '
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1'>

                        <div className='flex flex-col gap-1'>
                                <label className='text-lg font-semibold' htmlFor='createdby'>Course Instructor</label>
                                <input
                                    required
                                    type="text"
                                    name='createdby'
                                    id='createdby'
                                    placeholder='enter course createdby'
                                    className='bg-transparent px-2 py-1 border '
                                    value={userInput.createdby}
                                    onChange={handleUserInput}
                                />
                            </div>
                         

                            <div className='flex flex-col gap-1'>
                                <label className='text-lg font-semibold' htmlFor='category'>Course Category</label>
                                <input
                                    required
                                    type="text"
                                    name='category'
                                    id='category'
                                    placeholder='enter course category'
                                    className='bg-transparent px-2 py-1 border '
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <label className='text-lg font-semibold' htmlFor='description'>Course Description</label>
                                <textarea
                                    required
                                    type="text"
                                    name='description'
                                    id='description'
                                    placeholder='enter course description'
                                    className='bg-transparent px-2 py-1 border h-224 overflow-y-scroll resize-none'
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>

                        </div>
                    </main>

                    <button type='submit' className='w-full py-2 rounded-sm font-semibold text-lg cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300'>
                        Create Course By Admin
                    </button>
                </form>
            </div>

        </HomeLayout>
    )
}

export default CreateCourse

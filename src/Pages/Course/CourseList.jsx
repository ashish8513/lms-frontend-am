import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import { elements } from "chart.js";
import CourseCard from "../../Components/CourseCard";

function CourseList() {
    const dispatch = useDispatch();
    //! It will fetch the data from the backend server 
    // const { courseData } = useSelector((state) => state.course)

    // all courses load by the async function 
    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses()
    }, []);
    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white ">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore the courses by
                    <span className="font-bold text-yellow-500">Ashish Prabhakar Expert </span>
                </h1>
                {/* <div className="mb-10 flex flex-wrap gap-14">
                    {coursesData?.map((element) => {
                        return <CourseCard key={element._id} data={element} />;
                    })}
                </div> */}
            </div>
        </HomeLayout>
    );
}

export default CourseList

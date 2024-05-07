
const Blog = () => {

    const blogs = [
        {
            title: "The course of the disease is very important for the people",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
        },
        {
            title: "New special laws for constructors and their employees",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
        },
        {
            title: "Best materials for buildings in 2024",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis.",
        },
    ];

    return (
        <div className="w-full md:px-40 px-5 relative pt-20 md:pb-36 pb-20">
            <div className="flex flex-col gap-2 md:mt-[500px]">
                <div className="font-bold text-[#263640] text-[25px] md:max-w-[650px] max-w-full md:mt-4">
                    What's happening in our newspaper.
                </div>
            </div>
        </div>
    )
}

export default Blog

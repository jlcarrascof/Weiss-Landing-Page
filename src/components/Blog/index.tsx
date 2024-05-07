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
                <p className="text-[#929a9f] max-w-[550px] leading-7 mt-2 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi soluta, dolor
                    eaque consectetur ullam pariatur, itaque adipisci beatae molestiae repundiadae
                    corrupti eos, odio neque perspiciatis ratione dignissimos voluptas.
                </p>
            </div>
            <div className="flex flex-col w-full gap-3 mt-16">
                <span className="text-[#263640] font-bold text-[20px]">
                    Our latest posts
                </span>
                <div className="flex md:flex-row flex-col md:gap-0 gap-16 w-full items-center justify-between">
                    {blogs.map((blog) => {
                        return (
                            <div key={blog.title} className="flex flex-col gap-3 max-w-[300px] z-50">

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog

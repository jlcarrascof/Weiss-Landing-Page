import service1 from '../../assets/images/service1.png'
import service2 from '../../assets/images/service2.png'
import service3 from '../../assets/images/service3.png'
import about from '../../assets/images/about.png'

const Services = () => {

    const services = [
        {
            title: "Experienced team with great leadership skills",
            image: service1,
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis."
        },
        {
            title: "Experienced team with great leadership skills",
            image: service2,
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis."
        },
        {
            title: "Experienced team with great leadership skills",
            image: service3,
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime repudiandae sapiente facilis."
        },
    ];

    return (
        <div className="w-full md:px-40 px-5 bg-[#f5f8fa] relative z-[-1] pt-20 md:pb-[300px] pb-20">
            <div className="flex flex-col gap-2">
                <div className="text-[#263640] md:text-left text-center font-bold text-[25px] max-w-[650px] mt-2">
                    Top Services with cheap prices
                </div>
                <p className="font-normal text-[#929a9f] max-w-[550px] leading-7 mt-4 md:text-justify text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi soluta, dolor
                    eaque consectetur ullam pariatur, itaque adipisci beatae molestiae repundiadae
                    corrupti eos, odio neque perspiciatis ratione dignissimos voluptas.
                </p>
            </div>
            <div className="w-full flex md:flex-row flex-col items-center justify-between md:gap-8 gap-16 mt-24 z-50">
                {services.map((service, index: number) => {
                    return (
                        <div key={index} className="flex flex-col gap-3 max-w-[300px] z-50">

                        </div>
                    )
                })

                };
            </div>
        </div>
    )
}

export default Services

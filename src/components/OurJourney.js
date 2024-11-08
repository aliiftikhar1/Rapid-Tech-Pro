'use client'
export default function OurJourney() {
    return (
        <div className="md:h-[500px] h-full flex flex-col justify-center items-start md:py-16 py-10 md:px-12 px-2 bg-gray-50">
            <div className="text-left mb-12">
                <h2 className="md:text-5xl text-3xl font-bold text-black mb-4">
                    Our Journey to Impactful Solutions
                </h2>
                <p className="text-sm text-justify md:text-2xl text-gray-700 max-w-5xl">
                    At RapidTecPro, we take pride in being a full-cycle product development
                    company. Our approach merges innovative vision with technical precision to
                    deliver products that make a real difference.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-16 text-black w-full">
    <div className="text-center hover:text-bluish cursor-pointer">
        <p className="md:text-8xl text-2xl font-bold">1,300+</p>
        <p className="md:text-lg text-sm">Completed Projects</p>
    </div>
    <div className="text-center hover:text-bluish cursor-pointer">
        <p className="md:text-8xl text-2xl font-bold">150+</p>
        <p className="md:text-lg text-sm">Talented RapidTecPro</p>
    </div>
    <div className="text-center hover:text-bluish cursor-pointer">
        <p className="md:text-8xl text-2xl font-bold">600+</p>
        <p className="md:text-lg text-sm">
            <a href="/clients" className="hover:text-teal-600">
                Satisfied Clients
            </a>
        </p>
    </div>
</div>

        </div>
    );
}

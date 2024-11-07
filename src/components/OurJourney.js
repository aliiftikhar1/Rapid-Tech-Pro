'use client'
export default function OurJourney() {
    return (
        <div className="h-[500px] flex flex-col justify-center items-start py-16 px-12 bg-gray-50">
            <div className="text-left mb-12">
                <h2 className="text-5xl font-bold text-black mb-4">
                    Our Journey to Impactful Solutions
                </h2>
                <p className="text-2xl text-gray-700 max-w-5xl">
                    At RapidTecPro, we take pride in being a full-cycle product development
                    company. Our approach merges innovative vision with technical precision to
                    deliver products that make a real difference.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-16 text-black w-full">
    <div className="text-center hover:text-bluish cursor-pointer">
        <p className="text-8xl font-bold">1,300+</p>
        <p className="text-lg">Completed Projects</p>
    </div>
    <div className="text-center hover:text-bluish cursor-pointer">
        <p className="text-8xl font-bold">150+</p>
        <p className="text-lg">Talented RapidTecPro</p>
    </div>
    <div className="text-center hover:text-bluish cursor-pointer">
        <p className="text-8xl font-bold">600+</p>
        <p className="text-lg">
            <a href="/clients" className="hover:text-teal-600">
                Satisfied Clients
            </a>
        </p>
    </div>
</div>

        </div>
    );
}

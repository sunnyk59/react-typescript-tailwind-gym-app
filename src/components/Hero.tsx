
export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center gap-10 justify-center text-center
                          max-w-[890px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>Looking to start your journey with</p>

                <h1 className="uppercase text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                Flex <span className="text-blue-400 font-medium"> You</span>
                </h1>
            </div>

            <p className="text-sm md:text-base font-light">
                Hey there, fitness fanatic! Or maybe you're just trying to outrun your couch potato tendencies.
                Either way, welcome to Flex You, your new favorite spot for all things fitness.
                We’re not just about  reps and sets here; we’re about
                <span className="text-blue-400 font-medium"> laughs and gains! </span>
            </p>

            <button className="px-8 py-4 rounded-medium border-blue-400 border-solid border-2 background-slate-950 blueShadow
                            duration-200">
                <p>Lets Start!</p>
            </button>

        </div>
    )
}

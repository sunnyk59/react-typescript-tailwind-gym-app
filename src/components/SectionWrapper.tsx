
interface WrapperProps {
    children: React.ReactNode;
    header: string;
    title: string[];
}


export default function SectionWrapper(props: WrapperProps) {

    const { children, header, title } = props


    return (
        <section className="min-h-screen flex flex-col gap-10">
            <div className="bg-slate-950 py-10 flex flex-col gap-2 p-4 
                        justify-center items-center">
                <p className="uppercase font-medium">{header}</p>
                <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    {title[0]}
                    <span className="text-blue-400 p-4">{title[2]}</span>
                    {title[1]}
                </h2>
            </div>

            <div className="max-w-[890px] w-full mx-auto flex flex-col gap-10 p-4">
                {children}
            </div>
        </section>
    )
}

import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS, Workout } from "../utils/data";
import { useState } from "react";

interface HeadingProps {
    index: string
    title: string
    description: string
}

function Heading(props: HeadingProps) {

    const { index, title, description } = props

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400"> {index} </p>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold"> {title} </h4>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl mx-auto"> {description} </p>
        </div>
    )
}

export default function Generator() {

    const [showModel, setShowModel] = useState<boolean>(false);
    const [split, setSplit] = useState<string>("");
    const [muscles, setMuscles] = useState<string[]>([]);
    const [goal, setGoal] = useState<string>("");

    const toggleModel = () => {
        setShowModel(!showModel);
    };






    return (
        <SectionWrapper header={"Generate Your Workout"} title={["Lets", "start", "grinding"]}>
            <Heading index={"01"}
                title={"Choose Your Tempos"}
                description={"Select the workout you wish to endure"} />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((type, keyIndex) => {
                    return (
                        <button key={keyIndex}
                            onClick={() => { setSplit(type) }}
                            className={`py-3 rounded-lg border-blue-400 border-solid border-2
                                      bg-slate-950 duration-200 hover:border-blue-600
                                       ${split === type ? "border-blue-600" : ""}`}>
                            <p className="capitalize"> {type.replace("_", " ")} </p>
                        </button>
                    )
                })}
            </div>

            <Heading index={"02"}
                title={"Lock on your target muscles"}
                description={"Select the muscle group you wish to annihilate"} />
            <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
                <button className="relative p-3 flex items-center justify-center"
                    onClick={toggleModel}>
                    <p>Select muscle groups</p>
                    <i className="fa-solid absolute top-1/2 translate-y-[-50%] right-3 fa-caret-down">
                    </i>
                </button>

                {showModel && (
                    <div className="flex flex-col">
                        {split === "individual" ? WORKOUTS[split] : Object.keys(WORKOUTS).map((muscle: string, keyIndex: number) => (
                            <button key={keyIndex}  >
                                <p className="capitalize">{muscle.replace("_", " ")}</p>
                            </button>
                        ))}
                    </div>
                )}

            </div>

            <Heading index={"03"}
                title={"Choose Your Schemes"}
                description={"Select the scheme you wish to conduct"} />
            <div className="grid grid-cols-3 gap-4">
                {Object.keys(SCHEMES).map((scheme, keyIndex) => {
                    return (
                        <button key={keyIndex}
                            onClick={() => { setGoal(scheme) }}
                            className={`py-3 rounded-lg border-blue-400 border-solid border-2
                                      bg-slate-950 duration-200 hover:border-blue-600
                                       ${goal === scheme ? "border-blue-600" : ""}`}>
                            <p className="capitalize"> {scheme.replace("_", " ")} </p>
                        </button>
                    )
                })}
            </div>


        </SectionWrapper>
    )
}

import { education, experience } from "../../constants"


export default function Experience() {
    return(
        <section id="experience">
            <div className="pb-5">
                <h2 className="text-[24px] font-[600] text-tprimary">Doświadczenie</h2>
                <h3 className="text-tsecondary">W tym się specjalizuje</h3>
            </div>
            <div className="flex justify-between gap-10">
                <div className="flex-1">
                    <p>Technologie</p>
                </div>
                <div className="flex-1">
                    {experience.map((exp, index) => (
                        <div key={"exp"+index} className="flex mb-4">
                            <p className="flex-1">{exp.date}</p>
                            <div className="flex-1">
                                <p className="font-[600]">{exp.company}</p>
                                <p>{exp.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
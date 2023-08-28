import { Card } from "../"
import { BsTelephone, BsGithub, BsLinkedin, BsEnvelopeAt, BsEnvelopeAtFill, BsTelephoneFill } from "react-icons/bs"

export default function Contact() {
    return(
        <section id="contact">
            <div className="pb-5">
                <h2 className="text-[24px] font-[600] text-tprimary">Porozmawiajmy!</h2>
                <h3 className="text-tsecondary">Kontakt do mnie</h3>
            </div>
            <div className="grid grid-cols-4 gap-5">
                    <Card className={"flex items-center justify-center"}>
                        <BsTelephoneFill size={35} color="rgb(41 64 125)"/>
                        <h4 className="ml-4 text-[18px]">Numer telefonu</h4>
                    </Card>
                    <Card className={"flex items-center justify-center"}>
                        <BsEnvelopeAtFill size={35} color="rgb(41 64 125)"/>
                        <h4 className="ml-4 text-[18px]">Adres email</h4>
                    </Card>
                    <a href="https://github.com/m-uchyla" target="_blank">
                        <Card className={"flex items-center justify-center"}>
                            <BsGithub size={35} color="rgb(41 64 125)"/>
                            <h4 className="ml-4 text-[16px]">Repozytorium GitHub</h4>
                        </Card>
                    </a>
                    <a href="https://linkedin.com/in/mateusz-uchyla" target="_blank">
                        <Card className={"flex items-center justify-center"}>
                            <BsLinkedin size={35} color="rgb(41 64 125)"/>
                            <h4 className="ml-4 text-[18px]">Profil Linkedin</h4>
                        </Card>
                    </a>
            </div>
        </section>
    )
}
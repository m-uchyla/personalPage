import { Card } from "../"
import { BsGithub, BsLinkedin, BsEnvelopeAtFill, BsTelephoneFill } from "react-icons/bs"
import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';

export default function Contact() {


  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);

    return(
        <section id="contact">
            <div className="pb-5">
                <h2 className="text-[24px] font-[600] text-tprimary">Porozmawiajmy!</h2>
                <h3 className="text-tsecondary">Wybierz sposób kontaktu</h3>
            </div>
            <div className="grid grid-cols-4 gap-5">
                    <ReactCardFlip isFlipped={flipped1} flipDirection="vertical">
                        <div className="contactCard" onClick={() => setFlipped1(!flipped1)}>
                            <Card className={"flex items-center justify-center"}>
                                <BsTelephoneFill size={35} color="rgb(41 64 125)"/>
                                <h4 className="ml-4 text-[18px]">Numer telefonu</h4>
                            </Card>
                        </div>
                        <div onClick={() => setFlipped1(!flipped1)}>
                            <Card className={"flex items-center justify-center"}>
                                <BsTelephoneFill size={35} color="rgb(41 64 125)"/>
                                <h4 className="ml-4 text-[18px]">511 479 288</h4>
                            </Card>
                        </div>
                    </ReactCardFlip>
                    <ReactCardFlip isFlipped={flipped2} flipDirection="vertical">
                        <div className="contactCard" onClick={() => setFlipped2(!flipped2)}>
                            <Card className={"flex items-center justify-center"}>
                                <BsEnvelopeAtFill size={35} color="rgb(41 64 125)"/>
                                <h4 className="ml-4 text-[18px]">Adres email</h4>
                            </Card>
                        </div>
                        <div onClick={() => setFlipped2(!flipped2)}>
                            <Card className={"flex items-center justify-center"}>
                                <BsEnvelopeAtFill size={35} color="rgb(41 64 125)"/>
                                <h4 className="ml-4 text-[15px]">kontakt@m-uchyla.com</h4>
                            </Card>
                        </div>
                    </ReactCardFlip>
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
import { Card } from "../"
import { BsTelephone } from "react-icons/bs"

export default function Contact() {
    return(
        <section id="contact">
            <div className="pb-5">
                <h2 className="text-[24px] font-[600] text-tprimary">Porozmawiajmy!</h2>
                <h3 className="text-tsecondary">Kontakt do mnie</h3>
            </div>
            <div className="grid grid-cols-3 gap-5">
                    <Card className={"flex"}>
                        <BsTelephone size={40} color="rgb(41 64 125)"/>
                        <h4>Test 1</h4>
                    </Card>
                    <Card className={""}>
                        <h4>Test 2</h4>
                    </Card>
                    <Card className={""}>
                        <h4>Test 3</h4>
                    </Card>
                    <Card className={""}>
                        <h4>Test 4</h4>
                    </Card>
                    <Card className={""}>
                        <h4>Test 5</h4>
                    </Card>
                    <Card className={""}>
                        <h4>Test 6</h4>
                    </Card>
            </div>
        </section>
    )
}
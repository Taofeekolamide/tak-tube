import { BiEnvelope } from "react-icons/bi"
import IconBox from "../components/IconBox"
import PageBanners from "../components/PageBanners"
import { GoLocation } from "react-icons/go"
import { PiPhone } from "react-icons/pi"
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const back = () => {
        window.location.reload()
    }

    const [state, handleSubmit] = useForm("xbdarjgk");
    if (state.succeeded) {
        return (
            <>
                <p>Thanks for submitting button</p>
                <div className="contactformgroup">
                    <button type="submit" onClick={back} >Go Back</button>
                </div>
            </>
        )
    }

    return (
        <>
            <PageBanners title="Contact" />
            <div style={{ display: "flex", gap: "20px", marginTop: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
                <IconBox icon={<GoLocation />} title="Our Address" content="2715 Ash Dr. San Jose, South Dakota 83475" />
                <IconBox icon={<BiEnvelope />} title="Email" content="taxtube@gmail.com" />
                <IconBox icon={<PiPhone />} title="Phone" content="+234 1234 567 890" />
            </div>
            <div className="contactform">
                <h1 style={{ textAlign: "center", fontSize: "25px", paddingBottom: "10px" }}>Get In Touch</h1>
                <p style={{ textAlign: "center" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>

                <form className="contactform" onSubmit={handleSubmit}>
                    <div className="contactformgroup">
                        <input type="text" placeholder="Enter Name" required id="name" name="name" />
                        <input type="email" placeholder="Email Address" required id="email" name="email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="contactformgroup">
                        <input type="text" placeholder="Write Subject" id="suject" name="subject" />
                        <input type="url" placeholder="Enter Website Link" id="url" name="url" />
                    </div>
                    <div className="contactformgroup">
                        <textarea placeholder="Write Message..." rows="7" id="message" name="message"></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="contactformgroup">
                        <button type="submit" disabled={state.submitting}>Send Message</button>
                    </div>
                </form>

            </div>
        </>

    )
}

export default Contact
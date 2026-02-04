import { BiEnvelope } from "react-icons/bi"
import IconBox from "../components/IconBox"
import PageBanners from "../components/PageBanners"
import { GoLocation } from "react-icons/go"
import { PiPhone } from "react-icons/pi"

function Contact() {
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
                <form className="contactform">
                    <div className="contactformgroup">
                        <input type="text" placeholder="Enter Name" required />
                        <input type="email" placeholder="Email Address" required />
                    </div>

                    <div className="contactformgroup">
                        <input type="text" placeholder="Write Subject" />
                        <input type="url" placeholder="Enter Website Link" />
                    </div>
                    <div className="contactformgroup">
                        <textarea placeholder="Write Message..." rows="7"></textarea>
                    </div>
                    <div className="contactformgroup">
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Contact
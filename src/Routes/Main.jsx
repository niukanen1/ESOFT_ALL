
import SvgComponent from "../svg/svg";
import LocHouse from "../svg/locHouse";
import SmartHouse from "../svg/smarthouse.png"
import Saving from "../svg/Saving"
import Control from "../svg/Control"
import Security from "../svg/Security"
import Logo from "../svg/logo.js"


export default function Main() {
    return ( 
        <main>
            <section className="MainEntering">
                <div className="slogan-btn-container">
                    <h1 className="slogan">
                        Be <br/>Energy efficient <br/>With <span className="green">eSoft</span>
                    </h1>
                    <button className="btn">
                        Join us
                    </button>
                </div>
                <div className="Entering_svg">
                    <SvgComponent/>
                </div>
            </section>
            <section className="WeAre">
                <div>
                <h2 className="green">We are</h2>
                <p className="NeoText">
                    We are a young but promising start-up in the field of <span className="green">smart homes</span>. The <span className="green">eSoft</span>  provides full <span className="medium">control</span> over
                    electricity and <span className="medium">management</span> of all <span className="green">smart devices</span> in your home.
                    <br/><br/>
                    <span className="medium">You no longer have to count and save electricity</span> - our <span className="green">smart assistant</span> will do it for you. It <span className="medium">calculates</span> a
                    convenient tariff, and will also adaptively adjust to the market price of electricity for <span className="green">48</span> hours in advance,
                    which will allow you to use electrical appliances at a convenient time <span className="medium">for you</span>.
                </p>
                </div>
                <LocHouse className="svgC"/>

            </section>

            <section>
                <h2>We provide<br/>

                    <span className="green"> convenience </span><br/>

                     and <span className="green"> safety </span> to<br/>

                    your home</h2>
                <img src={SmartHouse} alt="."/>
            </section>

            <section className="Аdvantages">
                <h2 className="green">Аdvantages</h2>
                <div>
                    <div>
                        <h3>Saving</h3>
                        <p>
                            We make our customers' electricity bills up to <span className="green">70%</span> more <span className="medium">profitable</span> through smart analysis of the electricity
                            exchange.
                        </p>
                    </div>
                    <Saving className="svgC"/>
                </div>

                <div>
                    <Control className="svgC"/>
                    <div className="right">
                        <h3>Control</h3>
                        <p>
                            Our clients <span className="green">fully</span> control the <span className="medium">management of electronic</span> devices and can <span className="medium">receive information</span> about them
                            and their energy consumption <span className="green">at any time</span>.
                        </p>
                    </div>
                </div>

                <div>
                    <div>
                        <h3>Security</h3>
                        <p>
                            The data of electrical appliances is <span className="medium">confidential</span> and <span className="medium">visible only to the client</span> and can be controlled
                            <span className="green">exclusively</span> by him.
                        </p>
                    </div>
                    <Security className="svgC"/>
                </div>

            </section>

            <section className="chooseUs">
                <div>
                    <h2>Choose <span className="green">comfort</span></h2>
                    <h2 className="right">Choose <span className="green">eSoft</span></h2>
                </div>
                <button className="btn BigBut">
                    Join us
                </button>
            </section>
        </main>

    )
}
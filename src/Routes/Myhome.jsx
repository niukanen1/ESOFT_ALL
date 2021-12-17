import News from "../svg/news.png"
export default function Myhome(props) {
    const isLogged = props.isLogged

    return (
        <main className="myHome">
            <div className="news">
                <aside>
                    <img src={News}/>
                    <div>
                        <h4>The petrol price got cut down</h4>
                        <p>The goverment has spun a new law, that has drastically dropped the petrol price. Also goverment...</p>
                    </div>
                </aside>
                <aside>
                    <img src={News}/>
                    <div>
                        <h4>The petrol price got cut down</h4>
                        <p>The goverment has spun a new law, that has drastically dropped the petrol price. Also goverment...</p>
                    </div>
                </aside>
            </div>

            <div className="mainPanel">
                dasdasdas
            </div>
        </main>
    )
}
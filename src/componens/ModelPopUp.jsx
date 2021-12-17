export default function ModelPopUp(props){
    console.log(props);

    if (props.props.state.showModal) {
        return(
            <div>
                <div className="modelback" onClick={()=> props.props.hide() }>

                </div>
                <div className="ModelPopUp" >
                    <h1>Sign in</h1>
                    <form>

                        <input type="text" placeholder="Login"/>

                        <input type="password" placeholder="Password"/>
                        <button type="submit">Sign in</button>
                    </form>
                    <hr/>
                    <p>If you haven't account, you can <span className="medium">Sign up</span></p>

                </div>
            </div>

        )
    } else {
        return (
            <></>
        )
    }

}
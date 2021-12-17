export default function ModelPopUp({ showModal }){
    if (showModal) {
        return(
            <div className="ModelPopUp">
                <h1>Sign in</h1>
                <form>

                    <input type="text" placeholder="Login"/>

                    <input type="password" placeholder="Password"/>
                    <button type="submit">Sign in</button>
                </form>

            </div>
        )
    } else {
        return (
            <></>
        )
    }

}
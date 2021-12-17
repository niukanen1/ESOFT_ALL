import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
// import { useProxy } from 'valtio/macro';
import {userState} from '../state';
const signIn = gql`
    mutation signIn($email: String!, $password: String!) { 
        login(email: $email, password: $password)
    }
`

export default function ModelPopUp(props) {
    // const snap = useProxy(userState);
    // console.log(props);
    const [state, setState] = useState({ 
        email: '', 
        password: ''
    });

    const handleChange = (e) => { 
        setState({
            ...state, 
            [e.target.name] : e.target.value,
        })
    }
    const [login] = useMutation(signIn);

    if (props.props.state.showModal) {
        return(
            <div>
                <div className="modelback" onClick={()=> props.props.hide() }>

                </div>
                <div className="ModelPopUp" >
                    <h1>Sign in</h1>
                    <form onSubmit={e => { 
                        e.preventDefault(); 
                        login({ variables: { 
                            email: state.email, 
                            password: state.password
                        }}).then(data => {
                            console.log("USERSTATE");
                            console.log(userState.loggedIn)
                            userState.loggedIn = data.data.login
                            // console.log(snap);
                            console.log(userState)
                            })
                        console.log(state);
                    }}>

                        <input name="email" onChange={handleChange}  type="text" placeholder="Login"/>

                        <input name="password" onChange={handleChange} type="password" placeholder="Password"/>
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
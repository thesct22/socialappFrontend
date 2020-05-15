import React, {Component} from 'react';
import {isAuthenticated} from '../auth/Index'

class Profile extends Component{
    constructor(){
        super();
        this.state={
            user:"",
            redirectToSignin:false
        };
    }
    
    componentDidMount(){
        
    }
    
    render(){
        return(
            <div className="container">
                <h2 className="mt-5 mb-5">Profile</h2>
                <h2><i>{isAuthenticated().user.name}</i></h2>
                <h2><i><u>{isAuthenticated().user.email}</u></i></h2>
            </div>
        )
    }
}

export default Profile;
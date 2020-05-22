import React, {Component} from 'react';
import {list} from './apiPost';
//import DefaultProfile from '../images/avatar.jpg';
import {Link} from "react-router-dom";


class Posts extends Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    };
    
    componentDidMount(){
        list().then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                this.setState({posts:data})
            }
        });
    }
    
    renderPosts=(posts)=>{
        return(
            <div className="row">
                {posts.map((post,i)=>{
                    const posterId=post.postedBy?`/user/${post.postedBy._id}`:"";
                    const posterName=post.postedBy?post.postedBy.name:" Unknown";
                    return(
                        <div className="card col-md-4" key={i}>
                            {/* <img 
                                style={{height: "200px", width: "auto"}} 
                                className="img-thumbnail" 
                                src={`${process.env.REACT_APP_API_URL}/user/photo/${user._id}?${new Date().getTime()}`} 
                                onError={i=>(i.target.src=`${DefaultProfile}`)}
                                alt={user.name}
                            /> */}
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body.substring(0,100)}</p>
                                <hr/>
                                <p className="font-italic mark">
                                    Posted By <Link to={posterId}>{posterName}{" "}</Link>
                                    on {new Date(post.created).toDateString()}
                                </p>
                                <Link to={`/posts/${post._id}`} className="btn btn-raised btn-sm btn-primary">Read more</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
    
    render(){
        const {posts}=this.state;
        return(
            <div className="container">
                <h2 className="mt-5 mb-5">Recent Posts</h2>
                
                {this.renderPosts(posts)}
            </div>
        );
    };
};

export default Posts;
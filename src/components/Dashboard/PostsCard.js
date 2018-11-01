import React from "react";

function PostsCard(props){
  
    return (
      <div>
         <h1>Posts</h1>
         <h5>{props.searchInput}</h5>
        </div>
    );
 
}

export default PostsCard;

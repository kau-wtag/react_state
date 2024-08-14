import { useState } from "react"
import Posts from "./Posts";
import Users from "./Users";

function PostsAndUsers() {

    const [model, setModel] = useState('posts');

  return (
    <div>
      <button onClick={()=> setModel('posts')}>Fetch Posts</button>
      <button onClick={()=> setModel('users')}>Fetch Users</button>
      <h1>{model}</h1>
      {model === 'posts' && <Posts/>}
      {model === 'users' && <Users/>}
    </div>
  );
}

export default PostsAndUsers
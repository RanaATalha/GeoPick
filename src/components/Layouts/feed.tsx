import * as React from 'react';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import SinglePost from '../Display/singlePost';

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    firebase.firestore().collection("Posts").onSnapshot((snapshot: any) => {
      setPosts(snapshot.docs.map((doc: any) => ({ id: doc.id, post: doc.data() })));
    })
  }, []);

  return (
    <div>
      {posts.map(({ id, post }) => {
        return (
          <SinglePost
            key={id}
            id={id}
            // profileUrl={post.profileUrl}
            username={post.user_name}
            postPic={post.Image}
            uid={post.uid}
            // caption={post.caption}
            // comments={post.comments}
            date={new Date(post.post_time.seconds * 1000).toLocaleDateString("en-US")}
            likes_count={post.likes_count}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
}

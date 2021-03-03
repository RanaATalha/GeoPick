import * as React from 'react';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import SinglePostNew from '../Display/singlePostNew';
import Post from "./Posts";

export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [lastKey, setLastKey] = useState("" as unknown  as firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>);
    const [nextPosts_loading, setNextPostsLoading] = useState(false);

    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection('Posts')
    //         .onSnapshot((snapshot: any) => {
    //             setPosts(snapshot.docs.map((doc: any) => ({ id: doc.id, post: doc.data() })));
    //         });
    // }, []);

    useEffect(() => {
        // first 5 posts
        Post.postsFirstBatch()
          .then((res) => {
            if (res) {
            setPosts(res.posts);
            console.log(res.posts[0])
            setLastKey(res.lastKey);
          } else return
        })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const fetchMorePosts = (key:firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
          console.log("hello thereee")
        if (key ) {
          setNextPostsLoading(true);
          Post.postsNextBatch(key)
            .then((res) => {
              if (res) {
              setLastKey(res.lastKey);
              // add new posts to old posts
              setPosts(posts.concat(res.posts));
              setNextPostsLoading(false);
            } else return
          })
            .catch((err) => {
              console.log(err);
              setNextPostsLoading(false);
            });
        }
      };
    
    const allPosts = (
        <div>
            {posts.map((post) => {
                if (post) {
                  // console.log("feed id", post)
                  return (
                    <SinglePostNew
                        key={post.id}
                        id={post.id}
                        // profileUrl={post.profileUrl}
                        username={post.user_name}
                        postPic={post.Image}
                        uid={post.uid}
                        // caption={post.caption}
                        // comments={post.comments}
                        date={new Date(post.post_time.seconds * 1000).toLocaleDateString('en-US')}
                        likes_count={post.likes_count}
                        caption={post.caption}
                        sharedURL={window.location.href}
                        hidden={false}
                        comments_count={post.comments_count}
                        location = {post.location}
                    />
                );
                } else return;
            })}
        </div>
    );
    // console.log(lastKey)
    return (
        // <div>
        //     {posts.map(({ id, post }) => {
        //         return (
        //             <SinglePostNew
        //                 key={id}
        //                 id={id}
        //                 // profileUrl={post.profileUrl}
        //                 username={post.user_name}
        //                 postPic={post.Image}
        //                 uid={post.uid}
        //                 // caption={post.caption}
        //                 // comments={post.comments}
        //                 date={new Date(post.post_time.seconds * 1000).toLocaleDateString('en-US')}
        //                 likes_count={post.likes_count}
        //                 caption={post.caption}
        //                 sharedURL={window.location.href}
        //                 hidden={false}
        //                 comments_count={post.comments_count}
        //             />
        //         );
        //     })}
        // </div>
        <div>
            <div>{posts ? allPosts : null}</div>
            <div style={{ textAlign: "center" }}>
        {nextPosts_loading ? (
          <p>Loading..</p>
        ) : ((lastKey) ? (
          <button onClick={() => fetchMorePosts(lastKey)}>More Posts</button>
        ) : (
          <span>You are up to date!</span>
        ))}
      </div>
        </div>
    );
}

import React, { useState } from 'react';





function Post({ post, index }) {
    return (
        <div className="post-wrap">
            <div>
                <img src={require(`../img/avatar-grey-cropped.jpg`)} alt="" />
            </div>
            <div className="post-text">
                <p className="post-text">{post.text}</p>
            </div>
        </div>

    )
}





function Profile(props) {
    const [posts, setPost] = useState([])
    const [clickPost, openPostPane] = useState(false);

    function AddFriend(friends) {
        props.updateFriend(!friends)
    }

    function PostForm({ addPost }) {
        const [value, setValue] = useState();

        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            addPost(value);
            setValue('');
        }
        return (
            <form onSubmit={handleSubmit}>
                <input className="add-post" type="text" value={value} placeholder={"Дoбавить пост..."} onChange={(e) => { setValue(e.target.value) }} />

            </form>
        )


    }
    const addPost = text => {
        const newPost = [...posts, { text }];
        setPost(newPost)
    }


















    return (
        <div className="container">
            <div className="profile">
                <div className="profile-about">
                    <div>
                        <img src={require(`../img/avatar-grey-cropped.jpg`)} alt="" />
                    </div>
                    <div>
                        <p>Имя: Олег Куць</p>
                        <p>Город: Киев</p>
                        <p>Университет: КНЕУ</p>
                    </div>
                </div>
                <div className="profile-news">
                    <div>
                        {props.friends === false ?
                            <button onClick={() => { AddFriend(props.friends) }}>Добавить в друзья</button> :
                            <button className="btn-pushed" onClick={() => { AddFriend(props.friends) }}>Заявка отправлена</button>
                        }
                    </div>
                    <div>
                        <ul className="prof-ul">
                            <div onClick={() => openPostPane(!clickPost)}>
                                <p>Посты</p>
                                {/* {clickPost === true ?
                                    <div>
                                        <PostForm addPost={addPost} />
                                        {posts.map((post, index) => (
                                            <Post key={index} index={index} post={post} />
                                        ))}

                                    </div> :
                                    <div></div>
                                } */}
                            </div>
                            <div><p>Друзья</p></div>
                            <div><p>Сообщества</p></div>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="panes-switch-wrap">
                {clickPost === true ?
                    <div>
                        <PostForm addPost={addPost} />
                        {posts.map((post, index) => (
                            <Post key={index} index={index} post={post} />
                        ))}

                    </div> :
                    <div></div>
                }
            </div>
        </div >
    );
}

export default Profile;

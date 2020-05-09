import React, { useState } from 'react';






function Profile(props) {

    console.log(props.friends)
    function AddFriend(friends) {
        props.updateFriend(!friends)
    }
    console.log(props.friends)
    return (
        <div className="container">
            <div className="profile">
                <div className="profile-about">
                    <div>
                        <img src={require(`../img/avatar-grey-cropped.jpg`)} alt="" />
                        {props.friends === false ?
                            <button onClick={() => { AddFriend() }}>Добавить в друзья</button> :
                            <button onClick={() => { AddFriend() }}>Заявка отправлена</button>
                        }
                    </div>
                    <div>
                        <p>Name</p>
                        <p>City</p>
                        <p>Uni</p>
                    </div>
                </div>
                <div className="profile-news">
                    <ul>
                        <li>Посты</li>
                        <li>Друзья</li>
                        <li>Сообщества</li>
                    </ul>
                    <div className="post-wrap">
                        <input type="text" placeholder="написать пост" />
                        <button>Запостить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

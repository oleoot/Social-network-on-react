import React, { useState } from 'react';










function News() {

    const [likes, LikeAction] = useState(false)

    console.log(likes)


    return (
        <div className="news">
            <div className="container-s">
                <div className="news-post">
                    <img src={require(`../img/bg.jpg`)} alt="" className="post-img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex optio alias natus nemo. Impedit, omnis cupiditate. Voluptatum illum voluptatibus rem quo iure laudantium sunt voluptas. Beatae earum assumenda maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum vero voluptas odio consectetur vitae accusamus quidem pariatur odit optio vel ratione exercitationem laudantium in repellendus, est ipsum corporis sit?</p>
                    {likes === false ?
                        <img src={require(`../img/heart.png`)} alt="" className="like" onClick={() => { LikeAction(!likes) }} /> :
                        <img src={require(`../img/heart-red.png`)} alt="" className="like" onClick={() => { LikeAction(!likes) }} />
                    }
                    {/* <img src={require(`../img/heart.png`)} alt="" className="like" onClick={() => { LikeAction(!likes) }} /> */}
                </div>
                <div className="news-post">
                    <img src={require(`../img/bg-1.jpg`)} alt="" className="post-img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex optio alias natus nemo. Impedit, omnis cupiditate. Voluptatum illum voluptatibus rem quo iure laudantium sunt voluptas. Beatae earum assumenda maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illum vero voluptas odio consectetur vitae accusamus quidem pariatur odit optio vel ratione exercitationem laudantium in repellendus, est ipsum corporis sit?</p>
                    <img src={require(`../img/heart.png`)} alt="" className="like" />
                </div>

            </div>
        </div>
    )

}

export default News;

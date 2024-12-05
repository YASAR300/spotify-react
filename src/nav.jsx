import React from 'react';
import spot from './img/logo.png';
import home from './img/Home.png';
import search from './img/Search.png';
import lib from './img/lib.png';
import cr from './img/Create.png';
import like from './img/Liked.png';
import ep from './img/ep.png';
import int from './img/in.png';
import d from './img/d.png';
import bh from './img/gh.png';
import m from './img/m.png';
import r from './img/r.png';
import arr from './img/ar.png';
import user from './img/user.png';
import image from './img/image4.png';
import image1 from './img/image3.png';
import image2 from './img/image1.png';
import image3 from './img/image2.png';
import image4 from './img/image9.png';
import image5 from './img/image8.png';
import image6 from './img/image7.png';
import image7 from './img/image6.png';
import image8 from './img/image5.png';
import image9 from './img/image10.png';








const App = () => {
    return (
        <div>
            <nav className='nav'>
                <div className='logo'>
                    <img src={spot} alt="" />
                </div>
                <div>
                    <div className="home">
                        <div className="three three1">
                            <div className="image">
                                <img src={home} alt="" />
                            </div>
                            <div className="text">
                                <p>Home</p>
                            </div>
                        </div>
                        <div className="three">
                            <div className="image">
                                <img src={search} alt="" />
                            </div>
                            <div className="text">
                                <p>Search</p>
                            </div>
                        </div>
                        <div className="three three2">
                            <div className="image">
                                <img src={lib} alt="" />
                            </div>
                            <div className="text">
                                <p>Your Library</p>
                            </div>
                        </div>
                    </div>
                    <div className="home home1">
                        <div className="three th">
                            <div className="image">
                                <img src={cr} alt="" />
                            </div>
                            <div className="text">
                                <p>Create Playlist</p>
                            </div>
                        </div>
                        <div className="three th">
                            <div className="image">
                                <img src={like} alt="" />
                            </div>
                            <div className="text">
                                <p>Liked Songs</p>
                            </div>
                        </div>
                        <div className="three th">
                            <div className="image">
                                <img src={ep} alt="" />
                            </div>
                            <div className="text">
                                <p>Your Episodes</p>
                            </div>
                        </div>
                    </div>
                    <div className="f">
                        <p>FAV</p>
                        <p>Daily Mix 1</p>
                        <p>Discover Weekly</p>
                        <p>Malayalam</p>
                        <p>Dance/ElectronicxMix</p>
                        <p>EDM/Populer</p>
                    </div>
                    <div className="install">
                        <div className="image">
                            <img src={int} alt="" />
                        </div>
                        <div className="text">
                            <p>Install Spotify</p>
                        </div>
                    </div>
                </div>
            </nav>

            <h1>Good morning</h1>
            <div className="container">
                <div className="list_container">
                    <div className="left">

                        <img src={arr} alt="" class="arrow" />
                    </div>
                    <div className="right">
                        <img src={user} alt="" class="user" />
                    </div>
                </div>
            </div>
            <div class="main">
                <div className="item">
                    <img src={like} alt="Liked Songs" />
                    <span>Liked Songs</span>
                </div>
                <div className="item">
                    <img src={image} alt="Neffex Playlist" />
                    <span>Neffex Playlist</span>
                </div>
                <div className="item">
                    <img src={image1} alt="K/DA" />
                    <span>K/DA</span>
                </div>
                <div className="item">
                    <img src={image2} alt="Liked Songs" />
                    <span>Liked Songs</span>
                </div>
                <div className="item">
                    <img src={image3} alt="Dance / Electronic Mix" />
                    <span>Dance / Electronic <br />Mix</span>
                </div>
            </div>
            <h2>Shows you might like</h2>
            <div className="main1">

                <div className="item1">
                    <img src={image4} alt="" />
                    <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
                </div>
                <div className="item1">
                    <img src={image5} alt="" />
                    <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
                </div>
                <div className="item1">
                    <img src={image6} alt="" />
                    <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
                </div>
                <div className="item1">
                    <img src={image7} alt="" />
                    <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
                </div>
                <div className="item1">
                    <img src={image8} alt="" />
                    <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
                </div>
                <div className="item1">
                    <img src={image9} alt="" />
                    <span>Weekly Motivation... <br /> Ben Lee Scoot</span>
                </div>
            </div>
            <div className="last">
                <div className="bottom1">
                    <div class="right">
                        <img src={d} alt="" class="j" />
                        <span>
                            Dreaming on <br />
                            NEFFEX
                        </span>
                        <img src={bh} alt="" class="heart" />
                    </div>
                    <div className="middle">
                        <img src={m} alt="" />
                    </div>
                    <div className="left">
                        <img src={r} alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <p>Listening on ASUS-ROG-G531GT</p>
                </div>

            </div>
        </div>
    );
};

export default App;

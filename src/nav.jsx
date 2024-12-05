import React from 'react';
import spot from './img/logo.png';
import home from './img/home.png';
import search from './img/search.png';
import lib from './img/lib.png';
import cr from './img/Create.png';
import like from './img/Liked.png';
import ep from './img/ep.png';
import int from './img/in.png';



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
    </div>
  );
};

export default App;

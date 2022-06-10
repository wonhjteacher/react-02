import React from 'react';
import './css/index.css';
import userData from './userData.json';
import feedData from './feedData.json';
import TxtFeed from '../TxtFeed';

const MainFeed = () => {
    const dbFeeds = feedData;
    const users =  userData.map((item)=>{
        return (
            <li className='friend' key={item.id}>
                <div className='profile-image'></div>
                <div className='nickname'>{item.username}</div>
            </li>
        )
    })

    return (
        <div className='mainFeed'>
            <div className='wrapper'>
            <div className='feed-list'>
                    <form className='write-feed'>
                         <div className='profile-image'></div>
                         <div className='inp'>
                             <input type='text' placeholder='오늘은 무슨일이 있었나요?' />
                         </div>
                         <div className='get-image'>
                            <label htmlFor='get-image-input'>
                                <img src="/assets/main/add-image.svg" alt="이미지추가하기" />
                            </label>
                            <input type="file" id="get-image-input" />
                         </div>
                    </form>
                    {
                         dbFeeds.map((feed)=>{
                             return (
                                <TxtFeed email={feed.email} body={feed.body} name={feed.name} key={feed.id} />
                                
                             )
                         })
                    }
                    
                    <div className='feed'>
                            <div className='top'>
                                <div className='profile-image'></div>
                                <div className='profile-desc'>
                                    <div className='nickname txt-bold'>길동 홍</div>
                                    <div className='timestamp'>08:15 pm ,yesterday </div>
                                </div>
                            </div>{/* top */}
                            <div className='contents'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fuga ratione magni repudiandae modi aut, deleniti soluta, maiores neque dolorum quidem non optio cumque quibusdam autem incidunt amet illo quia doloremque dignissimos voluptatum ab ipsam vero nostrum. Neque, voluptatibus harum dolore ex dolores aut rem nobis. Totam architecto quo molestias!
                                    <div className='image'></div>
                            </div>{/* contents */}
                            <div className='bottom'>
                                <div className='like'>
                                    <div className='asset'>
                                        <img src="/assets/feed/like-dac.svg" alt="좋아요" />
                                    </div>
                                    <div className='count txt-bold'> 25k </div>
                                </div>
                                <div className='comment'>
                                    <div className='asset'>
                                        <img src="/assets/feed/comment.svg" alt="댓글" />
                                    </div>
                                    <div className='count txt-bold'>25k</div>
                                </div>
                           </div>{/* bottom */}
                    </div>{/* feed-img :end */}
                 </div>
                {/* feed-list */}
              <div className='friend-list'>
                    <div className='my-profile'>
                        <div className='profile-image'></div>
                        <div className='nickname'>길동 홍</div>
                    </div>
                    <div className='my-friends'>
                        <div className='title txt-bold'>나의팔로워</div>
                        <ul className='friends'>
                          {users}     
                        </ul>
                    </div>
              </div>
                {/* friend-list */}
            </div>
        </div>
        
    );
};

export default MainFeed;
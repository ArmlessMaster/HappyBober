import React, { useState, useContext } from "react";
import './AdCard.scss';
import ImageGallery from 'react-image-gallery';
import { Modal } from "../modal/Modal";
import { Report } from "../report/Report";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";




export const AdCard = ({ ad, handleFavourite, creator  }) => {

  const [modalActive, setModalActive] = useState(false);
  const { accountId, token } = useContext(AuthContext);

  const images = [];

  
  ad.picture.forEach((image) =>  {
    images.push({original: image, thumbnail: image});
  })


        const [galleryOpened, setGalleryOpened] = useState(true);
        const toggleGallery = () => setGalleryOpened(!galleryOpened);

    return (
        <div className="card">
            <div className="header"></div>
            <div className="AdCard">
              <div className="images">
                <ImageGallery  items={images} showThumbnails="true" thumbnailPosition='bottom' />
                <div className="buttons">
                 {accountId && <p style={{cursor: 'pointer'}} onClick={handleFavourite}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.9886 8.10049C24.8964 6.37762 24.1669 4.75971 22.9344 3.54478C21.6862 2.31441 20.0573 1.63678 18.3482 1.63678C15.8046 1.63678 13.9611 3.64793 12.9707 4.72846C12.8178 4.89533 12.6386 5.09079 12.5139 5.21005C12.4141 5.10674 12.2788 4.95269 12.1543 4.81103C11.2498 3.78074 9.36745 1.63686 6.65239 1.63686C4.94324 1.63686 3.31451 2.31449 2.06628 3.54487C0.833672 4.75971 0.104059 6.37753 0.0118238 8.10049C-0.0799977 9.82055 0.359936 11.3172 1.43832 12.9536C2.29158 14.2486 4.54133 16.7773 6.90918 19.1032C8.12881 20.3012 9.25133 21.3164 10.1553 22.0392C11.6233 23.2128 12.1856 23.3633 12.5113 23.3633C12.8167 23.3633 13.3942 23.2263 14.8762 22.0425C15.7782 21.3221 16.8968 20.3084 18.1113 19.1111C20.4579 16.7978 22.6995 14.2657 23.5624 12.9533C24.2882 11.8494 25.1062 10.3003 24.9886 8.10049Z" fill="#FFCACA"/>
                  </svg>Add to favorite</p>} 
                  {!(accountId === null || accountId ===  creator._id) && <button  onClick={() => setModalActive(true)}>Report</button>}
                </div>
              </div>
              <div className="animal-info">
                <div className="animal_name">{ad.animalName}</div>
                <div className="animal_price">{ad.price}₴</div>
                <div className="animal-info-list">
                  <div className="info__var">
                    <div className="type__var  list-elem">Type of animal:</div>
                    <div className="breed__var  list-elem">Breed:</div>
                    <div className="gender__var  list-elem">Gender:</div>
                    <div className="age__var  list-elem">Age:</div>
                    <div className="color__var  list-elem">Color:</div>
                  </div>
                  <div className="info">
                    <div className="type  list-elem"><strong>{ad.type}</strong></div>
                    <div className="breed  list-elem"><strong>{ad.breed}</strong></div>
                    <div className="gender  list-elem"><strong>{ad.gender}</strong></div>
                    <div className="age  list-elem"><strong>{ad.age}</strong></div>
                    <div className="color list-elem"><strong>{ad.color}</strong></div>
                  </div>
                </div> 
                <div className="bottom-info">
                    <p>More information:</p>
                    <p><strong>{ad.information}</strong></p>
                  </div>
              </div> 
              <div className="account-info">
                  <div className="user-card">
                    <div className="user-label">User:</div>
                    <div className="user-info">
                    <Link to={`/account/${ad.account}`}><img className="user-photo" width={'25px'} height={'25px'} src={creator.photo}/>
                    </Link>
                      
                      <div className="user-info-labels">
                        <div className="user-name">{creator.firstName}</div>
                        <div className="user-time">{creator.lastLogin}</div>
                        <div className="user-since">on happy beaver since {creator.registeredAt}</div>
                      </div>
                    </div>
                    <Link to={`/ads/${creator.firstName}/${ad.account}`}><div className="allAds">All autor ads</div></Link>

                    <div className="bottons">
                      <div className="botton-buy"></div>
                      <div className="Show-phone-buy"></div>
                    </div>
                  </div>
                  <div className="location-card">
                    
                  </div>
                </div>
            </div>
            <Modal active={ modalActive} setActive={setModalActive} children={<Report reportType={'ad'} ad={ad}></Report>}></Modal>
            {accountId ===  creator._id && <Link to={`/editad/${ad._id}`}><button>Edit</button></Link>}
        </div>
    )
}
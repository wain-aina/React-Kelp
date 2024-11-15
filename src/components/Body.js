import '../App.css';
import '../assets/css/Responsive.css';
import v3 from '../assets/images/v3.png';
import dummyfood from '../assets/images/dummyfood.webp';
import HomeSwiper from './Homepage/Swiper/Swiper';
import ReviewCard from './Homepage/Reviews/Reviews.js';

const Body = () => {
  return (
    <div className="body">

        <section id="header">

            <nav className="navbar sticky-top navbar-expand-lg navbar-hide-on-scroll">
                <div className="container-fluid ">
                    <a className="navbar-brand ps-5" href="/">
                        <img src={v3} alt="Kelp" width="72" height="72"/>
                    </a>
                    <button id="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className="collapse navbar-collapse justify-content-center"  id="navbarSupportedContent">
                        <ul className="nav nav-pills navbar-nav ">
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/stem">Restaurants</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link" href="/join">Write A Review</a>
                            </li>
                            <form className="d-flex px-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <li className="nav-item px-3">
                                <a href="/" className="nav-link"><button className="btn btn-danger">Login</button></a>
                            </li>
                            <li className="nav-item px-3">
                                <a href="/" className="nav-link"><button className="btn btn-outline-primary">Sign Up</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>

        <section id="hero">

        <div className="bdt-timeline-container">
            <div className="upk-salf-slider-wrapper">
                <div className="swiper-container mySwiper2">
                    <div className="swiper-wrapper">

                        <HomeSwiper/>

                    </div>
                </div>
                <div className="upk-page-scroll">
                    <a className="arrow-up">
                        <div className="long-arrow-left"></div>
                        <span className="arrow-slide"></span>
                    </a>
                </div>
                <div className="upk-salf-nav-pag-wrap">
                    
                    <div className="upk-salf-navigation">
                        <div className="upk-button-prev upk-n-p">
                            <a className="link link--arrowed" href="#">
                                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="upk-button-next upk-n-p">
                            <a className="link link--arrowed" href="#">
                                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                                    <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                                    <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="upk-salf-pagi-wrap">
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>

        </section>

        <section id="recent-activity">

        <div className="container-fluid">

            <div className="text-center py-3">
                <h2 className="intro-title">
                    What our kelpers are saying
                </h2>
            </div>

            <div className="row px-1 container-content">

                <ReviewCard/>

                <div className="col-lg-4 col-md-4 pb-4 activity-card">
                    <div className="share-card p-2 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="icon"> <i className="fa-regular fa-user fa-xs"></i> </div>
                                <div className="ms-4 c-details">
                                    <p className="mb-0 recent-post"><strong>Jessie did something</strong></p>
                                    <p className="">1 year ago</p>
                                </div>
                            </div>
                        </div>
                        <hr className="m-0"/>
                        <div className="mt-3 px-2">
                            <h4 className="px-1">
                                <strong>JJ Baze Ya PS</strong>
                            </h4>
                            <div className="star-rating">
                                <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                <div className="px-1 rating-count">20</div>
                            </div>
                            <p>
                                Fat, salt, sugar All-in-one
                            </p>
                            <div className="row">

                                <div className="col-lg-6 col-md-6 col-6 mb-2">
                                    <div className="card user__shared__img">
                                        <img src={dummyfood} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text text-center">
                                                <i className='bx bx-heart bx-sm'></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-6 col-md-6 col-6 mb-2">
                                    <div className="card user__shared__img">
                                        <img src={dummyfood} className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <p className="card-text text-center">
                                                <i className='bx bx-heart bx-sm'></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="review px-2">
                            <span className="review-content hide-extra">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6 mb-2">
                                        <div className="card user__shared__img">
                                            <img src={dummyfood} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <p className="card-text text-center">
                                                    <i className='bx bx-heart bx-sm'></i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <p className="fs-5">
                                <a  className="read-more fs-6">Show More</a> 
                            </p>
                            
                        </div>
                    </div>
                </div>

                    <div className="col-lg-4 col-md-4 pb-4 activity-card">
                        <div className="review-card p-2 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="fa-regular fa-user fa-xs"></i> </div>
                                    <div className="ms-4 c-details">
                                        <p className="mb-0 recent-post"><strong>Jessie did something</strong></p>
                                        <p className="">1 year ago</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="m-0"/>
                            <div className="mt-3 px-2">
                                <h4 className="px-1">
                                    <strong>Rock Yo Mama</strong>
                                </h4>
                                <div className="star-rating">
                                    <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                    <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                    <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                    <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                    <div className="px-1"><i className="fa-solid fa-star fa-lg"></i></div>
                                    <div className="px-1 rating-count">20</div>
                                </div>
                                <div className="place_img mx-auto p-0 mb-3">
                                    <img src="https://6amcity.brightspotcdn.com/dims4/default/26f5f53/2147483647/strip/true/crop/1332x750+0+69/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2F0d%2F84%2F7c175b5e443092d969b6c19af3f5%2F393170483-18307701454185066-3288527068679201488-n.jpg" alt="Something"/>
                                </div>
                            </div>
                            <div className="review px-4">

                                <p className="fs-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    <span className="review-content hide-extra">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/>
                                    </span>
                                    <a  className="read-more fs-6">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>

            </div>

        </div>

        </section>

        <section id="categories">

        <div className="text-center py-3">
            <h2 className="intro-title">
                Pick from our bounty
            </h2>
        </div>

        <div className="cards">
            <div className="card bounties" active>
                <img src="https://www.visitcelina.org/wp-content/uploads/2023/12/Wine-and-Dine.jpg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">Wine & Dine</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a className="card__author">
                            <strong>
                                From elegant fine dining establishments to cozy wine cellars, discover the perfect place to savor delicious cuisine paired with exceptional wines. 
                            </strong>
                        </a>
                    </span>
                </div>
            </div>

            <div className="card bounties">
                <img src="https://portsoyicecream.co.uk/site/wp-content/uploads/ice-cream-collection.jpg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">Chill Zone</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a href="categories/chill.html" className="card__author">
                            <strong>
                                Escape the heat and indulge in a world of icy delights. Discover a refreshing assortment of frozen treats, from classNameic ice cream flavors to innovative concoctions.
                            </strong>
                        </a>
                    </span>
                </div>
            </div>

            <div className="card bounties">
                <img src="https://gourmet-food-and-more.de/assets/images/c/gourmet-food_03-4ecfcded.jpeg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">Global Gourmet</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a className="card__author">
                            <strong>
                                Discover authentic flavors, from the spicy curries of India to the delicate sushi of Japan. Indulge in exotic handcrafted delicacies that will tantalize your taste buds. 
                            </strong>
                        </a>
                    </span>
                </div>
            </div>  

            <div className="card bounties">
                <img src="https://wtop.com/wp-content/uploads/2023/09/MEATUP1-scaled.jpg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">All You Can Eat</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a className="card__author">
                            <strong>
                                Discover your favorite foods with our all-you-can-eat dining experience. Enjoy unlimited servings and create your own culinary adventure.
                            </strong>
                        </a>
                    </span>
                </div>
            </div>

            <div className="card bounties">
                <img src="https://as1.ftcdn.net/v2/jpg/02/16/87/50/1000_F_216875051_qtnqMplTU69DtaK4apqRa2zM07pexttd.jpg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">Meat Mania</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a className="card__author">
                            <strong>
                                From juicy steaks and succulent burgers to savory sausages and tender ribs, we've got something to satisfy every meat lover's appetite.
                            </strong>
                        </a>
                    </span>
                </div>
            </div>

            <div className="card bounties">
                <img src="https://recipes.net/wp-content/uploads/2024/05/classNameic-American-Sweet-Treats-1.jpg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">Sweets & Treats</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a className="card__author">
                            <strong>
                                From classNameic candies and chocolates to gourmet desserts and baked goods, we have something to satisfy every craving.
                            </strong>
                        </a>
                    </span>
                </div>
            </div>

            <div className="card bounties ">
                <img src="https://info.ehl.edu/hubfs/Coffee%20Culture_featured%202-1.jpg" alt="" className="card__image"/>
                <div className="name__of__card">
                    <h3 className="card__name">Brewed Beauties</h3>
                </div>
                <div className="card__infos">
                    <span className="card__author__span py-1">
                        <a className="card__author ">
                            <strong>
                                Indulge in a world of aromatic and flavorful beverages, from handcrafted coffees to soothing teas.
                            </strong>
                        </a>
                    </span>
                </div>
            </div>

        </div>

        </section>

    </div>
  );
}

export default Body;


const Header = () => {
    return (
        <div className="py-10 lg:py-20">
            <div className="carousel w-full container mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.chicken-republic.com/wp-content/uploads/2023/04/Chicken_Republic_EggStar-Meal_web-banner.jpg" className="w-full h-[300px] lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.healthifyme.com/blog/wp-content/uploads/2015/05/Fish-1.jpg" className="w-full h-[300px] lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/c2bdac119155817.6097f735a8c84.jpg" className="w-full h-[300px] lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.dribbble.com/users/3906861/screenshots/11048961/03_4x.jpg" className="w-full h-[300px] lg:h-[700px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
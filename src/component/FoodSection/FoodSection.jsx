import LazyLoad from 'react-lazy-load';

const FoodSection = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-center text-[30px] font-bold">Foods</h1>
            <p className="text-center mb-8">Company Brand Food</p>
            <div className="grid gap-6 md:grid-cols-4 p-4 lg:p-0">
                <LazyLoad><img src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06gaRMt_gG7bO1ppLfbJ0C6CT2eah6j5sEZzRfbTIyblK_1nWa0Z_-fs3aYeLytFKvT0&usqp=CAU" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://static01.nyt.com/images/2022/12/28/multimedia/27food-forecast12-1-ae3b/27food-forecast12-1-ae3b-articleLarge.jpg?quality=75&auto=webp&disable=upscale" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6X6XwwgXEvC1r8zj9Wu0_h8x-F9v6jYe9w&usqp=CAU" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                <LazyLoad><img src="https://foodtank.com/wp-content/uploads/2022/05/Food-As-Medicine-Featured.jpg" className="drop-shadow-2xl w-[400px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
            </div>
        </div>
    );
};

export default FoodSection;
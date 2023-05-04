import LazyLoad from 'react-lazy-load';

const FootBrand = () => {
    return (
        <div className="container mx-auto py-10">
            <div className='flex justify-center'>
                <div>
                    <h1 className="text-center text-[30px] font-bold">Brand</h1>
                    <p className="text-center mb-8">Company Brand logo</p>
                    <div className="grid gap-12 md:grid-cols-4">
                        <LazyLoad><img src="https://images.squarespace-cdn.com/content/v1/5ee642363713db37c1aa1c70/1600600339166-DPWRG6VT8GFF4UAX5OV5/image-asset.jpeg" className="drop-shadow-2xl w-[300px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                        <LazyLoad><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysDP2mYTLZTNbPrWlPoRTERSxbv3pcl7_EkgDXbC6c1sgadRvMVDD6Aw5AqhL60NR5Do&usqp=CAU" className="drop-shadow-2xl w-[300px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                        <LazyLoad><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4goBrRZi7ywk5oOEpuZhB-cfuMDuhsYhzQ&usqp=CAU" className="drop-shadow-2xl w-[300px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                        <LazyLoad><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaD9ClbagM6ICPprybM1izYl0_XkYaxjAybA&usqp=CAU" className="drop-shadow-2xl w-[300px] rounded-md h-[220px]" alt="brand img" /></LazyLoad>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootBrand;
import React from "react";

function Blog() {
    return (
        <div className="flex flex-col gap-2 py-3 items-center w-full px-[5%] mx-auto bg-[#212121]">
            <h1 className="text-white text-3xl md:text-4xl font-semibold mt-6">
                Blogs
            </h1>
            <p className="text-center md:text-xl md:w-[80%] text-white mb-6">
                All are blogs
            </p>
            <div
                id="blog-images"
                className="w-64 sm:w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:grid-rows-[repeat(3,_16rem)] gap-4"
            >
                <div className="w-full max-w-64 h-64 bg-[url(https://i.ibb.co/DYxtCJq/img-1.png)] bg-cover bg-center justify-self-center relative text-white xl:w-64 xl:h-64">
                    <div className="text-white absolute top-[5%] right-[5%] text-sm">
                        15 March 2024
                    </div>
                    <div className="flex flex-col gap-1 absolute bottom-[10%] left-[10%]">
                        <h3 className="text-xl">The Decorated Ways</h3>
                        <p>Dive into minimalist</p>
                        <h5 className="text-sm font-semibold">
                            <span className="hover:underline">Read More</span>{" "}
                            <i class="ri-arrow-right-s-line"></i>
                        </h5>
                    </div>
                </div>
                <div className="w-full max-w-64 h-64 bg-[url(https://i.ibb.co/3C5HvxC/img-2.png)] bg-cover bg-center justify-self-center relative text-white xl:w-64 xl:h-64">
                    <div className="text-white absolute top-[5%] right-[5%] text-sm">
                        15 March 2024
                    </div>
                    <div className="flex flex-col gap-1 absolute bottom-[10%] left-[10%]">
                        <h3 className="text-xl">The Decorated Ways</h3>
                        <p>Dive into minimalist</p>
                        <h5 className="text-sm font-semibold">
                            <span className="hover:underline">Read More</span>{" "}
                            <i class="ri-arrow-right-s-line"></i>
                        </h5>
                    </div>
                </div>
                <div className="w-full max-w-64 h-96 md:h-64 bg-[url(https://i.ibb.co/6Wfjf2w/img-4.png)] bg-cover bg-center justify-self-center relative text-white xl:col-start-3 xl:col-end-5 xl:row-start-1 xl:row-end-3 xl:w-[33rem] xl:max-w-[33rem] xl:h-[33rem]">
                    <div className="text-white absolute top-[5%] right-[5%] text-sm">
                        15 March 2024
                    </div>
                    <div className="flex flex-col gap-1 absolute bottom-[10%] left-[10%]">
                        <h3 className="text-xl">The Decorated Ways</h3>
                        <p>Dive into minimalist</p>
                        <h5 className="text-sm font-semibold">
                            <span className="hover:underline">Read More</span>{" "}
                            <i class="ri-arrow-right-s-line"></i>
                        </h5>
                    </div>
                </div>
                <div className="w-full max-w-64 h-96 md:h-64 bg-[url(https://i.ibb.co/Ms4qyXp/img-3.png)] bg-cover bg-center justify-self-center relative text-white xl:col-start-1 xl:col-end-3 xl:row-start-2 xl:w-[33rem] xl:max-w-[33rem] xl:h-[33rem]">
                    <div className="text-white absolute top-[5%] right-[5%] text-sm">
                        15 March 2024
                    </div>
                    <div className="flex flex-col gap-1 absolute bottom-[10%] left-[10%]">
                        <h3 className="text-xl">The Decorated Ways</h3>
                        <p>Dive into minimalist</p>
                        <h5 className="text-sm font-semibold">
                            <span className="hover:underline">Read More</span>{" "}
                            <i class="ri-arrow-right-s-line"></i>
                        </h5>
                    </div>
                </div>
                <div className="w-full max-w-64 h-64 bg-[url(https://i.ibb.co/3yvZBpm/img-5.png)] bg-cover bg-center justify-self-center relative text-white xl:col-start-3">
                    <div className="text-white absolute top-[5%] right-[5%] text-sm">
                        15 March 2024
                    </div>
                    <div className="flex flex-col gap-1 absolute bottom-[10%] left-[10%]">
                        <h3 className="text-xl">The Decorated Ways</h3>
                        <p>Dive into minimalist</p>
                        <h5 className="text-sm font-semibold">
                            <span className="hover:underline">Read More</span>{" "}
                            <i class="ri-arrow-right-s-line"></i>
                        </h5>
                    </div>
                </div>
                <div className="w-full max-w-64 h-64 bg-[url(https://i.ibb.co/gDdnJb5/img-6.png)] bg-cover bg-center justify-self-center relative text-white">
                    <div className="text-white absolute top-[5%] right-[5%] text-sm">
                        15 March 2024
                    </div>
                    <div className="flex flex-col gap-1 absolute bottom-[10%] left-[10%]">
                        <h3 className="text-xl">The Decorated Ways</h3>
                        <p>Dive into minimalist</p>
                        <h5 className="text-sm font-semibold">
                            <span className="hover:underline">Read More</span>{" "}
                            <i class="ri-arrow-right-s-line"></i>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;

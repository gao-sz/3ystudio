import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Solution: NextPage = () => {
    const openSource = [
        {
            title: 'Qt',
            description: 'Cross-platform ',
            // href: '/projects/unirepo'
        },
        {
            title: 'OpenCV',
            description: 'a real-time optimized Computer Vision library, tools',
            href: 'https://github.com/opencv'
        },
    ];

    const apps = [
        {
            title: 'Desktop applications',
            description: 'Equipment control and analysis apps with GUI, camera, motion and algorithm',
        },
        {
            title: 'Mobile applications',
            description: 'apps and applet of Wechat',
            // href: '/projects/wibb'
        },
        {
            title: 'Website',
            description: 'Help others build official websites and blogs',
        },
    ];
    return (
        <>
            <Seo title="面向企业和个人的定制软件解决方案" />

            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-2/3">
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                面向企业和个人的定制软件解决方案
                            </h1>
                            <p className="text-primary text-3xl uppercase font-bold my-2">软件开发服务</p>
                            <Link href={"/contact"} target="_blank" className="flex items-center justify-center font-semibold text-center md:justify-start text-primary hover:underline md:text-left">
                                面向企业和个人的定制软件解决方案🚀
                            </Link>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/solution-images/Image-Software-Development-Services.svg")} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                Windows&Linux系统应用开发
                            </h1>
                            <ol>
                                <li className="text-primary text-xl uppercase font-bold my-2">构建您的应用级软件产品</li>
                            </ol>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/solution-images/header_screen_main.png")} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                界面定制开发
                            </h1>
                            <p className="text-primary text-xl uppercase font-bold my-2">丰富的界面元素</p>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/solution-images/custom-gui-design.png")} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                APP应用开发
                            </h1>
                            <p className="text-primary text-xl uppercase font-bold my-2">掌上应用程序构建</p>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/solution-images/Image-Mobile-App-Development-Services.svg")} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                网站建设、网上商城
                            </h1>
                            <p className="text-primary text-xl uppercase font-bold my-2"></p>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/solution-images/web-development-services-for-startups.svg")} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Solution;

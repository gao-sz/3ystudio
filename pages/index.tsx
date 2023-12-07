import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon, Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";
import { describe } from "node:test";

const Home: NextPage = () => {
    return (
        <>
            <Seo title="工业自动化软件开发服务" />
            <TopNavigationBar />
            <main>

                <section className="flex flex-col items-center min-h-screen w-screen bg-[url('/assets/images/home-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="w-full md:w-2/3">
                        <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                            3YStudio™ 创建您的下一个工业自动化项目
                        </h1>
                        <p className="text-primary text-3xl uppercase font-bold my-2">利用端到端解决方案实现工业产品软件设计、开发、质保和部署。</p>

                    </div>
                    <div className="flex justify-center items-center mx-auto">
                        <Image alt="team members" src={require("../public/assets/images/solution-images/industry-stack-software.webp")} data-aos="zoom-in-right" />
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-white border-dashed border-y-4">
                    <div className="flex flex-col w-full max-w-4xl gap-10 md:flex-row md:py-10">
                        <img src="/assets/images/left-quote.png" alt="left-quote" className="self-start w-14 md:w-24 aspect-square" data-aos="fade-right" />
                        <div className="w-full">
                            <h3 className="my-2 text-lg font-bold uppercase text-primary">Powerful & Professional & Fast</h3>
                            <p className="my-2 text-3xl font-light text-neutral-900">3YStudio™  {new Date().getFullYear() - 2013}年专注于工业自动化测量系统开发，实验室自动化，数据分析开发。拥有全面的硬件控制，界面定制，数据分析等技术能力。
                                {/* <Link href='/event'><b>重点事件</b></Link> and <Link href='/blog'><b>经验分享</b></Link> */}
                            </p>
                        </div>
                        <img src="/assets/images/right-quote.png" alt="right-quote" className="self-end w-14 md:w-24 aspect-square" data-aos="zoom-in" />
                    </div>
                </section>


                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                            {[
                                {
                                    url: "/solution",
                                    title: "工业设备",
                                    description: "工业检测、医疗设备、电力等不同行业服务",
                                    image: "assets/images/home/LASERS-LIGHTING-EQUIPMENT.jpg"
                                },
                                {
                                    url: "/solution",
                                    title: "工业自动化",
                                    description: "目标定位，二维码扫描，样本采集，数据分析，报告导出，数据上传",
                                    image: "assets/images/home/application_machine_vision_camera.jpg"
                                },
                                {
                                    url: "/event",
                                    title: "目标检测",
                                    description: "目标检测，缺陷检测，数据分析",
                                    image: "assets/images/home/Edge-Detection-Methods-using-OpenCV.png"
                                },
                                {
                                    url: "/solution",
                                    title: "测量分析工具",
                                    description: "数据采集，过程记录，信号检测，数据分析，数据可视化，数据导出",
                                    image: "assets/images/home/data-analysis.jpg"
                                }
                            ].map((press, index) => (
                                <div key={index} data-aos="fade-up">
                                    <img src={press.image} className="w-full aspect-square md:aspect-video object-cover rounded-2xl" alt={press.title} />

                                    <div className="p-4 space-y-5">
                                        <h2 className="text-primary text-2xl font-bold mb-2">{press.title}</h2>
                                        <p className="my-2 text-3xl font-light text-neutral-900">{press.description}</p>
                                        <Link href={press.url} className="btn bg-primary hover:bg-primary border-none text-white gap-3 my-5">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-primary">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="my-2 text-4xl font-bold text-center text-white md:text-5xl">我们的优势</h2>
                        <p className="my-2 text-xl font-light text-center text-white/90">高质量，高效率，高性价比，后期维护支持，无忧放心</p>
                        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3 md:pt-20">
                            {[
                                {
                                    url: "/contact",
                                    title: "售前支持",
                                    description: "我们免费提供售前支持，为您的项目提供业务梳理、方案设计等服务",
                                    image: "/assets/images/membership-icon.svg",
                                    btntext: "Support"
                                },
                                {
                                    url: "/contact",
                                    title: "精诚合作",
                                    description: "在项目需求沟通，原型设计，开发，测试，交付，支持服务各个开发阶段全流程控制",
                                    image: "/assets/images/partnership-icon.svg",
                                    btntext: "Contact"
                                },
                                {
                                    url: "/contact",
                                    title: "售后服务",
                                    description: "我们提供项目维保服务、为项目运维保驾护航",
                                    image: "/assets/images/support-icon.svg",
                                    btntext: "Support"
                                }
                            ].map((array, index) => (
                                <div key={index} data-aos="fade-up">
                                    <div className="flex flex-col items-center space-y-4 md:items-start">
                                        <img src={array.image} alt="membership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                        <h3 className="my-2 text-3xl font-medium text-white" data-aos="fade-right">
                                            {array.title}
                                        </h3>

                                        <p className="text-lg font-thin text-center md:text-left text-white/80">
                                            {array.description}
                                        </p>

                                        <Link href={array.url} target="_blank" className="w-full gap-3 text-white bg-transparent border-white btn btn-outline hover:bg-transparent hover:border-white md:w-max" data-aos="zoom-in">
                                            {array.btntext}
                                            <span className="p-1 text-white rounded-full bg-primary-light bg-opacity-40">
                                                <ChevronRightIcon />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-white">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="my-2 text-4xl font-bold text-center text-neutral-900 md:text-5xl">技术伙伴</h2>
                        <p className="my-2 text-lg font-light text-center text-neutral-900"></p>

                        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-5">

                            {supporters.map((supporter) => (

                                <Link key={supporter.title} href={supporter.link} target={"_blank"}>
                                    <img src={`/assets/images/supporters/${supporter.title}.svg`} className="m-auto h-44 aspect-video" alt="company-logo" data-aos="fade-up" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>



            </main >

            <Footer />
        </>
    );
};

export default Home;

const supporters: { title: string; link: string; des: string }[] = [
    {
        title: "qt",
        link: "#",
        des: ""
    },
    {
        title: "microsoft",
        link: "#",
        des: "a"
    },
    {
        title: "vercel",
        link: "#",
        des: "a"
    },
    {
        title: "apple",
        link: "#",
        des: "a"
    },
    {
        title: "huawei",
        link: "#",
        des: "a"
    }
];

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Event: NextPage = () => {
    return (
        <>
            <Seo title="最新动态" />

            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2"></p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                3YStudio {new Date().getFullYear()}最新动态
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/press-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                            {[
                                {
                                    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
                                    title: "Typescript 演练",
                                    image: "assets/images/event/typescripe-playground.png"
                                },
                                {
                                    url: "https://learn.microsoft.com/zh-cn/dotnet/maui/",
                                    title: ".NET 多平台应用 UI (.NET MAUI) 允许使用面向 Android、iOS、macOS、Windows 和 Tizen 上的移动和桌面外形规格的 .NET 跨平台 UI 工具包生成本机应用。",
                                    image: "https://learn.microsoft.com/zh-cn/dotnet/maui/user-interface/media/theming/main-page-both-themes.png?view=net-maui-8.0"
                                },
                                {
                                    url: "/",
                                    title: "工业软件应用需要对复杂的分散过程进行实时控制，这些过程涉及来自远程传感器和先进的2D和3D图形的大量数据。探讨Qt的体系结构在设计时考虑了性能，并针对实时应用程序进行了优化，其中包括用于并发进程的多线程执行、按需行为和内存管理的工具",
                                    image: "assets/images/event/touchscreen.webp"
                                },
                                {
                                    url: "https://docs.ultralytics.com/zh/",
                                    title: "YOLOv8，作为一种前沿、最先进(SOTA)的模型，YOLOv8在之前版本的成功基础上引入了新功能和改进，以提高性能、灵活性和效率。YOLOv8支持全范围的视觉AI任务，包括检测, 分割, 姿态估计, 跟踪, 和分类。",
                                    image: "https://raw.githubusercontent.com/ultralytics/assets/main/yolov8/banner-yolov8.png"
                                },
                                {
                                    url: "/",
                                    title: "mvvmlight-framework windows应用",
                                    image: "assets/images/event/mvvmlight-framework.png"
                                },
                                {
                                    url: "https://isocpp.org/std/status",
                                    title: "C++标准库",
                                    image: "https://isocpp.org/files/img/timeline-2022-07.png"
                                },
                                {
                                    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
                                    title: "案例分析4",
                                    image: "assets/images/event/typescripe-playground.png"
                                }
                            ].map((press, index) => (
                                <div key={index} data-aos="fade-up">
                                    <img src={press.image} className="w-full aspect-square md:aspect-video object-cover rounded-2xl" alt={press.title} />

                                    <div className="p-4 space-y-5">
                                        <h2 className="text-primary text-2xl font-bold mb-2">{press.title}</h2>

                                        <Link href={press.url} target="_blank" className="btn bg-primary hover:bg-primary border-none text-white gap-3 my-5">
                                            Read more
                                            <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                                <ChevronRightIcon />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Event;

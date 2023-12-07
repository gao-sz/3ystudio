import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";

import { formatDate } from "../lib/date"
import { toTitle } from '../lib/title'

export type BlogConfigItem = {
    id: string;

    author: string[];

    desc: string;

    date: string;
};

const getDate = (year: number, month: number, day: number) => {
    return formatDate(new Date(Date.UTC(year, month - 1, day)));
};

const Blog: NextPage = () => {
    return (
        <>
            <Seo title="Blog" />

            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-warning text-xl uppercase font-bold my-2">Coming soon...</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                ⚠️在将把以前网站上的所有文章转移到这个新网站上。
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/initiatives-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="flex flex-col gap-6">
                        {blogConfig.map(({ id, desc, date, author }) => (
                            <section key={id}>
                                <Link href={`/blog/${id}`} className="no-underline">
                                    <h3 className="text-primary text-xl  font-bold hover:underline my-2">
                                        {toTitle(id)}
                                    </h3>
                                </Link>
                                <div className="font-serif text-sm text-gray-500 dark:text-gray-400">
                                    {date}
                                    <span className="mx-1">|</span>
                                    {author.join(", ")}
                                </div>
                                <p className="!mt-2">{desc}</p>
                            </section>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
};

export default Blog;


/// Put the latest blogs on the top please.
export const blogConfig: BlogConfigItem[] = [
    {
        id: "理解插件机制",
        author: ["wangli"],
        desc: "服务定义的越精细，插件控制的粒度越小，能力越大，但耦合度和复杂度也越高。",
        date: getDate(2023, 4, 25),
    },
    {
        id: "什么是工业相机",
        author: ["wangli"],
        desc: "工业相机是机器视觉系统中的一个关键组件，其最本质的功能就是将光信号转变成有序的电信号。选择合适的相机也是机器视觉系统设计中的重要环节，相机的选择不仅直接决定所采集到的图像分辨率、图像质量等。",
        date: getDate(2023, 4, 9),
    }
];
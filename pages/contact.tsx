import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

import { FaqAccordion, Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Contact: NextPage = () => {
    // const { isLoading, mutate } = useMutation((context: any) => axios.post("/api/contact", context), {
    //     onSuccess: async (response: AxiosResponse) => {
    //         // Clear form
    //         (document.getElementById("contactForm") as any).reset();

    //         return toast.success("Message sent");
    //     },
    //     onError: (error: AxiosError<any>) => {
    //         // return toast.error(error.response ? error.response.data.error : error.message);
    //         return toast.error("An error occured sending message");
    //     }
    // });

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target as HTMLFormElement);
    //     const formDataToJSON = Object.fromEntries(formData);
    //     mutate(formDataToJSON);
    // };

    return (
        <>
            <Seo title="联系我们" />

            <TopNavigationBar />

            <main>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="flex flex-col md:flex-row justify-between gap-10">
                            {/* <div className="w-full">
                                <h2 className="text-neutral-900 text-3xl font-normal my-5">填好表格，我们的团队将在24小时内回复您：</h2>

                                <form className="my-5 space-y-3" id="contactForm" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="名字" className="label">
                                            <span className="label-text text-base">姓名（*必填）</span>
                                        </label>
                                        <input type="text" name="fullName" placeholder="张某" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="单位" className="label">
                                            <span className="label-text text-base">公司名称</span>
                                        </label>
                                        <input type="text" name="companyName" placeholder="xxx有限公司" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="电话" className="label">
                                            <span className="label-text text-base">手机号码（*必填）</span>
                                        </label>
                                        <input type="text" name="phoneNumber" placeholder="" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="邮箱" className="label">
                                            <span className="label-text text-base">邮箱地址（*必填）</span>
                                        </label>
                                        <input type="email" name="email" placeholder="@mail.com" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="label">
                                            <span className="label-text text-base">主题（*必填）</span>
                                        </label>
                                        <select name="subject" defaultValue="" className="select select-bordered rounded focus:border-primary w-full" required>
                                            <option value="">选择主题</option>
                                            <option value="General Enquiries">一般咨询</option>
                                            <option value="Partnership">合作洽谈</option>
                                            <option value="Technical support">技术支持</option>
                                            <option value="Other">其他原因</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="label">
                                            <span className="label-text text-base">内容（*必填）</span>
                                        </label>
                                        <textarea name="message" placeholder="您好，我想咨询开发一套桌面应用软件，功能主要包括......" className="textarea textarea-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <button type="submit" disabled={isLoading} className={["btn btn-block rounded bg-primary hover:bg-primary border-none text-white no-animation", isLoading && "loading"].join(" ")}>
                                        发送
                                    </button>
                                </form>
                            </div> */}

                            <div className="md:w-2/3 rounded-xl bg-[url('/assets/images/contact-side-info-bg.png')] bg-cover bg-center bg-no-repeat space-y-5 p-8">
                                <h2 className="text-white text-3xl font-bold my-2">联系我们</h2>

                                <p className="text-white text-base my-1">在线咨询</p>

                                <ul className="space-y-8">
                                    <Link href={"mailto:w18551763544@yeah.net"} className="list-item">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 6L12 13L2 6" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-base">邮箱</span>
                                                <span className="text-white text-lg">w18551763544@yeah.net</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href={""} target="_blank" className="list-item">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                                        fill="#D6D6F5"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-base">电话</span>
                                                <span className="text-white text-lg">18551763544</span>
                                            </div>
                                        </div>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white p-5">
                    <div className="w-full max-w-4xl py-10">
                        <h2 className="text-center text-neutral-900 text-4xl md:text-5xl font-bold my-2">关于我们</h2>

                        <div className="grid grid-cols-1 pt-10">
                            {[
                                { question: "关于3YStudio", answer: "3YStudio 南京荣庐信息科技软件部. 地址：南京市江宁区东山街道文靖西路105号， 是专业从事应用开发的年轻企业。倡导“专业、务实、高效、创新”的企业精神。 优良的工作环境以及良好的激励机制，吸引了一批年轻的、有学识的、具有实干精神的人才。" },
                                { question: "开发类型", answer: "开发的应用类型包括：设备自动化开发，上位机软件，2D、3D数据分析处理，工业硬件控制，互联网技术开发，政府及企业信息化建设，智能化软硬件设备， 物联网、工业互联网等定制化软硬件技术服务。 " },
                                { question: "加入我们", answer: "你充满热情，并且想完全发挥吗？你有源源不断的创新动力，并且想让它完美展现吗？为你提供一个多姿多彩的舞台，开创令你更有成就感的职业生涯。" }
                            ].map((faq, index) => (
                                <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Contact;

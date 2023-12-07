import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse, AxiosError } from "axios";

// generate an array for quikc links
const quickLinks = [
    {
        name: "3YStudio",
        href: "/"
    },
    {
        name: "解决方案",
        href: "/solution"
    },
    {
        name: "事件",
        href: "/event"
    },
    {
        name: "知识分享",
        href: "/blog",
        target: "_blank"
    },
    {
        name: "联系我们",
        href: "/contact"
    }
];

const Footer = () => {
    // const { isLoading, mutate } = useMutation((context: any) => axios.post("/api/subscribe", context), {
    //     onSuccess: async (response: AxiosResponse) => {
    //         // Clear form
    //         (document.getElementById("newsletterForm") as any).reset();

    //         return toast.success("Email subscribed");
    //     },
    //     onError: (error: AxiosError<any>) => {
    //         // return toast.error(error.response ? error.response.data.error : error.message);
    //         return toast.error("An error occured, please try again.");
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

            <footer className="flex flex-col items-center p-5 bg-slate-100">

                <div className="w-full max-w-6xl py-10">
                    <div className="flex flex-col justify-between gap-10 md:flex-row">
                        <div className="md:w-1/3">
                            <Link href="/" className="my-5">
                                <img className="h-20 w-20 aspect-video" src="/assets//Y.png" alt="genztechies-logo-icon-text" />
                            </Link>
                            <p className="my-5 text-base font-light text-black/50">3YStudio™ 开发团队 十年技术深耕细作 </p>
                        </div>
                        <div className="flex flex-row w-full gap-10 md:w-1/3">
                            <div className="w-1/2">
                                <h2 className="my-5 text-base font-bold uppercase text-primary">链接指南</h2>

                                <ul className="pt-5 space-y-4 text-lg font-normal">
                                    {quickLinks.map((link, index) => (
                                        <Link key={link.name} href={link.href} className="list-item" target={link.target || "_self"}>
                                            {link.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-1/2">
                                <h2 className="my-5 text-base font-bold uppercase text-primary">联系我们</h2>

                                <ul className="pt-5 space-y-4 text-lg font-normal">
                                    <Link href="#" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/phone.svg" height="20" width="20" alt="social-icon" />
                                            18551763544
                                        </div>
                                    </Link>
                                    {/* <Link href="#" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/zhihu.svg" height="20" width="20" alt="social-icon" />
                                            知乎
                                        </div>
                                    </Link> */}

                                </ul>
                            </div>
                        </div>
                        {/* <div className="md:w-1/3">
                            <h2 className="my-5 text-base font-bold uppercase text-primary">订阅资讯</h2>

                            <form className="my-5 space-y-3" id="newsletterForm" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="label">
                                        <span className="text-base label-text">邮箱</span>
                                    </label>
                                    <input type="email" name="email" placeholder="w18551763544@yeah.net" className="w-full rounded input input-bordered focus:border-primary" required />
                                </div>

                                <button type="submit" disabled={isLoading} className={["btn btn-block rounded bg-primary hover:bg-primary border-none text-white no-animation", isLoading && "loading"].join(" ")}>
                                    Subscribe
                                </button>
                            </form>
                        </div> */}
                    </div>
                </div>

                <div className="flex flex-col justify-between w-full max-w-6xl gap-5 pt-10 pb-5 border-t-2 md:flex-row">
                    <p className="text-black/80">Copyright (c) {new Date().getFullYear()} 3YStudio™ | All rights reserved.</p>

                    <p className="space-x-4 text-black/50">
                        <Link href="/#">首页</Link>

                        {/* <span>|</span>
                        <Link href="/press">下一页</Link> */}
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

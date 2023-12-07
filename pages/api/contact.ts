// Get Contact Form Data and send email with nodemailer
const nodemailer = require("nodemailer");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseProp = {
    error?: string;
    message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseProp>) {
    const { fullName, companyName, phoneNumber, email, subject, message } = req.body;

    if (!fullName || !companyName || !phoneNumber || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
        service: "邮箱",
        auth: { user: "w18551763544@yeah.net", pass: process.env.EMAIL_PASSWORD }
    });
    //https://juejin.cn/post/6894170148127801352
    // Create mail options
    const mailOptions = {
        from: email,
        to: "兰先生 <w18551763544@yeah.net>",
        replyTo: email,
        subject: `${subject} — Contact Form: 3YTech.com`,
        text: message,
        html: `
			<h1>新邮件： ${email}</h1>

			<h2>姓名:</h2>
			<h3>${fullName}</h3>

            <h2>公司:</h2>
			<h3>${companyName}</h3>

			<h2>手机号码:</h2>
			<h3>${phoneNumber}</h3>

			<h2>主题:</h2>
			<h3>${subject}</h3>

			<h2>内容:</h2>
			<h3>${message}</h3>
		`
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions, (err: any) => {
            if (err) return res.status(500).json({ error: err.message });

            return res.status(200).json({ message: "Email sent" });
        });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}

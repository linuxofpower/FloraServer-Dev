import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ya.moroz.yaroslav@gmail.com",
    pass: process.env.GMAIL_KEY,
  },
});
export const sendEmail = async(req,res) => {
 let d = req.body
 console.log(d)
const mailOptions = {
  from: "ya.moroz.yaroslav@gmail.com",
  to: "yaroslav.moroz.a@gmail.com",
  subject: "Hello from " + d.user_name,
  text: 'email: ' + d.user_email + ', phone: ' + d.user_phone +
        ' method: ' + d.delivery_method + ', area: ' + d.user_area +
        ' items: ' + d.items
		                                        //~ user_area:'', user_region:{},
		                                        //~ user_location:'', post_office: '',
		                                        //~ user_date:'', items:''
}
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
    res.status(409).json({message: error.message})
  } else {
    //~ console.log("Email sent: ", info);
    res.send(info).status(200)
  }
})
}

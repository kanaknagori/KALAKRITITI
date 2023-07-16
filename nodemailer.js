const nodemailer = require("nodemailer");
const googleApis = require("googleapis");
const REDIRECT_URI = `https://developers.google.com/oauthplayground`;
const CLIENT_ID = `313277414196-l9m443l89ejet97a1add0b3nn6ntarq0.apps.googleusercontent.com`;
const CLIENT_SECRET = `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`;
const REFRESH_TOKEN = `1//04GqG_grt4bnFCgYIARAAGAQSNwF-L9IrKtnP6lLwqVIxCgFyFSGMl1IAG-aSHw3jpZPlkDLKDkZfnjssLVNOirXWQL231zClrKY`;
const authClient = new googleApis.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, 
REDIRECT_URI);
authClient.setCredentials({refresh_token: REFRESH_TOKEN});
async function mailer(email,userid,token){
 try{
 const ACCESS_TOKEN = await authClient.getAccessToken();
 const transport = nodemailer.createTransport({
 service: "gmail",
 auth: {
 type: "OAuth2",
 user: "nagorikanak@gmail.com",
 clientId: CLIENT_ID,
 clientSecret: CLIENT_SECRET,
 refreshToken: REFRESH_TOKEN,
 accessToken: ACCESS_TOKEN
 }
 })
 const details = {
 from: "bhotth hu <hahahahah@gmail.com>",
 to: email,
 subject: "kuchh bhi likh do",
 text: "message text",
 html: `<h1>i hateee youuu!!</h1><a href="http://localhost:3000/reset/${userid}/${token}">reset link</a>`
 }
 const result = await transport.sendMail(details);
 return result;
 }
 catch(err){
 return err;
 }
}

module.exports=mailer;
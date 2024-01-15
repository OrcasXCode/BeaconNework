// const fs=require("fs")



exports.sendOTP= (otp,email) => {

    // const logoPath = '../../logo/logo.png'
    // const logoData=fs.readFileSync(logoPath)
    // const logoBase64=logoData.toString('base64')
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Contact Form Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href=""><img class="logo"
                    src=${logoBase64} alt="Beacon Network"></a>
            <div class="message">OTP Confirmatiom</div>
            <div class="body">
                <p>Dear Customer</p>
                <p>Thank you for connecting with  us. We have sent your otp for registering your  email</p>
                <p>Email : ${otp}</p>
                <p>OTP: ${email}</p>
                <p>We appreciate your interest and will get connect with you.</p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:omsureja@gmail.com">omsureja@gmail.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`
  
}


  
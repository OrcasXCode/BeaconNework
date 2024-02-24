exports.sendOTP = (otp, email) => {
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
                color: #000000;
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
                max-width: 100px;
                max-height: 100px;
                margin-bottom: 10px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #000000;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
                color: #000000;
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
            .otp {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href=""><img class="logo" src="https://lh3.googleusercontent.com/a/ACg8ocJq7S5RC6MK8XnBWfMxztNPfUgmp249XBq4qeNxIlY81Q=s360-c-no"
                     alt="Beacon Network"></a>
            <div class="message">OTP Code Confirmation</div>
            <div class="body">
                <p>Dear valued customer,</p>
                <p>Thank you for connecting with us. We have generated an OTP (One-Time Password) to ensure the security of your account.</p>
                <p>Email: ${otp}</p>
                <p class="otp">OTP: ${email}</p>
                <p>Please use the provided OTP to complete your action securely.</p>
                <p>If you did not request this OTP, please ignore this email or contact us immediately.</p>
                <p>We appreciate your trust in our services and look forward to assisting you further.</p>
            </div>
            <div class="support">If you have any further questions or need immediate assistance, please feel free to reach
                out to us at <a href="mailto:beaconnetworkcs@gmail.com">beaconnetworkcs@gmail.com</a>. We are here to help!</div>
        </div>
    </body>
    
    </html>`;
};

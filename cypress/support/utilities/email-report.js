var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');

var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
           callback(err); 
           throw err;
        }
        else {
            callback(null, html);
        }
    });
}

smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'user@example.com',
        pass: 'userpassword'
    }
})

readHTMLFile('output.html', function(err, html) {
    var template = handlebars.compile(html);
    var replacements = {
         
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
        from: 'from@gmail.com',
        to: 'to@gmail.com',
        subject: 'Project Name - Regression Report',
        text: 'Hi everyone, \n Please find the attached report for regression activity. \n In case of any questions, please reach out at the provided to the concerned project manager. \n Regards,\n Team Project Name',
        html : htmlToSend,
        attachments: [
            {
                fileName: 'report.html',
                path: 'report.html'
            }
        ]
     };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            callback(error);
        }
    });
});
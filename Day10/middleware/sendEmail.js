const nodemailer = require('nodemailer');

const {
  TransporterOptions,
  mainOptions,
} = require("../utils/nodemailer.config");
const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const _Response_ = require("../middleware/response")


const sendMail = (req,res,next, mail) => {
  var transporter = nodemailer.createTransport(TransporterOptions);
  let mainOp = {
    ...mainOptions,
    to: mail,
  };

  //   console.log(mainOp)

  transporter.sendMail(mainOp, function (err, info) {
    if (err) {
      console.log(err);
      // req.flash('mess', 'Lỗi gửi mail: '+err); //Gửi thông báo đến người dùng
      handleErr(new ErrorHandler(404,"Cant send email\n"+err),req, res,next)
    } else {
      console.log("Message sent: " + info.response);
      _Response_.SendStatus_WithMessage(res,200,"Email sent!")
    }
  });
};

module.exports = sendMail;

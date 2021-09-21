const { ErrorHandler } = require("../middleware/Error/ErrHandle");
const handleErr = require("../middleware/err");
const service = require("../services/index");
const _Response_ = require("../middleware/response");
const nodemailer = require("nodemailer");

exports.create = async (req, res, next) => {
  // Validate request
  if (!req.body.UseName) {
    handleErr(
      new ErrorHandler(400, "You must fill in UseName"),
      req,
      res,
      next
    );
    return;
  }

  try {
    // Create a USER
    let data = await service.user_service.createUser(req.body);
    console.log(data);
    if (!data) {
      handleErr(new ErrorHandler(400, "Can't create user!"), req, res, next);
      return;
    } else if (data instanceof Error) {
      handleErr(new ErrorHandler(400, "Can't create user!"), req, res, next);
      return;
    } else {
      res.locals.s = "new"
      next()
    }
  } catch (err) {
    console.log(err);
    next(handleErr(new ErrorHandler(400, "error"), req, res, next));
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    let users = await service.user_service.getAllUser();
    res.send(users);
  } catch (err) {
    handleErr(new ErrorHandler(404, err), req, res, next);
  }
};

exports.getUserById = async (req, res, next) => {
  if (!req.params.id) {
    handleErr(new ErrorHandler(400, "Must have param"), req, res, next);
    return;
  }
  let user = await service.user_service.getUserById(req.params.id);
  user instanceof Error
    ? handleErr(new ErrorHandler(400, "Must have param"), req, res, next)
    : _Response_.SendUser(res, user);
};

exports.UpdateUser = async (req, res, next) => {
  // console.log(req.body.id)
  if (!req.body.id) {
    handleErr(new ErrorHandler(400, "Must have id"), req, res, next);
    return;
  }
  let log = await service.user_service.UpdateUser(req.body.id, req.body);
  if (!log || log instanceof Error) {
    console.log("err", log);
    handleErr(new ErrorHandler(400, "CAnt update User"), req, res, next);
    return;
  }
  console.log("log", log);
  _Response_.SendStatus(res);
};

exports.ActiveUser = async (req, res, next) => {
  console.log("body.params.id", req.params.id);

  if (!req.params.id) {
    handleErr(new ErrorHandler(400, "CAnt Active User"), req, res, next);
    return;
  }
  let log = await service.user_service.Active(req.params.id);
  //  console.log("log:",log)
  if (log instanceof Error || !log) {
    handleErr(new ErrorHandler(400, "CAnt Active User"), req, res, next);
    return;
  }
  _Response_.SendStatus_WithMessage(res, 200, "Active success!");
};

exports.InActiveUser = async (req, res, next) => {
  console.log("body.params.id", req.params.id);

  if (!req.params.id) {
    handleErr(new ErrorHandler(400, "CAnt InActive User"), req, res, next);
    return;
  }
  let log = await service.user_service.InActive(req.params.id);
  //  console.log("log:",log)
  if (log instanceof Error || !log) {
    handleErr(new ErrorHandler(400, "CAnt Inactive User"), req, res, next);
    return;
  }
  _Response_.SendStatus_WithMessage(res, 200, "InActive success!");
};

exports.sendMail = async (req, res, next) => {
  var postParams = req.payload
  var transporter = nodemailer.createTransport({
    // config mail server
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "longnt1@vmodev.com", //Tài khoản gmail vừa tạo
      pass: "neirmcduqnlpcmzc" //Mật khẩu tài khoản gmail vừa tạo
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },

  });

  var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
    from: 'NQH-Test nodemailer',
    to: req.body.mail,
    subject: 'Test Nodemailer',
    text: 'Your text is here',//Thường thi mình không dùng cái này thay vào đó mình sử dụng html để dễ edit hơn
    html: "<h1>Hello Billy</h1>" //Nội dung html mình đã tạo trên kia :))
}
transporter.sendMail(mainOptions, function(err, info){
    if (err) {
        console.log(err);
        // req.flash('mess', 'Lỗi gửi mail: '+err); //Gửi thông báo đến người dùng
        res.end("error encountered")
    } else {
        console.log('Message sent: ' +  info.response);
        res.end("Email sent!")
    }
});
};

exports.login = (req,res,next) =>{
   service.user_service.login(req,res,next)
}

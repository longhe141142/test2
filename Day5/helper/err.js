class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }

  const handleError = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode).send(JSON.stringify({
      status: "error",
      statusCode,
      message
    }));
    
  };
  module.exports = {
    ErrorHandler,
    handleError
  }
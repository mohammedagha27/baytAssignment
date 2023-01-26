class CustomizedServerErrors {
  constructor(status, errMsg, field = '') {
    this.status = status;
    this.errMsg = errMsg;
    this.field = field;
  }
}

module.exports = CustomizedServerErrors;

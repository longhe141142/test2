var replaceWhiteSpace = (Str, resl) => {
  return Str.replace(/(\s+)/gi, resl);
};

const getAllUrlParams = (url) => {
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1);

  var obj = {};

  if (queryString) {
    queryString = queryString.split("#")[0];
    var arr = queryString.split("&");
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split("=");
      var paramName = a[0];
      paramName = paramName === "name" ? "fullName" : paramName;
      var paramValue =
        typeof a[1] === "undefined" ? true : replaceWhiteSpace(a[1], "%20");
      paramName = paramName.toLowerCase();
      if (typeof paramValue === "string") paramValue = paramValue.toLowerCase();

      if (paramName.match(/\[(\d+)?\]$/)) {
        var key = paramName.replace(/\[(\d+)?\]/, "");

        if (!obj[key]) obj[key] = [];

        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          obj[key].push(paramValue);
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === "string") {
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
};

// console.log(getAllUrlParams('https://localhost:8080?name=Nguyen Van A&age=20'))
// console.log(processName("Nguyen    Thanh  Long"))

module.exports = getAllUrlParams;

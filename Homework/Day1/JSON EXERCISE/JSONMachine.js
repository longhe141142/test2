const util = require("util");

var jsonData = [
  { id: 1, parentId: null, name: "Root 1" },
  { id: 2, parentId: 1, name: "Child Root 1 1" },
  { id: 3, parentId: null, name: "Root 2" },
  { id: 5, parentId: 3, name: "Child Root 2" },
  { id: 6, parentId: 7, name: "Child of Child Root 2" },
  { id: 7, parentId: 5, name: "Child of Child Root 2" },
  { id: 8, parentId: 2, name: "Child of Child Root 1 1" },
  { id: 9, parentId: null, name: "Root 2" },
  { id: 10, parentId: 1, name: "Child Root 1 2" },
  { id: 11, parentId: 2, name: "Child Root 1 2" },
];

class info {
  constructor(_id, _parentID, _name) {
    this.id = _id;
    this.parentId = _parentID;
    this.name = _name;
  }
}

class ObjJSON {
  constructor(_info) {
    this.info = _info;
    this.children = [];
  }

  addChild(_child) {
    this.children.push(_child);
  }
  findChildren(jsonArray) {
    let _self = this;
    jsonArray.map((elm, index, arr) => {
      if (elm.parentId === _self.info.id) {
        let { id: objId, parentId, name: objName } = elm;
        let info_In_CallBack = new info(objId, parentId, objName);
        let NewObjJSON = new ObjJSON(info_In_CallBack);
        NewObjJSON.findChildren(arr);
        _self.children.push(NewObjJSON);
      }
    }, 0);
  }
  HaveChild() {
    return this.children.length === 0 ? false : true;
  }
}

const resolveJSONToArr = (jsonObj) => {
  let arr = [];
  jsonObj.map((elm, index, arr2) => {
    let { id: objId, parentId, name: objName } = elm;
    let jsonO = new ObjJSON(new info(objId, parentId, objName));
    jsonO.findChildren(arr2);
    arr.push(jsonO);
  }, 0);
  return arr;
};


let resolveJSONOutput = (jsonData) => {
  let arr = resolveJSONToArr(jsonData);
  for (let val of arr) {
    console.log(util.inspect(val, { showHidden: false, depth: null }));
  }
};

// resolveJSONOutput(jsonData)

module.exports = { resolveJSONOutput };

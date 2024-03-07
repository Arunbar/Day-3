
let json1 = {
    name: "Person1",
    age:5
  };
  let json2 = {
    age:1,
    name: "Person2"
  };
  let compareJson = () => {
    if (Object.keys(json1).length !== Object.keys(json2).length) {
      return false;
    }
    for (let keys in json1) {
      if (!json2.hasOwnProperty(keys) || json1[keys] !== json2[keys]) {
        return false;
      }
    }
    return true;
  };
  console.log(compareJson());
//crate token
exports.Gared = (objeCt, value) => {
  try {
    if (!objeCt || !value) {
      return console.log(
        "Gared(^undifine, ^undifine).. not allowe empty propary..."
      );
    }

    let StringObj = JSON.stringify(objeCt);
    let Vbuffer = Buffer.from(value).toString("base64url");
    let Sburrer = Buffer.from(StringObj).toString("base64url");
    let MainArr = [...Vbuffer, ...Sburrer]; // key object

    return MainArr.join("");
  } catch (error) {
    return error.message;
  }
};

//verify token
exports.Decoded = (token, secreateKey) => {
  let secreateBuf = Buffer.from(secreateKey).toString("base64url");

  let length = token.length;
  let Barr = [];
  for (let i = 0; i < length; i++) {
    Barr[i] = token[i];
  }
  let keyLength = secreateBuf.length;

  let BarrLength = Barr.length;

  let KEY = [];
  let OBJ = [];
  for (let j = 0; j < BarrLength; j++) {
    if (keyLength > j) {
      KEY[j] = Barr[j];
    } else {
      OBJ[j - keyLength] = Barr[j];
    }
  }

  let object64 = OBJ.join("");
  let key64 = KEY.join("");
  let objBuffer = Buffer.from(object64, "base64url").toString("ascii");
  let KeyBuffer = Buffer.from(key64, "base64url").toString("ascii");

  if (secreateKey === KeyBuffer) {
    try {
      let validJson = JSON.parse(objBuffer);
      return validJson;
    } catch {
      return "Token is wrong !";
    }
  } else {
    return Error(" Gard value are not match !");
  }
};

var rxBadWords = /f[*auvx](?:[*cx][*kx]|q\b)|sh[i*]t/i;
function hasBadWord(text){
  return rxBadWords.test(text);
}

function isUserFriendlyText(text){
  return !hasBadWord(text);
}

function isBadLot(result){
  return /(\w)\1(?:$|\1|(\w)\2)/.test(result);
}

function isBadCaptcha(code){
  return isBadLot(code) || hasBadWord(code);
}

var rxIdentifier = /^[A-Z](?:\w*[0-9a-z])?$/i
function isIdentifier(id){
  return rxIdentifier.test(id);
}

function isUserFriendlyIdentifier(id){
  return isIdentifier(id) && isUserFriendlyText(id);
}

function isValidDisplayName(name){
  return /^[ -~]+$/.test(name);
}

function toCleanDisplayName(name){
  return name.replace(/(^[^!-~]+|[^!-~]+$)|[^!-~]+/g, function(_, $){ return $ ? '' : ' '; });
}

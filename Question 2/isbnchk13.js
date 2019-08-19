function isbnchecker() {
  var isbno = document.isbn.num.value.replace(/ /g,'');
  var isbnolen = isbno.length;
  var isbnhead = document.isbn.isbnhead.value;
if(isbno.match(/-/g)){
  isbnomatch = (isbno.match(/-/g)).length;
}else{
isbnomatch = '0';
}
  isbnw = isbno.replace(/-/g, '');
  if (isbnw.length < 9) {
    window.alert('ISBN length short');
    return;
  }
  else if (isbnw.length > 10) {
    window.alert('ISBN length over');
    return;
}
  isbnw = isbnhead + isbnw;

  var isbn1 = isbnw.charAt(0);
  var isbn2 = isbnw.charAt(1);
  var isbn3 = isbnw.charAt(2);
  var isbn4 = isbnw.charAt(3);
  var isbn5 = isbnw.charAt(4);
  var isbn6 = isbnw.charAt(5);
  var isbn7 = isbnw.charAt(6);
  var isbn8 = isbnw.charAt(7);
  var isbn9 = isbnw.charAt(8);
  var isbn10 = isbnw.charAt(9);
  var isbn11 = isbnw.charAt(10);
  var isbn12 = isbnw.charAt(11);


  var odd = eval(isbn1) + eval(isbn3) + eval(isbn5) + eval(isbn7) + eval(isbn9) + eval(isbn11);

  var even = eval(isbn2) + eval(isbn4) + eval(isbn6) + eval(isbn8) + eval(isbn10) + eval(isbn12);

  var digitval = odd + (even * 3);
  digitval = digitval.toString();
  digitval = digitval.substr(-1,1);
  digitval = 10 - digitval;
  if (digitval == 10) {
    digitval = '0';
  }

  var digit = isbnw.charAt(12);
  var MSGCHK = "CHECK start";
  var MSGOK = "ISBN is OK";
  var MSGFAIL = "ISBN is failed";
  if (digit == '') {
    document.isbn.message.value = MSGCHK;
  }else {
    if (digit == digitval) {
      document.isbn.message.value = MSGOK;
    }else {
      document.isbn.message.value = MSGFAIL;
    }
  }
  if (isbnomatch == '0'){
    if (isbnolen == '9'){
    isbnval = isbnhead + isbno + digitval;
    }else{
    isbno = isbno.substr(0,9);
    isbnval = isbnhead + isbno + digitval;
    }
  }else if(isbnomatch == '3'){
    isbno = isbno.substr(0,11);
    isbnval = isbnhead + '-' + isbno + '-' + digitval;
  }else if(isbnomatch == '2'){
    isbnval = isbnhead + '-' + isbno + '-' + digitval;
  }
  document.isbn.isbnval.value = isbnval;
}

/**
 * Utilized from http://www.snews.net/isbnchk13.js
 */
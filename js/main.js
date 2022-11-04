function insrt(num) {
  // The val() method is an inbuilt method in jQuery which is used to returns or set the value of attribute for the selected elements.

  $(".calc-display").val($(".calc-display").val() + num);
}

function eql() {
  // eval() method makes maths but don't use it due to security risks
  $(".calc-display").val(eval($(".calc-display").val()));
}

function c() {
  //clear input box√
  $(".calc-display").val("");
}

function del() {
  value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
}

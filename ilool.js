
// let Mobile9= document.getElementsByClassName("9mobile")

function myFunction() {
  let phoneNumber = document.getElementById("phone").value;
  let Mobilew=document.getElementById("mobile")
  let Mtn= document.getElementById("mtn")
let Glo= document.getElementById("glo")
let Airtel= document.getElementById("airtel")
  let Line=document.querySelectorAll('.line')
  if (phoneNumber.length > 10 || phoneNumber == "" || isNaN(phoneNumber)) {
    document.getElementById("error").innerText =

      "Please enter a valid phone number";
      Mobilew.style.transform=""
      Airtel.style.transform=""
      Mtn.style.transform=""
      Glo.style.transform=""
  } else if (phoneNumber.length == 10) {
    document.getElementById("error").innerText = "";
    let phoneArr = phoneNumber.split("");
    console.log(phoneArr);
    let [a, b, c] = phoneArr;
    console.log({ a });
    console.log({ b });
    console.log({ c });
    if (
      (a == 8 && b == 1 && c == 2) ||
      (a == 8 && b == 0 && c == 2) ||
      (a == 8 && b == 0 && c == 8) ||
      (a == 7 && b == 0 && c == 8) ||
      (a == 7 && b == 0 && c == 4) ||
      (a == 8 && b == 1 && c == 2) ||
      (a == 7 && b == 0 && c == 1) ||
      (a == 9 && b == 0 && c == 1) ||
      (a == 9 && b == 0 && c == 2) ||
      (a == 9 && b == 0 && c == 4)
    ) {
      console.log("we have detected an Airtel number");
  
      // Mobilew.style.display="none"
      // Glo.remove()
      // Mtn.remove()
      // console.log(Line)
      // Line.forEach(box => { box.remove();}
      // )
    Airtel.style.transform="scale(1.5)";
    Mobilew.style.transform=""
    Mtn.style.transform=""
    Glo.style.transform=""
      // if (phoneNumber.length > 10 || phoneNumber.length < 10 || phoneNumber == "" || isNaN(phoneNumber)) {

      
      
      // }

    } else if (
      (a == 8 && b == 0 && c == 5) ||
      (a == 8 && b == 0 && c == 7) ||
      (a == 7 && b == 0 && c == 5) ||
      (a == 8 && b == 1 && c == 5) ||
      (a == 8 && b == 1 && c == 1) ||
      (a == 9 && b == 0 && c == 5)
    ) {
      console.log("we have detected a Glo number");
      Mobilew.style.transform=""
      Airtel.style.transform=""
      Mtn.style.transform=""
      Glo.style.transform="scale(1.5)"

      

    } else if (
      (a == 8 && b == 0 && c == 9) ||
      (a == 8 && b == 1 && c == 8) ||
      (a == 8 && b == 1 && c == 7) ||
      (a == 9 && b == 0 && c == 9)
    ) {
      console.log("we have detected a 9mobile number");
      Mobilew.style.transform="scale(1.5)"
      Airtel.style.transform=""
      Mtn.style.transform=""
      Glo.style.transform=""
    } else if (
      (a == 8 && b == 0 && c == 3) ||
      (a == 8 && b == 0 && c == 6) ||
      (a == 7 && b == 0 && c == 3) ||
      (a == 7 && b == 0 && c == 6) ||
      (a == 8 && b == 1 && c == 3) ||
      (a == 8 && b == 1 && c == 6) ||
      (a == 8 && b == 1 && c == 0) ||
      (a == 8 && b == 1 && c == 4) ||
      (a == 9 && b == 0 && c == 3) ||
      (a == 9 && b == 0 && c == 6)
    ) {
      console.log("we have detected a Mtn number");
      Mobilew.style.transform=""
      Airtel.style.transform=""
      Mtn.style.transform="scale(1.5)"
      Glo.style.transform=""
    } else "your number is out of this country";
  } else {document.getElementById("error").innerText = "";
  Mobilew.style.transform=""
  Airtel.style.transform=""
  Mtn.style.transform=""
  Glo.style.transform=""
  }
}

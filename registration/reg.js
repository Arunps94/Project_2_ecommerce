function customer_id() {
  var cid = `ZIU ${Math.floor(Math.random() * 1000000)}`;
  document.getElementById('cid').value = cid;
}

const validateFname = () => {
  var fname = document.getElementById('first_name').value;
  if (fname.trim().length == 0) {
    document.getElementById('fout').innerHTML = 'Please Enter First Name';
  } else {
    fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
    document.getElementById('first_name').value = fname;
  }
};

const validateLname = () => {
  var lname = document.getElementById('last_name').value;
  if (lname.trim().length == 0) {
    document.getElementById('lout').innerHTML = 'Please Enter Last Name';
  } else {
    lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
    document.getElementById('last_name').value = lname;
  }
};

const validateEmail = () => {
  var lname = document.getElementById('email').value;
  if (lname.trim().length == 0) {
    document.getElementById('eout').innerHTML = 'Please Enter Email';
  }
};

function validatePwd() {
  var pwd = document.getElementById('pwd').value;
  if (pwd.length < 15) {
    if (pwd.length < 8) {
      document.getElementById('pout').innerText = 'Min Length of password is 8';
      document.getElementById('ppout').style.display = 'block';
      document.getElementById('ppout').style.backgroundColor = 'red';
      document.getElementById('pwd').style.borderColor = 'red';
    } else if (pwd.search(/[0-9]/) == -1) {
      document.getElementById('pout').innerText = 'Atleast 1 numeric value';
      document.getElementById('ppout').style.backgroundColor = 'orange';
      document.getElementById('pwd').style.borderColor = 'orange';
    } else if (pwd.search(/[a-z]/) == -1) {
      document.getElementById('pout').innerText = 'Atleast 1 lowercase letter';
      document.getElementById('ppout').style.backgroundColor = 'orange';
      document.getElementById('pwd').style.borderColor = 'orange';
    } else if (pwd.search(/[A-Z]/) == -1) {
      document.getElementById('pout').innerText = 'Atleast 1 uppercase letter';
      document.getElementById('ppout').style.backgroundColor = 'orange';
      document.getElementById('pwd').style.borderColor = 'orange';
    } else if (pwd.search(/[!\@\#\$\%\^\&\*\_\+\.\,\:]/) == -1) {
      document.getElementById('pout').innerText = 'Atleast 1 special character';
      document.getElementById('ppout').style.backgroundColor = 'orange';
      document.getElementById('pwd').style.borderColor = 'orange';
    } else {
      document.getElementById('pout').innerText = '';
      document.getElementById('ppout').style.backgroundColor = 'green';
      document.getElementById('pwd').style.borderColor = 'green';
    }
  }
}

var validateCpwd = () => {
  var pwd = document.getElementById('pwd').value;
  var cpwd = document.getElementById('cpwd').value;
  if (pwd !== cpwd) {
    document.getElementById('cpout').innerText = 'Password dose not match';
    document.getElementById('cpwd').style.borderColor = 'red';
  } else {
    document.getElementById('cpout').innerText = '';
    document.getElementById('cpwd').style.borderColor = 'green';
  }
};

var mobileNo = () => {
  var mbn = document.getElementById('mobile_no').value;
  if (mbn.search(/[0-9]/) == -1) {
    document.getElementById('mout').innerText = 'Enter only 10 digit numbers';
    document.getElementById('mout').style.display = 'block';
  }
};

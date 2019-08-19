function validateform(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var centuary = document.getElementById("centuary").value;
    var gender = document.getElementsByName("gender");
   
  
    if (day == "" || day == null) {
      alert("Day is required");
    } else {
      if (!isNaN(day)) {
        if (day <= 0 || day > 31) {
          alert("day is invalid");
        } else {
          alert(day);
        }
      } else {
        alert("Number required");
      }
    }
  
    if (month == "" || month == null) {
      alert("month is required");
    } else {
      if (!isNaN(month)) {
        if (month <= 0 || month > 12) {
          alert("month is invalid");
        } else {
          alert(month);
        }
      } else {
        alert("Number required");
      }
    }
  
    if (centuary == "" || centuary == null) {
      alert("century is required");
    } else {
      if (!isNaN(centuary)) {
        
          alert("centuary is invalid");
        } else {
          alert(centuary);
        }
      
    }
  
  
    if (year == "" || year == null) {
      alert("year is required");
    } else {
      if (!isNaN(year)) {
        if (year <= 0 || year > 2045) {
          alert("year is invalid");
        } else {
          alert(year);
        }
      } else {
        alert("Number required");
      }
    }
  
    if (gender[0].checked === false && gender[1].checked === false) {
      alert("select gender");
    } else {
      for(i = 0; i < gender.length; i++){
        if(gender[i].checked) {
          alert(gender[i].value);
        }
      }
    }
  
  
  
  
  
  
  
  
  
  }
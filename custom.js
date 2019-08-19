function validateform(){
    var day = document.getElementById("day-to-earth").value;
    var month = document.getElementById("month-to-earth").value;
    var year = document.getElementById("year").value;
    var centuryCentury = Number(year.slice(0,2));
    var yearYear = Number(year.slice(2,4));
    var genderSelected = document.getElementsByName("gender");
    function genderPicked() {
        for (var gender of genderSelected) {
            if (gender.checked){
                return gender.value;
            }
        }
    }
    var genderValue = genderPicked();
    alert(genderValue);
    function dayValid () {
        if (day < 1 || day > 31) {
            alert("Invalid day")
            return false;
        } else {
            return true;
        }
    }
    function monthValid () {
        if (month < 1 || month > 12) {
            alert ("Invalid month");
            return false;
        } else {
            return true;
        }
    }
    var isDayValid = dayValid();
    var isMonthValid = monthValid();
    var dayIndex = Math.round(( ( (centuryCentury/4) -2*centuryCentury-1) + ((5*yearYear/4) ) + ((26*(month+1)/10)) + day) % 7);
 var akanName;
    if (genderValue === "male") {
        switch(dayIndex) {
                case 0:
            akanName = "Kwasi";
            alert("Kwasi");
            break;
            case 1:
            akanName = "Kwadwo";
            alert("Kwadwo");
            break;
            case 2:
            akanName = "Kwabena";
            alert("Kwabena");
            break;
            case 3:
            akanName = "Kwaku";
            alert("Kwaku");
            break;
            case 4:
            akanName = "Yaw";
            alert("Yaw");
            break;
            case 5:
            akanName = "Kofi";
            alert("Kofi");
            break;
            case 6:
            akanName = "Kwame";
            alert("Kwame");
            break;
            default:
            akanName = "Please input the correct details!"
            alert("Please input the correct details!");
        }
    } else if (genderValue = "female") {
        switch(dayIndex) {
                case 0:
                akanName = "Akosua";
                alert("Akosua");
                break;
                case 1:
                akanName = "Adwoa";
                alert("Adwoa");
                break;
                case 2:
                akanName = "Abenaa";
                alert("Abenaa");
                break;
                case 3:
                akanName = "Akua";
                alert("Akua");
                break;
                case 4:
                akanName = "Yaa";
                alert("Yaa");
                break;
                case 5:
                akanName = "Afua";
                alert("Afua");
                break;
                case 6:
                akanName = "Ama";
                alert("Ama");
                break;
                default:
                akanName = "Please input the correct details!"
                alert("Please input the correct details!");
            }
    } else {
                alert("Please try again with the correct data.");
    }
}
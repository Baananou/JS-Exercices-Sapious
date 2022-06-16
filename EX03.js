const Time = "18:00 AM"; // Declare Time here
let HH = Time.substring(0, 2); // Make the first 2 digits of a string callable by theire name HH
let Hour = parseInt(HH);// convert String To int
let output = Time.substring(0, 5);

if (Time.includes("PM")) {
    if (Hour < 12) {
        Hour += 12;
    }
    output = output.replace(HH, Hour.toString()) + " AM"; // Replace the HH substring with the converted hour
}
else if (Time.includes("AM")) {
    if (Hour > 12) {
        Hour -= 12;
        output = output.replace(HH, Hour.toString()) + " PM"; // Replace the HH substring with the converted hour
    }
}
else {
    output = "Invalide Hour or Invalid Hour Format"; // return error
}
console.log(output);
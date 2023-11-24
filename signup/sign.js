
function submitForm() {
    var eventName = document.getElementById('eventName').value;
    // var dateTimeLocal = document.getElementById('dateTimeLocal').value;
    var eventLocation = document.getElementById('eventLocation').value;
    var eventType = document.getElementById('eventType').value;

    // You can perform additional validation if needed

    // Display the submitted information (you can replace this with your desired action)
    alert("Event Name: " + eventName + "\nEvent Date: " + eventTimeLocal + "\nEvent Location: " + eventLocation + "\nEvent Type: " + eventType);
}
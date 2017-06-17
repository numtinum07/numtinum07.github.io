function process()
{
    console.log("Input Changed");
    var text=document.getElementById("myTextArea").value;
    document.getElementById("myTextArea").value = text+"?";
}
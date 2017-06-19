
    function process()
{
    console.log("Input Changed");
    var swapRegex = /\b(\w+)\b(.*\n*.*)\b\1\b/i ;
    var text=document.getElementById("myTextArea").value;
    if('$1' != "ok"){
    document.getElementById("myTextArea").value = text.replace(swapRegex,'$1$2');
	}
}





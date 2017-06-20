function process()
{
    console.log("Input Changed");
    var swapRegex = /(?!\b(the|is|at|which|and|on|at|a|of|in|at|this|that|or)\b(?:.*\n*.*)\b\1\b)\b(\w+)\b(.*\n*.*)\b\2\b/i ;
    var text=document.getElementById("myTextArea").value;
    document.getElementById("myTextArea").value = text.replace(swapRegex,'$2$3');
}






unction vowelsAndConsonants(s) {
    for(let i=0;i<s.length; i++)
    {
        if(s[i]==="a"||s[i]==="i" || s[i]==="o" ||s[i]==="e" || s[i]==="u")
        {
         console.log(s[i]);
         }
         
    }  
    for(let j=0;j<s.length; j++)
    {
        if(s[j]!=="a" && s[j]!=="i" && s[j]!=="o" && s[j]!=="e" && s[j]!=="u")
        {
         console.log(s[j]);
         }
         
    }  
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

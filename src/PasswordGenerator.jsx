import { useState } from "react"



export const PasswordGenerator = () => {
    const[length,setLength] = useState(8)
    const[includeUpper, setUpper] = useState(true);
    const[includeLower, setLower] = useState(true);
    const[includeNumbers, setNumbers] = useState(true);
    const[includeSymbols, setSymbols] = useState(true);
    const[password,setPassword] = useState("");

const generatePassword = () => {
    let charset = "";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if(includeNumbers) charset += "1234567890";
    if(includeSymbols) charset += "!~@#$%^&*(){}:?><";
    
    let generatePassword = "";
    for (let i =0; i < length ; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        generatePassword += charset[randomIndex];
    }
    setPassword(generatePassword)

}

const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied");

}

  return (
    <div className="password-generator">
        <h2>Strong Password Generator</h2>
        <div className="input-group">
            <label htmlFor="num">Password Length : </label>
            <input type="number" id = "num" value={length} onChange={(e)=>setLength(parseInt(e.target.value))} />
            </div>    
            <div className="checkbox-group">
                <input type="checkbox" id ="upper" checked={includeUpper} 
                onChange={(e)=>setUpper(e.target.checked)}/>
                <label htmlFor="upper">Include Uppercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id ="lower" checked={includeLower}
                 onChange={(e)=>setLower(e.target.checked)} />
                <label htmlFor="lower">Include Lowercase</label>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id ="numbers" checked={includeNumbers}
                 onChange={(e)=>setNumbers(e.target.checked)} />
                <label htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id ="symbols" checked={includeSymbols}
                onChange={(e)=>setSymbols(e.target.checked)} />
                <label htmlFor="symbols">Include Symbols</label>
            </div>
           <button className="generate-btn" onClick={generatePassword}>Generate-password</button>
           <div className="generate-password">
            <input type="text" readOnly value={password} />
            <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
           </div>
        
    </div>
  )
}

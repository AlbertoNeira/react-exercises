import { useState } from "react";

const useLogin =() =>{
    const [username,setUsername] = useState('');
    const [password, setPassword] =useState('');
    
    const handleUsernameChange = (event) => {
        setUsername (event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        
        setPassword (event.target.value)
    }
    const reset = () => {
        console.log('resetting');
        setUsername('');
        setPassword('');
      };
    
    return{ username, password, handleUsernameChange, handlePasswordChange, reset};
}

export default useLogin;
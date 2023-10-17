import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Header() {
    return (
      <div className="flex-center logo-wrapper">
        <span className="logo-text">Dotorigram</span>
      </div>
    );
  }
  
  function Body() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
  
    async function login() {
      const data = await fetch(`http://127.0.0.1:8080/jsp/signin222.jsp?user-id=${id}&user-pw=${pw}`);
      const res = await data.json();
      
      if(res.code == true) { 
      
          window.location.href = "/Homepage"
      
        
      } else {
        alert(res.msg);
      }
      
    }
    function signup() {
        
        window.location.href = "/signup"

     }
    
  
    return (
      <div className="input-wrapper">
        <div className="login-wrapper flex-center">
            <input className="login-input" type="text" placeholder="사용자 아이디" onChange={(e) => {
              setId(e.target.value);
            }}/>
        </div>
        <div className="login-wrapper flex-center">
            <input className="login-input" type="password" placeholder="비밀번호"  onChange={(e) => {
              setPw(e.target.value);
            }} />
        </div>
        <div className="flex-center button-wrapper">
          {id != '' 
          ? <button className="login-button2" onClick={login}>로그인</button> 
          : <button className="login-button">로그인</button>} 
  
            
            
        </div>
        <div className="flex-center button2-wrapper">
            <button className="signup-button2" onClick={signup}>회원가입</button>
            
        </div>
      </div>
    );
  }
  
  function Footer() {
    return (
      <div className="flex-center findpass">
        <a>비밀번호를 잊으셨나요?</a>
      </div>
    );
  }

  function Signinpage() {
    return (
      <>
      <img className = "daramimage" src='daram.png'></img>
        <div className="login-container">
          
            <Header/>
            <Body/>
            <Footer/>
        </div>
        </>
    );
  }
  export default Signinpage;
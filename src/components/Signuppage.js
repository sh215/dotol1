import React, { useState } from 'react';

function Header() {
  return (
    <div className="flex-center logo-wrapper">
      <span className="logo-text">Sign up</span>
    </div>
  );
}

function Body() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [phone, setPhone] = useState('');


  async function resignin(){
     const data = await fetch(`http://127.0.0.1:8080/jsp/signup333.jsp?user-phone=${phone}&user-id=${id}&user-pw=${pw}`);
      const res = await data.json();
      if(res.code) {
        alert(res.msg);
        window.location.href = '/';
      } else {
        alert(res.msg);
      }
     
      
  }
  return (
    <div className="input-wrapper">
      <div className="login-wrapper flex-center">
          <input className="login-input" type="text" placeholder="전화번호" onChange={(e) => {
            setPhone(e.target.value);
          }}/>
      </div>

      <div className="login-wrapper flex-center">
          <input className="login-input" type="text" placeholder="아이디(알파벳 소문자로 작성하여 주세요)"  onChange={(e) => {
            setId(e.target.value);
          }} />
      </div>

      <div className="login-wrapper flex-center">
          <input className="login-input" type="password" placeholder="비밀번호"  onChange={(e) => {
            setPw(e.target.value);
          }} />
      </div>

      <div className="flex-center button-wrapper">
      {id && pw && phone!= '' 
        ? <button className="signup-button2"onClick={resignin}>회원가입</button> 
        : <button className="signup-button" >회원가입</button>}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex-center findpass">
      <a>도토리그램 친구가 되어주세요</a>
    </div>
  );
}
function Signuppage() {
  return (
    <div className="login-container">
      
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      
    </div>
  );
}

export default Signuppage;
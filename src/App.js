
import { useState } from 'react';
import './App.css';
import { UC, LC, NC, SC } from './data/Passchar.jsx';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
  ////4 states for check boxes & input field
  let [uppercase, setuppercase] = useState(false);
  let [lowercase, setlowercase] = useState(false); let [num, setnum] = useState(false); let [symbol, setsymbol] = useState(false); let [pwdlength, setpwdlength] = useState(10); let [fpwd, setfpwd] = useState('')
  // var charSet='';
  ///////functions 
  let createpwd = () => {
    let charSet = ''; let finalpwd = ''
    /// for checkbox true or not
    if (uppercase || lowercase || num || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (num) charSet += NC;
      if (symbol) charSet += SC;
      /// generate a mixed pwd
      for (let i = 0; i < pwdlength; i++) {
        // charAT used for choosing random char 
        finalpwd += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setfpwd(finalpwd)
      NotificationManager.info('Successfully Password Generated @-@')
    }
    else {
      NotificationManager.success('Please one checkBox!....')
    }}
  let Copypwd = () => {// js Object
    navigator.clipboard.writeText(fpwd)
    NotificationManager.info('Copied to clipboard')
  }
  return (
    <>
      <NotificationContainer />
      <div className='pwdparentbox'>
        <h2>Password Generator</h2>
        <div className='pwdchildbox'>
          <input type="text" value={fpwd} readOnly />
          <button onClick={Copypwd}><b>Copy</b></button>
        </div>
        <div className='inputs'>
          <label>Password Length</label>
          <input type='number' max={20} min= {10} value={pwdlength} onChange={(e) => setpwdlength(e.target.value)} />
        </div>
        <div className='inputs'>
          <label>Include uppercase letters </label>
          <input type="checkbox" checked={uppercase} onChange={() => setuppercase(!uppercase)} />
        </div>
        <div className='inputs'>
          <label>Include lowercase letters </label>
          <input type="checkbox" checked={lowercase} onChange={() => setlowercase(!lowercase)} />
        </div>
        <div className='inputs'>
          <label>Include symbols </label>
          <input type="checkbox" checked={symbol} onChange={() => setsymbol(!symbol)} />
        </div><button onClick={createpwd}><b>Generate Password</b></button>
      </div>
    </>
  );
}

export default App;



// simple example 
// let p='sadafmarryum'
// let n= p.charAt(Math.floor(Math.random()*p.length))
// console.log(n);


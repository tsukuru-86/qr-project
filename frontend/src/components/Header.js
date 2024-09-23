// src/components/Header.js
import React from 'react';
//png形式
import TeaIcon from '../assets/Voga_Logo.png';
//svg形式
// import { ReactComponent as TeaIcon } from '../assets/Voga_Logo.svg';

function Header() {
  return (
    <header className="flex items-center justify-center py-4 bg-ai-iro">
      <img src={TeaIcon} alt="Tea Icon" style={{ width: '64px', height: '64px' }} />
      {/*svg形式 */}
      {/*<TeaIcon className="w-8 h-8 text-shironeri" style={{ width: '32px', height: '32px' }} /> */}
      {/* <h1 className="text-shironeri text-2xl ml-2">新時代のお茶</h1>*/}
    </header>
  );
}

export default Header;

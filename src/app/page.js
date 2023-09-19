'use client'
import React, { useEffect, useState } from 'react';

const IndexPage = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      console.log('Token found1:', storedToken);
      setToken(storedToken);
    } else {
      console.log('Token not found');
      const generatedToken = generateToken();
      setToken(generatedToken);
      localStorage.setItem('token', generatedToken);
      console.log('Generated and saved token:', generatedToken);
    }
  }, []);

  const handleOpenAppClick = () => {
    window.location.href = `data-transfer://open?token=${encodeURIComponent(token)}`;
    console.log('Opening the Tauri app..., window.location.href: ', window.location.href);
  };

  const generateToken = () => {
    const randomToken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Nlc3Npb24iOiJ6enh5N2NsNDJybDUya3kzNmw4Y3ZodHJvNm1mMTV6ZyIsInNmIjoiMTgifQ.vCqXeFizMRsocEIB7siwpQ4Nbtxp6vBem2oR0jkcF-4"
    return randomToken;
  };

  return (
    <div>
      <h1>Next.js Web App</h1>
      <button onClick={handleOpenAppClick}>Open App</button>
    </div>
  );
};

export default IndexPage;

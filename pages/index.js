import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const HomePage = () => {
  const router = useRouter();

  const handleButtonClick = (url) => {
    router.push(url);
  };

  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          scrollSnapAlign: 'start',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3270px' }}>
          <button
            style={{
              width: '300px',
              height: '430px',
              marginRight: '110px',
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() =>
              handleButtonClick(
                'https://discord.com/api/oauth2/authorize?client_id=1005064174138835004&permissions=8&scope=bot'
              )
            }
          ></button>
          <button
            style={{
              width: '300px',
              height: '430px',
              marginRight: '0px',
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() =>
              handleButtonClick(
                'https://discord.com/api/oauth2/authorize?client_id=1109416272598405120&permissions=8&scope=bot'
              )
            }
          ></button>
          <button
            style={{
              width: '300px',
              height: '430px',
              marginLeft: '110px',
              backgroundColor: 'transparent',
              border: 'none',
            }}
            onClick={() =>
              handleButtonClick(
                'https://discord.com/api/oauth2/authorize?client_id=1005342490917879908&permissions=8&scope=bot'
              )
            }
          ></button>
        </div>
        <Image src="/images/1.png" alt="Background Image" layout="fill" objectFit="cover" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          scrollSnapAlign: 'start',
        }}
      >
        {/* 2番目の背景の内容 */}
        <Image src="/images/2.png" alt="Background Image" layout="fill" objectFit="cover" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          scrollSnapAlign: 'start',
        }}
      >
        {/* 3番目の背景の内容 */}
        <Image src="/images/3.png" alt="Background Image" layout="fill" objectFit="cover" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          scrollSnapAlign: 'start',
        }}
      >
        {/* 4番目の背景の内容 */}
        <Image src="/images/4.png" alt="Background Image" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default HomePage;

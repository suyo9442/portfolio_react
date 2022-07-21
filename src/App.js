import './App.css';
import * as React from 'react';
import GlobalStyle from './GlobalStyles.js';
// import styled from 'styled-components';




function App() {
  return (
    <div className='App'>
      <GlobalStyle />

      <section id='title'>
        <div className='container'>
          <h2>RESUME</h2>
        </div>
      </section>

      <section id='main'>
        <div className='container'>
          <article id='profile'>
            <div className='profile_pic'>
              <span></span>
            </div>
            <div className='profile_desc'>
              <h3>DEVELOPER FANCY™</h3>
              <ul>
                <li>CREATIVE</li>
                <li>·</li>
                <li>DEVELOPER</li>
                <li>·</li>
                <li>Based on UXUI</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dicta facere laborum sequi consectetur quam quos ut, accusantium placeat odit officia quae ea porro incidunt repellat possimus quia provident adipisci.
              </p>
              <table>
                <tr>
                  <td>name</td>
                  <td>address </td>
                  <td>duty</td>
                </tr>
                <tr>
                  <td>kim soo</td>
                  <td>gangseo-gu, seoul</td>
                  <td>web developer</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <dl>
                      <dt>
                        <img src={process.env.PUBLIC_URL + '/tistory.svg'} />
                      </dt>
                      <dd>fancy-note.tistory.com/</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src={process.env.PUBLIC_URL + '/email.svg'} />
                      </dt>
                      <dd>suyo9442@naver.com</dd>
                    </dl>
                    <dl>
                      <dt>
                        <img src={process.env.PUBLIC_URL + '/phone.svg'} />
                      </dt>
                      <dd>+82 8726 6283</dd>
                    </dl>
                  </td>
                  <td className='qr'>
                    <img src='https://ebook.nowon.kr/file/pfile/skin/qrcode_20181214220149.png' />
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
      </section>
    </div >
  )
}
export default App;

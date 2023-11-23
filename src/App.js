/*eslint-disable*/

import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let ChangeToFemale = () => {
    let 새글제목 = [...글제목];
    새글제목[0] = '여성코트 추천';
    글제목변경(새글제목);
  };

  return (
    <div className='App'>
      <div className='blog__nav'>
        <h4>ReactBlog</h4>
      </div>
      {
        //
        글제목.map(function (a, i) {
          return (
            <div className='list'>
              <h4
                onClick={() => {
                  setTitle(i);
                  setModal(!modal);
                }}
              >
                {글제목[i]}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let 뉴따봉 = [...따봉];
                    뉴따봉[i] = 뉴따봉[i] + 1;
                    따봉변경(뉴따봉);
                  }}
                >
                  👍
                </span>
                {따봉[i]}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    let 삭제뒤글제목 = [...글제목];
                    삭제뒤글제목.splice(i, 1);
                    글제목변경(삭제뒤글제목);
                  }}
                >
                  삭제
                </button>
              </h4>
              <p>2월 18일 발행</p>
            </div>
          );
        })
      }
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let 추가뒤글제목 = [...글제목];
          추가뒤글제목.unshift(입력값);
          따봉.unshift(0);
          글제목변경(추가뒤글제목);
        }}
      >
        입력하기
      </button>

      {modal ? (
        <Modal
          title={title}
          색깔='green'
          글제목={글제목}
          함수={ChangeToFemale}
        />
      ) : null}
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.색깔 }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.함수}>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: 'lee' });
          }}
        >
          lee로 이름 바꾸자
        </button>
      </div>
    );
  }
}

export default App;

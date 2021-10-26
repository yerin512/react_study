import React, { Component } from 'react'

export default class EventPractice extends Component {


state = {
    message: '',
    userName:'',
}

handleChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    })
}

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력"
                value={this.state.message}
                onChange={this.handleChange}
                />
                  <input
                type="text"
                name="userName"
                placeholder="아무거나 입력"
                value={this.state.userName}
                onChange={this.handleChange}
                />
                <button onClick={
                    ()=> {
                        alert(this.state.message + this.state.userName);
                        this.setState({
                            message:''
                        })
                    }
                }>확인</button>
            </div>
        )
    }
}

/*

console.log(e.target.value)
// 이벤트 객체가 콘솔에 나타난다.

여기서 콘솔에 기록되는 e 객체는 SyntheticEvent로 웹 브라우저의 
네이티브 이벤트를 감싸는 객체임. 네이티브 이벤트와 인터페이스가 같으므로 순수 자바스크립트에서
HTML 이벤트를 다룰 때와 똑같이 사용하면 됨.

SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되어 정보를 참조할 수 없음.
예를 들어, 0.5초뒤 e 객체를 참조하면 e 객체 내부의 모든 값이 비워지게 됨.

만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해주어야함. 
예를 들어 onChange 이벤트가 발생할 때, 앞으로 변할 인풋 값인 e.target.value를 콘솔에 기록해 보겠음..

 console.log(e.target.value)
 //값이 바뀔때마다 바뀌는 값을 콘솔에 기록함.

 ---

   this.setState({
        [e.target.name]:e.target.value
    })

    객체 안에서 key를 [] 로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용됨.

    ex)
    const name = 'varianKey';
    const object = {
    [name]: 'value'
    }
    의 결과는
    {
        'variantKey' : 'value'
    }

    
*/



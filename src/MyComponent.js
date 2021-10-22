import React from 'react';

const MyComponent = () => {
    return <div>나의 새롭고 멋진 컴포넌트</div>
}

export default MyComponent;
//이 코드는 다른 파일에서 이 파일을 import할 때, 위에서 선언한 MyComponent 클래스를 불러오도록 설정함.



//ES6의 화살표 함수.

/*
화살표 함수는 ES6 문법에서 함수를 표현하는 새로운 방식임. 
그렇다고 해서 기존 function을 이용한 함수 선언 방식을 아예 대체하지는 않음.
사용 용도가 다름. 이 문법은 주로 함수를 파라미터로 전달할 때 유용함.
*/

/*
setTimout(function () {
    console.log('hello, wolrd');
}, 1000)


setTimeout(()=>{

    console.log('hello wold')

}),1000);

이 문법이 기존 function을 대체할 수 없는 이유는 용도가 다르기 때문임. 
무엇보다 서로 가리키고 있는 this 값이 다름.

*/
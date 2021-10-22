import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name,numnum,children}) => {


    // const nextObject = {...object, b: 2} // 사본을 만들어서 b 값만 덮어 쓰기.

    const [object, setObject] = useState({a:1, b:2, c:3});

const test = () => {
setObject({
    ...object,
    b:88
    }
);
console.log(object)

}
    return <div>안녕하세요, {name} 입니다.
    <br/>
    children 값은 {children}
    좋아하는 건 {numnum}
    <button onClick={()=>{test()}}/>
    </div>

}

MyComponent.defaultProps = {
    name:'기본'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    numnum : PropTypes.string.isRequired

};

export default MyComponent;

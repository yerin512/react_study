import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name,numnum,children}) => {


    // const nextObject = {...object, b: 2} // 사본을 만들어서 b 값만 덮어 쓰기.

    const [object, setObject] = useState({a:1, b:2, c:3});
    const array = 
       [ {id:1, value: true},
        {id:2, value: true},
        {id:3, value: true}]
        ;
     const newArray = array.concat({id:4})

const test = () => {
setObject({
    ...object,
    b:88
    }
);
newArray.map(item => (item.id === 1 ? {...item,value : false} : item))

console.log(newArray)

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

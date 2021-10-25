import { useState } from 'react'

const EventPractice = () => {

    const [state, setState] = useState({
        userName:'',
        message:'',
    });

    const onClick = () => {
        alert(state.userName + ' : ' + state.message)
        
    }

    const onChangeHandler = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
         <h1>event handler</h1>
     <input
     name="userName"
     value={state.userName}
     placeholder="사용자명"
     onChange={onChangeHandler}
     />
     <input
      name="message"
      value={state.message}
      placeholder="메시지"
      onChange={onChangeHandler}
     />
     <button onClick={onClick}>확인</button>    

        </div>
    )
}
export default EventPractice


import { Component } from 'react';
import './App.css';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

// function App() {
//   return (
//     <div className="App">
//     <ValidationSample/>
//     </div>
//   );
// }
class App extends Component {
  renter(){
    return(
      <ValidationSample/>
    )
  }
}



export default App;
             

// defaultProps 와 propTypes는 꼭 사용해야하나요?
// 이 두 가지는 필수가 아니라 사용할 필요없음. 하지만 다른 개발자들과 함께 협업핮다면 해당 컴포넌트에 어떤 props가 필요한지
// 쉽게 알 수 있어 개발 능률이 좋아질 것.


import './App.css'
import { About as _About} from './About'

const App = () => {
  const someString = "Hello World!";
  return (
    <div>Home
      <_About someString={someString}/>
    </div>
  )
}

export default App;

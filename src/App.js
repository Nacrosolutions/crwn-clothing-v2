import { Route, Routes } from 'react-router-dom';
import './catagories.scss';
import Authentication from './routes/authenticate/authenticate';
//import Catagories from './components/directory/catagories';
import Home from './routes/home/home';
import Naviagtion from './routes/navigation/navigation';


const Shop = () => {
  return (
    <>
      <h1>I am shop component</h1>
    </>
  )
}

const App = () => {

  return (

    <Routes>
      <Route path='/' element={<Naviagtion />}>

        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />

      </Route>

    </Routes>

  )
}
export default App;

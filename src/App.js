import { Route, Routes } from 'react-router-dom';
import './catagories.scss';
//import Catagories from './components/directory/catagories';
import Home from './routes/home/home';
import Naviagtion from './routes/navigation/navigation';
import SignIn from './routes/signin/signIn';


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
        <Route path='sign-in' element={<SignIn />} />

      </Route>

    </Routes>

  )
}
export default App;

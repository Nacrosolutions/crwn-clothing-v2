import Catagory from "../catagory/catagory.component";

import './catagories.scss';
const Catagories = ({ catagories }) => {

  return (
    <div className='categories-container'>
      {catagories.map((catagory) => (
        <Catagory key={catagory.id} catagory={catagory} />
      ))}

    </div>
  )
}




export default Catagories;
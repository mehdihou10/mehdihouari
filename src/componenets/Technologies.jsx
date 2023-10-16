import SpecialTitle from './SpecialTitle';
import {TechnologiesImgs} from '../constants/constants';


const Technologies = () => {
  return (
    <div id='skills'>
      <div className="container pt-[100px]">
        <SpecialTitle title='Technologies'/>

        <div className="images grid grid-cols-3 sm:grid-cols-4 place-items-center gap-[30px]">
          {
            TechnologiesImgs.map(tech =>(

              <div key={tech.id} className="image">
                <img className='w-[80px]' src={tech.image} alt="tech" />
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Technologies

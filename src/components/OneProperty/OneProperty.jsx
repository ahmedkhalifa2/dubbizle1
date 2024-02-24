
import { IoIosArrowForward } from "react-icons/io";

const OneProperty = (props) => {
    return (
        <div>
            <p className='font-bold flex text-m mb-3'><img className="w-4 mr-3" src={props.image} />{props.category}</p>
            <div>
                <a className='text-sm  block pb-1 mb-1 hover:text-blue-500' href='#'>{props.subCategories1}</a>
                <a className='text-sm  block pb-1 mb-1 hover:text-blue-500' href='#'>{props.subCategories2}</a>
                <a className='font-bold text-m hover:first m-0 text-red-500' href='#'><p className='flex align-content-center'>All in {props.category} <IoIosArrowForward className='mt-1.5' /></p></a>
            </div>
        </div>
    );
}

export default OneProperty;

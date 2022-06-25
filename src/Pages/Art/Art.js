import React from 'react';
import Details from '../Details/Details';

const Art = ({ art }) => {

    // console.log(art)


    return (
        <div className='my-4'>

            {/* heading part */}

            <div>

                <h1 className='text-5xl font-bold '>{art.headTitle}</h1>
                <p className='text-xl text-[#808080] mt-1'>{art?.smallTitle} <i className="fa-solid fa-circle-question"></i></p>

            </div>


            {/* deatail part */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 gap-4'>

                <div>
                    {/* detail section */}

                    <Details
                        art={art}
                    >


                    </Details>





                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1'>

                    {/* picture section */}

                    <img src={art?.image1} alt="" />

                    <div className=''>

                        <img className='mb-1' src={art?.image2} alt="" />

                        <img src={art?.image3} alt="" />
                    </div>




                </div>


            </div>









        </div>
    );
};

export default Art;
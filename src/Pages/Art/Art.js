import React from 'react';
import Details from '../Details/Details';

const Art = ({ art }) => {

    // console.log(art)


    return (
        <div>

            {/* heading part */}

            <div>
                <h1 className='text-3xl font-bold '>{art.headTitle}</h1>
                <p>{art?.smallTitle}</p>

            </div>


            {/* deatail part */}

            <div>

                <div>
                    {/* detail section */}

                    <Details
                        art={art}
                    >


                    </Details>





                </div>


                <div>

                    {/* picture section */}


                </div>


            </div>







        </div>
    );
};

export default Art;
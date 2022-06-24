import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';


const Art = () => {

    const { isLoading, data } = useQuery('arts', () =>
        fetch('data.json').then(res =>
            res.json()
        )
    )


    if (isLoading) {
        return <Loading></Loading>
    }



    console.log(data)





    return (
        <div>

            <div>
                <h1>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More </h1>
            </div>




        </div>
    );
};

export default Art;
import React from 'react';
import { useQuery } from 'react-query';
import Art from '../Art/Art';
import Loading from '../Loading/Loading';


const Arts = () => {

    const { isLoading, data } = useQuery('arts', () =>
        fetch('data.json').then(res =>
            res.json()
        )
    )


    if (isLoading) {
        return <Loading></Loading>
    }



    // console.log(data)


    return (
        <div className='mx-4'>

            {
                data.map((art, index) => <Art
                    key={index}
                    art={art}
                ></Art>)
            }




        </div>
    );
};

export default Arts;
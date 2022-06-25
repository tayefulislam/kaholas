import React from 'react';

const Details = ({ art }) => {

    console.log(art)

    const { classRating } = art

    return (
        <div>

            <p className='text-xl font-semibold'>{art?.detail}</p>

            <div className='flex items-center my-3'>
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>

                <h1 className='text-[#503DD4] font-bold text-2xl'>{art?.teacher}</h1>
            </div>


            {/* review for teacher */}

            <div className='flex items-center my-3'>

                <div class="rating rating-md">
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" checked />
                </div>

                <p className='ml-1 text-[#918e8e]'>{art?.totalReviewTeacher} total review for this teacher</p>


            </div>

            <div className='flex items-center my-2'>
                {/* completed rating  */}


                <div class="rating rating-md">
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" defaultChecked={classRating === 1} />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" defaultChecked={classRating === 2} />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" defaultChecked={classRating === 3} />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" defaultChecked={classRating === 4} />
                    <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" defaultChecked={classRating === 5} />
                </div>

                <p className='ml-1 text-[#918e8e]'>{art?.completedLearner} review for this class</p>


            </div>

            <h1 className='text-xl font-semibold my-4'>Completed by {art?.completedLearner} Learners</h1>


            <div className='flex:none sm:flex md:flex lg:flex mt-5'>

                {/* there button section */}

                <button className='btn bg-[#503DD4] rounded-full border-0 hover:bg-[#503DD4]'>
                    <span>See Class Schedule</span>
                </button>


                <div>

                    <button className='btn text-[#503DD4] rounded-full border-0 bg-base-100 hover:bg-base-100 text-xl'>


                        <i class="fa-regular fa-heart mx-1"></i>  Save
                    </button>

                    <button className='btn text-[#503DD4] rounded-full border-0 bg-base-100 hover:bg-base-100 text-xl'>

                        <i class="fa-solid fa-share mx-1"></i>
                        Share
                    </button>


                </div>


            </div>









        </div>
    );
};

export default Details;
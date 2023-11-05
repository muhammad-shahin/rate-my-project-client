import PropTypes from 'prop-types';

const CategoryCard = ({ cardData, icon }) => {
  const { categoryName, categoryDetails } = cardData;
  console.log(icon);
  return (
    <div className='rounded-lg text-center border-2 border-primary gradient-anim p-10 w-fit space-y-3 bg-transparent max-w-[450px] cursor-pointer flex justify-center items-start flex-col hover:text-white gradient-text duration-300'>
      <div className='round-bg mx-auto'>{icon}</div>
      <h2 className='md:text-3xl text-xl font-semibold duration-500 w-fit mx-auto'>
        {categoryName}
      </h2>
      <p className='md:text-md text-sm  md:font-medium max-w-sm hover:text-slate-100 text-primary duration-500'>
        {categoryDetails}
      </p>
      <button className='rounded-full px-5 py-2 mx-auto gradient-bg text-[#545353] font-bold gradient-anim'>
        View Assignment
      </button>
    </div>
  );
};

CategoryCard.propTypes = {
  cardData: PropTypes.object,
  icon: PropTypes.object,
};

export default CategoryCard;

import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Accordion = ({ open, toggle, data }) => {
  const { question, answer } = data;
  return (
    <div className='pt-[10px]'>
      <div
        className='gradient-bg shadow-2xl lg:px-[50px] px-[25px] lg:py-[25px] py-[15px] flex justify-between items-center cursor-pointer lg:gap-0 gap-3'
        onClick={toggle}
      >
        {/* Question or Title */}
        <h2 className='lg:text-[22px] text-[18px] font-semibold text-white'>
          {question}
        </h2>
        <div className='lg:text-[30px] text-[22px] text-white'>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className='bg-white px-[50px] pb-[20px] shadow-2xl'>
          {/* answers */}
          <p className='pt-6 lg:text-[18px] text-[16px] font-medium'>
            {answer}
          </p>
        </div>
      </Collapse>
    </div>
  );
};

Accordion.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Accordion;

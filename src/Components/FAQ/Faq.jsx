import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import axios from 'axios';
const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios.get('/faq.json').then((res) => {
      setFaqData(res.data);
    });
  }, []);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <section>
      <div className='my-10 container mx-auto lg:w-[70%] w-[90%]'>
        {faqData?.map((data, index) => {
          return (
            <Accordion
              key={index}
              open={index === open}
              data={data}
              toggle={() => {
                toggle(index);
              }}
            ></Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;

import { Faqs } from '../Data';
import FaqComponent from '../components/FaqListComponent';
import SectionComponent from '../components/SectionComponent';

const FAQS = () => {

  return (
    <SectionComponent>
      <div className='space-y-2 mb-4'>
        <h3 className='font-semibold text-primary'>Frequently Asked Questions</h3>
        <h1 className='text-3xl font-bold'>Your Question Answered</h1>
      </div>
      <ul className="space-y-4">
          {
              Faqs.map((item) => {
                  return (
                    <FaqComponent
                      key={item.id}
                      item={item}
                    />
                  );
              }
          )}
      </ul>
    </SectionComponent>
  );
}

export default FAQS

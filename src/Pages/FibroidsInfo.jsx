import React from "react";
import SectionComponent from "../components/SectionComponent";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const FibroidsInfo = () => {
  return (
    <SectionComponent>
      <div className="max-w-7xl mx-auto space-y-6">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary/40 mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </Link>
        <h1 className="text-3xl font-bold text-primary mb-6">
          What are Fibroids?
        </h1>

        <div className="prose prose-lg">
          <p>
            Fibroids are made up of smooth muscle cells and connective tissue.
            They can grow on or within the inner lining of the uterus. Fibroid
            growths range in size from very small (less than a quarter of an
            inch) to very large (the size of a grapefruit). They develop as a
            single growth or in clusters.
          </p>
          <p>
            Though fibroids are noncancerous, they can cause uncomfortable
            symptoms and lead to more serious health complications when left
            untreated.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How to identify fibroids
          </h2>
          <p>
            Fibroids may grow without causing any symptoms at all. However, they
            can interfere with your quality of life depending on their size and
            location. The most common symptoms include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Heavy menstrual bleeding:</strong> Fibroids can cause
              menstrual cycles to be heavier than normal or last longer than
              usual. Patients should track their menstrual cycles to look for
              any changes in bleeding patterns.
            </li>
            <li>
              <strong>Frequent urination:</strong> Fibroids may press against
              the bladder and cause urinary frequency or urgency. Try to urinate
              at regular intervals to see if this is a problem.
            </li>
            <li>
              <strong>Constipation:</strong> Some growths press against the
              rectum and make it difficult to have a bowel movement. Drink water
              and eat fiber-rich foods to stay regular.
            </li>
            <li>
              <strong>Discomfort during intercourse:</strong> Fibroids are known
              to cause pain during sex. Talk to your partner about any
              discomfort you may be experiencing.
            </li>
            <li>
              <strong>Pelvic pain and pressure:</strong> Patients may have a
              dull ache or sharp pain in the lower abdomen or pelvis due to
              fibroids. This pain may radiate to the lower back, buttocks, or
              legs.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How fibroids are diagnosed
          </h2>
          <p>
            Fibroids are normally found during a health evaluation with a
            primary care physician or gynecologist. They may ask about any
            relevant symptoms, take a medical history, and perform a physical
            exam to confirm a diagnosis. Patients may then be referred to
            American Fibroid Centers for treatment options in Fishkill, Harlem,
            Brooklyn, Queens, West Orange, NJ, and Cincinnati, OH.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            What are the treatment options for fibroids?
          </h2>
          <p>
            Some over-the-counter medications relieve mild fibroid symptoms like
            pain and cramping. However, these medications don't address the root
            of the issue. American Fibroid Centers offers a minimally invasive
            procedure called uterine fibroid embolization (UFE).
          </p>
          <p>
            UFE is an outpatient procedure performed using local anesthesia. A
            small catheter is inserted into the treatment area and guided to the
            uterine arteries. Once in place, tiny particles are released to
            block the blood flow to the fibroids. This starves the fibroids and
            causes them to shrink over time.
          </p>
        </div>
      </div>
    </SectionComponent>
  );
};

export default FibroidsInfo;

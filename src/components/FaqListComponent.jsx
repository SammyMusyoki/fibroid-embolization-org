import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const FaqListComponent = ({ item }) => {

    const [activeTab, setActiveTab] = useState(null)

    const handleTabClick = (item_id) => {
        if (activeTab === item_id) {
            setActiveTab(null);
        } else {
            setActiveTab(item_id);
        }
    }

  return (
    <React.Fragment>
      <li className="w-full bg-primary/80">
        <button
          onClick={() => handleTabClick(item.id)}
          className="p-4 flex justify-between w-full"
        >
          <span className="text-white text-start leading-7 max-sm:line-clamp-1 tracking-wide text-normal sm:text-lg font-medium mx-2 flex items-center justify-center">
            {item.question}
          </span>
          {activeTab ? (
            <span className="h-8 w-8 bg-green-400 flex items-center justify-center rounded-2xl">
              <ChevronDownIcon className="h-6 w-6 text-white" />
            </span>
          ) : (
            <span className="h-8 w-8 bg-green-400 flex items-center justify-center rounded-2xl">
              <ChevronUpIcon className="h-6 w-6 text-white" />
            </span>
          )}
        </button>

        <div
          className={`border bg-background border-t-0 ${
            activeTab === item.id ? " " : "translate-y-0 hidden"
          } transition-transform duration-600 ease-in-out`}
        >
         {activeTab === item.id && <p className="text-lg font-medium p-6">{item.answer}</p>}
        </div>
      </li>
    </React.Fragment>
  );
};

export default FaqListComponent

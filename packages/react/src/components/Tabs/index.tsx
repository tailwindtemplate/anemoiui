import { useState } from 'react';
import Movie from './Movie.json';
import clsx from 'clsx';
export const TabsHome = () => {
  const [keyTabs, setKeyTab] = useState('1');
  return (
    <div className="my-20 py-4 mt-4 border rounded-lg">
      <ul className="flex py-8">
        {
          Movie.map(({ key, tab }) => (
            <li
              className={clsx('px-4 cursor-pointer', keyTabs === key && 'text-green-400')}
              key={key}
              onClick={() => setKeyTab(key)}
            >
              { tab}
            </li>
          ))
        }
      </ul>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-rows-2 gap-x-4 gap-y-8	grid-cols-2 p-4">
        {
          Movie.map(({ key, movie }) => key === keyTabs && (
            movie.map(({ name, img }) => (
              <div className="p-4 border shadow-lg rounded transform duration-200 ease-in-out hover:scale-105" key={key}>
                <img src={img} alt={key} />
                <p className="truncate bg-green-400 p-4 text-green-800 font-normal m-0	text-center">{name}</p>
              </div>
            ))
          ))
        }
      </div>
    </div>
  )
};

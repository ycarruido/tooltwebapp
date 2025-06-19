"use client";
import NavLink from "../NavLink/NavLink";
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const Features = ({ strTitle, strsubtitle, strText = [], strBtn, path = "/devStrategy" }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl text-left pb-4">
          {strTitle}
        </p>
        <p className="mt-3 text-gray-900 text-left pb-3">{strsubtitle}</p>

        <ul className="space-y-2 pb-10">
          {strText.map((item, index) => (
            <li key={index} className="items-left justify-between">
              <LabelImportantIcon className="text-sky-600" />  
              <span className="pr-12 ml-2">{item}</span>{" "}
            </li>
          ))}
        </ul>
        <NavLink
          href={path}
          style={{ borderRadius: '9999px' }}
          className="inline-block font-medium text-sm text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700 px-6 py-3"
        >
          {strBtn}
        </NavLink>
      </div>
    </section>
  );
};

export default Features;

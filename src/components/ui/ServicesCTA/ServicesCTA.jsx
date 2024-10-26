import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink/NavLink";

const ServicesCTA = ({ strText, strQ, strBtn, bgColor }) => {
  return (
    <SectionWrapper id="cta" className={bgColor}>
      <div className="custom-screen">
        <div className="flex flex-col-reverse items-center gap-x-6 lg:flex-row lg:gap-x-12 pb-4 lg:pb-4">
          <div className="flex-1 mt-6 lg:mt-0 lg:max-w-lg pb-3">
            <ul className="mt-6 space-y-4 text-white text-sm md:text-base lg:text-lg list-outside pl-6">
              <li className="flex items-start space-x-2">
                <span>
                  {strText}
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:max-w-2xl text-center lg:text-left">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium pb-4">
              {strQ}
            </p>
            <NavLink
              href="/contact"
              style={{ borderRadius: '9999px' }}
              className="inline-block mt-4 font-medium text-sm text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700 px-6 py-3"
            >
              {strBtn}
            </NavLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesCTA;

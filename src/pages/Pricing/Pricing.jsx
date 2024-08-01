import React from "react";
import Head_text from "../../components/Pricing/Head_text";
import Pcard from "../../components/Pricing/Card";
import Faq from "../../components/Landing/Faq";

function Pricing() {
  return (
    <div>
      <Head_text />
      <Pcard />
      <p className="text-[#0d80fa] text-lg font-semibold mt-8 flex justify-center">
        Still confused
      </p>
      <div className="leading-tight">
        <p className="lg:text-[3.2rem] hidden justify-center pt-2 lg:flex font-semibold leading-tight">
          See the Frequently Asked Questions
        </p>

        <p className="lg:hidden text-center text-[2.2rem] justify-center pt-2 flex font-semibold leading-tight">
          See the Frequently Asked Questions
        </p>
        <p className="text-md text-center lg:p-1 p-5 leading-tight text-[#cacaca] justify-center flex">
          You ask. We tell. We have compiled the answers to some of the most
          asked questions.
        </p>
        <p className="text-md  text-center lg:p-0 px-5 text-[#cacaca] justify-center lg:flex">
          Should you need more information, do not hesitate to&nbsp;{" "}
          <span className="text-[#0d80fa] font-semibold underline">
            contact us
          </span>
          .
        </p>
      </div>
      <Faq />
    </div>
  );
}

export default Pricing;

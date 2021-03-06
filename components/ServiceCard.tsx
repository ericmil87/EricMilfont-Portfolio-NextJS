import { FunctionComponent } from "react";
import { Service } from "../types";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
  function createMarkup() {
    return {
      __html: about,
    };
  }

  return (
    <div className="flex items-center h-full justify-left p-2 space-x-4 ">
      <div className="container h-14 w-14">
        <Icon className="h-full w-14 text-sky-400 dark:text-sky-600" />
      </div>
      <div className=" tracking-wide">
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;

import React, { useContext } from "react";
import comLogo from "../assets/images/com_logo.png";
import { ThemeContext } from "../assets/themes";

const JobDescription = ({ jobInfo, handleJobRemove, handleJobSave }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <div className="max-w-md sm:max-w-xl flex flex-col flex-wrap mx-auto px-2 sm:px-0">
        {/*----------- JOB TITLE --------------*/}
        <section
          className={`${theme.bgColor} p-3 rounded-lg w-full -mt-20 flex flex-col sm:flex-row justify-center sm:justify-between px-10 items-center py-6`}
        >
          <div className="flex sm:flex-row flex-col items-center">
            <img
              className="w-12 sm:w-16 sm:mr-4 sm:mb-0 mb-3"
              src={jobInfo.company_logo ? jobInfo.company_logo : comLogo}
              alt="company logos"
            />
            <div className="flex flex-col text-center sm:items-start sm:justify-start">
              <h1
                className={`text-md sm:text-lg ${theme.textColor} font-bold truncate`}
              >
                {jobInfo.company}
              </h1>
              <h3
                className={`text-xs w-full sm:w-3/4 text-left ${theme.textColor}`}
              >
                {jobInfo.location}
              </h3>
            </div>
          </div>

          <a
            href={jobInfo.company_url}
            target="__blank"
            type="button"
            className={
              jobInfo.company_url === null
                ? "hidden"
                : "block w-3/4 text-center sm:w-1/4 mt-6 sm:mt-0 bg-indigo-700 p-2 text-sm text-white rounded-md"
            }
          >
            Company Site
          </a>
        </section>
        {/* ---------- JOB DESCRIPTION ---------------- */}
        <section className={`${theme.bgColor} p-10 mt-10 w-full rounded-lg`}>
          <div className="flex flex-row items-center justify-between">
            <div className="w-full">
              <p className="text-xs text-gray-500 mb-2">{jobInfo.type}</p>
              <h1 className={`text-xl w-3/4 font-bold ${theme.textColor}`}>
                {jobInfo.title}
              </h1>
              <p className="text-xs text-blue-500 w-3/4 mt-2">
                {jobInfo.location}
              </p>
            </div>
            {/* <button className="bg-indigo-600 mt-6 w-full sm:w-2/5 sm:mt-0 px-3 py-2 rounded text-sm text-white">
              Save
            </button> */}
            <div>
              <svg
                className={
                  jobInfo.save ? "hidden" : "text-blue-600 cursor-pointer"
                }
                onClick={() => {
                  handleJobSave(jobInfo.id);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              <svg
                className={
                  jobInfo.save ? "text-blue-600 cursor-pointer" : "hidden"
                }
                onClick={() => {
                  handleJobRemove(jobInfo.id);
                }}
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 11h4m-2-2v4"
                />
              </svg>
            </div>
          </div>
          <div className={`mt-6 text-sm ${theme.textColor}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse molestie rutrum ante, in volutpat arcu. Maecenas ac
              scelerisque quam. Pellentesque iaculis, massa sagittis interdum
              suscipit, odio nunc convallis lorem, nec ullamcorper ex risus non
              orci. Ut imperdiet feugiat felis, vel semper augue commodo id. Sed
              posuere ligula porta molestie dignissim. Duis nec nisl volutpat,
              volutpat mi ac, gravida risus. Nulla luctus volutpat tincidunt.
              Suspendisse potenti.
            </p>
            <br />
            <p>
              Maecenas quis lorem vitae tortor commodo scelerisque in nec
              ligula. Donec ipsum mauris, vehicula nec enim a, placerat varius
              odio. Nullam suscipit id ex vel scelerisque. Aenean rutrum metus
              at mollis fermentum. In id ex eleifend, tempus ipsum elementum,
              ornare dolor. Fusce fringilla sapien libero, non imperdiet massa
              interdum eget. Suspendisse potenti. Proin vestibulum consequat
              felis, scelerisque rutrum ante commodo non. Praesent efficitur
              dapibus commodo.
            </p>
          </div>
          <div className={`text-sm mt-8 ${theme.textColor}`}>
            <h2 className="font-bold text-lg mb-2">Requirements</h2>
            <p>
              Aenean rutrum metus at mollis fermentum. In id ex eleifend, tempus
              ipsum elementum, ornare dolor. Fusce fringilla sapien libero, non
              imperdiet massa interdum eget. Suspendisse potenti. Proin
              vestibulum consequat felis, scelerisque rutrum ante commodo non.
              Praesent efficitur dapibus commodo. Cras quam turpis, facilisis
              euismod consequat id, pharetra vitae nisl. Sed sodales volutpat
              porta.
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li className="mb-2">
                Fusce fringilla sapien libero, non imperdiet massa interdum eget
              </li>
              <li className="mb-2">
                Vestibulum vel egestas enim, eget consequat nulla
              </li>
              <li className="mb-2">Sed sodales volutpat porta</li>
              <li className="mb-2">
                Proin vestibulum consequat felis, scelerisque rutrum ante
              </li>
            </ul>
          </div>
          <div className={`${theme.textColor} text-sm mt-8`}>
            <h2 className="font-bold text-lg mb-2">What you will do:</h2>
            <p>
              Fusce fringilla sapien libero, non imperdiet massa interdum eget.
              Suspendisse potenti. Proin vestibulum consequat felis, scelerisque
              rutrum ante commodo non. Praesent efficitur dapibus commodo. Cras
              quam turpis, facilisis euismod consequat id, pharetra vitae nisl.
              Sed sodales volutpat porta.
            </p>
            <br />
            <p>
              Pellentesque iaculis, massa sagittis interdum suscipit, odio nunc
              convallis lorem, nec ullamcorper ex risus non orci. Ut imperdiet
              feugiat felis, vel semper augue commodo id. Sed posuere ligula
              porta molestie dignissim. Duis nec nisl volutpat, volutpat mi ac,
              gravida risus.
            </p>
            <ul className="list-decimal pl-5 mt-2">
              <li className="mb-2">
                Fusce fringilla sapien libero, non imperdiet massa interdum eget
              </li>
              <li className="mb-2">
                Vestibulum vel egestas enim, eget consequat nulla
              </li>
              <li className="mb-2">Sed sodales volutpat porta</li>
              <li className="mb-2">
                Proin vestibulum consequat felis, scelerisque rutrum ante
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-indigo-700 text-white w-full p-10 mt-6 mb-6 rounded-md bg-svg">
          <h1 className="font-bold text-lg mb-4">How to Apply</h1>
          <p className="text-sm mb-4">
            Nullam suscipit id ex vel scelerisque. Aenean rutrum metus at mollis
            fermentum. In id ex eleifend, tempus ipsum elementum, ornare dolor.
            Fusce fringilla sapien libero, non imperdiet massa interdum eget.
            Suspendisse potenti. Proin vestibulum consequat felis, scelerisque
            rutrum ante commodo non. Praesent efficitur dapibus commodo.
          </p>
          <a
            className="text-xs underline break-words"
            href="https://jobs.academicwork.se/annons/fullstackutvecklare-till-group-it-pa-academic-work/15045291"
          >
            {jobInfo.how_to_apply}
          </a>
        </section>
      </div>
    </div>
  );
};

export default JobDescription;

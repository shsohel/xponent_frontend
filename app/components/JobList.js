import Image from "next/image";
import StarRating from "./JobRating";
import jobData from "@/app/data/jobs.json";
import Link from "next/link";
export default function JobList() {
  const data = jobData.jobs;
  return (
    <div className="py-4 ">
      <h2 className="pb-2 text-lg font-semibold">
        Apply for your first JobList
      </h2>
      <div className="flex flex-col  divide-y-2 bg-white p-6 rounded space-y-4">
        {data.map((job) => {
          return (
            <div key={job.id} className="py-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <h3 className="text-base md:text-xl font-bold">
                    {job.title}
                  </h3>
                  <div className="flex gap-2">
                    <p className="text-sm text-gray-500">
                      Posted {job.posting_date}
                    </p>
                    <p className="text-sm text-gray-500 block md:hidden">
                      / <span className="text-secondary"> {job.job_type}</span>
                    </p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="border border-secondary px-2 py-1 rounded text-secondary ">
                    {job.job_type}
                  </span>
                </div>
              </div>
              <p className="text-base text-gray-700">{job.description}</p>
              <div className="flex flex-col md:flex-row gap-4  md:justify-between md:items-center">
                <div className="flex items-center">
                  <div className="flex gap-1 items-center">
                    <Image
                      className="h-5 "
                      src="/currency_flag.svg"
                      height={40}
                      width={40}
                      alt="currency_flag"
                    />
                    <span className="text-xl">{job.salary_range}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      className="h-5 "
                      src="/map_icon.svg"
                      height={40}
                      width={40}
                      alt="map_icon"
                    />
                    <span>{job.location}</span>
                    <StarRating rating={4.3} />
                  </div>
                </div>
                <div>
                  <Link
                    href={`/apply/${job.slug}`}
                    className=" bg-primary text-white uppercase px-4 py-2 rounded"
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

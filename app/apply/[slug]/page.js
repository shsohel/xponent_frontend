import JobForm from "@/app/components/JobForm";
import Input from "@/app/components/usable/Input";
import jobData from "@/app/data/jobs.json";
import Image from "next/image";
export default async function JobApply({ params }) {
  const { slug } = await params;
  const data = jobData.jobs;
  const job = data.find((j) => j.slug === slug);
  console.log(slug);
  return (
    <div className="space-y-4 py-4">
      <div className="flex flex-col bg-white p-6 rounded space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-base md:text-xl font-bold">{job.title}</h3>
            <div className="flex gap-2">
              <p className="text-sm text-gray-500">Posted {job.posting_date}</p>
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
            </div>
          </div>
          {/* <div>
            <Link
              href={`/apply/${job.slug}`}
              className=" bg-primary text-white uppercase px-4 py-2 rounded"
            >
              APPLY NOW
            </Link>
          </div> */}
        </div>
      </div>
      {/* Form */}
      <JobForm />
    </div>
  );
}

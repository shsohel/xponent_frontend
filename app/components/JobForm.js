"use client";

import { useState } from "react";
import Input from "./usable/Input";
import Textarea from "./usable/Textarea";
import { useRouter } from "next/navigation";

// Initial form data
const initialData = {
  name: "",
  email: "",
  phone: "",
  coverLetter: "",
  socialMedia: {
    linkedIn: "",
    gitHub: "",
    twitter: "",
  },
  file: "",
};

export default function JobForm() {
  const router = useRouter();
  const [jobFormData, setJobFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  console.table(errors);

  // Handle general input change
  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setJobFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    console.log("id", id);

    // Remove validation error for the field that was changed
    if (errors[id]) {
      console.log(id);
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id]; // Remove specific error message
        return newErrors;
      });
    }
  };

  // Handle social media input change
  const handleSocialOnChange = (e) => {
    const { id, value } = e.target;
    setJobFormData((prevData) => ({
      ...prevData,
      socialMedia: {
        ...prevData.socialMedia,
        [id]: value,
      },
    }));

    // Remove validation error for the social media field
    if (errors[id]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id]; // Remove specific error message
        return newErrors;
      });
    }
  };

  // Handle file input change
  const handleFileOnChange = (e) => {
    const { id, files } = e.target;
    setJobFormData((prevData) => ({
      ...prevData,
      [id]: files[0], // Store the file in state
    }));

    // Remove file-related validation error
    if (errors[id]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[id]; // Remove file error message
        return newErrors;
      });
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!jobFormData.name) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!jobFormData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(jobFormData.email)) {
      newErrors.email = "Email address is invalid";
    }

    // Validate phone (optional for this example)
    if (!jobFormData.phone) {
      newErrors.phone = "Phone is required";
    }

    // Validate file upload (PDF only)
    if (!jobFormData.file) {
      newErrors.file = "Please upload a file";
    } else if (
      jobFormData.file &&
      jobFormData.file.type !== "application/pdf"
    ) {
      newErrors.file = "Only PDF files are allowed";
    }

    // Validate social media links
    if (!jobFormData.socialMedia.linkedIn) {
      newErrors.linkedIn = "LinkedIn is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process form submission
      console.log("Form data:", jobFormData);
      alert("Form submitted successfully!");
      router.push("/");
      // Reset the form or handle further actions here
    } else {
      alert("Please fill out the required fields");
    }
  };

  const { name, email, phone, coverLetter, socialMedia, file } = jobFormData;
  const { linkedIn, gitHub, twitter } = socialMedia;

  return (
    <form
      className="flex flex-col gap-3 bg-white p-6 rounded"
      onSubmit={handleSubmit}
    >
      <Input
        id="name"
        label="Name"
        value={name}
        onChange={handleOnChange}
        error={errors.name}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        value={email}
        onChange={handleOnChange}
        error={errors.email}
      />
      <Input
        id="phone"
        label="Phone"
        value={phone}
        onChange={handleOnChange}
        error={errors.phone}
      />
      <div>Social Media</div>
      <div className="pl-10">
        <Input
          id="linkedIn"
          label="LinkedIn"
          value={linkedIn}
          onChange={handleSocialOnChange}
          error={errors.linkedIn}
        />
        <Input
          id="twitter"
          label="Twitter"
          value={twitter}
          onChange={handleSocialOnChange}
          error={errors.twitter}
        />
        <Input
          id="gitHub"
          label="GitHub"
          value={gitHub}
          onChange={handleSocialOnChange}
          error={errors.gitHub}
        />
      </div>
      <Textarea
        id="coverLetter"
        label="Cover Letter"
        value={coverLetter}
        onChange={handleOnChange}
      />
      <Input
        id="file"
        type="file"
        label="File"
        onChange={handleFileOnChange}
        accept="application/pdf"
        error={errors.file}
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

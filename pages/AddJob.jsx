
import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { toast, ToastContainer } from "react-toastify";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobTitle: "",
    jobDescription: "",
    qualifications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://intern-house-backend-psi.vercel.app/addJob",
        {
          ...formData,
          salary: Number(formData.salary),
        }
      );

      toast.success("Job posted successfully!");
      setFormData({
        title: "",
        companyName: "",
        location: "",
        salary: "",
        jobTitle: "",
        jobDescription: "",
        qualifications: "",
      });
    } catch (error) {
      toast.error("Failed to post job");
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <ToastContainer />

      <div className="container mt-4">
        <h2 className="mb-4">Post a Job</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Job Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="e.g. Software Engineer"
              required
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Company Name:</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              placeholder="e.g. TechCorp"
              required
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location:</label>
            <input
              type="text"
              className="form-control"
              name="location"
              placeholder="e.g. Bengaluru, India / Remote"
              required
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Salary:</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              placeholder="e.g. 120000"
              min="1"
              required
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Type:</label>
            <select
              className="form-select"
              name="jobTitle"
              required
              value={formData.jobTitle}
              onChange={handleChange}
            >
              <option value="">Select job type</option>
              <option value="Full-time (On-site)">
                Full-time (On-site)
              </option>
              <option value="Part-time (On-site)">
                Part-time (On-site)
              </option>
              <option value="Full-time (Remote)">
                Full-time (Remote)
              </option>
              <option value="Part-time (Remote)">
                Part-time (Remote)
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Job Description:</label>
            <textarea
              className="form-control"
              name="jobDescription"
              rows="3"
              placeholder="Describe the role and responsibilities"
              required
              value={formData.jobDescription}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Qualifications:</label>
            <textarea
              className="form-control"
              name="qualifications"
              rows="3"
              placeholder="e.g. Bachelor's in CS, 2+ years experience"
              required
              value={formData.qualifications}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post Job
          </button>
        </form>
      </div>
    </>
  );
};

export default PostJob;
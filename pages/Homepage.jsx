import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://intern-house-backend-psi.vercel.app/jobs"
        );
        setJobData(res.data || []);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://intern-house-backend-psi.vercel.app/jobs/${id}`
      );

      if (response.status === 200 || response.status === 201) {
        setJobData((prev) => prev.filter((job) => job._id !== id));
        toast.success("Job deleted successfully");
      } else {
        toast.error("Failed to delete job");
      }
    } catch (error) {
      toast.error("Error deleting job");
      console.error(error);
    }
  };
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h2 className="mb-4">All Jobs</h2>

        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row g-2">
            {filteredJobs.length === 0 && (
              <p className="text-muted">No jobs found.</p>
            )}

            {filteredJobs.map((job) => (
              <div className="col-md-4" key={job._id}>
                <div className="card shadow-sm p-3 m-2">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{job.title}</h5>

                    <p className="mb-3">
                      <strong>Company name:</strong> {job.companyName}
                    </p>

                    <p className="mb-3">
                      <strong>Location:</strong> {job.location}
                    </p>

                    <p className="mb-3">
                      <strong>Job Type:</strong> {job.jobTitle}
                    </p>

                    <div className="mt-auto d-flex gap-4">
                      <Link
                        to={`/jobs/${job._id}`}
                        className="btn btn-primary w-50"
                      >
                        See Details
                      </Link>

                      <button
                        className="btn btn-danger w-50"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;

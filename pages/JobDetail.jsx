import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

const JobDetail = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(
          `https://intern-house-backend-psi.vercel.app/jobs/${id}`
        );
        setJobData(res.data);
      } catch (err) {
        setError("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const qualificationList =
  jobData?.qualifications
    ?.split(",")
    .map((q) => q.trim()) || [];
  return (
    <>
      <NavBar />

      <div className="container py-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && jobData && (
          <>
            
            <h1 className="mb-4 fw-bold">{jobData.title}</h1>

            
            <div className="card shadow-sm mb-4">
              <div className="card-body">

                <p className="mb-3">
                  <strong>Company Name:</strong> {jobData.companyName}
                </p>

                <p className="mb-3">
                  <strong>Location:</strong> {jobData.location}
                </p>

                <p className="mb-3">
                  <strong>Salary:</strong> {jobData.salary}
                </p>

                <p className="mb-3">
                  <strong>Job Type:</strong> {jobData.jobTitle}
                </p>

                <p className="mb-3">
                  <strong>Description:</strong> {jobData.jobDescription}
                </p>

                <div className="mb-2">
                  <strong>Qualifications:</strong>
                  <ol className="mt-2">
                    {qualificationList.length > 0 ? (
                      qualificationList.map((q, idx) => (
                        <li key={idx}>{q}</li>
                      ))
                    ) : (
                      <li>No specific qualifications mentioned.</li>
                    )}
                  </ol>
                </div>
              </div>
            </div>

          </>
        )}
      </div>
    </>
  );
};

export default JobDetail;
# Intern House – Job Portal Frontend

Intern House is a modern job portal frontend built with **React**, **Bootstrap**, and **Axios**.  
It allows users to browse job listings, view detailed job information, and enables employers to post new job openings.

This frontend is connected to a live backend API deployed on Vercel.

---

##  Features

- **View All Jobs**
  - Responsive job cards with company, location, and job type
  - Live search by job title

- **Job Details Page**
  - Dedicated page for each job
  - Displays company name, location, salary, job type, description, and qualifications

- **Post a Job (Employer Feature)**
  - Simple and clean job posting form
  - Uses HTML form validation (`required`, `min`)
  - Dropdown for predefined job types

- **Delete Job**
  - Delete job listings from the UI
  - Instant UI update with toast notifications

- **UI & UX**
  - Fully responsive (mobile, tablet, desktop)
  - Bootstrap-based layout
  - Toast notifications for actions (success/error)

---

##  Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Bootstrap 5
- **Routing**: React Router DOM
- **API Calls**: Axios
- **Notifications**: React Toastify
- **Backend**: Node.js + Express + MongoDB (deployed separately)

---

##  Backend API

The frontend consumes the following live backend:
[https://intern-house-backend-psi.vercel.app]
### API Endpoints Used
- `GET /jobs` – Fetch all jobs
- `GET /jobs/:id` – Get job by ID
- `POST /addJob` – Add a new job
- `DELETE /jobs/:id` – Delete a job

---

##  Installation & Setup

1. **Clone the repository**
```bash
git clone http://github.com/jishan1525/interHouse
cd <interHouse>
npm install
npm run dev
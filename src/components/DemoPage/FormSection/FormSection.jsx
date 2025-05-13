import React from 'react';

export default function FormSection() {
  return (
    <div className="container" style={{ maxWidth: 590 }}>
      <form className="bg-white p-4 p-md-5 rounded shadow-sm">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="fullname" className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              id="fullname"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input type="tel" id="phone" className="form-control" />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">
              City / Municipality Name *
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="role" className="form-label">
              Role or Position *
            </label>
            <input
              type="text"
              id="role"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="interest" className="form-label">
              Area of Interest *
            </label>
            <select id="interest" className="form-select" required>
              <option value="">Select an option</option>
              <option value="smart-services">Smart City Services</option>
              <option value="analytics">City Analytics</option>
              <option value="citizen-engagement">Citizen Engagement</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="datetime" className="form-label">
              Preferred Date and Time
            </label>
            <input
              type="datetime-local"
              id="datetime"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="notes" className="form-label">
              Additional Notes
            </label>
            <textarea
              id="notes"
              rows={3}
              className="form-control"
              placeholder="Anything else you would like to share?"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded-pill w-100 fw-bold"
          style={{ fontSize: 16, marginTop: 2 }}
        >
          Request Demo
        </button>
      </form>
    </div>
  );
}
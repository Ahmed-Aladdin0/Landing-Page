import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
export default function FormSection() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        city: '',
        role: '',
        interest: '',
        datetime: '',
        notes: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    console.log('Form Data:', formData);

    try {
         await emailjs.send(
            'service_a7ap5cr',      // Service ID
            'template_euuqhck',     // Template ID
            {
                name: formData.fullname,
                email: formData.email,
                phone: formData.phone || 'Not provided',
                city: formData.city,
                role: formData.role,
                interest: formData.interest,
                datetime: formData.datetime || 'Not specified',
                notes: formData.notes || 'None'
            },
            'FgJTOfKkNmhglLToX'       // Public Key
        );

        setSubmitStatus('success');
    } catch (error) {
        setSubmitStatus('error');
    }

    setIsSubmitting(false);

    setTimeout(() => {
        setFormData({
            fullname: '',
            email: '',
            phone: '',
            city: '',
            role: '',
            interest: '',
            datetime: '',
            notes: ''
        });
        setSubmitStatus('');
    }, 3000);
};

    function validateUsername(username) {
  return username.trim().length >= 3;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validateAge(age) {
  return age >= 18 && age <= 100;
}





    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(18, 153, 144, 0.3)",
            transition: {
                duration: 0.3,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const inputVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="container py-5"
            style={{ maxWidth: 590 }}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.div
                className="bg-white p-4 p-md-5 rounded-3 shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                <form onSubmit={handleSubmit}>
                    <motion.div className="row">
                        <motion.div className="col-md-6 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="fullname" className="form-label fw-semibold">
                                Full Name *
                            </motion.label>
                            <motion.input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="form-control"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                                required
                            />
                        </motion.div>
                        <motion.div className="col-md-6 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="email" className="form-label fw-semibold">
                                Email Address *
                            </motion.label>
                            <motion.input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                                required
                            />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div className="row">
                        <motion.div className="col-md-6 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="phone" className="form-label fw-semibold">
                                Phone Number
                            </motion.label>
                            <motion.input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                            />
                        </motion.div>
                        <motion.div className="col-md-6 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="city" className="form-label fw-semibold">
                                City / Municipality Name *
                            </motion.label>
                            <motion.input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="form-control"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                                required
                            />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div className="row">
                        <motion.div className="col-md-6 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="role" className="form-label fw-semibold">
                                Role or Position *
                            </motion.label>
                            <motion.input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="form-control"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                                required
                            />
                        </motion.div>
                        <motion.div className="col-md-6 mb-3" variants={inputVariants}>
                            <label htmlFor="interest" className="form-label fw-semibold">
                                Area of Interest *
                            </label>
                            <select
                                id="interest"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                className="form-select form-select-lg"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="smart-services">Smart City Services</option>
                                <option value="analytics">City Analytics</option>
                                <option value="citizen-engagement">Citizen Engagement</option>
                                <option value="other">Other</option>
                            </select>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div className="row">
                        <motion.div className="col-12 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="datetime" className="form-label fw-semibold">
                                Preferred Date and Time
                            </motion.label>
                            <motion.input
                                type="datetime-local"
                                id="datetime"
                                name="datetime"
                                value={formData.datetime}
                                onChange={handleChange}
                                className="form-control"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                            />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div className="row">
                        <motion.div className="col-12 mb-3" variants={inputVariants}>
                            <motion.label htmlFor="notes" className="form-label fw-semibold">
                                Additional Notes
                            </motion.label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={3}
                                className="form-control"
                                placeholder="Anything else you would like to share?"
                                style={{ 
                                    borderRadius: "10px",
                                    border: "2px solid #e9ecef",
                                    transition: "all 0.3s ease"
                                }}
                                onFocus={(e) => e.target.style.borderColor = "#129990"}
                                onBlur={(e) => e.target.style.borderColor = "#e9ecef"}
                            />
                        </motion.div>
                    </motion.div>

                    {/*  Success message */}
                    {submitStatus === 'success' && (
                        <motion.div
                            className="alert alert-success"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ 
                                borderRadius: "10px",
                                border: "2px solid #129990",
                                backgroundColor: "rgba(18, 153, 144, 0.1)"
                            }}
                        >
                            <strong>Success!</strong> Your demo request has been prepared. Check your email application to send it!
                        </motion.div>
                    )}

                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        type="submit"
                        disabled={isSubmitting}
                        className="btn rounded-pill w-100 fw-bold btn-lg"
                        style={{
                            fontSize: 16,
                            marginTop: 2,
                            background: isSubmitting 
                                ? "linear-gradient(45deg, #999, #999)" 
                                : "linear-gradient(45deg, #129990, #0f7a73)",
                            color: "#fff",
                            opacity: isSubmitting ? 0.7 : 1,
                            border: "none",
                            boxShadow: isSubmitting ? "none" : "0 4px 15px rgba(18, 153, 144, 0.3)"
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Preparing Email...
                            </>
                        ) : (
                            'Request Demo'
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </motion.div>
    );
}
import React from "react";
import DemoPagePic from "../../../assets/DemoPagePic.jpg";
import styles from "./HeroSection.module.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";
export default function HeroSection() {
	const navigate=useNavigate();
	return (
		<>
			<div className={`${styles["hero-container"]} container d-flex align-items-center justify-content-center`}>
				<div className="row h-75">
					<div className="col-lg-6 pe-4 d-flex flex-column justify-content-center">
						<h1 className="fw-bold" style={{ fontSize: "42px" }}>
							Schedule Your <br /> Personalized Demo of <br /> Citio
						</h1>
						<p className="lead " style={{ fontWeight: 400 }}>
							See how Citio transforms city operations and citizen <br /> engangement.
						</p>
            <p style={{ fontSize: "14px" }}><FontAwesomeIcon icon={faClock}  className="me-2"/> Free - No Obligation - 30-Minute Session</p>
					</div>
					<div className="col-lg-6 d-flex align-items-center justify-content-center">
						<div className="shadow h-100 w-100 bg-white rounded">
							<img
								src={DemoPagePic}
								className="img-fluid rounded"
								alt="Smart city management"
								style={{ objectFit: "cover", height: "100%" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

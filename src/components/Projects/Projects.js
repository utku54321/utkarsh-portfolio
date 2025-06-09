import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images for the 4 completed sections
import reportImg from "../../Assets/Projects/report.png.png";
import pptImg from "../../Assets/Projects/ppt.png.png";
import excelImg from "../../Assets/Projects/excel.png.png";
import powerbiImg from "../../Assets/Projects/POWER_BI.png";

// Placeholder images for future sections
import pythonImg from "../../Assets/Projects/python.png";
import rImg from "../../Assets/Projects/Rcode.png";
import sipImg from "../../Assets/Projects/SIP.png";
import cipImg from "../../Assets/Projects/CIP.png";
import researchImg from "../../Assets/Projects/paper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects/resources I’ve uploaded recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Report Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reportImg}
              title="Report Files"
              description="Access my detailed reports and case studies."
              files={[
                { name: "Business Plan BECO", path: "/projects/report_files/business plan BECO.docx" },
                { name: "Marketing Rolls Royce", path: "/projects/report_files/marketing rolls royce.docx" },
                { name: "BluSmart Business Plan", path: "/projects/report_files/BluSmart Business Plan.docx" },
                { name: "RAC Report Car 24", path: "/projects/report_files/RAC Report Car 24.docx" },
                { name: "LT 9 DeHaat CAPSTONE PROJECT", path: "/projects/report_files/LT 9 DeHaat CAPSTONE PROJECT.pdf" },
                { name: "ML Comprehensive Analysis", path: "/projects/report_files/ML comprehensive business analysis report.pdf" },
                { name: "Recruitment and Training Report", path: "/projects/report_files/Recruitment and Training & Development Practices at Cars24.pdf" },
                { name: "Operation Management Report", path: "/projects/report_files/Operation Management Report Lean Manufacturing.docx" },
                { name: "Marketing Plan for Khadim", path: "/projects/report_files/Marketing_Plan_for_Khadim_Formatted_v2.docx" },
                { name: "Swiggy Team Report", path: "/projects/report_files/swiggy team report.pdf" },
                { name: "Data Analytics using Python", path: "/projects/report_files/Data Analytics using Python.docx" },
                { name: "BRM Group Research Report", path: "/projects/report_files/BRM GROUP RESEARCH REPORT.pdf" },
                { name: "Article on Quality Education", path: "/projects/report_files/AN ARTICLE ON QUALITY EDUCATION[1].docx" },
                { name: "A Report on Diversity", path: "/projects/report_files/A REPORT ON DIVERSITY.docx" },
              ]}
            />
          </Col>

          {/* PPT Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pptImg}
              title="PPT Files"
              description="Explore presentations on key topics."
              files={[
                { name: "Swiggy Health Bites", path: "/projects/ppt_files/presenatation amm swiggy health bites.pptx" },
                { name: "Driving Luxury - Rolls-Royce", path: "/projects/ppt_files/Driving Luxury A Deep Dive into Rolls-Royce’s STP Framework.pptx" },
                { name: "Oracle Product Insights", path: "/projects/ppt_files/Oracle_Product_Manager_Insights[1].pptx" },
                { name: "Nexora Solutions HCM", path: "/projects/ppt_files/Nexora Solutions, HCM.pptx" },
                { name: "Field Project PPT - Recruitment & Training", path: "/projects/ppt_files/FIELD PROJECT PPT Recruitment and Training & Development Practices at Cars24.pptx" },
                { name: "Python PPT", path: "/projects/ppt_files/python ppt.pptx" },
                { name: "Consumer Decision-Making Analysis", path: "/projects/ppt_files/Consumer Decision-Making Analysis.pptx" },
                { name: "CARS24 RAC", path: "/projects/ppt_files/CARS24 RAC.pptx" },
                { name: "BRM PPT", path: "/projects/ppt_files/BRM PPT.pptx" },
                { name: "Article on Quality Education", path: "/projects/ppt_files/AN ARTICLE ON QUALITY EDUCATION.pptx" },
                { name: "FSA PPT ON MOTILAL", path: "/projects/ppt_files/FSA PPT ON MOTILAL.pdf" },
                { name: "UTKARSH ANAND 24PGDM146", path: "/projects/ppt_files/UTKARSH ANAND 24PGDM146.pptx" },
                { name: "Global Shipping Challenges", path: "/projects/ppt_files/Operational-Challenges-in-the-Global-Shipping-Industry-A-Case-Study-of-Maersk.pptx" },
                { name: "Service Costs in Transport", path: "/projects/ppt_files/Comparative-Analysis-of-Service-Costs-in-the-Telecom-Sector.pptx" },
              ]}
            />
          </Col>

          {/* Excel Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excelImg}
              title="Financial Data"
              description="Excel sheets with financial data insights."
              files={[
                { name: "CF WAAC COD ETC", path: "/projects/excel_files/CF WAAC COD ETC.xlsx" },
                { name: "FSA MOTILAL", path: "/projects/excel_files/FSA MOTILAL.xlsx" },
                { name: "FSA THREE TIER COMPANY COMPARISION", path: "/projects/excel_files/FSA THREE TIER COMPANY COMPARISION.xlsx" },
                { name: "FSA INFOSYS", path: "/projects/excel_files/FSA INFOSYS.xlsx" },
                { name: "CF ASSIGNMENT", path: "/projects/excel_files/CF ASSIGNMENT.xlsx" },
                { name: "JSW DATA WITH DUO POINT", path: "/projects/excel_files/JSW DATA WITH DUO POINT.xlsx" },
                { name: "FSA SCENERIO ANALYSIS", path: "/projects/excel_files/FSA SCENERIO ANALYSIS.xlsx" },
                { name: "FSA FMCG COMPANY", path: "/projects/excel_files/FSA  FMCG COMPANY.xlsx" },
                { name: "TATA INVESTMENT DATA", path: "/projects/excel_files/TATA INVESTMENT DATA.xlsx" },
                { name: "FSA 1 ADANI", path: "/projects/excel_files/FSA 1 ADANI.xlsx" },
                { name: "FINAL Reliance Industries Limited", path: "/projects/excel_files/FINAL Reliance Industries Limited.xlsx" },
                { name: "FSA LEARNING KPI's", path: "/projects/excel_files/FSA_LEARNING KPI's.xlsx" },
                { name: "Dashboard of Financial Statement", path: "/projects/excel_files/dashboard of financial statement.xlsx" },
                { name: "SADM Dashboard", path: "/projects/excel_files/sadm dashboard.xlsx" },
                { name: "Excel Dashboard 2", path: "/projects/excel_files/EXCEL DASHBOARD 2.xlsx" },
                { name: "Excel Dashboard", path: "/projects/excel_files/EXCEL DASHBOARD.xlsx" },
                { name: "Sales Report Dashboard", path: "/projects/excel_files/sales report dashboard.xlsx" },
                { name: "Tata Elxsi Financial Data", path: "/projects/excel_files/tata elxsi financial data.xlsx" },
                { name: "LTI Mindtree", path: "/projects/excel_files/LTI Mindtree.xlsx" },
                { name: "ITC Financial Data", path: "/projects/excel_files/ITC FINANCIAL DATA.xlsx" },
                { name: "Nestle Dashboard Financial Data", path: "/projects/excel_files/nestle dashboard financial data.xlsx" },
              ]}
            />
          </Col>

          {/* Power BI Files */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerbiImg}
              title="Power BI Files"
              description="Interactive Power BI dashboards and reports."
              files={[
                { name: "1st Dashboard", path: "/projects/powerBI_file/1st dashboard.pbix" },
                { name: "2nd Dashboard", path: "/projects/powerBI_file/2nd dashboard.pbix" },
                { name: "3rd Dashboard", path: "/projects/powerBI_file/3RD DASHBOARD.pbix" },
                { name: "4th Dashboard", path: "/projects/powerBI_file/4th dashboard.pbix" },
                { name: "5th Dashboard", path: "/projects/powerBI_file/5th dashboard.pbix" },
                { name: "6th Dashboard", path: "/projects/powerBI_file/6th dashboard.pbix" },
              ]}
            />
          </Col>

          {/* Placeholder sections for future file uploads */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonImg}
              title="Python Files"
              description="Coming soon!"
              files={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rImg}
              title="R Code"
              description="Coming soon!"
              files={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sipImg}
              title="SIP"
              description="Coming soon!"
              files={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cipImg}
              title="CIP"
              description="Coming soon!"
              files={[]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={researchImg}
              title="Research Paper"
              description="Coming soon!"
              files={[]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


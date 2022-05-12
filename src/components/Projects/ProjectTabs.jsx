import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProjectItem from "./ProjectItem";
import Htmlapi from "./htmlapi";
import ReactApi from "./reactapi";
import PythonApi from "./pythonapi";
import "./project.css";
import { GrReactjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiPython,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const ProjectTabs = () => {
  const [html] = useState(Htmlapi);
  const [rea] = useState(ReactApi);
  const [pyt] = useState(PythonApi);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="container" id="project" data-aos="fade-up">
        <h1>Projects</h1>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 5,
                borderTop: 5,
                borderColor: "#9615DB",
                background: "#d3d3d3",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChange}
                variant="fullWidth"
                aria-label="lab API tabs example"
              >
                <Tab label="ReactJs" value="1" />
                <Tab label="HTML/CSS" value="2" />
                <Tab label="Python" value="3" />
                <Tab label="MERN Stack" value="4" />
              </TabList>
            </Box>
            <TabPanel className="tabsss" value="1">
              <div className="languages">
                <GrReactjs />
                <SiCss3 />
              </div>
              <div className="projects">
                <ProjectItem project={rea} />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="languages">
                <SiHtml5 />
                <SiCss3 />
                <SiBootstrap />
              </div>
              <div className="projects">
                <ProjectItem project={html} />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="languages">
                <SiPython />
              </div>
              <div className="projects">
                <ProjectItem project={pyt} />
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="languages">
                <SiMongodb />
                <SiExpress />
                <GrReactjs />
                <FaNode />
              </div>
              <h1>Coming Soon!</h1>
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </>
  );
};

export default ProjectTabs;

/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useState } from "react";
import { Link } from "react-router-dom";

import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "Request", accessor: "Request", align: "center" },
      { Header: "Date", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "view", accessor: "view", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        Request: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Vacation Request
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="span"
            variant="caption"
            fontWeight="medium"
            color="success"
            sx={{ cursor: "pointer" }}
          >
            validate
          </MDTypography>
        ),
        view: (
          <MDTypography
            component={Link}
            to="/billing" // Replace with your actual route
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        Request: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Salary Raise Request
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="span"
            variant="caption"
            fontWeight="medium"
            color="error"
            sx={{ cursor: "pointer" }}
          >
            reject
          </MDTypography>
        ),
        view: (
          <MDTypography
            component={Link}
            to="/billing" // Replace with your actual route
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Executive" description="Projects" />,
        Request: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Vacation Request
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="span"
            variant="caption"
            fontWeight="medium"
            color="error"
            sx={{ cursor: "pointer" }}
          >
            reject
          </MDTypography>
        ),
        view: (
          <MDTypography
            component={Link}
            to="/billing" // Replace with your actual route
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        Request: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Vacation Request
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08 00:00:00
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            pending
          </MDTypography>
        ),
        view: (
          <MDTypography
            component={Link}
            to="/billing" // Replace with your actual route
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        Request: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Vacation Request
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="span"
            variant="caption"
            fontWeight="medium"
            color="success"
            sx={{ cursor: "pointer" }}
          >
            accept
          </MDTypography>
        ),
        view: (
          <MDTypography
            component={Link}
            to="/billing" // Replace with your actual route
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            View
          </MDTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        Request: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Salary Raise
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            pending
          </MDTypography>
        ),
        view: (
          <MDTypography
            component={Link}
            to="/billing" // Replace with your actual route
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            View
          </MDTypography>
        ),
      },
    ],
  };
}

function RequestsDropdown() {
  const requestsData = data().rows;

  // Group by request type
  const groupedRequests = requestsData.reduce((acc, row) => {
    const type = row.Request.props.defaultValue || row.Request.props.children;
    if (!acc[type]) acc[type] = [];
    acc[type].push(row.author);
    return acc;
  }, {});

  return (
    <MDBox>
      {Object.entries(groupedRequests).map(([requestType, authors]) => (
        <FormControl key={requestType} sx={{ m: 2, minWidth: 300 }}>
          <InputLabel>{requestType}</InputLabel>
          <Select defaultValue="" label={requestType}>
            {authors.map((author, index) => (
              <MenuItem key={index} value={index}>
                {author}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </MDBox>
  );
}

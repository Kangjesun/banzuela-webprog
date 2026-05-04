import React from "react";
import { useLocation } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Gauge } from "@mui/x-charts/Gauge";
import { Typography, Card, CardContent } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

/* ICONS */
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";


const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150, editable: true },
  { field: "lastName", headerName: "Last Name", width: 150, editable: true },
  { field: "age", headerName: "Age", width: 110, type: "number", editable: true },
  {
    field: "fullName",
    headerName: "Full Name",
    sortable: false,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
    width: 180,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 158 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function DashboardPage() {
  const location = useLocation();

  const valid = rows.filter((r) => r.age != null);
  const avgAge =
    valid.reduce((a, b) => a + b.age, 0) / valid.length;

  return (
    <Box sx={{ p: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>

      <Typography variant="h4" fontWeight="bold" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      {/*  KPI SECTION */}
      <Box sx={{ mb: 7 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <PeopleIcon color="primary" />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Users
                  </Typography>
                  <Typography variant="h4">{rows.length}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <PersonAddIcon color="success" />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Active Records
                  </Typography>
                  <Typography variant="h4">{valid.length}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <TrendingUpIcon color="warning" />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Average Age
                  </Typography>
                  <Typography variant="h4">
                    {avgAge.toFixed(1)}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <AutoAwesomeIcon sx={{ color: "#d81b60" }} />
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Vogue Influence Score
                  </Typography>
                  <Typography variant="h4">
                    92%
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

        </Stack>
      </Box>

      {/*  ANALYTICS  */}
      <Box sx={{ mb: 7 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Analytics
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

          <Card sx={chartCard}>
            <BarChart
              height={280}
              series={[
                { data: [35, 44, 24, 34], label: "Users" },
                { data: [20, 30, 40, 50], label: "Growth" },
              ]}
              xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
            />
          </Card>

          <Card sx={chartCard}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 40, label: "Fashion Trends" },
                    { id: 1, value: 35, label: "Styling Tips" },
                    { id: 2, value: 25, label: "Luxury Editorials" },
                  ],
                },
              ]}
              width={300}
              height={280}
            />
          </Card>

        </Stack>
      </Box>

      {/*  TABLE */}
      <Box sx={{ mb: 7 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Users Overview
        </Typography>

        <Card sx={tableCard}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5 },
              },
            }}
          />
        </Card>
      </Box>

      {/*  MAP */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Location Map
        </Typography>

        <Box sx={{ height: 500, width: "100%" }}>
          <MapContainer
            center={[14.604253, 120.994314]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[14.604253, 120.994314]}>
              <Popup>
                National University - Manila <br />
                551 F Jhocson St, Sampaloc, Manila
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>

    </Box>
  );
}

/*  STYLES */
const cardStyle = {
  flex: 1,
  borderRadius: 3,
  boxShadow: 3,
};

const chartCard = {
  flex: 1,
  p: 2,
  borderRadius: 3,
  boxShadow: 3,
};

const tableCard = {
  height: 420,
  p: 2,
  borderRadius: 3,
  boxShadow: 3,
};

export default DashboardPage;
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from "@mui/x-data-grid";

/* ================= ICONS ================= */
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";

/* ================= BLOG ANALYTICS DATA ================= */

const reportRows = [
  { id: 1, month: "Jan", reads: 1200, engagement: 240, category: "Styling Tips" },
  { id: 2, month: "Feb", reads: 1800, engagement: 310, category: "Fashion Trends" },
  { id: 3, month: "Mar", reads: 1500, engagement: 280, category: "Editorial Picks" },
  { id: 4, month: "Apr", reads: 2200, engagement: 400, category: "Luxury Insights" },
  { id: 5, month: "May", reads: 2600, engagement: 450, category: "Seasonal Trends" },
];

const columns = [
  { field: "month", headerName: "Month", width: 120 },
  { field: "reads", headerName: "Article Reads", width: 140 },
  { field: "engagement", headerName: "Engagement", width: 140 },
  { field: "category", headerName: "Top Category", width: 180 },
];

function ReportsPage() {
  return (
    <Box sx={{ p: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>

      {/* ================= HEADER ================= */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 5 }}>
        Reports
      </Typography>

      {/* ================= KPI CARDS ================= */}
      <Box sx={{ mb: 7 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

          {/* TOTAL READS */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <MenuBookIcon color="primary" />
                <Box>
                  <Typography variant="subtitle2">
                    Total Article Reads
                  </Typography>
                  <Typography variant="h4">9.3K</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* ENGAGEMENT */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <TrendingUpIcon color="success" />
                <Box>
                  <Typography variant="subtitle2">
                    Reader Engagement
                  </Typography>
                  <Typography variant="h4">+68%</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* CATEGORY */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <AutoAwesomeIcon sx={{ color: "#d81b60" }} />
                <Box>
                  <Typography variant="subtitle2">
                    Top Content Category
                  </Typography>
                  <Typography variant="h4">Trends</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* BRAND KPI */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <FavoriteIcon sx={{ color: "#e91e63" }} />
                <Box>
                  <Typography variant="subtitle2">
                    Vogue Audience Love
                  </Typography>
                  <Typography variant="h4">92%</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

        </Stack>
      </Box>

      {/* ================= BLOG ANALYTICS ================= */}
      <Typography variant="h6" sx={{ mb: 3 }}>
        Editorial Performance Overview
      </Typography>

      <Box sx={{ mb: 7 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

          <Card sx={chartCard}>
            <Typography sx={{ mb: 2 }} fontWeight="bold">
              Article Read Growth (Monthly)
            </Typography>

            <LineChart
              height={280}
              series={[
                {
                  data: [1200, 1800, 1500, 2200, 2600],
                  label: "Reads",
                },
              ]}
              xAxis={[
                {
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                  scaleType: "band",
                },
              ]}
            />
          </Card>

          <Card sx={chartCard}>
            <Typography sx={{ mb: 2 }} fontWeight="bold">
              Engagement per Month
            </Typography>

            <BarChart
              height={280}
              series={[
                { data: [240, 310, 280, 400, 450], label: "Engagement" },
              ]}
              xAxis={[
                {
                  data: ["Jan", "Feb", "Mar", "Apr", "May"],
                  scaleType: "band",
                },
              ]}
            />
          </Card>

        </Stack>
      </Box>

      {/* ================= PIE CHART ================= */}
      <Box sx={{ mb: 7 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Reader Interest Breakdown
        </Typography>

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
            width={400}
            height={300}
          />
        </Card>
      </Box>

      {/* ================= TABLE ================= */}
      <Typography variant="h6" sx={{ mb: 3 }}>
        Blog Content Performance Table
      </Typography>

      <Card sx={tableCard}>
        <DataGrid
          rows={reportRows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          disableRowSelectionOnClick
        />
      </Card>

    </Box>
  );
}

/* ================= STYLES ================= */
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

export default ReportsPage;
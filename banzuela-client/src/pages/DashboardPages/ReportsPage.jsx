import React, { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";

import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { DataGrid } from "@mui/x-data-grid";

/* ICON */
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";


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
  const printRef = useRef(null);

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;

    const win = window.open("", "_blank", "width=1200,height=900");
    if (!win) return;

    const styles = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((el) => el.outerHTML)
      .join("");

    win.document.write(`
      <html>
      <head>
        <title>Reports</title>
        ${styles}
        <style>
          body { font-family: Arial; padding: 20px; }
          .MuiCard-root { box-shadow: none !important; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        ${content.outerHTML}
      </body>
      </html>
    `);

    win.document.close();
    win.focus();
    win.print();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>

      {/*HEADER */}
      <Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  sx={{ mb: 5 }}
  flexWrap="wrap"
>
  <Box>
    <Typography variant="h4" fontWeight="bold">
      Reports
    </Typography>
    <Typography variant="body1" color="text.secondary">
      Analytics dashboard with exportable report view.
    </Typography>
  </Box>

 <Stack
  direction="row"
  spacing={1.5}
  sx={{ ml: "auto" }}
>
  <Button variant="contained">Generate</Button>
  <Button variant="outlined" onClick={handlePrint}>Export</Button>
  <Button variant="outlined">Filter</Button>
</Stack>
</Stack>

      <Box ref={printRef}>

        {/*KPI CARDS*/}
        <Box sx={{ mb: 7 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

            <Card sx={cardStyle}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <MenuBookIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2">Total Reads</Typography>
                    <Typography variant="h4">9.3K</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={cardStyle}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <TrendingUpIcon color="success" />
                  <Box>
                    <Typography variant="subtitle2">Engagement</Typography>
                    <Typography variant="h4">+68%</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={cardStyle}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <AutoAwesomeIcon sx={{ color: "#d81b60" }} />
                  <Box>
                    <Typography variant="subtitle2">Top Category</Typography>
                    <Typography variant="h4">Trends</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            <Card sx={cardStyle}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <FavoriteIcon sx={{ color: "#e91e63" }} />
                  <Box>
                    <Typography variant="subtitle2">Audience Love</Typography>
                    <Typography variant="h4">92%</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

          </Stack>
        </Box>

        {/*CHARTS*/}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 7 }}>

          <Card sx={chartCard}>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Monthly Reads
            </Typography>

            <LineChart
              height={280}
              series={[{ data: [1200, 1800, 1500, 2200, 2600], label: "Reads" }]}
              xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr", "May"], scaleType: "band" }]}
            />
          </Card>

          <Card sx={chartCard}>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Engagement
            </Typography>

            <BarChart
              height={280}
              series={[{ data: [240, 310, 280, 400, 450], label: "Engagement" }]}
              xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr", "May"], scaleType: "band" }]}
            />
          </Card>

        </Stack>

        {/*PIE*/}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 7 }}>

          <Card sx={chartCard}>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Reader Breakdown
            </Typography>

            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 40, label: "Fashion" },
                    { id: 1, value: 35, label: "Tips" },
                    { id: 2, value: 25, label: "Luxury" },
                  ],
                },
              ]}
              width={350}
              height={250}
            />
          </Card>

          <Card sx={chartCard}>
            <Typography fontWeight="bold" sx={{ mb: 2 }}>
              Completion Rate
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Gauge width={180} height={180} value={78} />
            </Box>
          </Card>

        </Stack>

        {/*TABLE*/}
        <Typography variant="h6" sx={{ mb: 3 }}>
          Blog Performance Table
        </Typography>

        <Card sx={tableCard}>
          <DataGrid
            rows={reportRows}
            columns={columns}
            pageSizeOptions={[5]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            disableRowSelectionOnClick
          />
        </Card>

      </Box>
    </Box>
  );
}

/* STYLES */
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
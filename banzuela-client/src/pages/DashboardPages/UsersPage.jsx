import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";

import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const usersRows = [
  { id: 1, firstName: "Jon", lastName: "Snow", age: 14 },
  { id: 2, firstName: "Cersei", lastName: "Lannister", age: 31 },
  { id: 3, firstName: "Jaime", lastName: "Lannister", age: 31 },
  { id: 4, firstName: "Arya", lastName: "Stark", age: 11 },
  { id: 5, firstName: "Daenerys", lastName: "Targaryen", age: 25 },
  { id: 6, firstName: "Melisandre", lastName: "", age: 158 },
  { id: 7, firstName: "Ferrara", lastName: "Clifford", age: 44 },
  { id: 8, firstName: "Rossini", lastName: "Frances", age: 36 },
  { id: 9, firstName: "Harvey", lastName: "Roxie", age: 65 },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "age", headerName: "Age", width: 120, type: "number" },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 200,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

function UsersPage() {
  const activeUsers = usersRows.filter((u) => u.age != null).length;

  return (
    <Box sx={{ p: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Users
      </Typography>


      {/* SUMMARY CARDS */}
      <Box sx={{ mb: 4 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <GroupIcon color="primary" />
                <Box>
                  <Typography>Total Users</Typography>
                  <Typography variant="h4">
                    {usersRows.length}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <VisibilityIcon color="success" />
                <Box>
                  <Typography>Active Readers</Typography>
                  <Typography variant="h4">
                    {activeUsers}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <TrendingUpIcon sx={{ color: "#d81b60" }} />
                <Box>
                  <Typography>Audience Growth</Typography>
                  <Typography variant="h4">+32%</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

        </Stack>
      </Box>

      {/* DATA GRID */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Reader Directory
      </Typography>

      <Card sx={tableCard}>
        <DataGrid
          rows={usersRows}
          columns={columns}
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
        />
      </Card>

    </Box>
  );
}

/* STYLES  */
const cardStyle = {
  flex: 1,
  borderRadius: 3,
  boxShadow: 3,
};

const tableCard = {
  height: 420,
  p: 2,
  borderRadius: 3,
  boxShadow: 3,
};

export default UsersPage;

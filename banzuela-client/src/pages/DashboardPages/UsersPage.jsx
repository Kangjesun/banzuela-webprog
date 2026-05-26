import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Chip,
  Card,
  CardContent,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BlockIcon from "@mui/icons-material/Block";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import {
  fetchUsers,
  createUser,
  updateUser,
} from "../../services/userService";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const cardStyle = {
  flex: 1,
  borderRadius: 3,
  boxShadow: 3,
};

const UsersPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate(); 

  // SEARCH + FILTERS
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    address: "",
    isActive: true,
    type: "viewer",
  });

  // LOAD USERS
  const loadUsers = async () => {
    try {
      setLoading(true);

      const { data } = await fetchUsers();

      setUsers(Array.isArray(data?.users) ? data.users : []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    navigate("/auth/signin");
    return;
  }

  const user = JSON.parse(storedUser);

  if (!user) {
    navigate("/auth/signin");
    return;
  }

  // viewers cannot access at all
  if (user.type === "viewer") {
    navigate("/auth/signin");
    return;
  }

  // editors cannot access UsersPage, redirect to articles
  if (user.type === "editor") {
    navigate("/dashboard/articles");
    return;
  }

  // only admin can stay
  if (user.type === "admin") {
    loadUsers();
  }
}, [navigate]);

 
  const handleOpen = () => {
    setIsEditing(false);

    setNewUser({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      contactNumber: "",
      email: "",
      username: "",
      password: "",
      address: "",
      isActive: true,
      type: "viewer",
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditUserId(null);
  };

  // EDIT USER
  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user._id === id);

    if (userToEdit) {
      setNewUser({
        ...userToEdit,
        password: "",
      });

      setEditUserId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  // SAVE USER
  const handleSaveUser = async () => {
  try {
    if (!isEditing && !newUser.password) {
      alert("Password is required");
      return;
    }

    if (isEditing) {
      const updatedUser = { ...newUser };

      if (!updatedUser.password) {
        delete updatedUser.password;
      }

      await updateUser(editUserId, updatedUser);
    } else {
      await createUser(newUser);
    }

    await loadUsers();
    handleClose();
  } catch (error) {
    console.error("Error saving user:", error);
  }
};


  const handleToggleActive = async (id, isActive) => {
    try {
      await updateUser(id, {
        isActive: !isActive,
      });

      await loadUsers();
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  // FILTER USERS
  const filteredUsers = (users || []).filter((user) => {
    const matchesSearch =
      `${user.firstName || ""} ${user.lastName || ""}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (user.email || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (user.username || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole = roleFilter
      ? user.type === roleFilter
      : true;

    const matchesGender = genderFilter
      ? user.gender?.toLowerCase() === genderFilter
      : true;

    const matchesStatus =
      statusFilter === ""
        ? true
        : statusFilter === "active"
        ? user.isActive === true
        : user.isActive === false;

    return (
      matchesSearch &&
      matchesRole &&
      matchesGender &&
      matchesStatus
    );
  });

  // KPI VALUES
  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.isActive
  ).length;

  const inactiveUsers = users.filter(
    (user) => !user.isActive
  ).length;

  const adminUsers = users.filter(
    (user) => user.type === "admin"
  ).length;

  // DATAGRID COLUMNS
  const columns1 = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,

      valueGetter: (value, row) =>
        `${row?.firstName || ""} ${row?.lastName || ""}`,
    },

    {
      field: "age",
      headerName: "Age",
      flex: 1,
    },

    {
      field: "gender",
      headerName: "Gender",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },

    {
      field: "contactNumber",
      headerName: "Contact",
      flex: 1,
    },

    {
      field: "username",
      headerName: "Username",
      flex: 1,
    },

    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },

    // STATUS COLUMN
    {
      field: "status",
      headerName: "Status",
      flex: 1,

      renderCell: (params) => (
        <Chip
          label={
            params.row.isActive
              ? "Active"
              : "Inactive"
          }
          color={
            params.row.isActive
              ? "success"
              : "default"
          }
          variant={
            params.row.isActive
              ? "filled"
              : "outlined"
          }
          size="small"
        />
      ),
    },

    // ACTIONS
    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,

      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              handleEdit(params.row._id)
            }
          >
            Edit
          </Button>

          <Button
            variant="contained"
            color={
              params.row.isActive
                ? "error"
                : "success"
            }
            size="small"
            onClick={() =>
              handleToggleActive(
                params.row._id,
                params.row.isActive
              )
            }
          >
            {params.row.isActive
              ? "Disable"
              : "Activate"}
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <>
      {/* HEADER */}
      <Stack
        direction="row"
        sx={{
          marginBottom: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
        >
          Users
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleOpen}
          sx={{
            position: "fixed",
            right: "20px",
            top: "100px",
            zIndex: 1000,
          }}
        >
          Add User
        </Button>
      </Stack>

      {/* KPI CARDS */}
      <Box sx={{ mb: 4 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
        >
          {/* TOTAL USERS */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <GroupsIcon color="primary" />

                <Box>
                  <Typography variant="subtitle2">
                    Total Users
                  </Typography>

                  <Typography variant="h4">
                    {totalUsers}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* ACTIVE USERS */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <CheckCircleIcon color="success" />

                <Box>
                  <Typography variant="subtitle2">
                    Active Users
                  </Typography>

                  <Typography variant="h4">
                    {activeUsers}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* INACTIVE USERS */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <BlockIcon color="error" />

                <Box>
                  <Typography variant="subtitle2">
                    Inactive Users
                  </Typography>

                  <Typography variant="h4">
                    {inactiveUsers}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* ADMIN USERS */}
          <Card sx={cardStyle}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <AdminPanelSettingsIcon
                  sx={{ color: "#7b1fa2" }}
                />

                <Box>
                  <Typography variant="subtitle2">
                    Admin Users
                  </Typography>

                  <Typography variant="h4">
                    {adminUsers}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      {/* SEARCH + FILTERS */}
      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Search users"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          fullWidth
        />

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
        >
          {/* ROLE FILTER */}
          <TextField
            select
            label="Role"
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
            fullWidth
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="admin">
              Admin
            </MenuItem>

            <MenuItem value="editor">
              Editor
            </MenuItem>

            <MenuItem value="viewer">
              Viewer
            </MenuItem>
          </TextField>

          {/* GENDER FILTER */}
          <TextField
            select
            label="Gender"
            value={genderFilter}
            onChange={(e) =>
              setGenderFilter(e.target.value)
            }
            fullWidth
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="male">
              Male
            </MenuItem>

            <MenuItem value="female">
              Female
            </MenuItem>
          </TextField>

          {/* STATUS FILTER */}
          <TextField
            select
            label="Status"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            fullWidth
          >
            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="active">
              Active
            </MenuItem>

            <MenuItem value="inactive">
              Inactive
            </MenuItem>
          </TextField>
        </Stack>
      </Stack>

      {/* MODAL */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyle}>
          <Typography
            variant="h4"
            component="h2"
          >
            {isEditing
              ? "Edit User"
              : "Add User"}
          </Typography>

          <Stack
            direction="column"
            spacing={3}
            sx={{ mt: 2 }}
          >
            <FormControl
              fullWidth
              variant="standard"
            >
              {/* FIRST NAME */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter first name"
                  variant="standard"
                  value={newUser.firstName}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      firstName:
                        e.target.value,
                    })
                  }
                />
              </Box>

              {/* LAST NAME */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter last name"
                  variant="standard"
                  value={newUser.lastName}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      lastName:
                        e.target.value,
                    })
                  }
                />
              </Box>

              {/* AGE */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter age"
                  variant="standard"
                  value={newUser.age}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      age: e.target.value,
                    })
                  }
                />
              </Box>

              {/* GENDER */}
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <FormControl
                  fullWidth
                  variant="standard"
                >
                  <InputLabel>
                    Gender
                  </InputLabel>

                  <Select
                    IconComponent={
                      ExpandMoreIcon
                    }
                    value={newUser.gender}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        gender:
                          e.target.value,
                      })
                    }
                  >
                    <MenuItem value="male">
                      Male
                    </MenuItem>

                    <MenuItem value="female">
                      Female
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* CONTACT */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter mobile"
                  variant="standard"
                  value={newUser.contactNumber}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      contactNumber:
                        e.target.value,
                    })
                  }
                />
              </Box>

              {/* ADDRESS */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter address"
                  variant="standard"
                  value={newUser.address}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      address:
                        e.target.value,
                    })
                  }
                />
              </Box>

              {/* EMAIL */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter email"
                  variant="standard"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      email:
                        e.target.value,
                    })
                  }
                />
              </Box>

              {/* TYPE */}
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <FormControl
                  fullWidth
                  variant="standard"
                >
                  <InputLabel>
                    Type
                  </InputLabel>

                  <Select
                    value={
                      newUser.type ||
                      "viewer"
                    }
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        type:
                          e.target.value,
                      })
                    }
                  >
                    <MenuItem value="admin">
                      Admin
                    </MenuItem>

                    <MenuItem value="editor">
                      Editor
                    </MenuItem>

                    <MenuItem value="viewer">
                      Viewer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* USERNAME */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  mb: 2,
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter username"
                  variant="standard"
                  value={newUser.username}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      username:
                        e.target.value,
                    })
                  }
                />
              </Box>

              {/* PASSWORD */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <AccountCircle
                  sx={{
                    color: "action.active",
                    mr: 1,
                  }}
                />

                <TextField
                  fullWidth
                  label="Enter password"
                  variant="standard"
                  type="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      password:
                        e.target.value,
                    })
                  }
                />
              </Box>
            </FormControl>
          </Stack>

          {/* BUTTONS */}
          <Stack
            spacing={2}
            direction="row"
            sx={{ mt: 3 }}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              onClick={handleSaveUser}
            >
              {isEditing
                ? "Save Changes"
                : "Add"}
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* DATAGRID */}
      <Box
        sx={{
          height: 500,
          width: "100%",
          mb: 5,
        }}
      >
        <DataGrid
          rows={filteredUsers}
          columns={columns1}
          getRowId={(row) => row._id}
          loading={loading}
          pageSize={10}
          rowsPerPageOptions={[
            10,
            20,
            50,
          ]}
          disableSelectionOnClick
        />
      </Box>
    </>
  );
};

export default UsersPage;
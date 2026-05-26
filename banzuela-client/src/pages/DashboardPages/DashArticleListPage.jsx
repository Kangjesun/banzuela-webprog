import { useState, useEffect } from "react";

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Modal,
  Card,
  CardContent,
  Chip,
  MenuItem,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  fetchArticles,
  createArticle,
  updateArticle,
} from "../../services/articleService";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const cardStyle = {
  flex: 1,
  borderRadius: 3,
  boxShadow: 3,
};

const DashArticleListPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const [newArticle, setNewArticle] = useState({
    title: "",
    slug: "",
    content: "",
    category: "",
    image: "",
    isPublished: true,
    articleType: "standard",
  });

  const slugify = (text) =>
    text?.toLowerCase().trim().replace(/\s+/g, "-");

  const countParagraphs = (content) =>
    content ? content.split("\n").filter(Boolean).length : 0;

  const getPreview = (content) =>
    content ? content.slice(0, 60) : "";

  const loadArticles = async () => {
    try {
      setLoading(true);

      const { data } = await fetchArticles();

      setArticles(
        Array.isArray(data?.articles) ? data.articles : []
      );
    } catch (err) {
      console.error(err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleOpen = () => {
    setIsEditing(false);
    setNewArticle({
      title: "",
      slug: "",
      content: "",
      category: "",
      isPublished: true,
      articleType: "standard",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditId(null);
  };

  const handleSave = async () => {
    try {
      if (!newArticle.title.trim() || !newArticle.content.trim()) {
        alert("Title and Content are required");
        return;
      }

      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.id) {
        alert("Cannot create article: user not found");
        return;
      }

      const payload = {
        title: newArticle.title || "",
        slug: newArticle.slug || slugify(newArticle.title),
        content: newArticle.content || "",
        category: newArticle.category || "",
        image: newArticle.image || "",
        isPublished: newArticle.isPublished ?? true,
        articleType: newArticle.articleType || "standard",
        paragraphs: newArticle.content
          ? newArticle.content.split("\n").filter(Boolean).length
          : 0,
        author: user.id,
      };

      if (isEditing) {
        await updateArticle(editId, payload);
      } else {
        await createArticle(payload);
      }

      await loadArticles();
      handleClose();
    } catch (err) {
      console.error("Error creating/updating article:", err);
      alert(err.response?.data?.message || "Failed to save article");
    }
  };

  const handleEdit = (id) => {
    const item = articles.find((a) => a._id === id);

    if (item) {
      setNewArticle({
        title: item.title || "",
        slug: item.slug || "",
        content: item.content || "",
        category: item.category || "",
        isPublished: item.isPublished ?? true,
        articleType: item.articleType || "standard",
      });

      setEditId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  const handleToggle = async (id, status) => {
    try {
      await updateArticle(id, {
        isPublished: !status,
      });

      await loadArticles();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredArticles = (articles || []).filter((a) => {
    const matchesSearch = (a.title || "")
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === ""
        ? true
        : statusFilter === "active"
        ? a.isPublished
        : !a.isPublished;

    const matchesType =
      typeFilter === ""
        ? true
        : a.articleType === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const total = articles.length;
  const active = articles.filter((a) => a.isPublished).length;
  const inactive = articles.filter((a) => !a.isPublished).length;

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },

    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
      valueGetter: (value, row) =>
        row.slug || slugify(row.title),
    },

    {
      field: "title",
      headerName: "Title",
      flex: 1,
    },

    {
      field: "articleType",
      headerName: "Type",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={
            params.row.articleType === "featured"
              ? "Featured"
              : "Standard"
          }
          color={
            params.row.articleType === "featured"
              ? "warning"
              : "default"
          }
          size="small"
        />
      ),
    },

    {
      field: "paragraphs",
      headerName: "Paragraphs",
      flex: 1,
      valueGetter: (value, row) =>
        countParagraphs(row.content),
    },

    {
      field: "preview",
      headerName: "Preview",
      flex: 2,
      valueGetter: (value, row) =>
        getPreview(row.content),
    },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={
            params.row.isPublished ? "Active" : "Inactive"
          }
          color={
            params.row.isPublished ? "success" : "default"
          }
          size="small"
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 1.5,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => handleEdit(params.row._id)}
          >
            EDIT
          </Button>

          <Button
            size="small"
            variant="contained"
            color={
              params.row.isPublished ? "error" : "success"
            }
            startIcon={
              params.row.isPublished ? (
                <BlockIcon />
              ) : (
                <CheckCircleIcon />
              )
            }
            onClick={() =>
              handleToggle(
                params.row._id,
                params.row.isPublished
              )
            }
          >
            {params.row.isPublished ? "DISABLE" : "ENABLE"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <>
      {/* HEADER */}
      <Stack
        direction="row"
        sx={{
          mb: 4,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Articles</Typography>

        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={handleOpen}
        >
          Add Article
        </Button>
      </Stack>

      {/* KPI */}
      <Box sx={{ mb: 4 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography>Total Articles</Typography>
              <Typography variant="h4">{total}</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography>Active</Typography>
              <Typography variant="h4">{active}</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography>Inactive</Typography>
              <Typography variant="h4">{inactive}</Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      {/* SEARCH + FILTERS */}
      <Stack spacing={2} sx={{ mb: 3 }}>
        <TextField
          label="Search Articles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />

        {/* FILTERS */}
        <Stack direction="row" spacing={2}>
          <TextField
            select
            label="Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </TextField>

          <TextField
            select
            label="Article Type"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            fullWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="featured">Featured</MenuItem>
            <MenuItem value="standard">Standard</MenuItem>
          </TextField>
        </Stack>
      </Stack>

      {/* TABLE */}
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={filteredArticles}
          columns={columns}
          getRowId={(row) => row._id}
          loading={loading}
        />
      </Box>

      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5">
            {isEditing ? "Edit Article" : "Add Article"}
          </Typography>

          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              label="Title"
              value={newArticle.title}
              onChange={(e) =>
                setNewArticle({
                  ...newArticle,
                  title: e.target.value,
                })
              }
            />

            <TextField
              label="Slug"
              value={newArticle.slug || ""}
              onChange={(e) =>
                setNewArticle({ ...newArticle, slug: e.target.value })
              }
            />

            <TextField
              label="Category"
              value={newArticle.category || ""}
              onChange={(e) =>
                setNewArticle({ ...newArticle, category: e.target.value })
              }
            />

            <TextField
              label="Image URL"
              value={newArticle.image || ""}
              onChange={(e) =>
                setNewArticle({ ...newArticle, image: e.target.value })
              }
            />

            {/* ARTICLE TYPE */}
            <TextField
              select
              label="Article Type"
              value={newArticle.articleType}
              onChange={(e) =>
                setNewArticle({
                  ...newArticle,
                  articleType: e.target.value,
                })
              }
              fullWidth
            >
              <MenuItem value="standard">Standard</MenuItem>
              <MenuItem value="featured">Featured</MenuItem>
            </TextField>

            <TextField
              label="Content"
              multiline
              rows={4}
              value={newArticle.content || ""}
              onChange={(e) =>
                setNewArticle({
                  ...newArticle,
                  content: e.target.value,
                })
              }
            />

            <Button variant="contained" onClick={handleSave}>
              {isEditing ? "Save Changes" : "Create"}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default DashArticleListPage;
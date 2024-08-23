"use client";
import {
  Box,
  Typography,
  Stack,
  Button,
  Link,
  ButtonBase,
} from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ExtensionIcon from "@mui/icons-material/Extension";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Failed to log out:", err);
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "23vw",
          backgroundColor: "white",
          borderTopRightRadius: "45px",
          borderBottomRightRadius: "45px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 1,
          }}
        >
          <Typography
            className="raleway-600"
            color={"#939393"}
            sx={{ padding: "8px 16px", fontSize: "14px" }}
          >
            OVERVIEW
          </Typography>

          <Link
            href="/dashboard"
            sx={{
              backgroundColor: "white",
              color: "#003875",
              padding: "8px 16px",
              gap: "5px",
              textDecoration: "none",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SpaceDashboardIcon sx={{ fontSize: "30px" }} />
              <Typography className="raleway-600" fontSize={"16px"}>
                Dashboard
              </Typography>
            </Stack>
          </Link>
          <Link
            href="/cards"
            className="raleway-400"
            sx={{
              textDecoration: "none",
              backgroundColor: "white",
              color: "#003875",
              padding: "8px 16px",
              gap: "5px",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ExtensionIcon sx={{ fontSize: "30px" }} />
              <Typography className="raleway-600" fontSize={"16px"}>
                Cards
              </Typography>
            </Stack>
          </Link>
        </Stack>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "auto",
          }}
        >
          <Link
            className="raleway-400"
            sx={{
              backgroundColor: "white",
              color: "#BB271A",
              padding: "8px 16px",
              textDecoration: "none",
              gap: "5px",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ButtonBase onClick={handleLogout}>
                <LogoutIcon sx={{ fontSize: "30px" }} />
                <Typography className="raleway-600" fontSize={"16px"}>
                  Log out
                </Typography>
              </ButtonBase>
            </Stack>
          </Link>
        </Box>
      </Box>
    </>
  );
}

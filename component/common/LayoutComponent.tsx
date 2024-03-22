import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import Logo from "./Sidebar/Logo";
import SidebarComponent from "./Sidebar/SidebarComponent";
import HeaderComponent from "./Header/HeaderComponent";
import { useSession, signIn, signOut } from "next-auth/react";
const LayoutComponent = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  const [show, setShow] = React.useState(true);

  const handleMenu = () => {
    setShow(!show);
  };
  return (
    <>
      {session && (
        <Grid container>
          <Grid
            item
            xs={12}
            textAlign={show ? "right" : "left"}
            style={{ backgroundColor: "white" }}
          >
          </Grid>
          <Grid
            item
            style={{ backgroundColor: " white", height: "100vh" }}
            xs={12}
          >
            dsd
            {/* <HeaderComponent /> */}
            {children}
          </Grid>
        </Grid>
      )}
      {!session && <div>{children}</div>}
    </>
  );
};

export default LayoutComponent;

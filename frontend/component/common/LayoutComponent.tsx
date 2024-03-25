import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
const LayoutComponent = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
 
  return (
    <>
      {session && (
        <Grid container>
          
          <Grid
            xs={12}
          >
            {/* <HomePage /> */}
            {children}
          </Grid>
        </Grid>
      )}
      {!session && (
        <div>
          {children}
        </div>
      )}
    </>
  );
};

export default LayoutComponent;

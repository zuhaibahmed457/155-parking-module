"use client";

import React, { ReactNode } from "react";

import {
  TableContainer as TContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CircularProgress,
  Pagination,
  Box,
  Stack,
} from "@mui/material";

interface Column {
  key: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

interface TableContainerProps {
  tableStyle?: any;
  containerStyle?: any;
  spanTd?: number;
  message?: string;
  isLoading?: boolean;
  isContent?: boolean;
  page: number;
  totalPages: number;
  columns: Column[];
  data: any;
  callBack?: () => void;
  icon?: any;
  desc?: string;
  heading?: string;
}
function TableContainer({
  tableStyle,
  containerStyle,
  spanTd,
  message,
  isLoading,
  isContent,
  columns = [],
  data = [],
  page,
  totalPages,
  icon,
  desc = "",
  heading = "",
  callBack = () => {},
  ...props
}: TableContainerProps) {
  let IconComp = icon;

  return (
    <>
      <TContainer
        sx={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: 2.2,
          border: "1px solid #E2E2E2",
        }}
      >
        <Stack
          flexDirection="column"
          gap={1}
          p={2}
          sx={{ position: "sticky", top: 0, left: 0 }}
        >
          <Stack flexDirection="row" gap={1} alignItems="center">
            {!!icon && <IconComp sx={{ color: "primary.main" }} />}
            <Typography fontWeight={500} variant="h6" color="black">
              {heading}
            </Typography>
          </Stack>
          <Typography variant="body1" color="#595959">
            {" "}
            {desc}
          </Typography>
        </Stack>

        <Table
          sx={[
            tableStyle,
            {
              "& .MuiTableCell-root": {
                paddingTop: "10px",
                paddingBottom: "10px",
              },
            },
          ]}
          {...props}
        >
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  padding: { sm: "15px !important", xs: "10px !important" },
                  fontWeight: "bold",
                  // bgcolor: "primary.main",
                  borderTop: "1px solid #D3D3D3",
                  borderBottom: "1px solid #D3D3D3",
                  color: "#000000",
                  textWrap: "nowrap",
                },
              }}
            >
              {columns.map((col: any) => (
                <TableCell key={col.key as string}>
                  {col.label ?? "-"}
                </TableCell>
              ))}
              {/* {thContent.map((value) => (
                <TableCell
                  key={value}
                  sx={{ whiteSpace: "nowrap", textAlign: "center" }}
                >
                  {value}
                </TableCell>
              ))} */}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow hover>
                <TableCell colSpan={spanTd ?? columns?.length} align="center">
                  <CircularProgress size={22} />
                </TableCell>
              </TableRow>
            ) : data?.length ? (
              data.map((row: any, rowIndex: number) => (
                <TableRow key={rowIndex}>
                  {columns.map((col: any, i: number) => (
                    <TableCell
                      sx={{ color: "black", textWrap: "nowrap" }}
                      key={col.key as string}
                      onClick={() => {
                        if (col.key !== "actions") {
                          // onRowClick?.(row);
                        }
                      }}
                    >
                      {col.render
                        ? col.render(row)
                        : ((row[col.key] ?? "-") as any)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow hover>
                <TableCell colSpan={spanTd ?? columns?.length} align="center">
                  <Typography variant="caption">
                    {message ? message : "No Records Found"}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TContainer>
      {!!isContent && !!page && !isLoading && (
        <UseMyPagination
          totalPages={totalPages}
          page={page}
          callBack={callBack}
          margin={{ mt: 2 }}
        />
      )}
    </>
  );
}
TableContainer.defaultProps = {
  tableStyle: {},
  spanTd: "1",
  message: null,
  isContent: false,
  isLoading: false,
};

const UseMyPagination = ({
  margin,
  totalPages,
  callBack,
  page,
}: UseMyPaginationProps) => {
  if (totalPages > 1) {
    return (
      <Box sx={{ ...margin, display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          page={page}
          count={totalPages}
          color="primary"
          onChange={(_, newPage: number) => callBack(newPage)}
        />
      </Box>
    );
  } else {
    return <></>;
  }
};
interface UseMyPaginationProps {
  margin: any;
  totalPages: number;
  callBack: (s: number) => void;
  page: number;
}
export default TableContainer;

import { Table,TableContainer, TableHead , TableBody, TableRow, TableCell, Paper } from "@mui/material"



const TablesInfo = () => {

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Удар</TableCell>
              <TableCell>Прыжок</TableCell>
              <TableCell>Реакция</TableCell>
              <TableCell>Скорость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>123</TableCell>
              <TableCell>123</TableCell>
              <TableCell>123</TableCell>
              <TableCell>123</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}




export default TablesInfo
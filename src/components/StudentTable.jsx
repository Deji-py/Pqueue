
import { v4 as uuid } from 'uuid';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';

import { SeverityPill } from '../severity-pill';


const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    priority:'1',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    priority:'3',
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    priority:'6',
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    priority:'4',
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    priority:'2',
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    priority:'3',
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

export const StudentTable = (props) => (
  <Card sx={{width:"100%", overflowX:"scroll"}} >
    <CardHeader title="Latest Tasks"  />
   
      <Box sx={{ minWidth: 800}}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>
                Matric No
              </TableCell>
              <TableCell>
               Fullname
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell>
                Priority
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.createdAt}
                </TableCell>
                
                <TableCell>
                  <SeverityPill
                    color={(order.status === 'delivered' && 'success')
                    || (order.status === 'refunded' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                  </SeverityPill>
                </TableCell>
                <TableCell>
                  {order.priority}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
   
  </Card>
);

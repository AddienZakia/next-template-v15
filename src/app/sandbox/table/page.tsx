'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Edit, Trash2 } from 'lucide-react';
import DemoCard from '../demo-card/page';

const TableSandbox = () => {
  const data = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      role: 'User',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Active',
      role: 'Admin',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Inactive',
      role: 'User',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice@example.com',
      status: 'Active',
      role: 'Editor',
    },
  ];

  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-gray-200 bg-linear-to-r from-gray-50 to-slate-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          📊 Table Components
        </h2>
        <p className="text-sm text-gray-600">
          Data tables dengan sorting, pagination, dan actions
        </p>
      </div>

      <DemoCard
        title="Basic Data Table"
        description="Tabel data dengan header, body, dan footer"
        className="p-0"
      >
        <Table>
          <TableCaption>A list of recent users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.status === 'Active' ? 'primary' : 'outlined'}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outlined" size="sm" leftIcon={Edit}>
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      size="sm"
                      leftIcon={Trash2}
                      className="text-danger-main border-danger-main hover:bg-danger-surface"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoCard>

      <DemoCard
        title="Table with Checkboxes"
        description="Tabel dengan row selection menggunakan checkbox"
        className="p-0"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                id: 1,
                product: 'Laptop',
                category: 'Electronics',
                price: '$999',
                stock: 15,
              },
              {
                id: 2,
                product: 'Mouse',
                category: 'Accessories',
                price: '$25',
                stock: 100,
              },
              {
                id: 3,
                product: 'Keyboard',
                category: 'Accessories',
                price: '$75',
                stock: 45,
              },
              {
                id: 4,
                product: 'Monitor',
                category: 'Electronics',
                price: '$299',
                stock: 20,
              },
            ].map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{item.product}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.stock > 50
                        ? 'primary'
                        : item.stock > 10
                          ? 'alternative'
                          : 'outlined'
                    }
                  >
                    {item.stock} in stock
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DemoCard>
    </div>
  );
};

export default TableSandbox;

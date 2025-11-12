'use client';

import Typography from '@/components/Typography';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import DemoCard from '../demo-card/page';

const DialogSandbox = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-green-200 bg-linear-to-r from-green-50 to-teal-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          🗨️ Dialog Components
        </h2>
        <p className="text-sm text-gray-600">
          Modal dialogs untuk konfirmasi, forms, dan informasi
        </p>
      </div>

      <DemoCard
        title="Dialog Variants"
        description="Berbagai jenis dialog dengan konten yang berbeda"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outlined">Open Basic Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogDescription>
                This is a basic dialog example with description text.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Typography variant="m">
                Dialog content goes here. You can put any content inside the
                dialog.
              </Typography>
            </div>
            <DialogFooter>
              <Button variant="outlined">Cancel</Button>
              <Button variant="primary">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="primary"
              className="bg-danger-main hover:bg-danger-hover"
            >
              Delete Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-danger-main">
                Confirm Deletion
              </DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <Typography variant="m" className="text-gray-700">
                This will permanently delete the item and all associated data.
              </Typography>
            </div>
            <DialogFooter>
              <Button
                variant="outlined"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="bg-danger-main hover:bg-danger-hover"
                onClick={() => {
                  setDeleteDialogOpen(false);
                  toast.error('Item deleted successfully');
                }}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoCard>

      <DemoCard
        title="Dialog with Form"
        description="Dialog yang berisi form input"
      >
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="primary" leftIcon={Plus}>
              Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new user account.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outlined" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setDialogOpen(false);
                  toast.success('User created successfully');
                }}
              >
                Create User
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DemoCard>
    </div>
  );
};

export default DialogSandbox;

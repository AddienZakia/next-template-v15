'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Download, Settings, User } from 'lucide-react';
import React from 'react';
import DemoCard from '../demo-card/page';

const DropdownMenuSandbox = () => {
  const [checkboxItems, setCheckboxItems] = React.useState({
    showEmails: true,
    showNotifications: false,
    showSMS: true,
  });

  const [radioValue, setRadioValue] = React.useState('medium');

  return (
    <div className="space-y-6 p-10">
      <div className="rounded-lg border border-orange-200 bg-linear-to-r from-orange-50 to-yellow-50 p-6">
        <h2 className="text-2xl font-bold text-gray-900">
          ▾ Dropdown Menu Components
        </h2>
        <p className="text-sm text-gray-600">
          Dropdown menus dengan berbagai item types
        </p>
      </div>

      <DemoCard
        title="Basic Dropdown"
        description="Dropdown dengan menu items biasa"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlined" rightIcon={ChevronDown}>
              Options
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              <span>Export Data</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoCard>

      <DemoCard
        title="Dropdown with Checkboxes"
        description="Dropdown dengan checkbox items untuk multiple selection"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlined" rightIcon={ChevronDown}>
              Notifications
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={checkboxItems.showEmails}
              onCheckedChange={(checked) =>
                setCheckboxItems({ ...checkboxItems, showEmails: !!checked })
              }
            >
              Email Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={checkboxItems.showNotifications}
              onCheckedChange={(checked) =>
                setCheckboxItems({
                  ...checkboxItems,
                  showNotifications: !!checked,
                })
              }
            >
              Push Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={checkboxItems.showSMS}
              onCheckedChange={(checked) =>
                setCheckboxItems({ ...checkboxItems, showSMS: !!checked })
              }
            >
              SMS Alerts
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoCard>

      <DemoCard
        title="Dropdown with Radio Items"
        description="Dropdown dengan radio items untuk single selection"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlined" rightIcon={ChevronDown}>
              Priority: {radioValue}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Set Priority</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={radioValue}
              onValueChange={setRadioValue}
            >
              <DropdownMenuRadioItem value="low">
                Low Priority
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="medium">
                Medium Priority
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="high">
                High Priority
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="urgent">
                Urgent
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </DemoCard>
    </div>
  );
};

export default DropdownMenuSandbox;

'use client';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useApplication } from '@/hooks/useApplicationHook';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CandidateNotFound from '../(container)/CandidateNotFound';

export default function TableData() {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [candidates, setCandidates] = useState<any[]>([]);

  const pathname = usePathname();
  const jobId = pathname.split('/').pop();
  const { getApplications, loading } = useApplication();

  useEffect(() => {
    const fetchCandidates = async () => {
      if (jobId) {
        const candidatesData = await getApplications(Number(jobId));
        setCandidates(candidatesData);
      }
    };

    fetchCandidates();
  }, [jobId, getApplications]);

  const handleSelectAll = (checked: boolean) => {
    setSelectedAll(checked);
    if (checked) {
      setSelectedRows(new Set(candidates.map((c) => c.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: number, checked: string | boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
    setSelectedAll(newSelected.size === candidates.length);
  };

  return !loading && candidates.length === 0 ? (
    <CandidateNotFound />
  ) : (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b bg-gray-50">
              <TableHead className="sticky left-0 z-20 w-12 bg-gray-50 px-4 py-3 text-left">
                <Checkbox
                  checked={selectedAll}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="sticky left-12 z-20 min-w-[200px] bg-gray-50 px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Nama Lengkap
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Email Address
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Phone Numbers
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Date of Birth
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Domicile
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Gender
              </TableHead>
              <TableHead className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Link LinkedIn
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <TableRow
                key={candidate.id}
                className="transition-colors hover:bg-gray-50"
              >
                <TableCell className="sticky left-0 z-10 border-r bg-white px-4 py-3">
                  <Checkbox
                    checked={selectedRows.has(candidate.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(candidate.id, checked)
                    }
                  />
                </TableCell>
                <TableCell className="sticky left-12 z-10 min-w-[200px] border-r bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">
                      {candidate.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-600">
                  {candidate.email}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-600">
                  {candidate.phone_number}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-600">
                  {candidate.birth_date}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-600">
                  {candidate.domicile}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm text-gray-600">
                  {candidate.gender}
                </TableCell>
                <TableCell className="px-4 py-3 text-sm">
                  {candidate.linkedin ? (
                    <a
                      href={candidate.linkedin}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {candidate.linkedin}
                    </a>
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

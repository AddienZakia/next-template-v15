'use client';

import { Checkbox } from '@/components/ui/checkbox';
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
  }, [jobId]);

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
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="sticky left-0 z-20 w-12 bg-gray-50 px-4 py-3 text-left">
                <Checkbox
                  checked={selectedAll}
                  onCheckedChange={handleSelectAll}
                />
              </th>
              <th className="sticky left-12 z-20 min-w-[200px] bg-gray-50 px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Nama Lengkap
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Email Address
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Phone Numbers
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Date of Birth
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Domicile
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Gender
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-700 uppercase">
                Link LinkedIn
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="transition-colors hover:bg-gray-50"
              >
                <td className="sticky left-0 z-10 border-r bg-white px-4 py-3">
                  <Checkbox
                    checked={selectedRows.has(candidate.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(candidate.id, checked)
                    }
                  />
                </td>
                <td className="sticky left-12 z-10 min-w-[200px] border-r bg-white px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-gray-900">
                      {candidate.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {candidate.email}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {candidate.phone_number}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {candidate.birth_date}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {candidate.domicile}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {candidate.gender}
                </td>
                <td className="px-4 py-3 text-sm">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

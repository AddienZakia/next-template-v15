export type Metadata = {
  take: number;
  page: number;
  total_data: number;
  total_page: number;
  sort: string;
  sort_by: string;
  filter: string;
  filter_by: string;
};

export interface MemberFilters {
  search?: string;
  domicile?: string;
  gender?: string;
  startDate?: string;
  endDate?: string;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: Metadata;
}

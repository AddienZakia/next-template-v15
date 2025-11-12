export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string; // admin | user
  is_verified: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Member {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  birth_date: string;
  domicile: string;
  gender: string;
  job_id: number;
  linkedin?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Information {
  id: number;
  full_name: number; // 0 = off, 1 = optional, 2 = required
  photo: number;
  gender: number;
  domicile: number;
  email: number;
  phone_number: number;
  linkedin: number;
  birth_date: number;
}

export interface Job {
  id: number;
  name: string;
  type: string;
  location: string;
  status: 'active' | 'inactive' | 'draft';
  description: string;
  total_candidate_need: number;
  min_salary: number;
  max_salary: number;
  information_id: number;
  created_at?: string;
  updated_at?: string;
}

export interface Database {
  users: User[];
  applications: Member[];
  jobs: Job[];
  informations: Information[];
}

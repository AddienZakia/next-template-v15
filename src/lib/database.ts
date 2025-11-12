import { Database, Information, Job, Member, User } from '@/types/database';

const STORAGE_KEY = 'HiringDB';

const loadData = (): Database => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEY);
    return data
      ? JSON.parse(data)
      : {
          users: [],
          applications: [],
          jobs: [],
          informations: [],
        };
  }
  return {
    users: [],
    applications: [],
    jobs: [],
    informations: [],
  };
};

const saveData = (data: Database): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
};

const generateId = (array: any[]): number => {
  if (array.length === 0) return 1;
  return Math.max(...array.map((item) => item.id)) + 1;
};

// =========================== CRUD for Users ===========================
export const getAllUsers = (): User[] => {
  const data = loadData();
  return data.users;
};

export const getUserById = (id: number): User | undefined => {
  const data = loadData();
  return data.users.find((user) => user.id === id);
};

export const getUserByEmail = (email: string): User | undefined => {
  const data = loadData();
  return data.users.find((user) => user.email === email);
};

export const createUser = (
  userData: Omit<User, 'id' | 'created_at' | 'updated_at'>,
): User => {
  const data = loadData();
  const newUser: User = {
    id: generateId(data.users),
    ...userData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  data.users.push(newUser);
  saveData(data);
  return newUser;
};

export const updateUser = (
  id: number,
  userData: Partial<User>,
): User | null => {
  const data = loadData();
  const userIndex = data.users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    data.users[userIndex] = {
      ...data.users[userIndex],
      ...userData,
      updated_at: new Date().toISOString(),
    };
    saveData(data);
    return data.users[userIndex];
  }
  return null;
};

export const deleteUser = (id: number): boolean => {
  const data = loadData();
  const userIndex = data.users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    data.users.splice(userIndex, 1);
    saveData(data);
    return true;
  }
  return false;
};

// =========================== CRUD for Applicants (Member) ===========================
export const getAllApplicants = (): Member[] => {
  const data = loadData();
  return [...data.applications];
};

export const getApplicantById = (id: number): Member | undefined => {
  const data = loadData();
  return data.applications.find((applicant) => applicant.id === id);
};

export const getApplicationsByJobId = (jobId: number): Member[] => {
  const data = loadData();
  return data.applications.filter((app) => app.job_id === jobId);
};

export const deleteApplicant = (id: number): boolean => {
  const data = loadData();
  const applicantIndex = data.applications.findIndex(
    (applicant) => applicant.id === id,
  );
  if (applicantIndex !== -1) {
    data.applications.splice(applicantIndex, 1);
    saveData(data);
    return true;
  }
  return false;
};

export const getApplicationsByJobIdWithDetails = (jobId: number) => {
  const applications = getApplicationsByJobId(jobId);
  const jobs = getAllJobs();

  return applications.map((app) => {
    const job = jobs.find((j) => j.id === app.job_id);

    return {
      ...app,
      job,
    };
  });
};

export const createApplicant = (
  applicantData: Omit<Member, 'id' | 'created_at' | 'updated_at'>,
): Member => {
  const data = loadData();
  const newApplicant: Member = {
    id: generateId(data.applications),
    ...applicantData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  data.applications.push(newApplicant);
  saveData(data);
  return newApplicant;
};

//  =========================== CRUD for Information ===========================
export const getAllInformation = (): Information[] => {
  const data = loadData();
  return data.informations;
};

export const getInformationById = (id: number): Information | undefined => {
  const data = loadData();
  return data.informations.find((info) => info.id === id);
};

export const createInformation = (
  infoData: Omit<Information, 'id'>,
): Information => {
  const data = loadData();
  const newInfo: Information = {
    id: generateId(data.informations),
    ...infoData,
  };
  data.informations.push(newInfo);
  saveData(data);
  return newInfo;
};

export const updateInformation = (
  id: number,
  infoData: Partial<Information>,
): Information | null => {
  const data = loadData();
  const infoIndex = data.informations.findIndex((info) => info.id === id);
  if (infoIndex !== -1) {
    data.informations[infoIndex] = {
      ...data.informations[infoIndex],
      ...infoData,
    };
    saveData(data);
    return data.informations[infoIndex];
  }
  return null;
};

export const deleteInformation = (id: number): boolean => {
  const data = loadData();
  const infoIndex = data.informations.findIndex((info) => info.id === id);
  if (infoIndex !== -1) {
    data.informations.splice(infoIndex, 1);
    saveData(data);
    return true;
  }
  return false;
};

// =========================== CRUD for Jobs ===========================
export const getAllJobs = (): Job[] => {
  const data = loadData();
  return data.jobs;
};

export const getJobById = (id: number): Job | undefined => {
  const data = loadData();
  return data.jobs.find((job) => job.id === id);
};

export const createJob = (
  jobData: Omit<Job, 'id' | 'created_at' | 'updated_at'>,
): Job => {
  const data = loadData();
  const newJob: Job = {
    id: generateId(data.jobs),
    ...jobData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  data.jobs.push(newJob);
  saveData(data);
  return newJob;
};

export const updateJob = (id: number, jobData: Partial<Job>): Job | null => {
  const data = loadData();
  const jobIndex = data.jobs.findIndex((job) => job.id === id);
  if (jobIndex !== -1) {
    data.jobs[jobIndex] = {
      ...data.jobs[jobIndex],
      ...jobData,
      updated_at: new Date().toISOString(),
    };
    saveData(data);
    return data.jobs[jobIndex];
  }
  return null;
};

export const deleteJob = (id: number): boolean => {
  const data = loadData();
  const jobIndex = data.jobs.findIndex((job) => job.id === id);
  if (jobIndex !== -1) {
    data.jobs.splice(jobIndex, 1);
    saveData(data);
    return true;
  }
  return false;
};

// Helper functions for relationships
export const getJobsWithInformation = () => {
  const jobs = getAllJobs();
  const informations = getAllInformation();
  return jobs.map((job) => ({
    ...job,
    information: informations.find((info) => info.id === job.information_id),
  }));
};

export const getJobWithInformationById = (id: number) => {
  const job = getJobById(id);
  if (!job) return null;
  const information = getInformationById(job.information_id);
  return { ...job, information };
};

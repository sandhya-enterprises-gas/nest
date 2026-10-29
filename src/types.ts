export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  titleKn?: string;
  degreeLevel: 'Certificate' | 'Diploma' | 'Bachelor' | 'Master' | 'Special';
  duration: string;
  durationKn?: string;
  mode: 'Residential / Full-Time' | 'Modular / Hybrid' | 'Evening & Weekend';
  modeKn?: string;
  language: string;
  languageKn?: string;
  eligibility: string;
  eligibilityKn?: string;
  description: string;
  descriptionKn?: string;
  keySubjects?: string[];
  keySubjectsKn?: string[];
  careerPaths?: string[];
  careerPathsKn?: string[];
  featured?: boolean;
  ataAccredited?: boolean;
}

export interface AccreditationInfo {
  title: string;
  shortTitle: string;
  body: string;
  directoryUrl: string;
  status: string;
  coursesOffered: string[];
  summary: string;
}

export interface StatementOfFaithArticle {
  id: string;
  title: string;
  titleKn?: string;
  scriptureReferences: string[];
  summary: string;
  summaryKn?: string;
  fullDescription: string;
  fullDescriptionKn?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  nameKn?: string;
  title: string;
  titleKn?: string;
  role?: string;
  roleKn?: string;
  qualification: string;
  qualificationKn?: string;
  specialization?: string;
  specializationKn?: string;
  department?: string;
  departmentKn?: string;
  bio?: string;
  bioKn?: string;
  experienceYears?: number;
  coursesTaught?: string[];
  coursesTaughtKn?: string[];
  photo?: string;
}

export interface VideoMessage {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
  category: 'Chapel Sermon' | 'Bible Lecture' | 'Campus Life' | 'Testimony';
}

export interface AdmissionInquiry {
  fullName: string;
  email: string;
  phone: string;
  cityState: string;
  programInterest: string;
  christianTestimony: string;
  churchAffiliation: string;
  preferredStartTerm: string;
  housingNeeded: boolean;
}

export interface AnnouncementItem {
  id: string;
  badgeEn: string;
  badgeKn: string;
  titleEn: string;
  titleKn: string;
  subEn: string;
  subKn: string;
  linkTextEn?: string;
  linkTextKn?: string;
  linkUrl?: string;
  isActive: boolean;
}

export interface AdmissionSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  cityState: string;
  programId: string;
  programName: string;
  languageTrack: string;
  qualification: string;
  churchName: string;
  callingBrief?: string;
  housingNeeded: boolean;
  status: 'New' | 'Under Review' | 'Interview Scheduled' | 'Approved' | 'Rejected';
  notes?: string;
  createdAt: string;
}

export interface GalleryPhotoItem {
  id: string;
  category: 'chapel' | 'classroom' | 'student-life' | 'faculty' | 'convocation' | 'grounds';
  titleEn: string;
  titleKn: string;
  descEn: string;
  descKn: string;
  locationEn: string;
  locationKn: string;
  imageUrl: string;
  tagEn: string;
  tagKn: string;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  name: string;
  role: 'Super Admin' | 'Principal' | 'Academic Dean';
  lastLogin?: string;
}


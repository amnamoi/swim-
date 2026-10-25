/** Domain types — the shape the backend API returns. */

export interface Enrollment {
  className: string;
  coachName: string;
  level: string;
  /** ISO 8601 timestamp of the next class. */
  nextSessionAt: string;
  skillsCompleted: number;
  skillsTotal: number;
  nextSkill: string | null;
  /** Value encoded in the check-in QR code. */
  passCode: string;
}

export interface ProgramRecommendation {
  name: string;
  href: string;
}

export interface Kid {
  id: string;
  name: string;
  enrollment: Enrollment | null;
  recommendedProgram: ProgramRecommendation | null;
}

export interface FamilyOverview {
  seasonName: string;
  savingsKwd: number;
  familyDiscountPct: number;
  makeUpCredits: number;
  reminderLeadHours: number;
  kids: Kid[];
}

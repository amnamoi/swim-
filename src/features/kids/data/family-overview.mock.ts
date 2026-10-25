import type { FamilyOverview } from '../types';

export const familyOverviewMock: FamilyOverview = {
  seasonName: 'Winter Season',
  savingsKwd: 32.25,
  familyDiscountPct: 15,
  makeUpCredits: 2,
  reminderLeadHours: 2,
  kids: [
    {
      id: 'omar',
      name: 'Omar',
      enrollment: {
        className: 'Minnows Improvers · Boys',
        coachName: 'Coach Khaled',
        level: 'Improver',
        nextSessionAt: '2026-11-08T17:00:00+03:00',
        skillsCompleted: 3,
        skillsTotal: 10,
        nextSkill: 'side breathing',
        passCode: 'RSC-OMAR-7F3K2',
      },
      recommendedProgram: null,
    },
    {
      id: 'lulu',
      name: 'Lulu',
      enrollment: {
        className: 'Ducklings · Girls',
        coachName: 'Coach Mariam',
        level: 'Water confidence',
        nextSessionAt: '2026-11-14T09:00:00+03:00',
        skillsCompleted: 1,
        skillsTotal: 10,
        nextSkill: 'floating on back',
        passCode: 'RSC-LULU-9Q1M8',
      },
      recommendedProgram: null,
    },
    {
      id: 'yousef',
      name: 'Yousef',
      enrollment: null,
      recommendedProgram: { name: 'Dolphins', href: '/classes?program=dolphins' },
    },
  ],
};

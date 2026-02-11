import raw_members from "./members.json"


export type MemberEntry = {
    list: boolean
    icon: string
    name: string
    name_en: string
    url: string
    login: string

    affiliation?: string
    affiliation_en?: string

    grade: string
    grade_en: string
}

export type MembersJson = {
    faculties: MemberEntry[]
    students: MemberEntry[]
    alumniAndAlumnae?: MemberEntry[]
}

// explicitly cast to MembersJson to satisfy TS compiler
const members = raw_members as unknown as MembersJson

export const normalized_members = {
    faculties: members.faculties ?? [],
    students: members.students ?? [],
    alumniAndAlumnae: members.alumniAndAlumnae ?? [],
} as const


import {
    Box,
    Avatar,
    Text,
    Link,
    Heading,
    Badge,
    Code,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react"
import gravatarUrl from "gravatar-url"
import * as React from "react"
import {GoLinkExternal} from "react-icons/go"
import {normalized_members, type MemberEntry} from "./data/members"

const style: {[key: string]: React.CSSProperties} = {
    icon: {
        display: "inline-block",
        verticalAlign: "middle",
    },
}

const gravatar = (login: string) => {
    if (!login) {
        return ""
    }
    return gravatarUrl(login + "@sfc.wide.ad.jp", {default: "404"})
}

const badge = (badgeStr: string) => {
    switch (badgeStr) {
        case "EI":
            return "blue"
        case "PM":
            return "teal"
        case "MAG":
            return "purple"
        case "B1":
        case "B2":
        case "B3":
        case "B4":
            return "pink"
        case "M1":
        case "M2":
            return "orange"
        case "D":
        case "D1":
        case "D2":
        case "D3":
            return "yellow"
        case "Associate Professor":
            return "cyan"
        default:
            return "gray"
    }
}

export const Members = (props: {en: boolean}) => {
    const faculties_list = normalized_members.faculties
        .filter((e) => e.list)
        .map((e, index) => <Member key={index} data={e} en={props.en} />)

    const students_list = normalized_members.students
        .filter((e) => e.list)
        .map((e, index) => <Member key={index} data={e} en={props.en} />)

    const alumni_and_alumnae_list = normalized_members.alumniAndAlumnae
        .filter((e) => e.list)
        .map((e, index) => <Member key={index} data={e} en={props.en} />)

    return (
        <Box>
            <Box marginY="4">
                <Heading as="h3" fontSize="3xl" marginBottom="2">
                    {props.en ? "Faculty" : "教員"}
                </Heading>
                <UnorderedList>{faculties_list}</UnorderedList>
            </Box>

            <Box marginY="4">
                <Heading as="h3" fontSize="3xl" marginBottom="2">
                    {props.en ? "Students" : "学生"}
                </Heading>
                <UnorderedList>{students_list}</UnorderedList>
            </Box>

            <Box marginY="4">
                <Heading as="h3" fontSize="3xl" marginBottom="2">
                    {props.en ? "Alumni and Alumnae" : "卒業生"}
                </Heading>
                <UnorderedList>{alumni_and_alumnae_list}</UnorderedList>
            </Box>
        </Box>
    )
}


const Member = (props: {data: MemberEntry; en: boolean}) => {
    const display_name = props.en ? props.data.name_en : props.data.name
    const display_affiliation = props.en
        ? props.data.affiliation_en
        : props.data.affiliation
    const badge_key = props.data.affiliation_en ?? props.data.affiliation ?? ""

    return (
        <ListItem marginY="2">
            <Avatar
                name={display_name}
                src={props.data.icon ? props.data.icon : gravatar(props.data.login)}
                verticalAlign="middle"
                size="xs"
                marginRight="1"
            ></Avatar>

            {props.data.url === "" ? (
                <Text display="inline-block">
                    {display_name} (<Code>{props.data.login}</Code>)
                </Text>
            ) : (
                <>
                    <Link color="teal.500" href={props.data.url} marginRight="1">
                        {display_name} (<Code>{props.data.login}</Code>)
                    </Link>
                    <GoLinkExternal style={style.icon} />
                </>
            )}

            {badge_key !== "" ? (
                <Badge marginX="1" colorScheme={badge(badge_key)}>
                    {display_affiliation}
                </Badge>
            ) : null}

            <Badge colorScheme={badge(props.data.grade_en)}>
                {props.en ? props.data.grade_en : props.data.grade}
            </Badge>
        </ListItem>
    )
}

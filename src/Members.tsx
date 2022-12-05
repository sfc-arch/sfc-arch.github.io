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
import { GoLinkExternal } from "react-icons/go"
import members from "./data/members.json"

const style: { [key: string]: React.CSSProperties } = {
    icon: {
        display: "inline-block",
        verticalAlign: "middle",
    },
}

type SCHEMA = {
    list: boolean
    icon: string
    name: string
    name_en: string
    url: string
    login: string
    affiliation: string
    affiliation_en: string
    grade: string
    grade_en: string
}

const gravatar = (login: string) => {
    if (!login) {
        return ""
    }
    return gravatarUrl(login + "@sfc.wide.ad.jp", { default: "404" })
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

export const Members = (props: { en: boolean }) => {
    const facultiesList: JSX.Element[] = []
    const studentsList: JSX.Element[] = []
    let key = 0
    Array.prototype.forEach.call(members.faculties, (element) => {
        if (element.list) {
            facultiesList.push(
                <Member key={key} data={element} en={props.en}></Member>
            )
        }
        key++
    })
    Array.prototype.forEach.call(members.students, (element) => {
        if (element.list) {
            studentsList.push(
                <Member key={key} data={element} en={props.en}></Member>
            )
        }
        key++
    })
    return (
        <Box>
            <Box marginY="4">
                <Heading as="h3" fontSize="3xl" marginBottom="2">
                    {props.en ? "Faculty" : "教員"}
                </Heading>
                <UnorderedList>{facultiesList}</UnorderedList>
            </Box>
            <Box marginY="4">
                <Heading as="h3" fontSize="3xl" marginBottom="2">
                    {props.en ? "Students" : "学生"}
                </Heading>
                <UnorderedList>{studentsList}</UnorderedList>
            </Box>
        </Box>
    )
}

const Member = (props: { data: SCHEMA; en: boolean }) => (
    <ListItem marginY="2">
        <Avatar
            name={props.en ? props.data.name_en : props.data.name}
            src={props.data.icon ? props.data.icon : gravatar(props.data.login)}
            display="inline-block"
            verticalAlign="middle"
            size="xs"
            marginRight="1"
        ></Avatar>
        {props.data.url === "" ? (
            <Text display="inline-block">
                {props.en ? props.data.name_en : props.data.name} (
                <Code>{props.data.login}</Code>)
            </Text>
        ) : (
            <>
                <Link color="teal.500" href={props.data.url} marginRight="1">
                    {props.en ? props.data.name_en : props.data.name} (
                    <Code>{props.data.login}</Code>)
                </Link>
                <GoLinkExternal style={style.icon} />
            </>
        )}
        <Badge marginX="1" colorScheme={badge(props.data.affiliation_en)}>
            {props.en ? props.data.affiliation_en : props.data.affiliation}
        </Badge>
        <Badge colorScheme={badge(props.data.grade_en)}>
            {props.en ? props.data.grade_en : props.data.grade}
        </Badge>
    </ListItem>
)

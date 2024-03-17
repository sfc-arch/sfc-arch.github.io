import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    Highlight,
    Link,
    ListItem,
    UnorderedList,
} from "@chakra-ui/react"
import * as React from "react"
import publications from "./data/publications.json"
import members from "./data/members.json"
import { AiOutlineLink } from "react-icons/ai"

const style: { [key: string]: React.CSSProperties } = {
    icon: {
        display: "inline-block",
        verticalAlign: "sub",
        marginRight: "10px",
    },
    iconEnd: {
        display: "inline-block",
        marginLeft: "0.2rem",
    },
}

const createRules = () => {
    let rules: string[] = []
    // Aaa Bbb
    rules = rules.concat(members.faculties.map((e) => e.name))
    rules = rules.concat(members.faculties.map((e) => e.name_en))
    rules = rules.concat(members.students.map((e) => e.name))
    rules = rules.concat(members.students.map((e) => e.name_en))
    rules = rules.concat(members.alumniAndAlumnae.map((e) => e.name))
    rules = rules.concat(members.alumniAndAlumnae.map((e) => e.name_en))
    // AaaBbb
    rules = rules.concat(
        members.faculties.map((e) => e.name.replace(/\s+/g, ""))
    )
    rules = rules.concat(
        members.faculties.map((e) => e.name_en.replace(/\s+/g, ""))
    )
    rules = rules.concat(
        members.students.map((e) => e.name.replace(/\s+/g, ""))
    )
    rules = rules.concat(
        members.students.map((e) => e.name_en.replace(/\s+/g, ""))
    )
    rules = rules.concat(
        members.alumniAndAlumnae.map((e) => e.name.replace(/\s+/g, ""))
    )
    rules = rules.concat(
        members.alumniAndAlumnae.map((e) => e.name_en.replace(/\s+/g, ""))
    )
    // Aaa BBB
    rules = rules.concat(
        members.faculties.map((e) => {
            const splitted = e.name_en.split(" ")
            return splitted[0] + splitted[1].toUpperCase()
        })
    )
    rules = rules.concat(
        members.students.map((e) => {
            const splitted = e.name_en.split(" ")
            return splitted[0] + splitted[1].toUpperCase()
        })
    )
    return rules
}

const linkIcon = (url: string) => {
    if (url) {
        return (
            <Link href={url}>
                <AiOutlineLink style={style.icon}></AiOutlineLink>
            </Link>
        )
    }
}

export const Publications = (props: { en: boolean }) => {
    const papersList: JSX.Element[] = []
    const presentationsList: JSX.Element[] = []
    const activitiesList: JSX.Element[] = []
    let key = 0
    const rules: string[] = createRules()
    Array.prototype.forEach.call(publications.papers, (element) => {
        papersList.push(
            <ListItem key={key}>
                {linkIcon(element.url)}
                <Highlight
                    query={rules}
                    styles={{
                        px: "0.5",
                        py: "0.5",
                        bg: "orange.100",
                    }}
                >
                    {props.en ? element.en : element.ja}
                </Highlight>
            </ListItem>
        )
        key++
    })
    Array.prototype.forEach.call(publications.presentations, (element) => {
        presentationsList.push(
            <ListItem key={key}>
                {linkIcon(element.url)}
                <Highlight
                    query={rules}
                    styles={{
                        px: "0.5",
                        py: "0.5",
                        bg: "orange.100",
                    }}
                >
                    {props.en ? element.en : element.ja}
                </Highlight>
            </ListItem>
        )
        key++
    })
    Array.prototype.forEach.call(publications.activities, (element) => {
        activitiesList.push(
            <ListItem key={key}>
                {element.url ? (
                    <Link href={element.url}>
                        <Highlight
                            query={rules}
                            styles={{
                                px: "0.5",
                                py: "0.5",
                                bg: "orange.100",
                            }}
                        >
                            {props.en ? element.en : element.ja}
                        </Highlight>
                        <AiOutlineLink style={style.iconEnd}></AiOutlineLink>
                    </Link>
                ) : (
                    <Highlight
                        query={rules}
                        styles={{
                            px: "0.5",
                            py: "0.5",
                            bg: "orange.100",
                        }}
                    >
                        {props.en ? element.en : element.ja}
                    </Highlight>
                )}
            </ListItem>
        )
        key++
    })
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Heading as="h3" fontSize="3xl">
                            {props.en
                                ? "Publication(peer-reviewed)"
                                : "論文(査読有り)"}
                        </Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <UnorderedList>{papersList}</UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Heading as="h3" fontSize="3xl">
                            {props.en
                                ? "Public presentation"
                                : "その他発表など"}
                        </Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <UnorderedList>{presentationsList}</UnorderedList>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Heading as="h3" fontSize="3xl">
                            {props.en ? "Activity" : "その他活動など"}
                        </Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <UnorderedList>{activitiesList}</UnorderedList>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

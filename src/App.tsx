import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Grid,
    Image,
    VStack,
    Card,
    Center,
    Divider,
    SimpleGrid,
    CardBody,
    CardHeader,
    Heading,
    UnorderedList,
    ListItem,
    Link,
    IconButton,
    Tooltip,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import {ColorModeSwitcher} from "./ColorModeSwitcher"
import {AiOutlineMail} from "react-icons/ai"
import {GoLinkExternal} from "react-icons/go"
import {HiTranslate} from "react-icons/hi"
import {IconContext} from "react-icons/lib"
import {useTranslation} from "react-i18next"
import {Members} from "./Members"
import {Publications} from "./Publications"
import {langList} from "./data/i18n/i18n"
import i18n from "i18next"
import theme from "./theme"
import "@fontsource/biz-udpgothic"
import "@fontsource/ibm-plex-mono"

const style: {[key: string]: React.CSSProperties} = {
    image: {
        maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
        WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0))",
        objectFit: "cover",
        height: "100vh",
        width: "100vw",
    },
    icon: {
        display: "inline-block",
        verticalAlign: "middle",
    },
}

const topics = [
    {
        icon: null,
        name: "Low-Latency IP Video Transmission",
        text: null,
    },
    {
        icon: null,
        name: "Fast Virtual Machine Live Migration in Environments with Significantly Low CPU Cache Hit Rates",
        text: null,
    },
    {
        icon: null,
        name: "Application operating core aware 100GbE NIC on FPGA",
        text: null,
    },
    {
        icon: null,
        name: "Media over QUIC",
        text: null,
    },
]

export const App = () => {
    const [en, setEn] = React.useState(false)
    const [load, setLoad] = React.useState(false)
    const [fontLoad, setFontLoad] = React.useState(false)
    const changeLang = (lang: string) => {
        i18n.changeLanguage(lang)
        setEn(lang === "ja" ? false : true)
    }
    const langElems = langList.map((e) => {
        return <MenuItem onClick={() => changeLang(e.key)}>{e.value}</MenuItem>
    })
    const {t} = useTranslation()
    React.useEffect(() => {
        if (document.readyState === "complete") {
            //already loaded
            setLoad(true)
        }
        window.addEventListener("load", () => setLoad(true))
        document.fonts.ready.then(() => setFontLoad(true))
    }, [])
    return (
        <Box
            overflowX="hidden"
            position={load && fontLoad ? "relative" : "fixed"}
        >
            <ChakraProvider theme={theme}>
                <Box textAlign="left">
                    <Image
                        src={`${process.env.PUBLIC_URL}/bg.webp`}
                        pos="absolute"
                        zIndex="-1"
                        style={style.image}
                    ></Image>
                    <Grid minH="95vh" p={3}>
                        <Box justifySelf="flex-end">
                            <ColorModeSwitcher textColor="whiteAlpha.800" />
                            <Tooltip label={t("tooltip.langSwitcher")}>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label="language"
                                        icon={<HiTranslate />}
                                        variant="ghost"
                                        textColor="whiteAlpha.800"
                                        size="lg"
                                    />
                                    <MenuList>{langElems}</MenuList>
                                </Menu>
                            </Tooltip>
                        </Box>

                        <VStack alignItems="left" marginTop={["10", "0", "0"]}>
                            <Box
                                fontSize="5xl"
                                paddingLeft="14vw"
                                lineHeight="50px"
                                color="white"
                            >
                                <Heading
                                    fontSize="5xl"
                                    as="h1"
                                    display="inline-block"
                                >
                                    {"> SFC-RG"}
                                </Heading>
                            </Box>

                            <Heading
                                as="h1"
                                fontSize={["7xl", null, "9xl"]}
                                paddingLeft="14vw"
                                paddingBottom={["100", "200", null]}
                                lineHeight="150px"
                                color="white"
                            >
                                VIRT
                            </Heading>
                        </VStack>
                    </Grid>
                </Box>
                <Center height="14">
                    <Divider orientation="vertical" />
                </Center>
                <Box marginTop="100px">
                    <Card
                        marginX={["4", null, "10"]}
                        padding={["2", null, "10"]}
                        variant="filled"
                        size="lg"
                    >
                        <CardHeader>
                            <Heading as="h2" fontSize={["4xl", null, "6xl"]}>
                                {t("heading.about")}
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text fontSize="xl" whiteSpace="pre-line">
                                {t("text.about")}
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
                <Box marginTop="20" paddingX={["4", null, "10"]}>
                    <Heading as="h2" fontSize="4xl" paddingBottom="4">
                        {t("heading.topics")}
                    </Heading>
                    <Text whiteSpace="pre-line">{t("text.topics")}</Text>
                    <IconContext.Provider value={{size: "100px"}}>
                        <SimpleGrid
                            columns={[1, null, 2]}
                            spacing={4}
                            marginTop="10"
                        >
                            {topics.map((topic) => (
                                <Card
                                    key={topic.name}
                                    align="center"
                                    variant="outline"
                                    size="sm"
                                >
                                    <CardBody>
                                        <VStack
                                            minHeight="64px"
                                            align="center"
                                            justify="center"
                                        >
                                            <Heading
                                                as="h3"
                                                fontSize={"sm"}
                                                textAlign="center"
                                            >
                                                {topic.name}
                                            </Heading>
                                            <Text align="center">
                                                {topic.text}
                                            </Text>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </IconContext.Provider>
                </Box>
                <Box marginTop="20" paddingX={["4", null, "10"]}>
                    <Heading as="h2" fontSize="4xl" paddingBottom="4">
                        {t("heading.members")}
                    </Heading>
                    <Text whiteSpace="pre-wrap">{t("text.members")}</Text>
                    <Members en={en} />
                </Box>
                <Box marginTop="20" paddingX={["4", null, "10"]}>
                    <Heading as="h2" fontSize="4xl" paddingBottom="4">
                        {t("heading.publications")}
                    </Heading>
                    <Text paddingBottom="4">{t("text.publications")}</Text>
                    <Publications en={en} />
                </Box>
                <Box marginTop="20" paddingX={["4", null, "10"]}>
                    <Heading as="h2" fontSize="4xl" paddingBottom="4">
                        {t("heading.contact")}
                    </Heading>
                    <Text>{t("text.contact")}</Text>
                </Box>
                <Box
                    bg="#202020"
                    color="white"
                    marginTop="10"
                    padding={["4", null, "10"]}
                >
                    <Heading as="h2" fontSize="20" marginBottom="6">
                        {t("heading.links")}
                    </Heading>
                    <UnorderedList>
                        <ListItem>
                            <Link
                                color="teal.500"
                                href="https://www.sfc.keio.ac.jp/"
                                marginRight="1"
                            >
                                {t("text.linkSFC")}
                            </Link>
                            <GoLinkExternal style={style.icon} />
                        </ListItem>
                        <ListItem>
                            <Link
                                color="teal.500"
                                href="https://rg.sfc.keio.ac.jp/"
                                marginRight="1"
                            >
                                {t("text.linkRG")}
                            </Link>
                            <GoLinkExternal style={style.icon} />
                        </ListItem>
                        <ListItem>
                            <Link
                                color="teal.500"
                                href="https://www.wide.ad.jp/"
                                marginRight="1"
                            >
                                {t("text.linkWIDE")}
                            </Link>
                            <GoLinkExternal style={style.icon} />
                        </ListItem>
                    </UnorderedList>
                    <VStack marginTop="10">
                        <Text>©{new Date().getFullYear()} VIRT, SFC-RG</Text>
                        <Box>
                            <AiOutlineMail style={style.icon}></AiOutlineMail>
                            <Link
                                color="teal.500"
                                href="mailto:virt@sfc.wide.ad.jp"
                                marginLeft="1"
                            >
                                virt@sfc.wide.ad.jp
                            </Link>
                        </Box>
                    </VStack>
                </Box>
            </ChakraProvider>
        </Box>
    )
}

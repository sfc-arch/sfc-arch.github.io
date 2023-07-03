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
    Spinner,
    Fade,
    ScaleFade as SlideFade,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { TypeAnimation } from "react-type-animation"
import { BiNetworkChart } from "react-icons/bi"
import { AiOutlineCloudServer, AiOutlineMail } from "react-icons/ai"
import { GiNetworkBars } from "react-icons/gi"
import { GoLinkExternal } from "react-icons/go"
import { HiTranslate } from "react-icons/hi"
import { IconContext } from "react-icons/lib"
import { useTranslation } from "react-i18next"
import { Members } from "./Members"
import { Publications } from "./Publications"
import { langList } from "./data/i18n/i18n"
import i18n from "i18next"
import theme from "./theme"
import "@fontsource/biz-udpgothic"
import "@fontsource/ibm-plex-mono"

const style: { [key: string]: React.CSSProperties } = {
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
    const { t } = useTranslation()
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
                <Fade in={!(load && fontLoad)} unmountOnExit={true}>
                    <Center
                        position="fixed"
                        minH="100vh"
                        minW="100vw"
                        bgColor="white"
                    >
                        <Spinner
                            color="blackAlpha.800"
                            size="xl"
                            marginRight="10"
                        />
                        <Box
                            fontSize="5xl"
                            lineHeight="50px"
                            color="#C9E9FA"
                            fontFamily={"sans-serif"}
                        >
                            {"> SFC-"}
                            <Heading
                                fontSize="5xl"
                                as="h1"
                                display="inline-block"
                                color="#0369A1"
                            >
                                {"RG"}
                            </Heading>
                        </Box>
                    </Center>
                </Fade>
                <SlideFade in={load && fontLoad}>
                    <Box textAlign="left">
                        <Image
                            src="output.webp"
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
                                        />
                                        <MenuList>{langElems}</MenuList>
                                    </Menu>
                                </Tooltip>
                            </Box>

                            <VStack
                                alignItems="left"
                                marginTop={["10", "0", "0"]}
                                textColor="whiteAlpha.800"
                            >
                                <Box
                                    fontSize="4xl"
                                    paddingLeft="14vw"
                                    lineHeight="50px"
                                    color="#C9E9FA"
                                >
                                    {"> SFC-"}
                                    <Heading
                                        fontSize="4xl"
                                        as="h1"
                                        display="inline-block"
                                        color="#0369A1"
                                    >
                                        {"RG"}
                                    </Heading>
                                </Box>

                                <Heading
                                    as="h1"
                                    fontSize={["7xl", null, "9xl"]}
                                    paddingLeft="14vw"
                                    paddingBottom={["100", "200", null]}
                                    lineHeight="150px"
                                >
                                    rgroot
                                </Heading>
                                <Box marginBottom="50" minH="5rem">
                                    <VStack verticalAlign="middle">
                                        <Text
                                            fontSize={["3xl", null, "6xl"]}
                                            lineHeight="6rem"
                                            minH="6rem"
                                            display="inline"
                                            verticalAlign="middle"
                                            textAlign="center"
                                            whiteSpace="nowrap"
                                            overflow="hidden"
                                        >
                                            <TypeAnimation
                                                sequence={[
                                                    "build",
                                                    3000,
                                                    "operate",
                                                    3000,
                                                ]}
                                                cursor={true}
                                                repeat={Infinity}
                                                speed={60}
                                                wrapper="span"
                                            ></TypeAnimation>
                                            <Text as="span">our network.</Text>
                                        </Text>
                                    </VStack>
                                </Box>
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
                            align="center"
                        >
                            <CardHeader>
                                <Heading
                                    as="h2"
                                    fontSize={["4xl", null, "6xl"]}
                                    textAlign="center"
                                >
                                    {t("heading.about")}
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text
                                    fontSize="xl"
                                    textAlign="center"
                                    whiteSpace="pre-line"
                                >
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
                        <IconContext.Provider value={{ size: "100px" }}>
                            <SimpleGrid
                                columns={[1, null, 3]}
                                spacing={10}
                                marginTop="10"
                            >
                                <Card
                                    align="center"
                                    variant="outline"
                                    size="sm"
                                >
                                    <CardHeader>
                                        <AiOutlineCloudServer></AiOutlineCloudServer>
                                    </CardHeader>
                                    <CardBody>
                                        <VStack>
                                            <Heading
                                                as="h3"
                                                fontSize={"sm"}
                                                textAlign="center"
                                            >
                                                {t("heading.topicHighSpeed")}
                                            </Heading>
                                            <Text align="center">
                                                {t("text.topicHighSpeed")}
                                            </Text>
                                        </VStack>
                                    </CardBody>
                                </Card>
                                <Card
                                    align="center"
                                    variant="outline"
                                    size="sm"
                                >
                                    <CardHeader>
                                        <BiNetworkChart></BiNetworkChart>
                                    </CardHeader>
                                    <CardBody>
                                        <VStack>
                                            <Heading
                                                as="h3"
                                                fontSize="sm"
                                                textAlign="center"
                                            >
                                                {t(
                                                    "heading.topicNextGeneration"
                                                )}
                                            </Heading>
                                            <Text align="center">
                                                {t("text.topicNextGeneration")}
                                            </Text>
                                        </VStack>
                                    </CardBody>
                                </Card>
                                <Card
                                    align="center"
                                    variant="outline"
                                    size="sm"
                                >
                                    <CardHeader>
                                        <GiNetworkBars></GiNetworkBars>
                                    </CardHeader>
                                    <CardBody>
                                        <VStack>
                                            <Heading
                                                as="h3"
                                                fontSize="sm"
                                                textAlign="center"
                                            >
                                                {t("heading.topicIoT")}
                                            </Heading>
                                            <Text align="center">
                                                {t("text.topicIoT")}
                                            </Text>
                                        </VStack>
                                    </CardBody>
                                </Card>
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
                        bg="#2D3748"
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
                                    href="https://www.sfc.wide.ad.jp/"
                                    marginRight="1"
                                >
                                    {t("text.linkMuraiLab")}
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
                            <Text>©2022 SFC-RG / rgroot</Text>
                            <Box>
                                <AiOutlineMail
                                    style={style.icon}
                                ></AiOutlineMail>
                                <Link
                                    color="teal.500"
                                    href="mailto:rgroot@sfc.wide.ad.jp"
                                    marginLeft="1"
                                >
                                    rgroot@sfc.wide.ad.jp
                                </Link>
                            </Box>
                        </VStack>
                    </Box>
                </SlideFade>
            </ChakraProvider>
        </Box>
    )
}

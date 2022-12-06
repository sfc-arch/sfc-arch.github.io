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
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { TypeAnimation } from "react-type-animation"
import { BiNetworkChart } from "react-icons/bi"
import { AiOutlineCloudServer, AiOutlineMail } from "react-icons/ai"
import { GiNetworkBars } from "react-icons/gi"
import { GoLinkExternal } from "react-icons/go"
import { HiTranslate } from "react-icons/hi"
import { IconContext } from "react-icons/lib"
import { Members } from "./Members"
import { Publications } from "./Publications"
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
    const changeLang = () => setEn(!en)
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
                        <Text color="blackAlpha.800" fontSize="2xl">
                            Keio SFC
                        </Text>
                    </Center>
                </Fade>
                <SlideFade in={load && fontLoad}>
                    <Box textAlign="left" textColor="whiteAlpha.800">
                        <Image
                            src="output.jpg"
                            pos="absolute"
                            zIndex="-1"
                            style={style.image}
                        ></Image>
                        <Grid minH="95vh" p={3}>
                            <Box justifySelf="flex-end">
                                <ColorModeSwitcher />
                                <Tooltip
                                    label={
                                        en
                                            ? "言語を日本語に変更"
                                            : "Change language to english"
                                    }
                                >
                                    <IconButton
                                        aria-label="language"
                                        icon={<HiTranslate />}
                                        variant="ghost"
                                        onClick={changeLang}
                                    />
                                </Tooltip>
                            </Box>

                            <VStack
                                alignItems="left"
                                marginTop={["10", "0", "0"]}
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
                                    {en ? "About rgroot" : "rgrootについて"}
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                <Text
                                    fontSize="xl"
                                    textAlign="center"
                                    whiteSpace="pre-line"
                                >
                                    {en
                                        ? "rgroot is one of the research/study groups in the Tokuda/Murai Joint Research Project at Keio University Shonan Fujisawa Campus.\nOur research activities consist of both research on information and communication technology and actual network operation, including laboratory network operation, paper lectures on network technology, and promotion of individual research.\nOur group is responsible for managing the network used by the joint research project as a whole."
                                        : "rgroot研究グループは慶應義塾大学湘南藤沢キャンパス徳田・村井合同研究プロジェクト内における研究グループのひとつです。\n研究室ネットワークの運用、ネットワーク技術に関する論文の輪講、各自の研究の推進といった具合に、情報通信技術に関する研究と実ネットワークの運用の両輪で研究活動を行っています。"}
                                </Text>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box marginTop="20" paddingX={["4", null, "10"]}>
                        <Heading as="h2" fontSize="4xl" paddingBottom="4">
                            {en ? "Research topics" : "研究トピック"}
                        </Heading>
                        <Text whiteSpace="pre-line">
                            {en
                                ? "Our main research topics include the following, but students are not limited to only these.\nMembers are free to choose and tackle a topic of their choice. "
                                : "主な研究トピックとして次のような項目が挙げられますが、必ずしもこれらに限定されることはありません。\n各自が柔軟にテーマを設定して取り組んでいます。"}
                        </Text>
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
                                                {en
                                                    ? "High-speed internet technology"
                                                    : "高速インターネットアーキテクチャ"}
                                            </Heading>
                                            <Text align="center">
                                                {en
                                                    ? "(label switching, content delivery network technology)"
                                                    : "(ラベルスイッチ技術,コンテンツデリバリネットワーク技術)"}
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
                                                {en
                                                    ? "Next-generation internet infrastructure technology"
                                                    : "次世代インターネット基盤技術"}
                                            </Heading>
                                            <Text align="center">
                                                {en
                                                    ? "(routing, IPv6, mobile internet, multicast, DNS)"
                                                    : "(ルーティング, IPv6, モバイルインターネット, マルチキャスト, DNS)"}
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
                                                {en
                                                    ? "Wireless networking for IoT devices"
                                                    : "IoT向け無線通信技術"}
                                            </Heading>
                                            <Text align="center">
                                                (LPWA, LoRaWAN)
                                            </Text>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </SimpleGrid>
                        </IconContext.Provider>
                    </Box>
                    <Box marginTop="20" paddingX={["4", null, "10"]}>
                        <Heading as="h2" fontSize="4xl" paddingBottom="4">
                            {en ? "Members" : "メンバー"}
                        </Heading>
                        <Text whiteSpace="pre-wrap">
                            {en
                                ? "PM: Faculty of Policy Management\nEI: Faculty of Environment and Infromation Studies\nMAG: Graduate School of Media and Governance"
                                : ""}
                        </Text>
                        <Members en={en} />
                    </Box>
                    <Box marginTop="20" paddingX={["4", null, "10"]}>
                        <Heading as="h2" fontSize="4xl" paddingBottom="4">
                            {en
                                ? "Publication, Presentation, Activity"
                                : "論文、発表、活動等"}
                        </Heading>
                        <Text paddingBottom="4">
                            {en ? "Click to open." : "クリックで開きます。"}
                        </Text>
                        <Publications en={en} />
                    </Box>
                    <Box marginTop="20" paddingX={["4", null, "10"]}>
                        <Heading as="h2" fontSize="4xl" paddingBottom="4">
                            {en ? "Contact us" : "連絡先"}
                        </Heading>
                        <Text>
                            {en
                                ? "Those with interest in rgroot's activities should contact us by emailing to the mail address in the footer of this page."
                                : "rgrootの活動についてご質問のある方は、フッターに記載のメールアドレスまでメールをください。"}
                        </Text>
                    </Box>
                    <Box
                        bg="#2D3748"
                        color="white"
                        marginTop="10"
                        padding={["4", null, "10"]}
                    >
                        <Heading as="h2" fontSize="20" marginBottom="6">
                            {en ? "Related links" : "関連リンク"}
                        </Heading>
                        <UnorderedList>
                            <ListItem>
                                <Link
                                    color="teal.500"
                                    href="https://www.sfc.keio.ac.jp/"
                                    marginRight="1"
                                >
                                    {en
                                        ? "Keio University Shonan Fujisawa Campus"
                                        : "慶應義塾大学湘南藤沢キャンパス"}
                                </Link>
                                <GoLinkExternal style={style.icon} />
                            </ListItem>
                            <ListItem>
                                <Link
                                    color="teal.500"
                                    href="https://rg.sfc.keio.ac.jp/"
                                    marginRight="1"
                                >
                                    {en
                                        ? "Tokuda/Murai/Kusumoto/Nakamura/Van Meter/Uehara/Mitsugi/Nakazawa/Takeda Joint Research Project"
                                        : "徳田・村井・楠本・中村・高汐・バンミーター・植原・三次・中澤・武田合同研究プロジェクト"}
                                </Link>
                                <GoLinkExternal style={style.icon} />
                            </ListItem>
                            <ListItem>
                                <Link
                                    color="teal.500"
                                    href="https://www.sfc.wide.ad.jp/"
                                    marginRight="1"
                                >
                                    {en
                                        ? "Internet Research Lab (Jun Murai Laboratory)"
                                        : "Internet Research Lab (村井研究室)"}
                                </Link>
                                <GoLinkExternal style={style.icon} />
                            </ListItem>
                            <ListItem>
                                <Link
                                    color="teal.500"
                                    href="https://www.wide.ad.jp/"
                                    marginRight="1"
                                >
                                    WIDE Project
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

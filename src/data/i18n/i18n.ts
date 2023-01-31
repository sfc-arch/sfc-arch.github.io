import en from "./en.json"
import ja from "./ja.json"

export const resources = {
    ja: {
      translation: ja
    },
    en: {
      translation: en
    }
}

export const langList = [
    {key: "ja", value: ja.lang},
    {key: "en", value: en.lang}
]
const BASE_GENRES = "&with_genres="
const BASE_YEAR = "&primary_release_year="

const BASE_TV_GENRES = "&with_genres="
const BASE_TV_YEAR = "&first_air_date_year="

const BASE_COUNTRY = "&with_origin_country="


export const FILTER_MOVIE_GENRES = [
    {id: "", label: "all genres"},
    {id: `${BASE_GENRES}28`, label: "action"},
    {id: `${BASE_GENRES}12`, label: "adventure"},
    {id: `${BASE_GENRES}35`, label: "comedy"},
    {id: `${BASE_GENRES}80`, label: "crime"},
    {id: `${BASE_GENRES}18`, label: "drama"},
    {id: `${BASE_GENRES}27`, label: "horror"},
    {id: `${BASE_GENRES}9648`, label: "mystery"},
    {id: `${BASE_GENRES}1070`, label: "romance"},
    {id: `${BASE_GENRES}878`, label: "sciFi"},
    {id: `${BASE_GENRES}53`, label: "thriller"},
]

export const FILTER_MOVIE_YEAR = [
    {id: "", label: "all year"},
    {id: `${BASE_YEAR}2000`, label: "2000"},
    {id: `${BASE_YEAR}2001`, label: "2001"},
    {id: `${BASE_YEAR}2002`, label: "2002"},
    {id: `${BASE_YEAR}2003`, label: "2003"},
    {id: `${BASE_YEAR}2004`, label: "2004"},
    {id: `${BASE_YEAR}2005`, label: "2005"},
    {id: `${BASE_YEAR}2006`, label: "2006"},
    {id: `${BASE_YEAR}2007`, label: "2007"},
    {id: `${BASE_YEAR}2008`, label: "2008"},
    {id: `${BASE_YEAR}2009`, label: "2009"},
    {id: `${BASE_YEAR}2010`, label: "2010"},
    {id: `${BASE_YEAR}2011`, label: "2011"},
    {id: `${BASE_YEAR}2012`, label: "2012"},
    {id: `${BASE_YEAR}2013`, label: "2013"},
    {id: `${BASE_YEAR}2014`, label: "2014"},
    {id: `${BASE_YEAR}2015`, label: "2015"},
    {id: `${BASE_YEAR}2016`, label: "2016"},
    {id: `${BASE_YEAR}2017`, label: "2017"},
    {id: `${BASE_YEAR}2018`, label: "2018"},
    {id: `${BASE_YEAR}2019`, label: "2019"},
    {id: `${BASE_YEAR}2020`, label: "2020"},
    {id: `${BASE_YEAR}2021`, label: "2021"},
    {id: `${BASE_YEAR}2022`, label: "2022"},
    {id: `${BASE_YEAR}2023`, label: "2023"},
    {id: `${BASE_YEAR}2024`, label: "2024"},
    {id: `${BASE_YEAR}2025`, label: "2025"},
    {id: `${BASE_YEAR}2026`, label: "2026"},
]


export const FILTER_TV_GENRES = [
    {id: "", label: "all genres"},
    {id: `${BASE_TV_GENRES}10759`, label: "action & adventure"},
    {id: `${BASE_TV_GENRES}35`, label: "comedy"},
    {id: `${BASE_TV_GENRES}80`, label: "crime"},
    {id: `${BASE_TV_GENRES}18`, label: "drama"},
    {id: `${BASE_TV_GENRES}10765`, label: "sci-fi & fantasy"},
    {id: `${BASE_TV_GENRES}9648`, label: "mystery"},
    {id: `${BASE_TV_GENRES}10768`, label: "war & politics"},
    {id: `${BASE_TV_GENRES}37`, label: "western"},
    {id: `${BASE_TV_GENRES}10764`, label: "reality"},
    {id: `${BASE_TV_GENRES}10767`, label: "talk show"},
]

export const FILTER_TV_YEAR = [
    {id: "", label: "all year"},
    ...Array.from({length: 27}, (_, i) => {
        const year = 2000 + i
        return {id: `${BASE_TV_YEAR}${year}`, label: `${year}`}
    })
]

export const FILTER_COUNTRY = [
    {id: "", label: "all countries"},
    {id: `${BASE_COUNTRY}US`, label: "USA"},
    {id: `${BASE_COUNTRY}GB`, label: "UK"},
    {id: `${BASE_COUNTRY}KR`, label: "Korea"},
    {id: `${BASE_COUNTRY}JP`, label: "Japan"},
    {id: `${BASE_COUNTRY}FR`, label: "France"},
    {id: `${BASE_COUNTRY}DE`, label: "Germany"},
    {id: `${BASE_COUNTRY}IN`, label: "India"},
    {id: `${BASE_COUNTRY}CN`, label: "China"},
    {id: `${BASE_COUNTRY}IT`, label: "Italy"},
    {id: `${BASE_COUNTRY}ES`, label: "Spain"},
    {id: `${BASE_COUNTRY}TR`, label: "Turkey"},
    {id: `${BASE_COUNTRY}TH`, label: "Thailand"},
    {id: `${BASE_COUNTRY}MX`, label: "Mexico"},
    {id: `${BASE_COUNTRY}AU`, label: "Australia"},
    {id: `${BASE_COUNTRY}CA`, label: "Canada"},
    {id: `${BASE_COUNTRY}RU`, label: "Russia"},
    {id: `${BASE_COUNTRY}BR`, label: "Brazil"},
    {id: `${BASE_COUNTRY}SE`, label: "Sweden"},
    {id: `${BASE_COUNTRY}DK`, label: "Denmark"},
    {id: `${BASE_COUNTRY}NO`, label: "Norway"},
    {id: `${BASE_COUNTRY}UZ`, label: "Uzbekistan"},
]
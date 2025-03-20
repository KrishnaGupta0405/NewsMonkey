import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import "../index.css"

const dummy = 'https://images5.alphacoders.com/127/1276272.jpg'

export class News extends Component {
  // static defaultProps = {
  //   country : "in",
  //   pageSize : 8,
  //   API_KEY: "57b5c63e85834bf2b8d6acb2fcc714c4",
  //   category:"general"
  // }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    API_KEY: PropTypes.string,
    category: PropTypes.string
  }

  constructor(props){
    super(props);
    console.log("The is constructor")
    this.state={
      // articles: this.article,
      articles:[],
      loading:false,
      page:1,
      totalResults: 0
    }
    document.title= `${this.props.category} - NewsMonkey`
    // we can also make this document.title to shows capitalized title...
  }
  async updateNews(){
    this.props.setProgress(5)
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading : true}); // with the help of this we can set the Spiner
    this.props.setProgress(30)
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData)
    this.props.setProgress(60)
    this.setState({ 
      articles: parseData.articles, 
      loading:false,
      totalResults: parseData.totalResults
    })
    this.props.setProgress(100)
  }

  
async componentDidMount(){
  console.log("The is componentDidMount")
  this.updateNews()
}

// handleNextClick= async ()=>{
//   console.log("next")
//   this.setState({page: this.state.page + 1})
//   this.updateNews();

// }

// handlePrevClick= async ()=>{
//   console.log("prev")
//   this.setState({page: this.state.page - 1})
//   this.updateNews();
// }

fetchMoreData = async () => {
  this.setState({page: this.state.page + 1})
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    // this.setState({loading : true}); // with the help of this we can set the Spiner
  let data = await fetch(url);
  let parseData = await data.json()
  console.log(parseData)
  this.setState({ 
    articles: this.state.articles.concat(parseData.articles), 
    loading:false,
    totalResults: parseData.totalResults
  })

};
 
  render() {
    return (
      <>
        <h2 className="text-center h2 mt-2">NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spiner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner/>}
        >
        <div className="container my-5">
        <div className="row">
              {this.state.articles.map((article) => (
                <div className="col-md-4" key={article.url}>
                  <Newsitem title={article.title.slice(0, 45) + " ... "} description={article.description} imageUrl={article.urlToImage ? article.urlToImage : `${dummy}` } newsUrl={article.url} source={article.source.name} author={article.author} publishedAt={article.publishedAt} />
                </div>
                 )
              )}
          </div>
        </div>
        </InfiniteScroll>
      {/* //  todo- check how to do slicing element.title.slice(0,45)+" ... for descirption"  */}
      {/* <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page<=1} >&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={this.state.page + 1 >
        Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
        {/* todo- this next button is not being disabled even after the last page arrives, check the bug later.... */}
      {/* </div> */} 
      </>
    )
  }
}


export default News


//   article=[
//     {
//         "source": {
//             "id": null,
//             "name": "BBC News"
//         },
//         "author": null,
//         "title": "Nvidia beats Microsoft to become world's most valuable company - BBC.com",
//         "description": "The Californian firm's meteoric rise has been fuelled by its dominance of the \"new gold\" - AI chips.",
//         "url": "https://www.bbc.com/news/articles/cyrr40x0z2mo",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6f82/live/ce1422c0-2da3-11ef-9d79-b966227f8b9b.jpg",
//         "publishedAt": "2024-06-19T10:06:25Z",
//         "content": "By Mitchell Labiak, Business reporter\r\nNvidia boss Jensen Huang has overseen explosive growth\r\nChip-maker Nvidia became the worlds most valuable company after its share price climbed to an all-time h… [+3015 chars]"
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": "NBC News",
//         "title": "Extreme heat kills hundreds of Muslim pilgrims - NBC News",
//         "description": null,
//         "url": "https://news.google.com/rss/articles/CBMiSGh0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3Mvd29ybGQvaGVhdC1raWxscy1tdXNsaW0tcGlsZ3JpbXMtcmNuYTE1Nzg5MdIBK2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL25ld3MvYW1wL3JjbmExNTc4OTE?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2024-06-19T09:06:41Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "BBC News"
//         },
//         "author": null,
//         "title": "US soldier Gordon Black jailed for nearly four years in Russia - BBC.com",
//         "description": "Gordon Black was sentenced for threatening to kill his girlfriend and theft, state media report.",
//         "url": "https://www.bbc.com/news/articles/cd11v674rd5o",
//         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d5d5/live/9ad6eb50-2ded-11ef-bae9-4b6b9a0092b7.png",
//         "publishedAt": "2024-06-19T08:53:08Z",
//         "content": "A Russian court has sentenced a US soldier to three years and nine months in jail on charges of theft and threatening to kill his girlfriend, state news agencies reported.\r\nStaff Sgt Gordon Black was… [+1599 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Page Six"
//         },
//         "author": "Nika Shakhnazarova",
//         "title": "Jessica Biel seen for the first time since husband Justin Timberlake's DWI arrest in the Hamptons - Page Six",
//         "description": "The actress, 42, appeared downcast in between takes of her upcoming Prime Video thriller series “The Better Sister” that was being filmed in NYC on Tuesday.",
//         "url": "https://pagesix.com/2024/06/19/entertainment/jessica-biel-seen-for-the-first-time-since-husband-justin-timberlakes-dwi-arrest-in-the-hamptons/",
//         "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/06/84070803.jpg?quality=75&strip=all&w=1024",
//         "publishedAt": "2024-06-19T08:06:00Z",
//         "content": "Jessica Biel was hard at work just hours after her husband Justin Timberlake’s arrest. GC Images\r\nJessica Biel was hard at work just hours after her husband Justin Timberlake was arrested on DWI-rela… [+2983 chars]"
//     },
//     // {
//     //     "source": {
//     //         "id": "fox-news",
//     //         "name": "Fox News"
//     //     },
//     //     "author": "Chris Eberhart",
//     //     "title": "NASA predicts 'once-in-a-lifetime event' this summer – 5 things you need to know - Fox News",
//     //     "description": "NASA scientists say an impending nova event this summer will be so bright that it can be seen from Earth with the naked eye. \"It’s a once-in-a-lifetime event,\" NASA said.",
//     //     "url": "https://www.foxnews.com/us/nasa-predicts-once-lifetime-event-summer-5-things-need-know",
//     //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/nova-attempt-3.gif",
//     //     "publishedAt": "2024-06-19T08:00:00Z",
//     //     "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+4468 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "associated-press",
//     //         "name": "Associated Press"
//     //     },
//     //     "author": "JON GAMBRELL",
//     //     "title": "Ship attacked by Yemen's Houthi rebels in fatal assault sinks in Red Sea in their second sinking - The Associated Press",
//     //     "description": "A bulk carrier sank in the Red Sea days after an attack by Yemen’s Houthi rebels believed to have killed one mariner on board. The Tutor is the second ship to be sunk in the rebel campaign. The British military’s United Kingdom Maritime Trade Operations cente…",
//     //     "url": "https://apnews.com/article/houthi-rebels-ship-attack-red-sea-yemen-bfa7d321e55c5bb59b268b82ef3c56ba",
//     //     "urlToImage": "https://dims.apnews.com/dims4/default/00916ea/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe5%2Fab%2Fed107cf5d6eb5d1ca745a103cfb3%2F3d0dc4f7eea44535a8617f9c882ea469",
//     //     "publishedAt": "2024-06-19T06:37:00Z",
//     //     "content": "DUBAI, United Arab Emirates (AP) A bulk carrier sank days after an attack by Yemens Houthi rebels believed to have killed one mariner on board, authorities said early Wednesday, the second ship sunk … [+3657 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "associated-press",
//     //         "name": "Associated Press"
//     //     },
//     //     "author": "KIM TONG-HYUNG",
//     //     "title": "Putin in North Korea: Russian leader meets Kim Jong Un, summit talks begin - The Associated Press",
//     //     "description": "Russian state media say Russian President Vladimir Putin and North Korean leader Kim Jong Un have signed a partnership deal during a summit in Pyongyang. Russian state media said Putin and Kim spoke face-to-face for about two hours in a meeting Wednesday that…",
//     //     "url": "https://apnews.com/article/vladimir-putin-kim-jong-un-russia-north-korea-summit-ukraine-a6b8d2c12de7ee2ab6716d4747c9850e",
//     //     "urlToImage": "https://dims.apnews.com/dims4/default/30daa00/2147483647/strip/true/crop/5366x3018+0+280/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7b%2Fae%2F2b6cf940c3872979e3e464f885b0%2F459d397845d4438db9d9dc29f1b174a3",
//     //     "publishedAt": "2024-06-19T06:35:00Z",
//     //     "content": "SEOUL, South Korea (AP) Russian President Vladimir Putin and North Korean leader Kim Jong Un signed a partnership deal during a summit in Pyongyang, in a bid to expand their economic and military coo… [+5721 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": null,
//     //         "name": "Nintendo Life"
//     //     },
//     //     "author": "Liam Doolan",
//     //     "title": "The Legend of Zelda: Echoes Of Wisdom Box Art Has Been Revealed - Nintendo Life",
//     //     "description": "And it looks absolutely stunning!",
//     //     "url": "https://www.nintendolife.com/news/2024/06/the-legend-of-zelda-echoes-of-wisdom-box-art-has-been-revealed",
//     //     "urlToImage": "https://images.nintendolife.com/2b385dc146d51/1280x720.jpg",
//     //     "publishedAt": "2024-06-19T06:15:00Z",
//     //     "content": "@Truegamer79 : If Zelda was \"reimagined\" as a cringe-inducing, antagonistic misandrist, stripped of her trademark femininity, whilst parroting inane political platitudes, and consequently defecating … [+860 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "nhl-news",
//     //         "name": "NHL News"
//     //     },
//     //     "author": null,
//     //     "title": "GAME RECAP: Oilers 5, Panthers 3 (Game 5) | Edmonton Oilers - NHL.com",
//     //     "description": "McDavid posts two goals & two assists as the Oilers force a Game 6 in the Stanley Cup Final back in Edmonton after defeating the Panthers 5-3 on Tuesday night at Amerant Bank Arena",
//     //     "url": "https://www.nhl.com/oilers/news/game-recap-oilers-5-panthers-3-game-5-06-18-24",
//     //     "urlToImage": "https://media.d3.nhle.com/image/private/t_ratio16_9-size50/prd/feasb23o6qbkxc7yqnw4.jpg",
//     //     "publishedAt": "2024-06-19T06:12:28Z",
//     //     "content": "The Panthers' push on home ice with the Stanley Cup in the building came early and often in Game 5, continuing with an early power play before the five-minute mark after Brett Kulak was called for hi… [+1432 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "google-news",
//     //         "name": "Google News"
//     //     },
//     //     "author": "Axios",
//     //     "title": "Booming consumer fades: Retail sales data shows a spending slowdown - Axios",
//     //     "description": null,
//     //     "url": "https://news.google.com/rss/articles/CBMiSmh0dHBzOi8vd3d3LmF4aW9zLmNvbS8yMDI0LzA2LzE4L2NvbnN1bWVyLXJldGFpbC1zcGVuZGluZy1zbG93ZG93bi1lY29ub2150gEA?oc=5",
//     //     "urlToImage": null,
//     //     "publishedAt": "2024-06-19T06:04:02Z",
//     //     "content": null
//     // },
//     // {
//     //     "source": {
//     //         "id": "google-news",
//     //         "name": "Google News"
//     //     },
//     //     "author": "NPR",
//     //     "title": "New Mexico wildfire has forced thousands to flee, governor says - NPR",
//     //     "description": null,
//     //     "url": "https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vd3d3Lm5wci5vcmcvMjAyNC8wNi8xOS9nLXMxLTUxNDcvbmV3LW1leGljby13aWxkZmlyZS10aG91c2FuZHMtZmxlZdIBAA?oc=5",
//     //     "urlToImage": null,
//     //     "publishedAt": "2024-06-19T04:32:03Z",
//     //     "content": null
//     // },
//     // {
//     //     "source": {
//     //         "id": null,
//     //         "name": "CBS News 8"
//     //     },
//     //     "author": "CBS 8 Staff",
//     //     "title": "SpaceX Falcon 9 rocket launch in Southern California - CBS News 8",
//     //     "description": "The company launched 20 Starlink satellites from its Falcon 9 rocket that can be seen above Southern California.",
//     //     "url": "https://www.cbs8.com/article/news/local/spacex-falcon-9-rocket-from-vandenberg-space-force-base/509-fca6ef48-eb20-478e-8c26-2e95b33c36df",
//     //     "urlToImage": "https://media.cbs8.com/assets/KFMB/images/0946e67c-c031-4ad9-8d89-b6fc7dc72f9d/20240619T051944/0946e67c-c031-4ad9-8d89-b6fc7dc72f9d_1140x641.jpg",
//     //     "publishedAt": "2024-06-19T03:52:00Z",
//     //     "content": "SAN DIEGO SpaceX launched another batch of its Starlink internet satellites into space from Vandenberg Space Force Base in Santa Barbara County on Tuesday night.\r\nThe company launched 20 Starlink sat… [+1453 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "cnn",
//     //         "name": "CNN"
//     //     },
//     //     "author": "Arit John, Eric Bradner",
//     //     "title": "Eugene Vindman, key figure at Trump’s first impeachment, will win Dem primary for Virginia open seat, CNN projects - CNN",
//     //     "description": "The Republican primary race between Virginia Rep. Bob Good, the House Freedom Caucus chair who angered allies of former President Donald Trump and former Speaker Kevin McCarthy, and state Sen. John McGuire was too early to call Tuesday night.",
//     //     "url": "https://www.cnn.com/2024/06/18/politics/virginia-primary/index.html",
//     //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24110701965992.jpg?c=16x9&q=w_800,c_fill",
//     //     "publishedAt": "2024-06-19T03:37:00Z",
//     //     "content": "The Republican primary race between Virginia Rep. Bob Good, the House Freedom Caucus chair who angered allies of former President Donald Trump and former Speaker Kevin McCarthy, and state Sen. John M… [+4851 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "usa-today",
//     //         "name": "USA Today"
//     //     },
//     //     "author": "USA TODAY",
//     //     "title": "US faces week of intense heat and cold as cities issue warnings - USA TODAY",
//     //     "description": null,
//     //     "url": "https://www.usatoday.com/story/news/nation/2024/06/18/june-heat-waves-freezing-cold-extreme-weather/74141444007/",
//     //     "urlToImage": null,
//     //     "publishedAt": "2024-06-19T02:16:16Z",
//     //     "content": null
//     // },
//     // {
//     //     "source": {
//     //         "id": null,
//     //         "name": "Deadline"
//     //     },
//     //     "author": "Armando Tinoco",
//     //     "title": "‘House Of The Dragon’s Olivia Cooke Says She Filmed An “Animalistic” Sex Scene That Was Cut: “It Was Messy As F***” - Deadline",
//     //     "description": "Olivia Cooke discusses a sex scene that was ultimately cut from House of the Dragon.",
//     //     "url": "http://deadline.com/2024/06/house-of-the-dragon-olivia-cooke-animalistic-sex-scene-cut-1235977867/",
//     //     "urlToImage": "https://deadline.com/wp-content/uploads/2024/06/olivia-cooke-fabien-frankel-house-of-the-dragon-hbo.jpg?w=1024",
//     //     "publishedAt": "2024-06-19T01:54:00Z",
//     //     "content": "Olivia Cooke discusses a sex scene that was ultimately cut from House of the Dragon.\r\nThe star of the HBO fantasy series, who plays Alicent Hightower, said she filmed an “animalistic” and “carnal” se… [+1251 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": "google-news",
//     //         "name": "Google News"
//     //     },
//     //     "author": "CNBC",
//     //     "title": "Oil inches up as war jitters outweigh surprise build in U.S. crude stocks - CNBC",
//     //     "description": null,
//     //     "url": "https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMjQvMDYvMTkvb2lsLWluY2hlcy11cC1hcy13YXItaml0dGVycy1vdXR3ZWlnaC1zdXJwcmlzZS1idWlsZC1pbi11cy1jcnVkZS1zdG9ja3MuaHRtbNIBcGh0dHBzOi8vd3d3LmNuYmMuY29tL2FtcC8yMDI0LzA2LzE5L29pbC1pbmNoZXMtdXAtYXMtd2FyLWppdHRlcnMtb3V0d2VpZ2gtc3VycHJpc2UtYnVpbGQtaW4tdXMtY3J1ZGUtc3RvY2tzLmh0bWw?oc=5",
//     //     "urlToImage": null,
//     //     "publishedAt": "2024-06-19T01:46:00Z",
//     //     "content": null
//     // },
//     // {
//     //     "source": {
//     //         "id": "cnn",
//     //         "name": "CNN"
//     //     },
//     //     "author": "Kathleen Magramo, Nectar Gan",
//     //     "title": "US blasts ‘aggressive’ China over South China Sea collision with Philippine ship - CNN",
//     //     "description": "The United States on Monday condemned China over a collision with the Philippines in the disputed South China Sea, the latest in a series of increasingly fraught confrontations that have raised the potential of a flashpoint for global conflict in the vital wa…",
//     //     "url": "https://www.cnn.com/2024/06/18/asia/us-condemns-china-scs-collision-philippines-intl-hnk/index.html",
//     //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1247968397.jpg?c=16x9&q=w_800,c_fill",
//     //     "publishedAt": "2024-06-19T01:37:00Z",
//     //     "content": "The United States on Monday condemned China over a collision with the Philippines in the disputed South China Sea, the latest in a series of increasingly fraught confrontations that have raised the p… [+5963 chars]"
//     // },
//     // {
//     //     "source": {
//     //         "id": null,
//     //         "name": "BBC News"
//     //     },
//     //     "author": null,
//     //     "title": "Willie Mays dies at 93 - BBC.com",
//     //     "description": "Mays won the World Series with the San Francisco Giants in 1954.",
//     //     "url": "https://www.bbc.com/news/articles/cp99w0wme02o",
//     //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/76ee/live/52971180-2dd9-11ef-93e4-45d8542d5b46.jpg",
//     //     "publishedAt": "2024-06-19T01:30:17Z",
//     //     "content": "Baseball legend Willie Mays, widely considered one of the best players in the sport's history, has died, according to the San Francisco Giants. \r\n\"It is with great sadness that we announce that San F… [+3505 chars]"
//     // },
//     {
//         "source": {
//             "id": "usa-today",
//             "name": "USA Today"
//         },
//         "author": "KiMi Robinson",
//         "title": "Ashanti and Nelly didn't know she was pregnant when belly-touching video went viral - USA TODAY",
//         "description": "Ashanti and Nelly sparked rumors after touching her belly in a 2023 video. It wasn't until later that she realized she was pregnant, Ashanti said.",
//         "url": "https://www.usatoday.com/story/entertainment/celebrities/2024/06/18/ashanti-nelly-pregnancy-viral-video/74144591007/",
//         "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/09/USAT/72544088007-nelly-and-ashanti-perform-at-e-11-even-miami-during-the-10th-anniversary-of-e-11-even-celebration-on-february-2-2024-in-miami-florida-photo-by-alexander-tamargo-getty-images-for-e-11-even-3.jpg?crop=4999,2812,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
//         "publishedAt": "2024-06-19T01:28:04Z",
//         "content": "When Ashanti placed her hands on her belly on stage at an event late last year, rumors started flying that she and Nelly were expecting a child as they rekindled their romance a decade after they'd s… [+3619 chars]"
//     },
//     {
//         "source": {
//             "id": "cbs-news",
//             "name": "CBS News"
//         },
//         "author": null,
//         "title": "Sen. Bob Menendez buoyed by testimony of top prosecutor, former adviser in bribery trial - CBS News",
//         "description": "Prosecutors tried to link the alleged bribes to the appointment of Philip Sellinger, New Jersey's U.S. attorney.",
//         "url": "https://www.cbsnews.com/news/bob-menendez-trial-bribery-us-attorney-new-jersey-political-adviser-testify/",
//         "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/09/0f6b04e2-ad64-49c6-87e2-5f26d23b8fb4/thumbnail/1200x630/6247ccf6b5e5a8097581ba584a3336de/ap24159797776640.jpg?v=5842509bb796a146f9b20d3e8b03dac6",
//         "publishedAt": "2024-06-19T00:34:59Z",
//         "content": "Prosecutors at the trial of Sen. Bob Menendez used the testimony of his former campaign manager on Tuesday to try to link alleged bribes of the Democrat to the appointment of New Jersey's top prosecu… [+3694 chars]"
//     }
// ]
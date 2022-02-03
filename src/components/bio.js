/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
    </div>
  )

  // return (
  //   <div className="bio">
  //     <h2 className="bio-title">About Me</h2>
  //     <div>
  //       <StaticImage
  //         className="bio-avatar"
  //         layout="fixed"
  //         formats={["auto", "webp", "avif"]}
  //         src="../images/profile-pic.png"
  //         width={100}
  //         quality={80}
  //         float= "left"
  //         alt="Profile picture"
  //       />
  //       {author?.name && (
  //         <p>
  //           C#과 C++를 좋아하는 게임 개발자입니다. 프로그래머로 버프 스튜디오라는 회사에서 일하는 중이고, 개인적으로 1인 게임 개발자로 활동 중입니다.<br/><br/>
  //           지금은 Unity와 Unreal을 주력으로 사용해 게임을 개발하고 있으며, 버프 스튜디오에서 콘솔 게임 개발팀의 프로그래머로서 게임을 개발하고 있습니다.<br/><br/>
  //           엔진 개발, 그래픽 엔진 개발을 공부하고 있는 중입니다.
  //           {` `}
  //           {/* <a href={`https://twitter.com/${social?.twitter || ``}`}>
  //             You should follow them on Twitter
  //           </a> */}
  //         </p>
  //       )}
  //     </div>
  //   </div>
  // )
}

export default Bio

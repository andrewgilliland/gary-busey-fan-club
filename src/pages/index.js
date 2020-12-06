import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from "../components/Container"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      style={{
        background: `linear-gradient(135deg,#05f,#09f)`,
        paddingTop: `5rem`,
      }}
    >
      <Container>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
          }}
        >
          <motion.div
            style={{
              height: `200px`,
              width: `200px`,
              borderRadius: `9999px`,
              overflow: "hidden",
            }}
            animate={{
              scale: [1, 1.25, 1.25, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              flip: Infinity,
              duration: 2,
            }}
          >
            <Image src="gary-busey-1.jpg" />
          </motion.div>
          <div style={{ color: `white`, maxWidth: `320px` }}>
            <h1 style={{ marginTop: `5rem` }}>
              Gary Busey <br /> Fan Club
            </h1>
            <p>
              If you are looking for a club to share your obsessive love for
              <strong> the Greatest Actor of Our Time</strong>, this is the
              place for you.
            </p>
          </div>
        </div>
      </Container>
    </section>
    <section style={{ backgroundColor: `black`, color: `white` }}>
      <Container>
        <h2>Why join?</h2>
        <ul style={{ listStyle: `none` }}>
          <li>
            People often refer to you as "insane", while you consider yourself
            "enlightened".
          </li>
          <li>
            You find yourself randomly talking to strangers about Gary Busey
            films, and they don't care.
          </li>
          <li>You have a cease and desist from Gary Busey himself.</li>
        </ul>
        <Button>
          <a href="https://www.imdb.com/title/tt0102685/?ref_=nm_knf_i2">
            Utah, Get Me Two!
          </a>
        </Button>
      </Container>
    </section>

    <section
      style={{
        background: `linear-gradient(135deg, rgb(153, 17, 255), rgb(119, 0, 255))`,
      }}
    >
      <Container>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <div
            style={{
              color: `white`,
              maxWidth: `320px`,
            }}
          >
            <h2>Contact</h2>
            <p>
              There is no way to contact us, we are highly secretive and plan on
              keeping it that way.
            </p>
          </div>
        </div>
      </Container>
    </section>
  </Layout>
)

export default IndexPage

// https://codepen.io/dghez/details/ItxKE
// https://codepen.io/lemmin/details/WObwRX

import Head from "next/head";
import Link from "next/link";
import { HashLink as HLink } from "react-router-hash-link";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Vivian Chen</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="px-20 py-10 flex bg-gray-10 justify-between main-nav">
          <div className="">
            <img className="heart-logo" alt="" src="/gray-heart.svg" />
          </div>
          <div>
            <ul className="main-nav__list">
              {/* <li className='inline-block main-nav__item'><Link href="/about">about me</Link></li> */}
              <li className="inline-block main-nav__item">
                <a href="#projects">projects</a>
              </li>
              {/* <HLink to='#projects'>projects</HLink> */}
              <li className="inline-block main-nav__item">
                <a href="mailto:vivianchen@hey.com">email me</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="">
        <section className="bg-gray-10 ">
          <div className="p-20 container">
            <div className="row">
              <div className="col col-lg-8 col-md-8">
                <h1 className="display-01">Vivian</h1>
                <h1 className="display-01">
                  I'm a developer, designer and maker.
                </h1>
                <h2 className="mb-8 mt-6 max-w-xl">
                  I'll help you build a modern, resilient, and inclusive
                  interface and design system, with a strong focus on responsive
                  design, performance, and accessibility.
                </h2>
              </div>

              {/* <Link href="/about">Read more about me&nbsp; →</Link> */}
            </div>
          </div>
        </section>

        <section className="p-10 sm:p-10 md:p-20 lg:p-40" id="projects">
          <div className="container">
            <div className="row  ">
              <div className="col col-lg-8">
                <h2 className="font-bold mb-10">Select Projects</h2>

                {/* <a
                href="https://skillsbuild.org/"
                target="_blank"
                className="p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
              >
                <h3 className="text-2xl font-bold">IBM Skillsbuild &rarr;</h3>
                <p className="mt-4 text-xl max-w-lg">
                  IBM Skillsbuild is an internal learning platform for IBM employees.
                </p>
              </a> */}
              </div>
            </div>
            <ProjectSection
              title="IBM.org"
              desc="As IBM grew their Corporate Social Responsibility initiative, I
              was part of the team that took the IBM.org site from conception to
              execution."
              url="https://ibm.org"
              imgSrc="/rebus-totem-positive.svg"
            />

            <ProjectSection
              title="Designthread"
              desc="Designthread grew out of the desire to see a community
              platform that would encourage professional insight exchange
              across design disciplines. This was a passion project that I
              built with some friends."
              url="https://designthread.xyz"
              imgSrc="/design-thread.png"
            />

            {/* <ProjectSection
              title="IBM Skillsbuild"
              desc="IBM Skillsbuild is a platform that helps students, job
              seekers and organizations opt into the learning experience
              that's right for them. I was part of the team that brought
              this new brand to life via skillsbuild.org"
              url="https://skillsbuild.org"
              img=""
            /> */}

            {/* <div className="row flex items-center flex-grow">
              <div className="col col-sm-8 col-lg-3 col-md-6 ">
                <div className="flex items-center">
                  <div className="">
                    <h3 className="text-2xl font-bold">IBM Skillsbuild</h3>
                    <p className="mt-4 text-xl max-w-lg">
                      IBM Skillsbuild is a platform that helps students, job
                      seekers and organizations opt into the learning experience
                      that's right for them. I was part of the team that brought
                      this new brand to life via skillsbuild.org
                    </p>
                    <a
                      href="https://ibm.org"
                      target="_blank"
                      className="mt-10 text-left text-xl inline-block"
                    >
                      View the site &rarr;
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-sm-8 col-lg-3 col-md-6 col-lg-offset-2">
                <h3>
                  <svg
                    aria-hidden="true"
                    width="58"
                    height="23"
                    viewBox="0 0 58 23"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block mr-10"
                  >
                    <path
                      d="M58 21.467V23h-7.632v-1.533H58zm-18.316 0V23h-7.631v-1.533h7.631zm5.955 0L45.025 23l-.606-1.533h1.22zm-17.097 0A6.285 6.285 0 0 1 24.391 23H12.21v-1.533zm-17.858 0V23H0v-1.533h10.684zm29-3.067v1.533h-7.631V18.4h7.631zm7.148 0l-.594 1.533H43.82l-.598-1.533h3.609zm-16.764 0a5.719 5.719 0 0 1-.64 1.533H12.21V18.4zm-19.384 0v1.533H0V18.4h10.684zM58 18.4v1.533h-7.632V18.4H58zm-3.053-3.067v1.534h-4.579v-1.534h4.58zm-15.263 0v1.534h-4.579v-1.534h4.58zm8.345 0l-.6 1.534h-4.806l-.604-1.534h6.01zm-18.174 0c.137.49.213 1.003.213 1.534h-5.647v-1.534zm-10.013 0v1.534h-4.579v-1.534h4.58zm-12.21 0v1.534h-4.58v-1.534h4.58zm47.315-3.066V13.8h-4.579v-1.533h4.58zm-15.263 0V13.8h-4.579v-1.533h4.58zm9.541 0l-.597 1.533h-7.22l-.591-1.533h8.408zm-21.248 0c.527.432.98.951 1.328 1.533H15.263v-1.533zm-20.345 0V13.8h-4.58v-1.533h4.58zM44.599 9.2l.427 1.24.428-1.24h9.493v1.533h-4.579V9.324l-.519 1.41h-9.661l-.504-1.41v1.41h-4.579V9.2H44.6zm-36.967 0v1.533h-4.58V9.2h4.58zm21.673 0a5.95 5.95 0 0 1-1.328 1.533H15.263V9.2zm25.642-3.067v1.534h-8.964l.54-1.534h8.424zm-11.413 0l.54 1.534h-8.969V6.133h8.43zm-13.466 0c0 .531-.076 1.045-.213 1.534H24.42V6.133zm-10.226 0v1.534h-4.579V6.133h4.58zm-12.21 0v1.534h-4.58V6.133h4.58zm34.845-3.066l.53 1.533H32.054V3.067h10.424zm15.523 0V4.6H47.04l.55-1.533H58zm-28.573 0c.284.473.504.988.641 1.533H12.211V3.067zm-18.743 0V4.6H0V3.067h10.684zM41.406 0l.54 1.533h-9.893V0h9.353zM58 0v1.533h-9.881L48.647 0H58zM24.39 0c1.601 0 3.057.581 4.152 1.533H12.211V0zM10.685 0v1.533H0V0h10.684z"
                      fill="#161616"
                      fill-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  <span>|</span> <span className="ml-10">Skillsbuild</span>
                </h3>
                
              </div>
            </div> */}

            {/* <div className="row flex items-center flex-grow mt-12">
              <div className="col col-sm-12 col-md-6 col-lg-3">
                <div>
                  <h3 className="text-2xl font-bold">Designthread</h3>
                  <p className="mt-4 text-xl max-w-lg">
                    Designthread grew out of the desire to see a community
                    platform that would encourage professional insight exchange
                    across design disciplines. This was a passion project that I
                    built with some friends.
                  </p>
                  <a
                    href="https://designthread.xyz"
                    target="_blank"
                    className="mt-10 text-left text-xl inline-block"
                  >
                    View the site &rarr;
                  </a>
                </div>
              </div>
              <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-3 col-lg-offset-2">
                <img
                  alt="designthread screenshot"
                  className="max-w-sm"
                  src="/design-thread.png"
                />
              </div>
            </div> */}
          </div>
        </section>
        {/* <section className='bg-gray-20'>
          <div className='p-20'>
            <h2 className='mt-20'>01</h2>
            <h2 className='mt-10'>IBM.org</h2>
            <h3>-- Frontend and design system engineer</h3>
            <p>I was part of the team that took the IBM.org site from conception to execution.</p>
            <a target="_blank" href="https://ibm.org">View the site&nbsp; →</a>
            <p>Case study coming soon</p>
          </div>
        </section>
        <section className='bg-gray-30'>
          <div className='p-20'>
            <h2 className='mt-20'>02</h2>
            <h2 className='mt-10'>Designthread</h2>
            <h3>-- Frontend development</h3>
            <p>Designthread is a side project that grew out of the desire to grow a community platform to encourage professional insight exchange across design disciplines.</p>
            <a target="_blank" href="https://designthread.xyz">View the site&nbsp; →</a>
            <p>Case study coming soon</p>
          </div>
        </section>
        <section className='bg-gray-30'>
          <div className='p-20'>
            <h2 className='mt-20'>03</h2>
            <h2 className='mt-10'>Traffik Analysis Hub</h2>
            <h3>-- Frontend development</h3>
            <p>Designthread is a side project that grew out of the desire to grow a community platform to encourage professional insight exchange across design disciplines.</p>
            <a target="_blank" href="https://designthread.xyz">View the site&nbsp; →</a>
            <p>Case study coming soon</p>
          </div>
        </section> */}

        <section className="bg-gray-10">
          <div className="p-20 container">
            <h2 className="mb-10 font-bold">Skills</h2>

            <div className="flex flex-wrap overflow-hidden">
              <div className="w-full overflow-hidden md:w-1/2 lg:w-1/4 mt-10 lg:mt-0">
                <h3 className="font-semibold mb-4">
                  Languages &amp; Frameworks
                </h3>
                <ul className="list">
                  <li>HTML/CSS</li>
                  <li>SCSS/Tailwind/BEM</li>
                  <li>Javascript/jQuery/ES6</li>
                  <li>React/Next/Gatsby</li>
                  <li>Shopify/Liquid</li>
                  <li>PHP/Wordpress</li>
                  <li>Carbon</li>
                </ul>
              </div>
              <div className="w-full overflow-hidden md:w-1/2 lg:w-1/4 mt-10 lg:mt-0">
                <h3 className="font-semibold mb-4">Dev tools</h3>
                <ul className="list">
                  <li>Grunt/Gulp</li>
                  <li>Webpack</li>
                  <li>NPM/Yarn</li>
                  <li>Git/Github</li>
                </ul>
              </div>
              <div className="w-full overflow-hidden md:w-1/2 lg:w-1/4 mt-10 lg:mt-0">
                <h3 className="font-semibold mb-4">
                  Strategies &amp; Methodologies
                </h3>
                <ul className="list">
                  <li>Moodboards/Style Tiles</li>
                  <li>Design Thinking</li>
                  <li>Pragmatic Marketing</li>
                  <li>Agile/Scrum/Jira</li>
                  <li>Project Scoping</li>
                  <li>GV Design Sprint</li>
                </ul>
              </div>
              <div className="w-full overflow-hidden md:w-1/2 lg:w-1/4 mt-10 lg:mt-0">
                <h3 className="font-semibold mb-4">Design tools</h3>
                <ul className="list">
                  <li>Sketch/Zeplin</li>
                  <li>Figma</li>
                  <li>Invision</li>
                  <li>Storybook</li>
                  <li>Webflow</li>
                  <li>Adobe Illustrator/InDesign</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
        <p className="text-xs">
          This site is built with&nbsp;
          <a
            className="inline-block underline"
            href="https://nextjs.org"
            target="_blank"
          >
            Next
          </a>
          &nbsp;and hosted on&nbsp;
          <a className="underline" href="https://vercel.com/" target="_blank">
            Vercel
          </a>
          . The source code is hosted on&nbsp;
          <a className="underline" href="https://github.com" target="_blank">
            Github
          </a>
          .
        </p>
        {/* <p className='text-xs mt-2'>Built by Vivian Chen in 2021</p> */}
      </footer>
    </div>
  );
}

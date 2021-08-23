// https://codepen.io/dghez/details/ItxKE
// https://codepen.io/lemmin/details/WObwRX

import Head from "next/head";
import Link from "next/link";
import { HashLink as HLink } from "react-router-hash-link";

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
        <section className="bg-gray-10">
          <div className="p-20">
            <div className="">
              <h1 className="display-01">Vivian</h1>
              <h1 className="display-01 max-w-4xl">
                I'm a developer, designer and maker. With heart.
              </h1>
              <h2 className="mb-8 mt-6 max-w-xl">
                I'll help you build a modern, resilient, and inclusive interface
                and design system, with a strong focus on responsive design,
                performance, and accessibility.
              </h2>
              {/* <Link href="/about">Read more about me&nbsp; →</Link> */}
            </div>
          </div>
        </section>

        <section className="p-20" id="projects">
          <h2 className="font-bold">Select Projects</h2>
          <div className="flex flex-col justify-around mt-6 sm:w-full">
            <p>Coming soon</p>
            {/* <a
            href="https://ibm.org"
            target="_blank"
            className="p-6 mt-6 text-left  flex items-center"
          >
            <div className='hover:text-blue-600 focus:text-blue-600'>
              <h3 className="text-2xl font-bold">IBM.org &rarr;</h3>
              <p className="mt-4 text-xl max-w-lg">
                IBM was growing their Corporate Social Responsibility initiative and I was part of the team that took the IBM.org site from conception to execution.
              </p>
            </div>
            <img alt="ibm logo" src="/rebus-totem-positive.svg"/>
            
          </a> */}

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
            {/* <div className='flex flex-col justify-around mt-6 sm:w-full'>
          <a
            href="https://designthread.xyz"
            target="_blank"
            className="p-6 mt-6 text-left hover:text-blue-600 focus:text-blue-600 flex items-center"
          >
            <div>
              <h3 className="text-2xl font-bold">Designthread &rarr;</h3>
              <p className="mt-4 text-xl max-w-lg">
              Designthread grew out of the desire to grow a community platform to encourage professional insight exchange across design disciplines. This was a passion project that I built with some friends.
              </p>
            </div>
            <img alt="designthread screenshot" className='max-w-sm' src="/design-thread.png"/>
            
          </a>
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

        <section>
          <div className="p-20 bg-gray-10">
            <h2 className="mb-4 font-bold">Skills</h2>
            <div className="grid-container">
              <div className="">
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
              <div className="">
                <h3 className="font-semibold mb-4">Dev tools</h3>
                <ul className="list">
                  <li>Grunt/Gulp</li>
                  <li>Webpack</li>
                  <li>NPM/Yarn</li>
                  <li>Git/Github</li>
                </ul>
              </div>
              <div className="">
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
              <div className="">
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

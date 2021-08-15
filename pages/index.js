// https://codepen.io/dghez/details/ItxKE
// https://codepen.io/lemmin/details/WObwRX


import Head from 'next/head'

export default function Home() {
  return (
    <div className="py-2">
      <Head>
        <title>Vivian Chen</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="">

        <section className='bg-gray-10'>
          <div className='p-20'>
            <h1 className='display-01'>Vivian</h1>
            <h1 className='display-01'>developer, designer and maker.</h1>
            <h2>Endlessly curious and bringer-together of good people and great minds.</h2>
            <a href="/about" className='link'>Read more about me&nbsp; →</a>

          </div>
        
          
        </section>
        <section className='bg-gray-20'>
          <div className='p-20'>
            <h2>01</h2>
            <h2>IBM.org</h2>
            <p>Took the IBM.org site from conception to execution </p>

          </div>
          

        </section>
        <section>
            <div className='p-20'>
                <h2>Skills</h2>
                <div className='row'>
                  <div className='col-md-3 col-sm-6 col-6 mb-8'>
                    <h3>Strategies & Methodologies</h3></div>
                  <div className='col-md-3 col-sm-6 col-6 mb-8'>asdf</div>
                </div>
            </div>
        </section>
        
        

        {/* <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

        </div> */}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        
          Built by Vivian Chen in 2021
  
      </footer>
    </div>
  )
}

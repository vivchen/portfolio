import Head from 'next/head'

// TO DO : add education and work history
export default function Home() {
  return (
    <div className="py-2">
      <Head>
        <title>Vivian Chen - About</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="">

        <section className='bg-gray-10'>
          <div className='p-20'>
            <h1 className='display-01'>About me</h1>
            <h1 className='display-01'>developer, designer and maker.</h1>
            <h2>Endlessly curious and bringer-together of good people and great minds.</h2>
            <a href="/about" className='link'>Read more about me&nbsp; →</a>

          </div>
        
          
        </section>

        <section className='bg-gray-10'>
          <div className='p-20'>
            
            <p>As a web ui and design systems engineer, I help teams plan out ....

            </p>

            <p>I take on client projects with my friends at All Purpose, a social impact agency based out of Vancouver, BC.</p>

            <p>I was was born and raised on an island in the unceded lands of the Lil̓wat7úl, N’Quatqua, Sḵwx̱wú7mesh, xʷməθkʷəy̓əm, and Səl̓ilwətaɁɬ peoples surrounded by cold sea and deep forests.</p>

            <p>When I'm not at my desk in Vancouver, BC, you might find me playing softball at a nearby diamond, if it's raining I'm likely sewing up a store at my daining table, or walking my senior Aussie Cattle Dog, <a href="#">Dundee</a>.</p>
            

            
            <h2>Some facts about me:</h2>
            <ul>
                <li>I don't drink coffee, or caffeine for that matter. My favorite alternatives are a spicy rooibois chai tea, dandy blend or a homemade ginger tea.</li>
                <li>I can type at __, see if you can beat me.</li>
                <li>I love to <a href="https://www.instagram.com/hastyviv/">sew</a> and am currently embarking on a journey of sewing my own wedding dress. Ask me how that's going.</li>
            </ul>
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

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
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

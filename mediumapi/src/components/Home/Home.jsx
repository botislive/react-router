import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const Home = () => {
  const [postdata, setPostData] = useState([]);
  const [image, setImage] = useState('');


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tushardtar704');
      const data = await response.json();
      setPostData(data.items);
      setImage(data.feed.image);
    }

    fetchData();
  }, []);

  return (
    <>
      <style>{`
        @keyframes waveHand {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes riseGlow {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes goldLift {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }

      `}</style>

      <div id="Welcome Text" className="mx-auto mt-10 max-w-5xl px-4 sm:mt-14">
        <h1 className="text-center text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Hey!, This is Tushar{' '}
          <span
            className="inline-block"
            style={{ transformOrigin: '70% 70%', animation: 'waveHand 2s ease-in-out infinite' }}
          >
            {'\uD83D\uDC4B'}
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-slate-600 sm:text-base">
          Engineer, writer, and builder sharing ideas in public.
        </p>
      </div>

      <div id="profile" className="mx-auto mt-10 flex max-w-5xl flex-col items-center px-4 sm:mt-12">
        <div className="rounded-3xl border border-white/60 bg-white/70 p-2 shadow-[0_20px_60px_-20px_rgba(2,6,23,0.5)] backdrop-blur-md">
          <img
            src={image}
            alt="profile-image"
            className="h-36 w-36 rounded-2xl object-cover ring-1 ring-slate-200 sm:h-44 sm:w-44"
          />
        </div>

        <div className="mt-5 flex flex-col items-center gap-3">
          <h1 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Follow Me On</h1>
          <div className="flex items-center gap-3">
            <a
              href="https://medium.com/@tushardtar704"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M2 6.5c0-.5.2-.9.6-1.2L4 4h5.6l4.3 9.4L17.7 4H23l1 .8c.3.3.5.7.5 1.1v11.4c0 .4-.1.8-.4 1L22.8 20V20h-5.5v-.1l1.4-1.3c.1-.1.2-.2.2-.4V9l-4.8 11h-.6L8 9.2v7.6c0 .5.2 1 .6 1.3L10 19.7v.3H5v-.3l1.4-1.7c.4-.3.6-.8.6-1.3V8.1c0-.4-.1-.8-.4-1L5.3 6V5.8H10l3.7 8.1L17 5.8h4.5v.1l-1.2 1.2c-.1.1-.2.2-.2.4v9.8c0 .2.1.3.2.4l1.1 1.1v.3h-5.2v-.3l1.1-1.1c.1-.1.2-.2.2-.4V8.8L13 19.1h-.7L7.1 8.8v8.1c0 .6.2 1.1.6 1.5l1.2 1.3v.3H2.8v-.3L4 18.4c.4-.4.6-.9.6-1.5V7.4L2.7 6.8A.9.9 0 0 1 2 6.5Z" />
              </svg>
              Medium
            </a>

            <a
              href="https://www.instagram.com/tushar_amlivin/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 bg-[linear-gradient(135deg,#feda75_0%,#fa7e1e_25%,#d62976_50%,#962fbf_75%,#4f5bd5_100%)] bg-[length:200%_200%] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.8A4 4 0 0 0 3.8 7.8v8.4a4 4 0 0 0 4 4h8.4a4 4 0 0 0 4-4V7.8a4 4 0 0 0-4-4H7.8Zm8.8 1.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div id="Explore-Text" className="mx-auto mt-12 max-w-5xl px-4 text-center sm:mt-14">
        <div className="relative inline-block">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_42%,rgba(251,191,36,0.14)_100%)] blur-[0.5px]"
            style={{ animation: 'goldLift 900ms ease-out forwards' }}
            aria-hidden="true"
          />
          <div
            className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
            style={{ animation: 'riseGlow 850ms ease-out forwards' }}
          >
            Explore My Stories
          </div>
        </div>
      </div>

      <div id='card'>
        {postdata.map((post) => {
          return <PostCard key={post.guid || post.link || post.title} post={post} />;
        })}
      </div>
    </>
  );
};

export default Home;

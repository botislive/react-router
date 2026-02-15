import React from 'react';
import { Link } from 'react-router-dom';

const getSummary = (htmlContent, limit = 32) => {
  if (!htmlContent) return '';
  const plainText = htmlContent.replace(/<[^>]+>/g, '').trim();
  const words = plainText.split(/\s+/);
  if (words.length <= limit) return plainText;
  return `${words.slice(0, limit).join(' ')}...`;
};

const formatDate = (value) => {
  if (!value) return 'Recently';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
};

const PostCard = ({ post }) => {
  return (
    <article className="group relative mx-auto mt-6 w-full max-w-3xl overflow-hidden rounded-3xl border border-amber-100/50 bg-white/35 shadow-[0_25px_70px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(251,191,36,0.35)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-50/35 via-white/12 to-yellow-100/20" />
      {post?.thumbnail ? (
        <div className="overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post?.title || 'post thumbnail'}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="relative p-6 sm:p-7">
        <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{post?.title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{getSummary(post?.content)}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">{formatDate(post?.pubDate)}</span>
          <span className="rounded-full border border-cyan-200/70 bg-cyan-50 px-3 py-1 text-cyan-700">
            {post?.author || 'Medium Story'}
          </span>
        </div>

        <Link
          to={`/post/${encodeURIComponent(post.guid)}`}
          className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
        >
          Read Full Article
        </Link>
      </div>
    </article>
  );
};

export default PostCard;

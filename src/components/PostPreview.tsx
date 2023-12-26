import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`} className="boxCustom border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <p className="text-sm text-slate-400">{props.date}</p>
      <h2 className="text-center text-white hover:underline mb-4">{props.title}</h2>
      <p className="text-slate-400">{props.subtitle}</p>
    </Link>
  );
};

export default PostPreview;
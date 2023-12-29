import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <section className="section-port h-auto min-h-screen">

        <div>
          <h1 className="text-center text-white pt-4 title">{post.data.title}</h1>
          <p className="text-white text-center pb-8">
            {post.data.date}
          </p>
        </div>


        <article className="prose lg:prose-xl text-white flex-container p-6">
          <Markdown options={{
            overrides: {
              h1: { component: 'h1', props: { className: 'text-white' } },
              h2: { component: 'h2', props: { className: 'text-white' } },
              h3: { component: 'h3', props: { className: 'text-white' } },
              h4: { component: 'h4', props: { className: 'text-white' } },
              h5: { component: 'h5', props: { className: 'text-white' } },
              h6: { component: 'h6', props: { className: 'text-white' } },
              p: { component: 'p', props: { className: 'text-white' } },
              a: { component: 'a', props: { className: 'text-white' } },
              strong: { component: 'strong', props: { className: 'text-white' } },
              th: { component: 'th', props: { className: 'text-white' } },
              img: { component: 'img', props: { className: 'imgMarkdown ' } },
            },
          }}>{post.content}</Markdown>

        </article>



      </section>

    </main>
  );
};

export default PostPage;

/* opciones para markdownd
 <div className="flex-container">
          <div className="content-container">
            <article className="prose lg:prose-xl text-white lg:text-xl xl:text-2xl sm:text-sm article">

              <Markdown options={{
                overrides: {

                  h1: { component: 'h1', props: { className: 'text-white text-center' } },
                  h2: { component: 'h2', props: { className: 'text-white ' } },
                  h3: { component: 'h3', props: { className: 'text-white ' } },
                  h4: { component: 'h4', props: { className: 'text-white ' } },
                  h5: { component: 'h5', props: { className: 'text-white ' } },
                  h6: { component: 'h6', props: { className: 'text-white ' } },
                  p: { component: 'p', props: { className: 'text-white' } },
                  a: { component: 'a', props: { className: 'text-white' } },
                  strong: { component: 'strong', props: { className: 'text-white' } },
                  th: { component: 'th', props: { className: 'text-white' } },
                  img: { component: 'img', props: { className: 'imgMarkdown ' } },

                  // ... otras etiquetas según sea necesario
                },
              }}>{post.content}</Markdown>
            </article>
          </div>
        </div>
*/
